import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
<<<<<<< HEAD
import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus, FaUserFriends, FaUserPlus, FaMoneyBillWave, FaTimes, FaUserTimes, FaHeart, FaRandom, FaUndo, FaEye, FaEyeSlash} from 'react-icons/fa';
=======
import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus, FaUserFriends, FaUserPlus, FaMoneyBillWave, FaTimes} from 'react-icons/fa';
>>>>>>> parent of a701131... details
import Header from '../../components/header';
import './styles.css';
import api from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from "react-tooltip";

import Spinner from '../../components/spinner';

const config = { headers: {Authorization: `Bearer ${localStorage.token}`}}

export default function Groups(){
    const [grupo, setGrupos] = useState([]);
    const [cadastrar, setCadastrar] = useState(false);
    const [participantes, setParticipantes] = useState([]);
    const [popupAddPart, setPopupAddPart] = useState(false);
    const [emailParticipante, setEmail] = useState('');
    const [popupAddWishList, setWishList] = useState(false);
    const [wishItem, setWishItem] = useState('');
    const history = useHistory();
    const [spinner, setSpinner] = useState(false);

    //const [amigoOculto, setAmigo] = useState('');
    const [ocultaAmigo, setOcultaAmigo] = useState(false);

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

    async function atualizar(){
        const returnGrupo = await api.get('/grupo/'+id, config);
        setGrupos(returnGrupo.data);
        setParticipantes(returnGrupo.data.participantes)
    }

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
        atualizar();
        setEmail('');
    }
    async function removeParticipant(_id, email){
        const data = {
            _id,
            email
        };
        try {
            const response = await api.post('grupo/participante', data, config);
            if (response.data.status) {
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            }
        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        atualizar();
        setEmail('');
    }

    async function addWishItem(_id, desejo){
        const data = {
            _id,
            desejo
        };
        try {
            setSpinner(true);
            //console.log(config);
            const response = await api.put('/grupo/addlista', data, config);
            
            if (response.data.status) {
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            }
        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        setSpinner(false);
        atualizar();
        setEmail('');
    }
    async function sortear(_id){
        try {
            setSpinner(true);
            //console.log(config);
            const response = await api.get('/grupo/sorteio/'+ _id, config);
            
            if (response.data.status) {
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            }
        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        setSpinner(false);
        atualizar();
        setEmail('');
    }
    async function cancelarSortear(_id){
        try {
            const data = {
                _id
            };
            setSpinner(true);
            //console.log(config);
            const response = await api.post('/grupo/sorteio', data, config);
            
            if (response.data.status) {
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
            }
        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        setSpinner(false);
        atualizar();
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

    function popupWishList(){
        return(
            <div className="boxpopup">
                <div className="popup">
                    <div className="close">
                        <FaTimes onClick={() => setWishList(false)}/>
                    </div>
                    <div className="description">Item Desejado</div>
                    <input type="email" value={wishItem} onChange={e => setWishItem(e.target.value)}/>

                    <button className="button" onClick={() => addWishItem(grupo._id, wishItem)}>
                        {spinner ? <Spinner /> : "Adicionar"}
                    </button>
                </div>
            </div>
        )
    }
    function salvaAmigo(participanteAmigo){
        localStorage.setItem('amigo',participanteAmigo);
        //setAmigo(participanteAmigo);
    }

    return(
        <div>
            <Header />
            { popupAddPart && grupo.status === "Em Aberto" ? popupParticipante() : ""}
            { popupAddWishList ? popupWishList() : ""}
            <Link to="/registerdraw">
                <div className="float-button" 
                        onMouseOver={() => setCadastrar(true)} 
                        onMouseOut={() => setCadastrar(false)} >
                    {cadastrar ? "Cadastrar Sorteio" : ""}
                    <FaPlus size="20px" />
                </div>
            </Link>

            <div className="content">
                <div className="box-sorteios">
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
                    <div className="datalink" onClick={() => setWishList(true)}>
                        <FaHeart />
                        <span>Lista de desejos</span>
                    </div>
                    {(grupo.status === "Sorteado") &&
                        <div className="datalink" onClick={() => setOcultaAmigo(!ocultaAmigo)}>
                            <FaUserFriends />
                            <span>Amigo: </span>{ocultaAmigo? localStorage.amigo : ""}
                            {ocultaAmigo ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    }
                    {(grupo.status === "Sorteado") &&
                        <div className="datalink" onClick={() => cancelarSortear(grupo._id)}>
                            <FaUndo />
                            <span>Cancelar Sorteio</span>
                        </div>
                    }
                    {(grupo.status === "Em Aberto") &&
                        <div className="datalink" onClick={() => sortear(grupo._id)}>
                            <FaRandom />
                            <span>Sortear</span>
                        </div>
                    }
                </div>


                <div className="box-participante">
                    <div className="titulo-participante">
                        <FaUserFriends size={25}/>
                        <h2>Participantes</h2>
                        <FaUserPlus size={25} onClick={() => setPopupAddPart(true)}/>
                        </div>
                    <hr className="line"/>
                    {participantes.map((participante, i) => 
<<<<<<< HEAD
                        <li key={i} data-tip={participante.listaDesejos}>
                            <ReactTooltip effect="solid" multiline="true" place="bottom"/>
                            {(participante.email === localStorage.email) ? salvaAmigo(participante.amigo):""}
                            {console.log(participante.amigo)}
                            <section>
                                <FaUser size="50"/><br />   
                            </section>
                            <section>
                                <strong>{participante.nome}</strong><p>{participante.email}</p>
                            </section>
                            {(grupo.status === "Em Aberto") &&
                            <div className="close" onClick={() => removeParticipant(grupo._id, participante.email)}>
                                <FaUserTimes size="18"/>
                            </div>
                            }
                        </li>
                        )}
                        
                    </ul>
=======
                        <div key={i} className="participante">
                            <div className="close">
                                <FaTimes/>
                            </div>
                            <FaUser size="60"/><br />
                            <strong>{participante.nome}</strong><br />{participante.email}
                        </div>
                    )}
>>>>>>> parent of a701131... details
                </div>
            </div>
            <ToastContainer/>
            <ReactTooltip />
        </div>
    );
}