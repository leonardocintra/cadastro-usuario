import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* TODO: clicar cada componente link e passar palava e icon como parametros - Refatorar*/}
            <a href="#/">
                <i className="fa fa-home"></i> Home
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>

