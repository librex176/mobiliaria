import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './estilos/secPrincipal.css';
import renta from './imagenes/rentas.jpg';
import promo from './imagenes/promo.jpg';
import contrato from './imagenes/contrato.jpg';
import mantenimiento from './imagenes/mantenimiento.jpg';

function Servicios() {
    return (
        <div className='container-fluid tama'>
           <div className="row">
            <div className="col text-center">
                <h1>Nuestros servicios</h1>
            </div>
        </div>

            <div className='row mt-2 '>

                <div className='col-lg-3 col-sm-6 '>
                    <div className="card carta text-center" >
                        <img src={renta} className="card-img-top" alt="Descripción de la imagen" />
                        <div className="card-body">
                            <h5 className="card-title">Administracion de rentas</h5>
                        </div>
                        
                        <div className="card-body">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#texto1">
                            Ver mas
                        </button>
                        <div className="modal fade" id="texto1" tabIndex="-1" aria-labelledby="texto1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="texto1">Administracion de rentas</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                <p>
                                •Administramos su inmueble para que usted no tenga nada de qué preocuparse,
                                garantizándole su renta segura mes a mes y la protección de su patrimonio
                                </p>
                                <p>
                                •Garantía en el pago puntual de sus rentas
                                </p>
                                <p>
                                •Fianzas y/o pólizas de arrendamiento para inquilinos <br/>
                                •Mantenimiento y reparaciones<br/>
                                •Asesoría y apoyo jurídico
                                </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>

                        
                        </div>
                    </div>
                </div>
                

                <div className='col-lg-3 col-sm-6 '>
                    <div className="card carta text-center" >
                        <img src={promo} className="card-img-top" alt="Descripción de la imagen" />
                        <div className="card-body">
                        <h5 className="card-title">Promoción de renta</h5>
                        </div>
                        <div className="card-body">
                            
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#texto2">
                            Ver mas
                            </button>
                        </div>
                        
                        
                        
                        <div className="modal fade" id="texto2" tabIndex="-1" aria-labelledby="texto2" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="texto2">Administracion de rentas</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                <p>
                                • Protegemos tu patrimonio y a tu persona de forma segura y confidencial, investigando
                                a los interesados desde el buró de crédito hasta posibles demandas de cualquier índole
                                a nivel nacional, con la finalidad de darles la tranquilidad de que su inmueble está en las
                                mejores manos y generando ingresos.
                                </p>
                                <p>
                                • Promoción del inmueble y análisis de los solicitantes
                                </p>
                                <p>
                                • Confidencialidad de datos
                                </p>
                                <p>
                                • Representaciones en contratos
                                </p>
                                <p>
                                • Opiniones de valor
                                </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className='col-lg-3 col-sm-6 '>
                    <div className="card carta text-center" >
                        <img src={contrato} className="card-img-top" alt="Descripción de la imagen" />
                        <div className="card-body">
                        <h5 className="card-title">Contratos</h5>
                        </div>
                        <div className="card-body">
                            
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#texto3">
                            Ver mas
                            </button>
                        </div>
                        
                        
                        
                        <div className="modal fade" id="texto3" tabIndex="-1" aria-labelledby="texto3" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="texto3">Contratos</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                <p>
                                • Contrato de arrendamiento personalizados y detallados
                                </p>
                                <p>
                                • Contratos notariados y de Justicia Alternativa    
                                </p>
                                
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='col-lg-3 col-sm-6 '>
                    <div className="card carta text-center" >
                        <img src={mantenimiento} className="card-img-top" alt="Mantenimiento" />
                        <div className="card-body">
                        <h5 className="card-title">Mantenimiento</h5>
                        </div>
                        <div className="card-body">
                            
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#texto4">
                            Ver mas
                            </button>
                        </div>
                        
                        
                        
                        <div className="modal fade" id="texto4" tabIndex="-1" aria-labelledby="texto4" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="texto4">Mantenimiento</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                <p>
                                • Contamos con personal profesional y capacitado para las diferentes tareas de
                                mantenimiento
                                </p>
                                <p>
                                • Jardinería  
                                </p>
                                <p>
                                • Fontanería  
                                </p>
                                <p>
                                • Albañilería  
                                </p>
                                <p>
                                • Electricidad
                                </p>
                                
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Servicios;
