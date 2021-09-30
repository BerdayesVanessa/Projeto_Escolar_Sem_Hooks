import React from "react";
import Aluno from "./Aluno";

export default class Lista extends React.Component {
  constructor() {
    super();

    this.state = {
      dadosPessoais: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/dadosPessoais")
      .then((response) => response.json())
      .then((dadosPessoais) => this.setState({ dadosPessoais: dadosPessoais }));
  }

  render() {
    const dadosPessoaisLista = this.state.dadosPessoais.map((dadosPessoa) => {
      return <Aluno key={dadosPessoa.id} dadosPessoa={dadosPessoa} />
    });
    return <div> {dadosPessoaisLista}</div>;
  }
}