import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* TODO: clicar cada componente link e passar palava e icon como parametros - Refatorar*/}
            <Link to="/">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>

