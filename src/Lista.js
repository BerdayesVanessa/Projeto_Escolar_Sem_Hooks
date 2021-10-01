import React from "react";
import Aluno from "./Aluno";

export default function Lista(props) {

    const dadosPessoaisLista = props.dadosPessoais.map((dadosPessoa) => {
<<<<<<< HEAD
      return <Aluno key={dadosPessoa.id} 
      dadosPessoa={dadosPessoa}  fetchdadosPessoaisCallback={props.fetchdadosPessoaisCallback} />;
=======
      return <Aluno key={dadosPessoa.id} dadosPessoa={dadosPessoa} />;
>>>>>>> c95ee017a78ee9ff126588f0c6e543b129f4bb93
    });


    return (
    <div> {dadosPessoaisLista}</div>
    )
  }