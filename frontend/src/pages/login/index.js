import React from 'react';
import { FaSignInAlt} from 'react-icons/fa';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Login(){
    return(
        <div className="login-container">
            <h1>Amigo Chocolate teste</h1>
            <img src={logoImg} alt="logo"/>
            <form>
                <input placeholder="Email"/>
                <input placeholder="Senha" type="password" />

                <button className="button" type='submit'>Login</button>

                <a href="/cadastro">
                    <FaSignInAlt size={16} color="#E5E5E5" />
                    Não tenho cadastro</a>
            </form>

        </div>
    );
}