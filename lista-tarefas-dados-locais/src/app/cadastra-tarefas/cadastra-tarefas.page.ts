import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastra-tarefas',
  templateUrl: './cadastra-tarefas.page.html',
  styleUrls: ['./cadastra-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CadastraTarefasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
