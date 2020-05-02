import React from './node_modules/react';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Home(){
    return(
        <img src={logoImg} alt="logo"/>
    );
}