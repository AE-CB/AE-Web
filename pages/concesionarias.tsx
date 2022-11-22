import React from 'react'
import Footer from '../components/Footer'

function concesionarias() {
  return (
    
    <>
          <main className="main-concesionarias">
        <section>
            <h2>Nuestras Concesionarias</h2>
            <div className="grid-concesionarias">
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionario-nissan.webp" alt="concesionaria nissan" width="20%" />
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="50"/>
                        <div>
                            <p>Concesionaria</p>
                            <p><b>Nissan</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionaria-renault.webp" alt="concesionaria renault" width="20%"/>
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/renault-logo.webp" alt="logo renault" width="50"/>
                        <div>
                            <p>Concesionaria</p>
                            <p><b>Renault</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionario-bmw.webp" alt="concesionaria bmw" width="20%"/>
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/logo-bmw.webp" alt="logo bmw" width="50"/>
                        <div>
                            <p>Concesionaria</p>
                            <p><b>BMW</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionario-vw.jpeg" alt="concesionaria volkswagen" width="20%" />
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="logo volkswagen" width="50" />
                        <div>
                            <p>Concesionaria</p>
                            <p><b>Volkswagen</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionario-fiat.webp" alt="concesionaria fiat" width="20%" />
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/fiat-logo.webp" alt="logo fiat" width="50" />
                        <div>
                            <p>Concesionaria</p>
                            <p><b>Fiat</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionario-mercedes.webp" alt="concesionaria mercedes" width="20%" />
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/logo-mercedes-benz.webp" alt="logo mercedes" width="50" />
                        <div>
                            <p>Concesionaria</p>
                            <p><b>Mercedes</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionaria ford.webp" alt="concesionaria ford" width="20%" />
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/logo-ford.webp" alt="logo ford" width="50" />
                        <div>
                            <p>Concesionaria</p>
                            <p><b>Ford</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
                <div className="card-concesionaria"> {/* Card Concesionaria */}
                    <img src="../assets/img/images/concesionarias/concesionaria-chevrolet.webp" alt="concesionaria chevrolet" width="20%" />
                    <div className="brand-concesionaria">
                        <img src="../assets/img/images/comprar-home/chevrolet-logo.webp" alt="logo chevrolet" width="50" />
                        <div>
                            <p>Concesionaria</p>
                            <p><b>Chevrolet</b></p>
                        </div>
                    </div>
                    <a className="btn-ver-autos-concesionaria" href="#modal-ver-autos">Ver Autos</a>
                    <a className="btn-contactarse" href="#modal-contactarse">Contactarse</a>
                </div>
            </div>

            {/* Modal Ver Autos */}
            <section id="modal-ver-autos" className="modal-ver-autos">
                <div className="modal-ver-autos-container">
                    <header className="modal-ver-autos-header">
                        <div className="modal-va-brand">
                            <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="Logo Volkswagen" />
                            <h3>Concesionaria <strong>Volkswagen</strong></h3>
                        </div>
                        <a href="#modal-contactarse" className="btn-contactarse-mva">Contactarse</a>
                        <a href="#body" className="close-x"><i className="fas fa-times"></i></a>
                    </header>
                    <section className="available-cars">
                        <h3>Autos Disponibles</h3>
                        <div className="concessionaire-cars">
                            <div className="ccar-card">
                                <img src="../assets/img/images/comprar-home/vw-golf-hatchback.webp" alt="Volkswagen Golf GTI" />
                                <h4>Golf GTI</h4>
                                <p>Usd <span>32.900</span></p>
                                <a href="#modal-contactarse" className="btn-me-interesa">Me Interesa</a>
                            </div>
                            <div className="ccar-card">
                                <img src="../assets/img/images/concesionarias/vw-tiguan-wb.webp" alt="Volkswagen Tiguan" />
                                <h4>Tiguan 2021</h4>
                                <p>Usd <span>28.900</span></p>
                                <a href="#modal-contactarse" className="btn-me-interesa">Me Interesa</a>
                            </div>
                            <div className="ccar-card">
                                <img src="../assets/img/images/concesionarias/vw-vento-wb.webp" alt="Vento GLI" />
                                <h4>Vento GLI</h4>
                                <p>Usd <span>35.700</span></p>
                                <a href="#modal-contactarse" className="btn-me-interesa">Me Interesa</a>
                            </div>
                            <div className="left-arrow">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className="right-arrow">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Modal Contactarse */}
            <section id="modal-contactarse" className="modal-contactarse">
                <div className="modal-contactarse-container">
                    <a href="#body" className="close-x"><i className="fas fa-times"></i></a>
                    <img src="../assets/img/images/concesionarias/concesionario-vw.jpeg" alt="Concesionaria Volkswagen" />
                    <div className="modal-contactarse-contact">
                        <header className="modal-contactarse-header">
                            <div className="modal-va-brand">
                                <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="Logo Volkswagen" />
                                <h3>Concesionaria <strong>Volkswagen</strong></h3>
                            </div>
                        </header>
                        <section className="modal-contactarse-data">
                            <h3>Contacto</h3>
                            <form className="modal-contactarse-form">
                                <div className="sign-up-field">
                                    <h3>Nombre Completo</h3>
                                    <input type="text" name="client-name" placeholder="Ingresa el nombre" autoComplete="off" required />
                                </div>
                                <div className="sign-up-field">
                                    <h3>Email</h3>
                                    <input type="email" name="client-email" placeholder="Ingresa un email" required />
                                </div>
                                <div className="sign-up-field">
                                    <h3 className="input-heading">Celular</h3>
                                    <input type="tel" name="client-phone" placeholder="Ingresa tu celular" required />
                                </div>
                                <div className="sign-up-field">
                                    <h3>Vehículo de Interés</h3>
                                    <input type="text" name="wanted-vehicle" placeholder="Ingresa el nombre" autoComplete="off" required />
                                </div>
                                <input className="btn-enviar-consulta" type="submit" value="Enviar Consulta" />
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </section>

        <section className="contact-info">
            <div className="contact-concessionaire">
                <div className="container-1200">
                    <h3>¿Tienes una <b>Concesionaria?</b></h3>
                    <p>Registra tu concesionaria en <b>CarHouse</b> de manera gratuita para que nuestros usuarios tengan acceso a tus coches</p>
                </div>
                <a href="./contactanos.html" data-aos="fade-up">Contáctanos</a>
            </div>
            <div className="info-concessionaire">
                <div className="container-1200">
                    <h3>¿Vas a <b>Comprar un Coche</b> por Concesionaria?</h3>
                    <p>Las concesionarias cuentan con distintas <b>formas para financiar y llevarte tu coche</b>, informate antes de realizar una compra</p>
                </div>
                <a href="./financiamiento-info.html" data-aos="fade-up">Más Información</a>
            </div>
        </section>
    </main>

    <Footer/>

    </>

    )
}

export default concesionarias