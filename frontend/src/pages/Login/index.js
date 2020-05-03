import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaSignInAlt} from 'react-icons/fa';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            senha
        };
        try {
            const response = await api.get('login', data);
            localStorage.setItem('token', response.data.token);
            history.push()
        } catch (error) {
            alert('Falha no login');
        }

    }

    return(
        <div className="login-container">
            <div className="logo">
                <h1>Amigo <span></span>Chocolate</h1>
                <img src={logoImg} alt="logo"/>
            </div>
            <div className="formulario">
                <form onSubmit={handleLogin}>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)}/>

                    <button className="button" type='submit'>Login</button>

                    <Link to="/register">
                        <FaSignInAlt size={16}/>
                        Não tenho cadastro</Link>
                </form>
            </div>

        </div>
    );
}