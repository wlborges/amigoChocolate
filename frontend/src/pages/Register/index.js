import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register(){
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[dataNascimento, setDataNascimento] = useState('');
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            email,
            senha,
            dataNascimento
        };

        try {
            const response = await api.post('usuario', data);
            alert(response.data.msg);
            history.push('/');

        } catch (error) {
            alert('erro');
        }
    }

    return(
        <div className="login-container">
            <div className="logo">
                <h1>Amigo <span>Chocolate</span></h1>
                <img src={logoImg} alt="logo"/>
            </div>
            <div className="formulario">
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)}/>

                    <button className="button" type='submit'>Cadastrar</button>

                    <Link to="/">Tenho cadastro</Link>
                </form>
            </div>

        </div>
    );
}