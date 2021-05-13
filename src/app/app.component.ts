import { Component } from '@angular/core';
import { Tarefa } from './model/tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tarefas: Tarefa[] = [];

  adicionar(tarefaForm){
    console.log('mostrando o objeto tarefa...');
    console.log(tarefaForm);

    const t: Tarefa = {
      descricao: tarefaForm.value.tarefa,
      finalizada: false
    }
    this.tarefas.push(t);
    tarefaForm.resetForm();
  }
}
