import { 
  Component, 
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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

interface ComponenteDocente {
  componente: string;
  docente: string;
}

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

  constructor() { }

  ngOnInit() {
  }

}
