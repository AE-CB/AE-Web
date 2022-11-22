import React from 'react'
import Footer from '../components/Footer'

function comprarHome() {
  return (
   <>
        <section className="banner-comprar-home">
            <h1>Encontrá el Auto de <br/><b>Tus Sueños</b></h1>
            <form className="search-form"> {/* Barra de Busqueda */}
                <input className="search-bar" type="search" placeholder="¿Qué estas buscando?"/>
                <button className="search-btn"><img src="../assets/img/icons/magnifying-glass.png" alt="icono busqueda" width="25"/></button>
            </form>
        </section>

        <main className="main-comprar-home">
        <h2>Principales Marcas</h2>
        <section className="main-brands">
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img className="img-brand" src="../assets/img/images/comprar-home/fiat-logo.webp" alt="logo fiat" width="55"/>
                </div>
                <p>Fiat</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/chevrolet-logo.webp" alt="logo chevrolet" width="55"/>
                </div>
                <p>Chevrolet</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/suzuki_logo.webp" alt="logo suzuki" width="55"/>
                </div>
                <p>Suzuki</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="logo volkswagen" width="55"/>
                </div>
                <p>Volkswagen</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/logo-ford.webp" alt="logo ford" width="55"/>
                </div>
                <p>Ford</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="55"/>
                </div>
                <p>Nissan</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/logo-bmw.webp" alt="logo bmw" width="55"/>
                </div>
                <p>BMW</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/toyota-logo.webp" alt="logo toyota" width="55"/>
                </div>
                <p>Toyota</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/logo-mercedes-benz.webp" alt="logo mercedes" width="55"/>
                </div>
                <p>Mercedes</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/citroen-logo.webp" alt="logo citroen" width="55"/>
                </div>
                <p>Citroen</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/chery-logo.webp" alt="logo chery" width="55"/>
                </div>
                <p>Chery</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/honda-logo.webp" alt="logo honda" width="55"/>
                </div>
                <p>Honda</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/kia-logo.webp" alt="logo kia" width="55"/>
                </div>
                <p>Kia</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/audi-logo.webp" alt="logo audi" width="55"/>
                </div>
                <p>Audi</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/renault-logo.webp" alt="logo renault" width="55"/>
                </div>
                <p>Renault</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/jeep_logo.webp" alt="logo jeep" width="55"/>
                </div>
                <p>Jeep</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/hyundai-logo.webp" alt="logo hyundai" width="55"/>
                </div>
                <p>Hyundai</p>
            </a>
            <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
                <div>
                    <img src="../assets/img/images/comprar-home/logo-peugeot.webp" alt="logo peugeot" width="55"/>
                </div>
                <p>Peugeot</p>
            </a>
        </section>

        <h2>Vehículos que Podrian Interesarte</h2>
        <section className="car-types-section">
            <div className="car-types">
                <a href="./comprar.html" className="vehicle-card vehicle-card-hatchbacks" data-aos="zoom-in"> {/* Card Vehiculo */}
                    <img src="../assets/img/images/comprar-home/vw-golf-hatchback.webp" alt="imagen auto" width="75%"/>
                    <p>Hatchbacks</p>
                </a>
                <a href="./comprar.html" className="vehicle-card vehicle-card-sedanes" data-aos="zoom-in"> {/* Card Vehiculo */}
                    <img src="../assets/img/images/comprar-home/bmw-sedan.webp" alt="imagen auto" width="75%"/>
                    <p>Sedanes</p>
                </a>
                <a href="./comprar.html" className="vehicle-card vehicle-card-suvs" data-aos="zoom-in"> {/* Card Vehiculo */}
                    <img src="../assets/img/images/comprar-home/mb-suv.webp" alt="imagen auto" width="75%"/>
                    <p>SUVS</p>
                </a>
                <a href="./comprar.html" className="vehicle-card vehicle-card-camionetas" data-aos="zoom-in"> {/* Card Vehiculo */}
                    <img src="../assets/img/images/comprar-home/raptor-camioneta.webp" alt="imagen auto" width="75%"/>
                    <p>Camionetas</p>
                </a>
            </div>
        </section>

        <section className="categories-section">
            <h2>Nuestras Categorías</h2>
            <div className="categories">
                <a href="./comprar.html" className="cat-card" data-aos="zoom-in"> {/* Card Categoria */}
                    <div>
                        <img src="../assets/img/images/comprar-home/auto-cat.webp" alt="imagen auto" width="80%"/>
                    </div>
                    <p>Autos y Camionetas</p>
                </a>
                <a href="./comprar.html" className="cat-card" data-aos="zoom-in"> {/* Card Categoria */}
                    <div>
                        <img src="../assets/img/images/comprar-home/moto-cat.webp" alt="imagen moto" width="80%"/>
                    </div>
                    <p>Motos</p>
                </a>
                <a href="./comprar.html" className="cat-card" data-aos="zoom-in"> {/* Card Categoria */}
                    <div>
                        <img src="../assets/img/images/comprar-home/camion-cat.webp" alt="imagen camion" width="80%"/>
                    </div>
                    <p>Camiones</p>
                </a>
            </div>
        </section>

        <section className="section-concesionarias-comprar">
            <h2>Comprar por Concesionaria</h2>
            <div className="card-info-concesionaria">
                <img src="../assets/img/images/comprar-home/concesionaria.webp" alt="imagen concesionaria" width="40%"/>
                <div className="info-concesionaria">
                    <h3>¿Deseas Comprar tu Nuevo Auto 0 km?</h3>
                    <p>En <b>CarHouse</b> podrás encontrar las concesionarias más reconocidas del país y conseguir el auto de tus sueños de manera fácil y rapida.</p>
                    <p>La mayoria de las concesionarias cuentan con varias formas de poder financiar la compra de tu vehículo, entre ellas están, financiamiento con el concesionario o por medio de un banco, leasing o renting y pago al contado.</p>
                    <a className="btn-info-financiamiento" href="./financiamiento-info.html">Ver Información sobre Opciones de Financiamiento &gt;</a>
                    <div>
                        <a className="btn-concesionaria-comprar" href="./concesionarias.html">Ir a Concesionarias</a>
                        <img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" width="35%"/>
                    </div>
                </div>
            </div>
        </section>

        <a className="btn-ver-autos" href="./comprar.html">Ver Todos los Autos</a>
    </main>

    <Footer/>

   
   </>
  )
}

export default comprarHome