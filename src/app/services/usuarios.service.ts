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
    // const headers = new HttpHeaders({
    //   'token-usuario':'ABC124567890ZYX'
    // });
    return this.http.get('https://reqres.in/api/user',{
      params,
      // headers
    }).pipe(
      map(resp =>resp['data']),
      catchError(this.manejarError)
    );
  }
  manejarError(error:HttpErrorResponse){
    console.log('Sucedío un error');
    console.log('Registrado en log file');
    console.warn(error)
    return throwError('Error personalizado')
  }
}
