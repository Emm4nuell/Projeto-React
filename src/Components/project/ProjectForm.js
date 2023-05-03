import { useState, useForm } from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../form/Input';
import styles from '../css/ProjectForm.module.css'

export default function ProjectForm(){



    const history = useNavigate()
    const [erros, setErros] = useState([]);
    const [valid, setValid] = useState([]);
    const [objEndereco, setObjEndereco] = useState([]);
    const [objUsuario, setObjUsuario] = useState([]);
    const dados = {...objUsuario, endereco:{...objEndereco}};
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

        // Tratar onsubmit do formulário
    const handleSignupForm = (e) => {
        e.preventDefault();
        //console.log(erros)
        const lista = valid.map((key, valor) => {
            //console.log(key.defaultMessage)

        })
    } 
    const usuario = (e) =>{
        setObjUsuario({...objUsuario, [e.target.name]: e.target.value})
    }

    const endereco = (e) => {
        setObjEndereco({...objEndereco, [e.target.name]: e.target.value})
    }

    const salvar = (e) => {
        console.log(dados)
            fetch("http://localhost:8080/formusuario", {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: { 'Content-type':'application/json', 'Accept':'application/json' }
        })
        .then(retorno => retorno.json())
        .then(retorno => {
            setErros(retorno)
            setValid(retorno.errors)
            history.push('/', {message: 'Projeto em andamento!'})
        })
        .then((error) => console.log(error.preventDefault))
    }

    return(
        <form className={styles.form} onSubmit={handleSignupForm(onSubmit)}>
            <h1>{erros.status}</h1>
            <div>
                <Input type="text" onchange={usuario} text="Nome completo" name="nome" placeholder="Digite seu nome"/>
            </div>
            <div>
                <Input type="text" onchange={usuario} text="CPF" name="cpf" placeholder="Digite seu cpf"/>
            </div>
            <div>
                <Input type="text" onchange={usuario} text="Senha" name="senha" placeholder="Digite sua senha"/>
            </div>
            <div>
                <Input type="text" onchange={endereco} text="CEP" name="cep" placeholder="Digite seu cep"/>
            </div>
            <div>
                <Input type="text" onchange={endereco} text="N°" name="numero" placeholder="Digite seu cep"/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" onClick={salvar} className="btn btn-success"/>
            </div>
        </form>
        
    )
}