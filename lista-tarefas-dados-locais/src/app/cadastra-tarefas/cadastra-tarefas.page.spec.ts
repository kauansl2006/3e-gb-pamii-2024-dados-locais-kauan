import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastraTarefasPage } from './cadastra-tarefas.page';

describe('CadastraTarefasPage', () => {
  let component: CadastraTarefasPage;
  let fixture: ComponentFixture<CadastraTarefasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
