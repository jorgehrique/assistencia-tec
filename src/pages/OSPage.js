import React, { Component } from 'react';
import { OSList } from '../services/OSService';

export default class OSPage extends Component {
  render() {
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
            OSList.map(item => (
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