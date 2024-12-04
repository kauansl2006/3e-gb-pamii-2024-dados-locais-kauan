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
  IonIcon
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
    private readonly armLocalServ: ArmazenamentoLocalService
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

  deleteTarefa(id: number) {
    this.armLocalServ.delete(id);
    this.loadTarefas();
  }
  
  markAsDone(id: number) {
    this.armLocalServ.done(id);
    this.loadTarefas();
  }

}
