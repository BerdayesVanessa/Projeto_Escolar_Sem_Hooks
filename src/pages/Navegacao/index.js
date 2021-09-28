
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

export default function Navegacao(){
    return(
    <nav class="navbar navbar-dark bg-dark">
    <nav class="nav nav-pills flex-column flex-sm-row justify-content-end">
        <Link class="flex-sm-fill text-sm-center nav-link " to="/">Cadastrar</Link>
        <Link class="flex-sm-fill text-sm-center nav-link" to="/editar">Editar</Link>
        <Link class="flex-sm-fill text-sm-center nav-link" to="/buscar">Buscar</Link>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </nav>
</nav>
    )
};