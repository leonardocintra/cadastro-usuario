import React, { Component, useImperativeHandle } from "react"
import axios from "axios"
import Main from "../templates/Main"

const baseUrl = "http://localhost:3001/users"

const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
}

const headerProps = {
    icon: "users",
    title: "Usuarios",
    subtitle: "Cadastros de usuários"
}

export default class User extends Component {

    state = { ...initialState }

    clear() {
        this.setState({
            user: initialState.user
        })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    save() {
        const user = this.state.user
        const method = user.id ? "put" : "post"
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({
                    user: initialState.user,
                    list
                })
            })
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.name
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="col-12 col md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.user.name}
                            placeholder="Digite um nome"
                            onChange={e => this.updateField(e)}
                        />
                    </div>
                </div>

                <div className="col-12 col md-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={this.state.user.email}
                            placeholder="Digite um email"
                            onChange={e => this.updateField(e)}
                        />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-contend-end">
                        <button
                            className="btn btn-primary"
                            onClick={e => this.save(e)}
                        >
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
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