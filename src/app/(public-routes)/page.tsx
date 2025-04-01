import Button from '@/components/Button';
import './styles.css'

export default function Home() {
  return (
    <div className='main'>

      <span className='lateral-login'>
        <div className='container'>
          <h1>Bem-vindo de volta!</h1>
          <h2 className='text-container'>Para continuar, por favor, acesse sua conta.</h2>
          <h2 className='text-container'>Não possui conta? </h2>
        </div>
        <br />
        <Button src='Cadastre-se' dataType='register-button' />
      </span>
      <div className='div-form'>
        <form className='login'>

          <label htmlFor="email">Email</label>
          <input type="text" id='email' />

          <label htmlFor="password">Senha</label>
          <input type="text" id='password' />

          <Button src='Login' dataType='basic-button' />
        </form>
      </div>


    </div>


  );
}
