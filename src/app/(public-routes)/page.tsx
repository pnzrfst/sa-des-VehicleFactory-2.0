import Button from '@/components/Button';
import './styles.css'

export default function Home() {
  return (
    <div className='main'>

      <span className='lateral-login'>
        <div className='container'>
          <h1 className='title'>Bem-vindo de volta!</h1>
          <h2 className='text-container'>Para continuar, por favor, acesse sua conta.</h2>
          <h2 className='h2-container'>Não possui conta? </h2>
          <Button src='Cadastre-se' dataType='register-button' />
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
