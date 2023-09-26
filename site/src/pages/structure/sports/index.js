import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Work() {

    return (

        <div className="pagina">

            <div className='cabecalho'>
                <div className='fundo'>
                    <div className='imgLogo'> </div>
                    <div className='lupa'>

                        <div className='imgLupa'> </div>
                        <div>  </div>

                    </div>
                    <div className='perfil'> 
                    
                    
                     <div className='imgPerfil'></div>
                     <div className='nomePerfil'></div>

                    </div>
                    <div className='coracao'> </div>
                    <div className='carrinho'></div>
                </div>
            </div>

        </div>

    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>);