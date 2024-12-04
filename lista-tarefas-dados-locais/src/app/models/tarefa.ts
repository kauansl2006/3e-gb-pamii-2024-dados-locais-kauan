import { ComponenteDocente } from "./componente-docente";

export interface Tarefa {
  id: number;
  titulo: string;
  componente: ComponenteDocente;
  descricao: string;
  data_aviso: Date;
  data_entrega: Date;
  individual: boolean;
  concluida: boolean;
}
