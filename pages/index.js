import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

import React from 'react'

const Home = () => {
  return (
    <>
      <section className="banner-comprar-home">
        <h1>Find the Car of <br /><b>Your Dreams</b></h1>
        <form className="search-form">
          <input className="search-bar" type="search" placeholder="What are you looking for?" />
          <button className="search-btn"><Image src="/assets/img/icons/magnifying-glass.png" alt="icono busqueda" className='auto_height' width={25} height={1000} /></button>
        </form>
      </section>

      <main className="main-comprar-home">
        <h2>Main brands</h2>
        <section className="main-brands">
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img className="img-brand" src="../assets/img/images/comprar-home/fiat-logo.webp" alt="logo fiat" width="55" />
            </div>
            <p>Fiat</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/chevrolet-logo.webp" alt="logo chevrolet" width="55" />
            </div>
            <p>Chevrolet</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/suzuki_logo.webp" alt="logo suzuki" width="55" />
            </div>
            <p>Suzuki</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/volkswagen-logo.webp" alt="logo volkswagen" width="55" />
            </div>
            <p>Volkswagen</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/logo-ford.webp" alt="logo ford" width="55" />
            </div>
            <p>Ford</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="55" />
            </div>
            <p>Nissan</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/logo-bmw.webp" alt="logo bmw" width="55" />
            </div>
            <p>BMW</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/toyota-logo.webp" alt="logo toyota" width="55" />
            </div>
            <p>Toyota</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/logo-mercedes-benz.webp" alt="logo mercedes" width="55" />
            </div>
            <p>Mercedes</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/citroen-logo.webp" alt="logo citroen" width="55" />
            </div>
            <p>Citroen</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/chery-logo.webp" alt="logo chery" width="55" />
            </div>
            <p>Chery</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/honda-logo.webp" alt="logo honda" width="55" />
            </div>
            <p>Honda</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/kia-logo.webp" alt="logo kia" width="55" />
            </div>
            <p>Kia</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/audi-logo.webp" alt="logo audi" width="55" />
            </div>
            <p>Audi</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/renault-logo.webp" alt="logo renault" width="55" />
            </div>
            <p>Renault</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/jeep_logo.webp" alt="logo jeep" width="55" />
            </div>
            <p>Jeep</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/hyundai-logo.webp" alt="logo hyundai" width="55" />
            </div>
            <p>Hyundai</p>
          </a>
          <a href="./comprar.html" className="brand-card"> {/* Card Marca */}
            <div>
              <img src="../assets/img/images/comprar-home/logo-peugeot.webp" alt="logo peugeot" width="55" />
            </div>
            <p>Peugeot</p>
          </a>
        </section>

        <h2>Vehicles that Might Interest You</h2>
        <section className="car-types-section">
          <div className="car-types">
            <a href="./comprar.html" className="vehicle-card vehicle-card-hatchbacks" data-aos="zoom-in"> {/* Card Vehiculo */}
              <img src="../assets/img/images/comprar-home/vw-golf-hatchback.webp" alt="imagen auto" width="75%" />
              <p>Hatchbacks</p>
            </a>
            <a href="./comprar.html" className="vehicle-card vehicle-card-sedanes" data-aos="zoom-in"> {/* Card Vehiculo */}
              <img src="../assets/img/images/comprar-home/bmw-sedan.webp" alt="imagen auto" width="75%" />
              <p>Sedanes</p>
            </a>
            <a href="./comprar.html" className="vehicle-card vehicle-card-suvs" data-aos="zoom-in"> {/* Card Vehiculo */}
              <img src="../assets/img/images/comprar-home/mb-suv.webp" alt="imagen auto" width="75%" />
              <p>SUVS</p>
            </a>
            <a href="./comprar.html" className="vehicle-card vehicle-card-camionetas" data-aos="zoom-in"> {/* Card Vehiculo */}
              <img src="../assets/img/images/comprar-home/raptor-camioneta.webp" alt="imagen auto" width="75%" />
              <p>Vans</p>
            </a>
          </div>
        </section>

        <section className="categories-section">
          <h2>Our Categories</h2>
          <div className="categories">
            <a href="./comprar.html" className="cat-card" data-aos="zoom-in"> {/* Card Categoria */}
              <div>
                <img src="../assets/img/images/comprar-home/auto-cat.webp" alt="imagen auto" width="80%" />
              </div>
              <p>Cars and Trucks</p>
            </a>
            <a href="./comprar.html" className="cat-card" data-aos="zoom-in"> {/* Card Categoria */}
              <div>
                <img src="../assets/img/images/comprar-home/moto-cat.webp" alt="imagen moto" width="80%" />
              </div>
              <p>Motorcycles</p>
            </a>
            <a href="./comprar.html" className="cat-card" data-aos="zoom-in"> {/* Card Categoria */}
              <div>
                <img src="../assets/img/images/comprar-home/camion-cat.webp" alt="imagen camion" width="80%" />
              </div>
              <p>Trucks</p>
            </a>
          </div>
        </section>

        <section className="section-concesionarias-comprar">
          <h2>Shop By Dealer</h2>
          <div className="card-info-concesionaria">
            <img src="../assets/img/images/comprar-home/concesionaria.webp" alt="imagen concesionaria" width="40%" />
            <div className="info-concesionaria">
              <h3>Do you want to buy your new car 0 km?</h3>
              <p>At <b>CarHouse</b> you can find the most recognized dealerships in the country and get the car of your dreams easily and quickly.</p>
              <p>
                Most dealerships have several ways to finance the purchase of your vehicle, including financing with the dealer or through a bank, leasing or renting, and cash payment.
              </p>
              <a className="btn-info-financiamiento" href="./financiamiento-info.html">
                View Information on Financing Options &gt;
              </a>
              <div>
                <a className="btn-concesionaria-comprar" href="./concesionarias.html">Go to Dealers</a>
                <img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" width="35%" />
              </div>
            </div>
          </div>
        </section>

        <a className="btn-ver-autos" href="./comprar.html">See All Cars</a>
      </main>
    </>
  )
}

Home.layout = "AdminLayout";
export default Home

