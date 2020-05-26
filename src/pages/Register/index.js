import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from '../../components/spinner';

export default function Register(){
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[dataNascimento, setDataNascimento] = useState('');
    const [spinner, setSpinner] = useState(false);
    
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
            setSpinner(true);
            const response = await api.post('usuario', data);
            
            if (response.data.status) {
                console.log(response.data.status);
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000, onClose: history.push('/')});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000, onClose: history.push('/')});
            }
            

        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        setSpinner(false);
    }

    return(
        <div className="login-container">
            <div className="logo">
                <h1><span>Amigo</span> Chocolate</h1>
                <img src={logoImg} alt="logo"/>
            </div>
            <div className="formulario">
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)}/>

                    <button className="button" type='submit'>
                        {spinner ? <Spinner /> : "Cadastrar"}
                    </button>

                    <Link to="/">Tenho cadastro</Link>
                </form>
            </div>
             <ToastContainer/>
        </div>
    );
}