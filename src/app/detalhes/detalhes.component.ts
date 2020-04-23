import { Component, OnInit } from '@angular/core';
import { PostagensService } from '../services/postagens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from '../models/postagem.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  postagem: Postagem;

  constructor(
    private postagensService: PostagensService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  async ngOnInit(){
    const idPostagem = this.activateRoute.snapshot.params.id;
    this.postagem = await this.postagensService.retornarPostagem(idPostagem);
  }

  async apagar(){
    await this.postagensService.apagar(this.postagem.id);
    this.router.navigate(['home']);
  }

}
