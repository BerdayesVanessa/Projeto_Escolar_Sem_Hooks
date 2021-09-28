import React from "react";
import { Button } from 'reactstrap';

function Cadastrar(){

    return( 
        <div class="container"> 
        <fieldset>
            <legend>Filtros</legend>
            <div class="row" >
                <div class="col-6">
                    <div class="form-group">
                        <label for="name">Nome completo</label>
                        <input type="name" class="form-control" id="name" placeholder="Digite seu nome completo">
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="cpf" class="form-control" id="cpf" placeholder="Digite o seu CPF">
                    </div>
                </div>
                <div class="col-3">
                    <div class="media">
                        <img src="avatar-gratuit (2).png" width="80px" height="80px" class="mr-3" alt="imagem do aluno">
                        
                    </div>  
                </div>
            </div>  
        </fieldset> 

        </div>
    );
};

export default Cadastrar;
