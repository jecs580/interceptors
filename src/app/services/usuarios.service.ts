import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  obtenerUsuario(){
    const params = new HttpParams().append('page','1');
    const headers = new HttpHeaders({
      'token-usuario':'ABC124567890ZYX'
    });
    return this.http.get('https://reqres.in/api/user',{
      params,
      headers
    });
  }
}
