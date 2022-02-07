import React, { Component } from "react"
import Main from "../templates/Main"
import axios from "axios"

const headerProps = {
    icon: 'users',
    title: 'Pessoas',
    subtitle: 'Cadastro de pessoas'
}

const baseUrl = 'https://people-stage.herokuapp.com/v1/peoplesoft/pessoa'
const initialState = {
    pessoa: { nome: '', email: '' },
    list: []
}

export default class Pessoa extends Component {

    state = { ...initialState }

    clear() {
        // limpar o formulario
        this.setState({ pessoa: initialState.pessoa })
    }

    save() {
        // POST: pessoa
        const pessoa = this.state.pessoa
        const method = pessoa.uuid ? 'PATCH' : 'POST'
        const url = pessoa.id ? `${baseUrl}/${pessoa.id}` : baseUrl

        axios[method](url, pessoa).then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ pessoa: initialState.pessoa, list})
        })
    }

    getUpdatedList(pessoa) {
        const list = this.state.list.filter(p => p.id !== p.id)
        list.unshift(pessoa)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuários 2
            </Main>
        )
    }
}