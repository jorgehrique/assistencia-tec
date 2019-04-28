import React, { Component } from 'react';
import '../App.css';

let caixa;

export default class CaixaPage extends Component {

  constructor(){
    super();
    caixa = [
      {
        id: 13,
        nome: 'joão da silva',
        produto: 'j7 prime',
        status: 'orçamento'
      },
      {
        id: 14,
        nome: 'maria da silva',
        produto: 'iphone 7 ux',
        status: 'orçamento'
      },
      {
        id: 15,
        nome: 'joão da silva',
        produto: 'ziomi mi prime',
        status: 'orçamento'
      },
      {
        id: 16,
        nome: 'joão da silva',
        produto: 'galaxy prime 2',
        status: 'orçamento'
      },
    ];
  }

  render() {
    return (
      <div>
        {this.renderTable(caixa)}
      </div>
    );
  }

  renderTable(collection) {
    return (
      <div>
        <input type="text" />
        <table>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Status</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>

          {
            collection.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.produto}</td>
                <td>{item.status}</td>
                <td>Ver</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>)
            )
          }
        </table>
      </div>
    );
  }
}