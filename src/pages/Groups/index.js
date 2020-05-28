import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus} from 'react-icons/fa';
import Header from '../../components/header';
import './styles.css';
import api from '../../services/api';


export default function Groups(){
    //const nomeUsuario = localStorage.nome;

    const [cadastrar, setCadastrar] = useState(false);
    useEffect(() => {})

    return(
        <div>
            <Header />
            <Link to="/registerdraw">
                <div className="float-button" 
                        onMouseOver={() => setCadastrar(true)} 
                        onMouseOut={() => setCadastrar(false)} >
                    {cadastrar ? "Cadastrar Sorteio" : ""}
                    <FaPlus size="20px" />
                </div>
            </Link>
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