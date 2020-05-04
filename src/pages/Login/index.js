import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaSignInAlt} from 'react-icons/fa';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            const response = await api.post('login', data);

            if(response.data.auth){
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('nome',response.data.nome);
                history.push('/groups');
            }else{
                toast.error(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            }

        } catch (error) {
            toast.error("Falha no login!", { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }

    }

    return(
        <div className="login-container">
            <div className="logo">
                <h1><span>Amigo</span> Chocolate</h1>
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

            <ToastContainer/>
        </div>
    );
}