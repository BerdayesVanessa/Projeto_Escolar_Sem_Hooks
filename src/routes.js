import React from "react";
// import React, {useState, useEffect } from react;    
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";
import Buscar from "./pages/Buscar";
import SobreNos from "./pages/SobreNos";
import reactDom from "react-dom";

function Routes () {
  

    // useEffect(() => {
    //     fetch("http://localhost:3001/dados-pessoais")
    //       .then(response => response.json())
    //       .then(dados-pessoais => console.log(dados-pessoais));
    //   }, [])
    


    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Cadastrar} />
                <Route path="/editar" component={Editar} />
                <Route path="/buscar" component={Buscar} />
                <Route path="/sobre-nos" component={SobreNos} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
