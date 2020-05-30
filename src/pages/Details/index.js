import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus, FaUserFriends, FaUserPlus} from 'react-icons/fa';
import Header from '../../components/header';
import './styles.css';
import api from '../../services/api';

const config = { headers: {Authorization: `Bearer ${localStorage.token}`}}

export default function Groups(){
    const [grupo, setGrupos] = useState([]);
    const [cadastrar, setCadastrar] = useState(false);
    const [participantes, setParticipantes] = useState([]);


    var id = '';
    try {
        var url = window.location.pathname;
        const getid = url.split('/');
        id = getid[2];
    } catch (error) {
        
    }
    useEffect(() => {
        api.get('/grupo/'+id, config)
        .then(response => {
            console.log(response.data);
            setGrupos(response.data);
        })
    }, [localStorage.token])

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
                        <h2>{grupo.nome}</h2>
                        <FaTrash />
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> {(grupo.dataSorteio) }
                    </div>
                    <div className="data">
                        <FaCheck />
                        <span>Status: </span> {grupo.status}
                    </div>
                    <div className="data">
                        <FaUser />
                        <span>Criado por: </span> {grupo.criadoPor}
                    </div>
                </div>


                <div className="box-participante">
                    <div className="titulo-participante">
                        <FaUserFriends />
                        <h2>Participantes</h2>
                        <FaUserPlus />
                        </div>
                    <hr className="line"/>
                    
                    <div className="participante">
                        <FaUser size="60"/>
                        <strong>participante.nome</strong><br />participante.email
                    </div>
                </div>
            </div>
        </div>
    );
}