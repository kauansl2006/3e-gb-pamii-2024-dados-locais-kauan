import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstatisticasTarefasPage } from './estatisticas-tarefas.page';

describe('EstatisticasTarefasPage', () => {
  let component: EstatisticasTarefasPage;
  let fixture: ComponentFixture<EstatisticasTarefasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
