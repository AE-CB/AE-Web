import React from 'react'
import Footer from '../components/Footer'

export async function getStaticProps() {
    console.log(process.env.API_HOST + '/approved_vehicles');

    const res = await fetch(process.env.API_HOST + '/approved_vehicles', {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer ' + process.env.API_KEY,
        })
    })
    const vehicles = await res.json()
    console.log(vehicles)

    return {
        props: {
            vehicles,
        },
    }
}

const comprar = ({ vehicles }) => {
    return (
        <>
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
                        {/* List Vehiculos  */}
                        {vehicles.map((item, i) => {
                            return (
                                <>
                                    <a key={i} className="card-car" href="./car.html">
                                        {/* Card Auto  */}
                                        <img src="../assets/img/images/comprar/nissan-kicks.webp" alt="imagen auto nissan" />
                                        <div className="info-car">
                                            {/* Vehicle data */}
                                            <div className="car-brand">
                                                <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="30" />
                                                <h3>Nissan Kicks</h3>
                                            </div>
                                            <div className="car-data">
                                                <p>Año: {item.year}</p>
                                                <p>Kilometros: {item.mileage}</p>
                                                <p>USD 29700{item.price}</p>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            );
                        })}
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