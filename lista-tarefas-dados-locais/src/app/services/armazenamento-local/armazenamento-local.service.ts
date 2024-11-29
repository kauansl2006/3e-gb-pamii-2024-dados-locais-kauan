import { Injectable } from '@angular/core';
import { ComponenteDocente } from 'src/app/models/componente-docente';
import { Tarefa } from 'src/app/models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoLocalService {
  private readonly STORAGE: Storage | undefined;

  constructor() {
    this.STORAGE =  window.localStorage;
  }

  private generateId(): number {
    let id = 0;

    do {
      id =  new Date().getMilliseconds() * Math.round(Math.random() * 1000);
    } while (
      this.STORAGE?.getItem(id.toString())
    );

    return id;
  }

  private dataToTarefa(data: any): Tarefa {
    return {
      id: this.generateId(),
      titulo: data.titulo.value,
      componente: data.componente.value as ComponenteDocente,
      descricao: data.descricao.value,
      data_aviso: data.data_aviso.value,
      data_entrega: data.data_entrega.value,
      individual: data.individual.value,
    }
  }

  save(data: any) {
    const tarefa: Tarefa = this.dataToTarefa(data);

    this.STORAGE?.setItem(tarefa.id.toString(), JSON.stringify(tarefa));
  }

  getAll(): Tarefa[] {
    const tarefas: Tarefa[] | null = [];

    if(this.STORAGE) {
      for(let index = 0; index < this.STORAGE.length; index++) {
        const tarefaId: string = this.STORAGE.key(index) ?? '';
        const tarefa: string | null = this.STORAGE.getItem(tarefaId);

        if(tarefa) {
          tarefas.push(JSON.parse(tarefa));
        }
      }
    }

    return tarefas;
  }
}
