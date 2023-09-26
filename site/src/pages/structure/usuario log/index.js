import './index.scss';
import { useState } from 'react';
import background from '../image/loginUsuario.png';

export default function Cliente() {
  
  return (

    <div className="pagina">
      
    <div className='fundo'  style={{ backgroundImage: `url(${background})`  }} > 
      
      <div className='vazio'></div>

      <div className='quadrado'>

        <h1 className='texto-crie'> Bem-vindo de volta </h1>

       
        <h1 className='texto-nome'> E-mail </h1>
        <input className='barra'  id='placeholder-text' placeholder='       E-mail' type='text'></input>  

        <h1 className='texto-nome'> Senha </h1>
        <input className='barra'  id='placeholder-text' placeholder='       Senha' type='text'></input>  

        <button className='botao-confir'> Entrar </button>
      
      <div className='separa'>
        <h1 className='texto-esquece'> Esqueceu a conta? </h1>
        <h1 className='texto-redefina' > Redefinir a senha </h1>
      </div>

      </div>

    </div>
   

    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>);

