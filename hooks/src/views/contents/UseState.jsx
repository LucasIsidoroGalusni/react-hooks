import './UseState.css'
import React, { useState, useContext } from "react"

import { AppContexto } from '../../data/Store.jsx'

const UseState = props => {
    
    const {contextoNome, setContextoNome} = useContext(AppContexto)

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    function alteraNomeContexto(nome){
        setContextoNome(nome)
    }

    return (
        <div>
            <div className="titulo">
                <h1>useState</h1>
                <h2>manipula Estados em componentes funcionais</h2>
            </div>

            <div className="conteudo">
                <input
                className="campo"
                type="text" value={nome}
                placeholder="Digite seu nome"
                onChange={ e => setNome(e.target.value) }
                />
                <input 
                className="campo"
                type="text"
                value={sobrenome}
                placeholder="Digite o seu sobrenome"
                onChange={ e => setSobrenome(e.target.value) }
                />

                <button
                className="botao"
                onClick={ () => setMensagem('Olá ${nome} ${sobrenome}, seja bem-vindo!') }
                >Ok</button>

                <p className="mensagem">{mensagem}</p>

                <button
                className="botao"
                onClick={ () => alteraNomeContexto(nome) }
                >Altera contexto (store)</button>
            </div>
        </div>
    )
}
export default UseState