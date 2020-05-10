import React, {useState} from 'react';
//import {Link, useHistory} from 'react-router-dom';
//import { FaSignInAlt} from 'react-icons/fa';

import './styles.css';
//import logoImg from '../../assets/logo.svg';
//import api from '../../services/api';

import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus} from 'react-icons/fa';

import Header from '../../components/header';

export default function Groups(){
    const nomeUsuario = localStorage.nome;

    const [cadastrar, setCadastrar] = useState(false);
    
    return(
        <div>
            <Header />
            <div className="float-button" 
                    onMouseOver={() => setCadastrar(true)} 
                    onMouseOut={() => setCadastrar(false)} >
                {cadastrar ? "Cadastrar Sorteio" : ""}
                <FaPlus size="20px" />
                </div>
            <div className="content">
                <div className="box-sorteio">
                    <div className="titulo-sorteio">
                        <h2>Ano Novo</h2>
                        <FaTrash />
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> 30/12/2020
                    </div>
                    <div className="data">
                        <FaCheck />
                        <span>Status: </span> Aberto
                    </div>
                    <div className="data">
                        <FaUser />
                        <span>Criado por: </span> Marciel Felipe
                    </div>
                </div>








                <div className="box-sorteio">
                    <div className="titulo-sorteio">
                        <h2>Ano Novo</h2>
                        <FaTrash />
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> 30/12/2020
                    </div>
                    <div className="data">
                        <FaCheck />
                        <span>Status: </span> Aberto
                    </div>
                    <div className="data">
                        <FaUser />
                        <span>Criado por: </span> Marciel Felipe
                    </div>
                </div>

                <div className="box-sorteio">
                    <div className="titulo-sorteio">
                        <h2>Ano Novo</h2>
                        <FaTrash />
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> 30/12/2020
                    </div>
                    <div className="data">
                        <FaCheck />
                        <span>Status: </span> Aberto
                    </div>
                    <div className="data">
                        <FaUser />
                        <span>Criado por: </span> Marciel Felipe
                    </div>
                </div>
                <div className="box-sorteio">
                    <div className="titulo-sorteio">
                        <h2>Ano Novo</h2>
                        <FaTrash />
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> 30/12/2020
                    </div>
                    <div className="data">
                        <FaCheck />
                        <span>Status: </span> Aberto
                    </div>
                    <div className="data">
                        <FaUser />
                        <span>Criado por: </span> Marciel Felipe
                    </div>
                </div>
                <div className="box-sorteio">
                    <div className="titulo-sorteio">
                        <h2>Ano Novo</h2>
                        <FaTrash />
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> 30/12/2020
                    </div>
                    <div className="data">
                        <FaCheck />
                        <span>Status: </span> Aberto
                    </div>
                    <div className="data">
                        <FaUser />
                        <span>Criado por: </span> Marciel Felipe
                    </div>
                </div>






                

            </div>
        </div>
    );
}