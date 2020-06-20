import React from 'react';
import { FaUserCircle, FaSignOutAlt} from 'react-icons/fa';
import {Link, useHistory } from 'react-router-dom';
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
                <div className="brand"  onClick={() => history.push('/groups')}>
                    <img src={logoImg} alt="logo"/>
                    <h1><span>Amigo</span> Chocolate</h1>
                </div>
            <div className="profile">
                <FaSignOutAlt className="icon" size={22} onClick={logOut}/>
                <h1> Olá {primeiroNome[0]}!</h1>
                <Link to="/myprofile">
                    <FaUserCircle className="icone" size={22} />
                </Link>
            </div>

        </div>
    )
}