import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.page.html',
  styleUrls: ['./lista-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaTarefasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
