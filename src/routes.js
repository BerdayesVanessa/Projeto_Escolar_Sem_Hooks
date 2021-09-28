import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";
import Buscar from "./pages/Buscar";
import SobreNos from "./pages/SobreNos";

function Routes(){
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
