import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import background from '../image/criarUsuario.png';




export default function Work() {
  
  return (

    <div className="pagina">
      
    <div className='fundo'  style={{ backgroundImage: `url(${background})`  }} > 
      
      <div className='vazio'></div>

      <div className='quadrado'>

        <h1 className='texto-crie'> Crie sua conta </h1>

        <h1 className='texto-nome'> Nome do usuário </h1>
        <input className='barra'  id='placeholder-text' placeholder='       E-mail' type='text'></input>  

        <h1 className='texto-nome'> E-mail </h1>
        <input className='barra'  id='placeholder-text' placeholder='       Exemplo@gmail.com' type='text'></input>  

        <h1 className='texto-nome'> Senha </h1>
        <input className='barra'  id='placeholder-text' placeholder='       Exemplo: Ex123456' type='text'></input>  

        <h1 className='texto-nome'> Confirmar Senha </h1>
        <input className='barra' id='placeholder-text' placeholder='        Exemplo: Ex123456' type='text'></input>  

        <button className='botao-confir'> Confirmar </button>
        
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
