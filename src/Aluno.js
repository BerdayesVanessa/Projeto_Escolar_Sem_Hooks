import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Aluno extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      nome,
      nascimento,
      cpf,
      pais,
      uf,
      localidade,
      telefone,
      email,
    } = this.props.dadosPessoa;

    return (
      <dvi> 
        <h1> Lista de Alunos </h1>
      <div class="container-fluid"> 
      <div class="row">
        <div class="col">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Data de nascimento</th>
                <th scope="col">CPF</th>
                <th scope="col">País de origem</th>
                <th scope="col">Estado onde vive</th>
                <th scope="col">Cidade</th>
                <th scope="col">Telefone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{nascimento}</td>
                <td>{cpf}</td>
                <td>{pais}</td>
                <td>{uf}</td>
                <td>{localidade}</td>
                <td>{telefone}</td>
                <td>{email}</td>
                <td>
                  <button type="button" class="btn btn-success">
                    Editar
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger">
                    Apagar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
 </dvi>
    );
  }
}