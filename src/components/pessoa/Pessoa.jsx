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
            this.setState({ pessoa: initialState.pessoa, list })
        })
    }

    getUpdatedList(pessoa) {
        const list = this.state.list.filter(p => p.id !== p.id)
        // unshift é para colocar o novo item da lista como o primeiro da listagem
        list.unshift(pessoa)
        return list
    }

    updateField(event) {
        const pessoa = { ...this.state.pessoa }
        pessoa[event.target.nome] = event.target.value
        this.setState({ pessoa })
    }

    renderForm() {
        return (
            <>
                <div className="form">
                    <div className="row">
                        <div className="mb-3">
                            <div className="form-group">
                                <label className="form-label">Nome</label>
                                <input type="text" className="form-control"
                                    name="nome"
                                    value={this.state.pessoa.nome}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o nome ..." />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.pessoa.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o email" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-danger ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}