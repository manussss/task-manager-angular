import { Component } from '@angular/core';
import { Tarefa } from './model/tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tarefas: Tarefa[] = [];

  //chart
  dados: any;

  // toggle button options
  opcoes = [
    {rotulo: 'Pendente', valor: false},
    {rotulo: 'Concluida', valor: true}
  ]

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

  //chart
  atualizarGrafico(){
    //construímos uma nova coleção que possui
    //somente os elementos que fizerem com que a arrow
    //function entregue para a função filter retorne true
    //seu length é o número de tarefas construídas, portanto
    const concluidas = this.tarefas.filter(t => t.finalizada).length;
    //o número de pendentes é igual ao número total menos
    //o número de concluídas
    const pendentes = this.tarefas.length - concluidas;
    this.dados = {
      labels: ['Concluídas', 'Pendentes'],
      datasets: [{
        //número de concluidas e pendentes nessa ordem
        data:[concluidas, pendentes],
        backgroundColor: [
          '#2196F3', //azul para concluidas
          '#F44336', //vermelho para pendentes
        ]
      }]
    }
  }
}
