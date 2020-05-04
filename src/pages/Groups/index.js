import React from 'react';
//import {Link, useHistory} from 'react-router-dom';
//import { FaSignInAlt} from 'react-icons/fa';

import './styles.css';
//import logoImg from '../../assets/logo.svg';
//import api from '../../services/api';
import Header from '../../components/header';

export default function Groups(){
    const nomeUsuario = localStorage.nome;
    
    return(
        <div className="content">
            <Header />
            <h1>Conteúdo</h1>
        </div>
    );
}