import React from 'react';
//import {Link, useHistory} from 'react-router-dom';
//import { FaSignInAlt} from 'react-icons/fa';

import './styles.css';
//import logoImg from '../../assets/logo.svg';
//import api from '../../services/api';


export default function Groups(){
    const nomeUsuario = localStorage.nome;
    
    return(
        <h1>Olá {nomeUsuario}</h1>
    );
}