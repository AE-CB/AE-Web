import React from 'react'

function user() {
  return (
   <>
   
   <div className="layout-user">
        <aside className="user-aside">
            <div className="user-aside-navbar">
                <img src="../assets/img/logo/icon-shortcut.png" alt="Logo CarHouse"/>
                <div className="aside-navbar">
                    <div className="my-account">
                        <h3><i className="fas fa-bars"></i> <span>Mi Cuenta</span></h3>
                        <div>
                            <a href="#">Resumen</a>
                            <a href="#">Mis Datos</a>
                        </div>
                    </div>
                    <div className="purchases">
                        <h3><i className="fas fa-shopping-bag"></i> <span>Compras</span></h3>
                        <div>
                            <a href="#">Favoritos</a>
                            <a href="#">Preguntas</a>
                        </div>
                    </div>
                    <div className="sales">
                        <h3><i className="fas fa-bullhorn"></i> <span>Ventas</span></h3>
                        <div>
                            <a href="#">Mis Publicaciones</a>
                            <a href="#">Preguntas</a>
                            <a href="#">Ventas</a>
                        </div>
                    </div>
                    <div className="settings">
                        <h3><i className="fas fa-cog"></i> <span>Configuración</span></h3>
                        <div>
                            <a href="#">Seguridad</a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        <main>
            <header>
                <section className="navbar"> {/* Barra de Navegacion */}
                    <div className="container-1600">
                        <div>
                            <a className="logo" href="../index.html"> {/* Logo */}
                                <img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                            </a>
            
                            <button id="hamburguer" className="hamburguer"><i className="fas fa-bars"></i></button>
                        </div>
                
                        <nav id="main-nav" className="main-nav"> {/* Navegacion */}
                            <ul>
                                <li>
                                    <a className="nav-link" href="../pages/comprar-home.html">Comprar</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="../pages/vender.html">Vender</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="../pages/concesionarias.html">Concesionarias</a>
                                </li>
                                <li>
                                    <a className="nav-link btn-ingresar" href="../pages/sign-in.html">Ingresar</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>

            <div className="user-resume-container">
                <div className="situation">
                    <p>Mi Cuenta</p>
                    <p><i className="fas fa-chevron-right"></i></p>
                    <h2>Resumen</h2>
                </div>
    
                <section className="user-info">
                    <div className="user-img-name">
                        <img src="../assets/img/images/user/usuario-de-perfil.png" alt="Usuario"/>
                        <div>
                            <h2>Nombre Apellido</h2>
                            <p>Usuario Standard</p>
                        </div>
                    </div>
                    <div className="user-data">
                        <h3>Datos:</h3>
                        <p><strong>Email:</strong> example@gmail.com</p>
                        <p><strong>Celular:</strong> 000 000 000</p>
                        <p><strong>Fecha de Nacimiento:</strong> 18/06/1989</p>
                    </div>
                    <div className="user-location">
                        <h3>Ubicación:</h3>
                        <p><strong>Departamento:</strong> Montevideo</p>
                        <p><strong>Localidad:</strong> Carrasco</p>
                    </div>
                    <div className="button-my-data">
                        <a href="#">Ir a Mis Datos</a>
                    </div>
                </section>
    
                <section className="user-publications">
                    <h2><i className="fas fa-list-ul"></i> Mis Publicaciones</h2>
                    <div className="publications">
                        <div className="publication">
                            <div>
                                <img src="../assets/img/images/comprar/golf-gti.webp" alt="Volkswagen Golf GTI"/>
                                <div className="publication-brand">
                                    <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="Logo Volkswagen"/>
                                    <h3>Volkswagen Golf GTI</h3>
                                </div>
                            </div>
                            <h4>USD 32.590</h4>
                        </div>
                        <div className="publication">
                            <div>
                                <img src="../assets/img/images/comprar/nissan-kicks.webp" alt="Nissan Kicks"/>
                                <div className="publication-brand">
                                    <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="Logo Nissan"/>
                                    <h3>Nissan Kicks</h3>
                                </div>
                            </div>
                            <h4>USD 29.700</h4>
                        </div>
                    </div>
                    <div className="see-all-publications">
                        <a href="#">Ver Todas</a>
                    </div>
                </section>
    
                <section className="user-favs">
                    <h2><i className="fas fa-star"></i> Mis Favoritos</h2>
                    <div className="favs-cars">
                        <a className="card-car" href="./car.html"> {/* Card Auto */}
                            <img src="../assets/img/images/comprar/clio.webp" alt="imagen auto renault"/>
                            <div> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/renault-logo.webp" alt="logo renault" width="50"/>
                                    <h3>Renault Clio</h3>
                                </div>
                                <div>
                                    <p>Año: 2018</p>
                                    <p>Kilometros: 46900</p>
                                    <p>USD 17600</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html"> {/* Card Auto */}
                            <img src="../assets/img/images/comprar/swift.webp" alt="imagen auto suzuki"/>
                            <div> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/suzuki_logo.webp" alt="logo suzuki" width="30"/>
                                    <h3>Suzuki Swift</h3>
                                </div>
                                <div>
                                    <p>Año: 2017</p>
                                    <p>Kilometros: 90600</p>
                                    <p>USD 14600</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html"> {/* Card Auto */}
                            <img src="../assets/img/images/comprar/320i.webp" alt="imagen auto bmw"/>
                            <div> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/logo-bmw.webp" alt="logo bmw" width="30"/>
                                    <h3>BMW 320i</h3>
                                </div>
                                <div>
                                    <p>Año: 2014</p>
                                    <p>Kilometros: 190780</p>
                                    <p>USD 31400</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html"> {/* Card Auto */}
                            <img src="../assets/img/images/comprar/fiesta.webp" alt="imagen auto ford"/>
                            <div> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/logo-ford.webp" alt="logo ford" width="50"/>
                                    <h3>Ford Fiesta</h3>
                                </div>
                                <div>
                                    <p>Año: 2016</p>
                                    <p>Kilometros: 60790</p>
                                    <p>USD 17800</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="favs-see-all">
                        <a href="#">Ver Todos</a>
                    </div>
                </section>
            </div>

            <footer className="footer">
                <hr/>
                <div className="footer-bar"> {/* Barra Footer */}
                    <a href="../index.html"> {/* Logo */}
                        <img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                    </a>
                    <div className="social-media"> {/* Redes Footer */}
                        <ul>
                            <li> {/* Instagram */}
                                <a className="social-media-item" href="#" target="_blank"><img src="../assets/img/icons/instagram-oscuro.png" alt="icono instagram" width="40" height="40"/></a>
                            </li>
                            <li> {/* Facebook */}
                                <a className="social-media-item" href="#" target="_blank"><img src="../assets/img/icons/facebook-oscuro.png" alt="icono facebook" width="40" height="40"/></a>
                            </li>
                            <li> {/* Whatsapp */}
                                <a className="social-media-item" href="#" target="_blank"><img src="../assets/img/icons/whatsapp-oscuro.png" alt="icono whatsapp" width="40" height="40"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
        
                <div className="footer-sections"> {/* Secciones Footer */}
                    <section> {/* Categorias */}
                        <h4>Categorias</h4>
                        <ul>
                            <li><a href="../pages/comprar-home.html">Comprar</a></li>
                            <li><a href="../pages/vender.html">Vender</a></li>
                        </ul>
                    </section>
        
                    <section> {/* Nosotros */}
                        <h4>Nosotros</h4>
                        <ul>
                            <li><a href="../pages/contactanos.html">Regístra tu Concesionaria</a></li>
                            <li><a href="#">Información Legal</a></li>
                            <li><a href="#">Politicas de Privacidad</a></li>
                        </ul>
                    </section>
        
                    <section className="section-footer-contacto"> {/* Contactanos */}
                        <h4>Contáctanos</h4>
                        <ul>
                            <li><a href="#"><img className="mail-icon" src="../assets/img/icons/email.png" alt="icono email" width="35" height="35"/><span>info@CarHouse.com.uy</span></a></li>
                            <li><a href="#"><img className="phone-icon" src="../assets/img/icons/phone-call.png" alt="icono phone-call" width="35" height="35"/><span>0000 00 00</span></a></li>
                        </ul>
                    </section>
                </div>
                <h3>© 2021 CarHouse, Inc.</h3>
                <div className="developed-by">
                    <h6>Desarrollado por Mathias Ramilo</h6>
                    <a target="_blank" href="https://github.com/mathiramilo"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg></a>
                </div>
            </footer>
        </main>
    </div>
   
   </>
  )
}

export default user