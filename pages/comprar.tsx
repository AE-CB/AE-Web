import React from 'react'
import Footer from '../components/Footer'

export async function getStaticProps() {
    console.log(process.env.API_HOST+ '/vehicles');

    const res = await fetch(process.env.API_HOST+ '/vehicles',{
        method: 'post',
        headers: new Headers({
            'Authorization': 'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTQ0MWQ3MDFkNzZiMjU0NjU2MWNkNmQ3Y2VkMmNiZmVlZTRlMzU4NmFkZmFlM2RmYzdjN2IyMmZhNDZhZmFmNDQ0MTQ1ZjYyYTU2NzVhNDkiLCJpYXQiOjE2NjkyOTM5NjEuNjU0MTI1LCJuYmYiOjE2NjkyOTM5NjEuNjU0MTI3LCJleHAiOjE3MDA4Mjk5NjEuNjA0NDg2LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.lnP3cJaqQ8CJB7FzxVueOllV_jx5FzFaqiuke3wjvNBxm92f96Cxor2Ce8uLrDFm6SE67pL9kT88SMhr7JP9ky8cKLcyY-FCFRmLJKtMlUGp_9sQAOkc204SYJ5VUQTPA2ChntfUmYXWv3-bKzqfYu7BHzG634UAL1mgiY2y4H94RLEmzjPc1iX83QuB7fxeFr7ODcQBjQYcgAD08tffkB4g8MebAYgEQjBgxmZAG9nqi2er78gJXP2dTqP8UFbyheh9BywLQVG2459QejaTDgN1gxFPPwXeGThtBAYzHLWlYvXVa4Sihb5uh0jX90S81nmtVi9DymFokJ0_QtqAEGW4YxZpX0Ixz0hBOalqYUybOShSA65ih72zrxyy00LlxyPKZJB1MnQJhipAkBXki3Dc0FcZkv3MCEgwaRH88TP1aibpfDWftj7kMCJ7Trks8eQAGt62NqnFLDZXGhCOWwebUoKav7n_kPdnlxz7VFQTrsYfmRVhJ6sor5BTwa_pmJzjtaxE6Ec6lju1cL6kQOnAAsKtcDkklsEmCSfBdBElqJHq-8FBYfDJ3oy62ybmgcKeGiVjz_-DlougkdRLEnUUhl55Flt1nMXUM8G-0-5zOKFtL0uDg6k-GlNVVXwSl9EE5Iy65vQeuFnNS-V82mWFKsSzn5EXIFB0z0w-4BQ', 
        })
    })
    const vehicles = await res.json()
    console.log(vehicles.data)

    return {
        props: {
            vehicles,
        },
    }
}

const comprar = ({vehicles}) => {
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