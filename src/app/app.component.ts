import { UsuariosService } from './services/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores';
  constructor(private usuariosService:UsuariosService){
    this.usuariosService.obtenerUsuario()
    .subscribe(resp=>{
      console.log(resp);
    },
    (error)=>{
      console.log('Error en el appComponent', error);
    }
    )
  }
}
