import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Cep } from '../modelos/cep';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  constructor( private httpClient:HttpClient) {  }

  getCep( cep:string ):Observable<Cep> {

    let url:string = "https://viacep.com.br/ws/"+ cep +"/json/";
    return this.httpClient.get<Cep>(url);
  }
}