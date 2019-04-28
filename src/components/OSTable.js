import React, { Component } from 'react'

export default class OSTable extends Component {

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Produto</th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.collection.map(item => (
                <tr key={item.id}>
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
          </tbody>
        </table>
      </div>
    )
  }
}
