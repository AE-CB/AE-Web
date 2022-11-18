import React from 'react'

export const car = () => {
    return (
        <>
            <form className="search-form">
                <input className="search-bar" type="search" placeholder="¿Qué auto estas buscando?"/>
                    <button className="search-btn"><img src="../assets/img/icons/magnifying-glass.png" alt="icono busqueda" width="25"/></button>
            </form>
            <main className="main-car">
                <div className="return-comprar">
                    <a className="btn-return-comprar" href="./comprar.html"><i className="fas fa-arrow-left"></i> <p>Atrás</p></a>
                </div>

                <section className="car-section">
                    <section className="car-img">
                        <img src="../assets/img/images/comprar/golf-gti.webp" alt="Volkswagen Golf GTI" />
                        <div className="car-secondary-images">
                            <img src="../assets/img/images/car/vw-golf-costado.webp" alt="Volkswagen Golf GTI costado" />
                            <img src="../assets/img/images/car/vw-golf-motor.webp" alt="Motor Volkswagen Golf GTI" />
                            <img src="../assets/img/images/car/volkswagen-golf-gti-interior.webp" alt="Interior Volkswagen Golf GTI" />
                        </div>
                    </section>

                    <section className="car-info">
                        <div className="car-brand-model">
                            <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="Logo Volkswagen" />
                            <h3>Volkswagen Golf GTI</h3>
                        </div>
                        <div className="year-km">
                            <p>Año: <span>2020</span></p>
                            <p>Kilometros: <span>35.678</span></p>
                        </div>
                        <h4 className="car-price">Usd <span>32.590</span></h4>
                    </section>

                    <section className="car-technical-data">
                        <h3>Ficha Técnica:</h3>
                        <div className="technical-data">
                            <p>Marca: <span>Volkswagen</span></p>
                            <p>Modelo: <span>Golf GTI</span></p>
                            <p>Año: <span>2020</span></p>
                            <p>Kilometraje: <span>35.678</span></p>
                            <p>Color: <span>Blanco</span></p>
                            <p>Motor: <span>1.6</span> cc</p>
                            <p>Transmición: <span>6</span> velocidades</p>
                        </div>
                    </section>

                    <section className="car-seller-info">
                        <h3>Información sobre el Vendedor</h3>
                        <div className="seller-info">
                            <p>Nombre: <span>Nombre Apellido</span></p>
                            <p>Email: <span>example@gmail.com</span></p>
                            <p>Celular: <span>000 000 000</span></p>
                        </div>
                        <a className="btn-seller-contact" href="#">Contactar</a>
                    </section>

                    <section className="car-description">
                        <h3>Descripción</h3>
                        <p>Volkswagen Golf GTI del 2020 en excelentes condiciones, único dueño, no tiene ningun detalle, ningún rayón ni choque. Todos los services realizados en tiempo y forma.</p>
                    </section>

                    <section className="car-location">
                        <h3>Ubicación del Vehículo</h3>
                        <div className="location">
                            <p>Departamento: <span>Montevideo</span></p>
                            <p>Localidad: <span>Carrasco</span></p>
                        </div>
                    </section>

                    <section className="car-questions">
                        <div className="question">
                            <form className="question-form">
                                <h3>¿Quiéres Preguntarle algo al Vendedor?</h3>
                                <textarea name="question" cols="30" rows="10" placeholder="Escribe tu Pregunta" minlength="5" maxlength="2500" required></textarea>
                                <input className="btn-preguntar" type="submit" value="Preguntar" />
                            </form>
                        </div>
                        <div className="previous-questions">
                            <h3>Preguntas Anteriores</h3>
                            <div className="previous-question">
                                <h4>¿Qué uso se le dio al auto?</h4>
                                <div className="answer">
                                    <p>El mayor uso del auto fue en ciudad, para los viajes cotidianos, ya sea ir a trabajar, salir a comer, etc. Tiene unos viajes en ruta también. Saludos</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="similar-cars">
                    <h3>Vehículos Similares</h3>
                    <div className="list-similar-cars">
                        <a className="card-car" href="./car.html"> {/* Card Auto */}
                            <img src="../assets/img/images/comprar/nissan-kicks.webp" alt="imagen auto nissan" />
                            <div className="info-car"> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="30" />
                                    <h3>Nissan Kicks</h3>
                                </div>
                                <div className="car-data">
                                    <p>Año: 2021</p>
                                    <p>Kilometros: 23500</p>
                                    <p>USD 29700</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html"> {/* Card Auto */}
                            <img src="../assets/img/images/comprar/clio.webp" alt="imagen auto renault" />
                            <div> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/renault-logo.webp" alt="logo renault" width="50" />
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
                            <img src="../assets/img/images/comprar/swift.webp" alt="imagen auto suzuki" />
                            <div> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/suzuki_logo.webp" alt="logo suzuki" width="30" />
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
                            <img src="../assets/img/images/comprar/accent.webp" alt="imagen auto hyundai" />
                            <div> {/* Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/hyundai-logo.webp" alt="logo hyundai" width="40" />
                                    <h3>Hyundai Accent</h3>
                                </div>
                                <div>
                                    <p>Año: 2018</p>
                                    <p>Kilometros: 108500</p>
                                    <p>USD 21800</p>
                                </div>
                            </div>
                        </a>
                        <div className="left-arrow">
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div className="right-arrow">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default car