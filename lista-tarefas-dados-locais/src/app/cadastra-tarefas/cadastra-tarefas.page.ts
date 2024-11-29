import { 
  Component, 
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms';
import { 
  IonContent,
  IonHeader, 
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio
} from '@ionic/angular/standalone';
import { ComponenteDocente } from '../models/componente-docente';

@Component({
  selector: 'app-cadastra-tarefas',
  templateUrl: './cadastra-tarefas.page.html',
  styleUrls: ['./cadastra-tarefas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    
    ReactiveFormsModule,

    IonContent,
    IonHeader, 
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonDatetime,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonRadioGroup,
    IonRadio
  ]
})
export class CadastraTarefasPage implements OnInit {
  title: string = 'Cadastro de tarefas';

  componentes: ComponenteDocente[] =[
    {
      componente: "PAM I",
      docente: "Danilo"
    },
    {
      componente: "PW II",
      docente: "Ana Paula"
    },
    {
      componente: "BD II",
      docente: "Vinicius"
    },
    {
      componente: "DS I",
      docente: "Aquiles"
    },
    {
      componente: "ECO",
      docente: "Carlos Cruz"
    }
  ]

  FrmTarefa = new FormBuilder().group({
    titulo: [''],
    componente: [''],
    descricao: [''],
    data_aviso: [''],
    data_entrega: [''],
    individual: [ true ]
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const tarefa: any = this.FrmTarefa.controls;

    console.log("Dados que serão cadastrados", tarefa);
  }

  clear() {
    this.FrmTarefa.reset();
    this.FrmTarefa.controls.individual.setValue(true);
  }

}
