import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaArrowLeft} from 'react-icons/fa';
import Header from '../../components/header';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from '../../components/spinner';

const config = { headers: {Authorization: `Bearer ${localStorage.token}`}}

export default function RegisterDraw(){
    const[nome, setNome] = useState(localStorage.nome);
    const[email, setEmail] = useState('');
    const[dataNascimento, setDataNascimento] = useState('');
    const [spinner, setSpinner] = useState(false);
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            email,
            dataNascimento
        };

        try {
            setSpinner(true);

            const response = await api.put('usuario', data, config);
            
            if (response.data.status) {
                localStorage.setItem('nome',nome);
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000, onClose: history.push('/groups')});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000, onClose: history.push('/groups')});
            }
            

        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        setSpinner(false);
    }
    function voltar(){
        history.push('/groups');
    }

    return(
        <div>
            <Header />
            <div className="myprofile-container">
                <div className="formulario">
                    <form onSubmit={handleRegister}>
                        <FaArrowLeft onClick={voltar}/>
                        <div className="description">Nome do Grupo</div>
                        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                        <div className="description">Email</div>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <div className="description">Data Nascimento</div>
                        <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/>

                        <button className="button" type='submit'>
                            {spinner ? <Spinner /> : "Editar"}
                        </button>
                        

                    </form>
                </div>
                <ToastContainer/>
            </div>
        </div>
    );
}