import React, { Component } from 'react';
import { getAll } from '../services/OSService';
import OSTable from '../components/OSTable';

export default class OSPage extends Component {

  constructor() {
    super();
    this.state = {
      ordens: getAll()
    }
  }

  render() {
    return (
      <div>
        <h1>Ordem de Serviços</h1>
        {this.renderFormularioOS()}
        {this.renderFiltro()}
        <OSTable collection={this.state.ordens} />
      </div>
    );
  }

  renderFormularioOS() {
    return (
      <div>
        Nº: <input type='text' name='id' value={this.state.ordens.length + 1} readOnly={true} /><br />
        Cliente: <input type='text' name='cliente' /><br />
        Tipo equipamento:
        <select>
          <option value="celular">celular</option>
          <option value="notebook">notebook</option>
          <option value="outros">outros</option>
        </select><br />
        Produto: <input type='text' name='produto' /><br />
        Identificador (imei): <input type='text' name='identificador' /><br />
        Data da Entrada: <input type='date' name='dataentrada' /><br />
        Descrição do problema: <br /><textarea name='problema'></textarea><br />
        Laudo Técnico: <br /><textarea name='laudo'></textarea>

      </div>
    )
  }

  renderFiltro() {
    return (
      <div>
        Filtro: <input type="text" />
        <select>
          <option>Cliente</option>
          <option>Produto</option>
          <option>Status</option>
        </select>
        <button onClick={() => {
          this.setState(() => {
            return this.state.ordens.push({
              id: this.state.ordens.length + 1,
              nome: 'novo cliente',
              produto: 'ipad x',
              status: 'pago'
            })
          })
          console.log(this.state.ordens)
        }}>asd</button>
      </div>
    )
  }

}