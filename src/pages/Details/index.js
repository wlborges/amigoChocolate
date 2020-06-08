import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus, FaUserFriends, FaUserPlus, FaMoneyBillWave, FaTimes, FaUserTimes} from 'react-icons/fa';
import Header from '../../components/header';
import './styles.css';
import api from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from '../../components/spinner';

const config = { headers: {Authorization: `Bearer ${localStorage.token}`}}

export default function Groups(){
    const [grupo, setGrupos] = useState([]);
    const [cadastrar, setCadastrar] = useState(false);
    const [participantes, setParticipantes] = useState([]);
    const [popupAddPart, setPopupAddPart] = useState(false);
    const [emailParticipante, setEmail] = useState('');
    const history = useHistory();
    const [spinner, setSpinner] = useState(false);

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
            setGrupos(response.data);
            setParticipantes(response.data.participantes)
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

    async function addParticipant(_id, email){

        const data = {
            _id,
            email
        };

        try {
            setSpinner(true);
            //console.log(config);
            const response = await api.put('grupo/participante', data, config);
            
            if (response.data.status) {
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            }
        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        setSpinner(false);
        setEmail('');
    }

    function popupParticipante(){
            return(
                <div className="boxpopup">
                    <div className="popup">
                        <div className="close">
                            <FaTimes onClick={() => setPopupAddPart(false)}/>
                        </div>
                        <div className="description">Email</div>
                        <input type="email" value={emailParticipante} onChange={e => setEmail(e.target.value)}/>

                        <button className="button" onClick={() => addParticipant(grupo._id, emailParticipante)}>
                            {spinner ? <Spinner /> : "Adicionar"}
                        </button>
                    </div>
                </div>
            )
    }

    return(
        <div>
            <Header />
            { popupAddPart ? popupParticipante() : ""}
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
                        <FaUserPlus size={25} onClick={() => setPopupAddPart(true)}/>
                        </div>
                    <hr className="line"/>
                    <ul>
                    {participantes.map((participante, i) => 
                        <li key={i}>
                            <section>
                                <FaUser size="50"/><br />   
                            </section>
                            <section>
                                <strong>{participante.nome}</strong><p>{participante.email}</p>
                            </section>
                            <div className="close">
                                <FaUserTimes/>
                            </div>
                        </li>
                        )}
                        
                    </ul>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}