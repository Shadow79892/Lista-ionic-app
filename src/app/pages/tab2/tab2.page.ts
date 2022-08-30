import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { AlertController } from '@ionic/angular';
import { Lista } from '../../models/lista.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public deseosService:DeseosService) {}


  


}
