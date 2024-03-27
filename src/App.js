import logo from './imagenes/logo.png';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './estilos/navbar.css';

function App() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light barra">
      <div className="container-fluid">
        <div className="d-flex align-items-center"> 
        
         <img src={logo} className='imagen' alt='Logotipo' /> 
         <h1 className='texto'>Gestoria & Inmobiliaria</h1>
          
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end m-2" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item enlace m-2">
              <a className="nav-link active texto " aria-current="page" href="/#">3332012503</a>
            </li>
            <li className="nav-item enlace m-2">
              <a className="nav-link active texto" aria-current="page" href="/#">Contactanos</a>
            </li>
           
            
            
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default App;
