import React from 'react';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){

    function handleRegister(){

    }

    return(
        <div className="login-container">
            <div className="logo">
                <h1>Amigo <span>Chocolate</span></h1>
                <img src={logoImg} alt="logo"/>
            </div>
            <div className="formulario">
                <form>
                    <input placeholder="Nome"/>
                    <input type="date"/>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Senha" type="password" />

                    <button className="button" type='submit'>Cadastrar</button>

                    <a href="/cadastro">Tenho cadastro</a>
                </form>
            </div>

        </div>
    );
}