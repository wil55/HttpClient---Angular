import { Component, OnInit } from '@angular/core';
import { Postagem } from '../models/postagem.model';
import { PostagensService } from '../services/postagens.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario = new FormGroup({
    conteudo: new FormControl(null, [Validators.required]),
  });

  constructor(
    private postagensService: PostagensService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async enviar() {

    if(this.formulario.invalid){
      return;
    }

    let postagem: Postagem = this.formulario.value;

    postagem.data = new Date();
    postagem.likes = 0;
    postagem.dislikes = 0;

    postagem = await this.postagensService.salvar(postagem);

    this.router.navigate(['home']);

  }

}
