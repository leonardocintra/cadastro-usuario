import React, { Component } from "react"
import Main from "../templates/Main"

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuários'
}

export default class User extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuários
            </Main>
        )
    }
}