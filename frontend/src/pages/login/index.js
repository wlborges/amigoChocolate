import React from 'react';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Login(){
    return(
        <div className="login-container">
            <h1>Amigo Chocolate</h1>
            <img src={logoImg} alt="logo"/>

        </div>
    );
}