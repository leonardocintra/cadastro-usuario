import React, { Component } from "react"
import Main from "../templates/Main"
import axios from "axios"
import cors from "cors"


const headerProps = {
    icon: 'users',
    title: 'Pessoas',
    subtitle: 'Cadastro de pessoas'
}

const baseUrl = 'https://people-stage.herokuapp.com/v1/peoplesoft/pessoa'
const initialState = {
    pessoa: {
        nome: 'Ronaldinho',
        email: 'ronaldo123@mala.com.br',
        sobrenome: 'da Silva',
        sexo: 'M',
        cpf: '06847404000'
    }
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
        const method = pessoa.uuid ? 'patch' : 'post'
        const url = pessoa.id ? `${baseUrl}/${pessoa.id}` : baseUrl
        
        const testinho = this.testinho();
        
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const request = axios[method](url, pessoa, cors())
        .then(function (response) {
            console.log(response);
            this.setState({ pessoa: initialState.pessoa })
        })
        .catch(function (error) {
            console.error(error);
            });
    }

    async testinho() {
        return axios.get("https://people-stage.herokuapp.com/v1/peoplesoft/pessoa/cpf/06847404000")
    }

    updateField(event) {
        const pessoa = { ...this.state.pessoa }
        pessoa[event.target.name] = event.target.value
        this.setState({ pessoa })
    }

    renderForm() {
        return (
            <>
                <form className="row g-3">

                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control"
                            name="nome"
                            value={this.state.pessoa.nome}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..." />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                        <input type="text" className="form-control" id="sobrenome"
                            name="sobrenome"
                            value={this.state.pessoa.sobrenome}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o sobrenome" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"
                            name="email"
                            value={this.state.pessoa.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o email ..." />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input type="text" className="form-control" id="cpf"
                            name="cpf"
                            value={this.state.pessoa.cpf}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o cpf" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="sexo" className="form-label">Sexo</label>
                        <input type="text" className="form-control" id="sexo"
                            name="sexo"
                            value={this.state.pessoa.sexo}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o sexo" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                        <button type="submit" className="btn btn-danger" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </form>
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