import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';
import { FaArrowLeft} from 'react-icons/fa';
import Header from '../../components/header';

import './styles.css';

import api from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from '../../components/spinner';

const config = { headers: {Authorization: `Bearer ${localStorage.token}`}}

export default function RegisterDraw(){
    const[nome, setNome] = useState('');
    const[dataSorteio, setDataSorteio] = useState('');
    const[dataEvento, setDataEvento] = useState('');
    const[valorMinimo, setValorMinimo] = useState('');
    const[valorMaximo, setValorMaximo] = useState('');
    const [spinner, setSpinner] = useState(false);
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            dataSorteio,
            dataEvento,
            valorMinimo,
            valorMaximo
        };

        try {
            setSpinner(true);

            const response = await api.post('grupo', data, config);
            
            if (response.data.status) {
                console.log(response.data.status);
                toast.success(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000, onClose: history.push('/groups')});
            } else {
                toast.warning(response.data.msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000, onClose: history.push('/groups')});
            }
            

        } catch (error) {
            toast.error('Falha de comunicação com o servidor', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000});
        }
        setSpinner(false);
    }
    function voltar(){
        history.push('/groups');
    }

    return(
        <div>
            <Header />
            <div className="register-container">
                <div className="formulario">
                    <form onSubmit={handleRegister}>
                        <FaArrowLeft onClick={voltar}/>
                        <div className="description">Nome do Grupo</div>
                        <input value={nome} onChange={e => setNome(e.target.value)}/>
                        <div className="description">Data Sorteio</div>
                        <input type="date" value={dataSorteio} onChange={e => setDataSorteio(e.target.value)}/>
                        <div className="description">Data Evento</div>
                        <input type="date" value={dataEvento} onChange={e => setDataEvento(e.target.value)}/>
                        <div className="description">Valor Minimo</div>
                        <input type="text" value={valorMinimo} onChange={e => setValorMinimo(e.target.value)}/>
                        <div className="description">Valor Maximo</div>
                        <input type="text" value={valorMaximo} onChange={e => setValorMaximo(e.target.value)}/>

                        <button className="button" type='submit'>
                            {spinner ? <Spinner /> : "Cadastrar"}
                        </button>
                        

                    </form>
                </div>
                <ToastContainer/>
            </div>
        </div>
    );
}