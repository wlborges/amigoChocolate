import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus, FaUserFriends, FaUserPlus, FaMoneyBillWave} from 'react-icons/fa';
import Header from '../../components/header';
import './styles.css';
import api from '../../services/api';
import Popup from "reactjs-popup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = { headers: {Authorization: `Bearer ${localStorage.token}`}}

export default function Groups(){
    const [grupo, setGrupos] = useState([]);
    const [cadastrar, setCadastrar] = useState(false);
    const [participantes, setParticipantes] = useState([]);
    const history = useHistory();

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
    }, [localStorage.token]);

    async function confirmDelete(id){
        const response = await api.delete('grupo/'+id, config);
        if(response.data.status){
            toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000, onClose: history.push('/groups')});
        }else{
            toast.error(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
    };

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
                        <FaTrash onClick={() => confirmDelete(grupo._id)}/>
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> {(grupo.dataSorteio) }
                    </div>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do Evento: </span> {(grupo.dataEvento) }
                    </div>
                    <div className="data">
                        <FaCheck />
                        <span>Status: </span> {grupo.status}
                    </div>
                    <div className="data">
                        <FaUser />
                        <span>Criado por: </span> {grupo.criadoPor}
                    </div>
                    <div className="data">
                        <FaMoneyBillWave />
                        <span>Valor entre: </span> R${grupo.valorMinimo} - {grupo.valorMaximo}
                    </div>
                </div>


                <div className="box-participante">
                    <div className="titulo-participante">
                        <FaUserFriends size={25}/>
                        <h2>Participantes</h2>
                        <FaUserPlus size={25}/>
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