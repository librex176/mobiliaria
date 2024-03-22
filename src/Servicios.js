import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './estilos/secPrincipal.css';
import renta from './imagenes/rentas.jpg';
import promo from './imagenes/promo.jpg';
import contrato from './imagenes/contrato.jpg';
import mantenimiento from './imagenes/mantenimiento.jpg';
function Servicios(){
    return(
        <div className='container-fluid'> 
            <div className='row m-4 justify-content-center'>
                <div className='col-lg-3 col-sm-6'>
                    <div className="card" >
                        <img src={renta} className="card-img-top" alt="Descripción de la imagen" />
                        <div className="card-body">
                            <h5 className="card-title">Administracion de rentas</h5>
                            <ul className="card-list">
                                <li>
                                    <span className="bullet"></span>Administramos su inmueble para que usted no tenga nada de qué preocuparse, garantizándole su renta segura mes a mes y la protección de su patrimonio.
                                </li>
                                <li>
                                    <span className="bullet"></span> Garantía en el pago puntual de sus rentas.
                                </li>
                                <li>
                                    <span className="bullet"></span> Fianzas y/o pólizas de arrendamiento para inquilinos.
                                </li>
                                <li>
                                    <span className="bullet"></span> Mantenimiento y reparaciones.
                                </li>
                                <li>
                                    <span className="bullet"></span> Asesoría y apoyo jurídico.
                                </li>
                            </ul>

                            <a href="#" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
                <div class="card col-lg-3 col-sm-6" >
                    <img class="card-img-top" src={promo} alt="Descripción de la imagen" />
                    <div class="card-body">
                        <h5 class="card-title">Promoción de renta</h5>
                        <p class="card-text">Protegemos tu patrimonio y a tu persona de forma segura y confidencial, investigando a los interesados desde el buró de crédito hasta posibles demandas de cualquier índole a nivel nacional, con la finalidad de darles la tranquilidad de que su inmueble está en las mejores manos y generando ingresos.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Promoción del inmueble y análisis de los solicitantes.</li>
                        <li class="list-group-item">Confidencialidad de datos.</li>
                        <li class="list-group-item">Representaciones en contratos.</li>
                        <li class="list-group-item">Opiniones de valor.</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Ver más</a>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                    <div class="card" >
                        <img class="card-img-top" src={contrato} alt="Descripción de la imagen" />
                        <div class="card-body">
                            <h5 class="card-title">Contratos</h5>
                            
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Contrato de arrendamiento personalizados y detallados</li>
                            <li class="list-group-item">Contratos notariados y de Justicia Alternativa</li>
                            
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Ver más</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                    <div class="card" >
                        <img class="card-img-top" src={mantenimiento} alt="Descripción de la imagen" />
                        <div class="card-body">
                            <h5 class="card-title">Mantenimiento</h5>
                            
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Contamos con personal profesional y capacitado para las diferentes tareas de
                            mantenimiento</li>
                            <li class="list-group-item">Jardinería</li>
                            <li class="list-group-item">Fontaneria</li>
                            <li class="list-group-item">Albañileria</li>
                            <li class="list-group-item">Electricidad</li>
                            
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servicios;