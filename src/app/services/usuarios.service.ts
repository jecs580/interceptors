import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  obtenerUsuario(){
    const params = new HttpParams().append('page','1');

    return this.http.get('https://reqres123.in/api/user',{
      params,
      // headers
    }).pipe(
      map(resp =>resp['data']),
    );
  }
  
}
