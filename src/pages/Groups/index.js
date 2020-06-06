import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaTrash, FaCalendarAlt, FaCheck, FaUser, FaPlus} from 'react-icons/fa';
import Header from '../../components/header';
import './styles.css';
import api from '../../services/api';

const config = { headers: {Authorization: `Bearer ${localStorage.token}`}}

export default function Groups(){
    const [grupos, setGrupos] = useState([]);
    const history = useHistory();
    const [cadastrar, setCadastrar] = useState(false);

    useEffect(() => {
        api.get('/gruposusuario', config)
        .then(response => {
            setGrupos(response.data);
        })
    }, [localStorage.token])

    return(
        <div>
            <Header />
            <Link to="/registerdraw">
                <div className="float-button" 
                        onMouseOver={() => setCadastrar(true)} 
                        onMouseOut={() => setCadastrar(false)} disabled="disabled">
                    {cadastrar ? "Cadastrar Sorteio" : ""}
                    <FaPlus size="20px" />
                </div>
            </Link>

            <div className="content">

            {grupos.map(grupo =>(
                <div className="box-sorteio" onClick={() => history.push('/details/'+grupo._id)}>
                    <div className="titulo-sorteio">
                        <h2>{grupo.nome}</h2>
                        <FaTrash />
                        </div>
                    <hr className="line"/>
                    <div className="data">
                        <FaCalendarAlt />
                        <span>Data do sorteio: </span> {grupo.dataSorteio}
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
            ))}


            </div>
        </div>
    );
}