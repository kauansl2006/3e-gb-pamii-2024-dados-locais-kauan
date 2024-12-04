import { 
  Component,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonIcon,
  AlertController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  trash,
  create,
  checkmark,
  eye
} from 'ionicons/icons';
import { Tarefa } from '../models/tarefa';
import { ArmazenamentoLocalService } from '../services/armazenamento-local/armazenamento-local.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.page.html',
  styleUrls: ['./lista-tarefas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,

    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonLabel,
    IonIcon
  ]
})
export class ListaTarefasPage implements OnInit {
  titulo: string = 'lista-tarefas';
  tarefas: Tarefa[] = [];

  constructor(
    private readonly armLocalServ: ArmazenamentoLocalService,
    private readonly alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.loadTarefas();

    addIcons({
      trash,
      create,
      checkmark,
      eye
    });
  }

  loadTarefas() {
    this.tarefas = this.armLocalServ.getAll();
  }

  async openDeleteAlert(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Você está prestes a excluir essa tarefa, essa ação é irreversível, deseja continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: () => this.deleteTarefa(id)
        }
      ]
    });

    await alert.present();
  }


  deleteTarefa(id: number) {
    this.armLocalServ.delete(id);
    this.loadTarefas();
  }
  
  markAsDone(id: number) {
    this.armLocalServ.done(id);
    this.loadTarefas();
  }

}
