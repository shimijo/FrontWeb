import { Alert } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import Login from './Login'

function Index() {

    const [nome,setNome] = useState("");
    const [email,setEmail]= useState("");
    const [senha,setSenha] = useState("");
    const [flag,setFlag] = useState(false);
    const [login,setLogin] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        if(!nome || !email || !senha){
            setFlag(true);
        }else{
            setFlag(false)
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Senha", JSON.stringify(senha));

            console.log("Salvo no Armazém Local");
            setLogin(!login);
        }
    }


    function handleClick() {
        setLogin(!login);
    }


    return (
    <div>

    {login ? (

        <form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <div className='form-group'>
                <label>Nome</label>
                <input type="text" placeholder='Seu Nome Completo' className='form-control'
                onChange={(event)=> setNome(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label>Email</label>
                <input type="text" placeholder='email@gmail.com' className='form-control'
                onChange={(event)=> setEmail(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label>Senha</label>
                <input type="password" placeholder='Sua Senha' className='form-control'
                onChange={(event)=> setSenha(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'>Cadastrar</button>

            <p onClick={handleClick}>Já possui login? {""}</p>

        {flag && (
            <Alert color="primary" variant='danger'>
                Preencha todos os forms
            </Alert>
        )}



        </form>

):(
        <Login/>
        )}
    </div>
  )
}

export default Index