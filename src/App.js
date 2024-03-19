import logo from './imagenes/logo.png';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './estilos/navbar.css';

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-dark barra">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <img src={logo} alt="Imagen de prueba" className="imagen mx-auto d-block" />
              </div>
              <div className="col-auto">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item enlace">
                  <a className="nav-link" href="/contacto">Contacto</a>
                </li>
                <li className="nav-item enlace">
                  <a className="nav-link" href="/telefono">Telefono</a>
                </li>
                <li className="nav-item enlace">
                  <a className="nav-link" href="/contactanos">Contactanos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
