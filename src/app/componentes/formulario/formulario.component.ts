import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/modelos/cep';
import { CorreioService } from 'src/app/serviços/correio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  cep:Cep;

  constructor( private cepService:CorreioService ) {
    this.cep = new Cep;
   }

   buscar(){
    this.cepService.getCep(this.cep.cep).subscribe(
      (resposta:Cep)=>{
        console.log( resposta );
      }
    );
   }


  ngOnInit(): void {
  }

}
