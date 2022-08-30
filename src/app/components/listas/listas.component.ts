import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;
  constructor(public deseosService:DeseosService,
              private router:Router,
              private alertController: AlertController) { }

  ngOnInit() {}


  editar(lista:Lista){
    console.log(lista);
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
    
  }

  borrar(lista:Lista){
    this.deseosService.borrarLista(lista)
  }

  async alertEdit(lista:Lista,list:any) {
    const alert = await this.alertController.create({
      header: 'Editar el nombre lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo
        }
      ],
      buttons: [
        {
        text: 'Cancelar',
        role: 'cancel',
        handler:()=>{
          list.close();
        }
        },
        {
          text: 'Editar',
          handler: (data)=> {
            if(data.titulo.length === 0){
              list.close();
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            list.close();
            
          }

        }
      ],
    });

    await alert.present();
  }
}
