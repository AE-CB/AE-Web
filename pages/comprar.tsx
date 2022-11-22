import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const comprar = () => {
    return (
        <>

           <Header/>

            {/* form 1 */}

            <form className="search-form">
                {/* Barra Busqueda  */}
                <input className="search-bar" type="search" placeholder="¿Qué auto estas buscando?" />
                <button className="search-btn"><img src="../assets/img/icons/magnifying-glass.png" alt="icono busqueda" width="25" /></button>
            </form>

            <main className="main-comprar">
                <section className="amount-sort-section">
                    {/*  Cantidad de vehiculos y ordenamiento  */}
                    <p className="total-vehicles">Se han encontrado 6789 vehículos</p>
                    <div className="sort-vehicles">
                        {/*  Ordenamiento  */}
                        <img src="../assets/img/icons/ordenar-por-opcion-de-boton-de-interfaz-de-atributos.png" alt="icono ordenamiento" width="25" />
                        <p>Ordenar por:</p>
                        <select name="ordenamiento" id="">
                            <option value="">Más relevante</option>
                            <option value="">Precio más bajo</option>
                            <option value="">Precio más alto</option>
                        </select>
                    </div>
                </section>

                <section className="filter-cars">
                    {/* Filtrar y Vehiculos  */}
                    <section className="filters">
                        {/* Filtrar  */}
                        <div className="filter-title">
                            <img src="../assets/img/icons/simbolo-de-herramienta-llena-de-filtro.png" alt="icono filtrar" width="25" />
                            <p>Filtrar:</p>
                            <a href="#">Filtrar</a>
                        </div>
                        <div>
                            <p>Estado</p>
                            <img src="../assets/img/icons/flecha-hacia-abajo.png" alt="icono flecha hacia abajo" width="12" />
                        </div>
                        <div>
                            <p>Marca</p>
                            <img src="../assets/img/icons/flecha-hacia-abajo.png" alt="icono flecha hacia abajo" width="12" />
                        </div>
                        <div>
                            <p>Modelo</p>
                            <img src="../assets/img/icons/flecha-hacia-abajo.png" alt="icono flecha hacia abajo" width="12" />
                        </div>
                        <div>
                            <p>Año</p>
                            <img src="../assets/img/icons/flecha-hacia-abajo.png" alt="icono flecha hacia abajo" width="12" />
                        </div>
                        <div>
                            <p>Precio</p>
                            <img src="../assets/img/icons/flecha-hacia-abajo.png" alt="icono flecha hacia abajo" width="12" />
                        </div>
                        <div>
                            <p>Kilometros</p>
                            <img src="../assets/img/icons/flecha-hacia-abajo.png" alt="icono flecha hacia abajo" width="12" />
                        </div>
                        <div>
                            <p>Ubicación</p>
                            <img src="../assets/img/icons/flecha-hacia-abajo.png" alt="icono flecha hacia abajo" width="12" />
                        </div>
                    </section>

                    <section className="cars-list">
                        {/* Listado Vehiculos  */}
                        <a className="card-car" href="./car.html">
                            {/* Card Auto  */}
                            <img src="../assets/img/images/comprar/nissan-kicks.webp" alt="imagen auto nissan" />
                            <div className="info-car">
                                {/*  Datos Vehiculo  */}
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
                        <a className="card-car" href="./car.html">
                            {/*  Card Auto  */}
                            <img src="../assets/img/images/comprar/golf-gti.webp" alt="imagen auto" />
                            <div>
                                {/*  Datos Vehiculo */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="logo volkswagen" width="28" />
                                    <h3>Volkswagen Golf GTI</h3>
                                </div>
                                <div>
                                    <p>Año: 2020</p>
                                    <p>Kilometros: 35678</p>
                                    <p>USD 32590</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html">
                            {/*  Card Auto  */}
                            <img src="../assets/img/images/comprar/320i.webp" alt="imagen auto bmw" />
                            <div>
                                {/* Datos Vehiculo  */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/logo-bmw.webp" alt="logo bmw" width="30" />
                                    <h3>BMW 320i</h3>
                                </div>
                                <div>
                                    <p>Año: 2014</p>
                                    <p>Kilometros: 190780</p>
                                    <p>USD 31400</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html">
                            {/*  Card Auto  */}
                            <img src="../assets/img/images/comprar/fiesta.webp" alt="imagen auto ford" />
                            <div>
                                {/*  Datos Vehiculo  */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/logo-ford.webp" alt="logo ford" width="50" />
                                    <h3>Ford Fiesta</h3>
                                </div>
                                <div>
                                    <p>Año: 2016</p>
                                    <p>Kilometros: 60790</p>
                                    <p>USD 17800</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html">
                            {/*  Card Auto  */}
                            <img src="../assets/img/images/comprar/amg-c450.webp" alt="imagen auto mercedes" />
                            <div>
                                {/*  Datos Vehiculo  */}
                                <div className="car-brand">
                                    <img src="../assets/img/images/comprar-home/logo-mercedes-benz.webp" alt="logo mercedes" width="50" />
                                    <h3>Mercedes AMG C450</h3>
                                </div>
                                <div>
                                    <p>Año: 2016</p>
                                    <p>Kilometros: 78900</p>
                                    <p>USD 59700</p>
                                </div>
                            </div>
                        </a>
                        <a className="card-car" href="./car.html">
                            {/*  Card Auto  */}
                            <img src="../assets/img/images/comprar/clio.webp" alt="imagen auto renault" />
                            <div>
                                {/*  Datos Vehiculo  */}
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
                        <a className="card-car" href="./car.html">
                            {/*  Card Auto  */}
                            <img src="../assets/img/images/comprar/swift.webp" alt="imagen auto suzuki" />
                            <div>
                                {/*  Datos Vehiculo  */}
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
                        <a className="card-car" href="./car.html">
                            {/*  Card Auto  */}
                            <img src="../assets/img/images/comprar/accent.webp" alt="imagen auto hyundai" />
                            <div>
                                {/*  Datos Vehiculo  */}
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
                    </section>
                </section>

                <section className="pages">
                    {/*  Pages  */}
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">Siguiente</a>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default comprar