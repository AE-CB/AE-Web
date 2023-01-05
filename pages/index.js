import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

import React from 'react'

const Home = () => {
  return (
    <>
      <section className="banner">
        <Image className="width_50 banner-img" width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/landing-page/banner-wallpaper.webp"}
          alt="imagen de auto" /> {/* Imagen del banner */}
        <div className="banner-content"> {/* Primera parte del banner */}
          <h1>The <b>Best Platform</b> to <br />Sell and Buy Cars</h1>
          <p>The best platform to sell or buy cars has arrived in US. <br />At CarHouse we make it easy for you.</p>
          <a className="btn-explorar" href="#main">Explore</a>
        </div>
      </section>
      <main id="main" className="main-content">
        <h2>What can you do here?</h2>
        <p>Everything related to the world of vehicles is here</p>

        <section className="section-vender">
          <Image className='width_50' width={1000} height={1000} data-aos="fade-right" data-aos-duration="1500" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/landing-page/vender.svg"} alt="imagen Businessman" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>Sell ​​your car <br /><b>quickly and safely</b></h3>
            <a className="btn-vender" href="./pages/vender.html">Sell</a> {/* Boton Vender */}
          </div>
        </section>

        <section className="section-comprar">
          <Image className='width_50' width={1000} height={1000} data-aos="fade-left" data-aos-duration="1500" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/landing-page/auto-verde.webp"} alt="imagen auto verde" />
          <div data-aos="fade-right" data-aos-duration="1500">
            <h3>Find the Car of your <br /><b>Dreams</b></h3>
            <a className="btn-comprar" href="./pages/comprar-home.html">Buy</a> {/* Boton Comprar */}
          </div>
        </section>



        <section className="section-concesionarias">
          <Image className='width_50' width={1000} height={1000} data-aos="fade-right" data-aos-duration="1500" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/landing-page/auto-rojo.webp"} alt="imagen auto rojo" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>The most <br /><b>recognized dealerships in the country</b> are <br />here</h3>
            <h3>Buy your <b>New 0 km Car </b></h3>
            <a className="btn-concesionarias" href="./pages/concesionarias.html">Go to Dealers</a>
          </div>
        </section>

        <h2>Register your Dealership</h2>
        <p>You can register your dealership for free for CarHouse users to access your cars</p>

        <section className="section-contacto">
          <Image className='width_50' width={1000} height={1000} data-aos="fade-right" data-aos-duration="1500" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/landing-page/concessionaire-register.svg"} alt="imagen contacto" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>Register your <b>Dealership</b><br />on the Platform</h3>
            <a className="btn-contacto" href="./pages/contactanos.html">Contact Us</a>
          </div>
        </section>

        <h2>Information and Statistics of your Account</h2>
        <p>
          You can access your profile to see your information, publications, sales, purchases, favorites and much more.
        </p>

        <section className="section-contacto section-perfil">
          <Image className='width_50' width={1000} height={1000} data-aos="fade-right" data-aos-duration="1500" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/landing-page/profile.svg"} alt="imagen contacto" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>Visit your <b>Profile</b> to see your <br /> information and statistics</h3>
            <a className="btn-contacto" href="./pages/user.html">Go to my profile</a>
          </div>
        </section>
      </main>

    </>
  )
}

Home.layout = "AdminLayout";
export default Home

