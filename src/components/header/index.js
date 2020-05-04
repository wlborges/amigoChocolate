import React from 'react';
import { FaUserCircle, FaSignOutAlt} from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/icone.svg'

export default function Header(){
    const nomeUsuario = localStorage.nome;
    const primeiroNome = nomeUsuario.split(" ");
    const history = useHistory();

    function logOut(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <div class="navbar">
            <div className="brand">
                <img src={logoImg} alt="logo"/>
                <h1><span>Amigo</span> Chocolate</h1>
            </div>
            <div className="profile">
                <FaUserCircle className="icone" size={22} />
                <h1> Olá {primeiroNome[0]}!</h1>
                <FaSignOutAlt className="icon" size={22} onClick={logOut}/>
            </div>

        </div>
    )
}