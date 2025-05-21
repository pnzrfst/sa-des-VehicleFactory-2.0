'use client'

import Button from '@/components/Button';
import './styles.css'
import { useState } from 'react';
import { ModalRegister } from '@/components/ModalRegister';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className='main'>

      <span className='lateral-login'>
        <div className='container'>
          <h1 className='title'>Bem-vindo de volta!</h1>
          <h2 className='text-container'>Para continuar, por favor, acesse sua conta.</h2>
          <h2 className='h2-container'>Não possui conta? </h2>
          <ModalRegister open ={openModal} handleClose={()=> setOpenModal(!openModal)} />
          <Button src='Cadastre-se' dataType='register-button' onClick={()=> setOpenModal(true)}/>
        </div>
        <br />
      </span>
      <div className='div-form'>
        <form className='login'>

          <label htmlFor="email" className='label-login'>Email</label>
          <input type="text" id='email' className='input-login'/>

          <label htmlFor="password" className='label-login'>Senha</label>
          <input type="text" id='password' className='input-login'/>

          <Button src='Login' dataType='basic-button'/>
        </form>
      </div>


    </div>


  );
}
