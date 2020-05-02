import React from './node_modules/react';
import { FaSignInAlt} from './node_modules/react-icons/fa';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Login(){

    function handleLogin(){

    }

    return(
        <div className="login-container">
            <div className="logo">
                <h1>Amigo <span></span>Chocolate</h1>
                <img src={logoImg} alt="logo"/>
            </div>
            <div className="formulario">
                <form>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Senha" type="password" />

                    <button className="button" type='submit'>Login</button>

                    <a href="/cadastro">
                        <FaSignInAlt size={16}/>
                        Não tenho cadastro</a>
                </form>
        </div>
    );
}