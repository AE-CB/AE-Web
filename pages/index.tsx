import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className="banner">
        <img className="banner-img" src="./assets/img/images/landing-page/banner-wallpaper.webp"
          alt="imagen de auto" width="50%" /> {/* Imagen del banner */}
        <div className="banner-content"> {/* Primera parte del banner */}
          <h1>La <b>Mejor Plataforma</b> para <br />Vender y Comprar Autos</h1>
          <p>Ha llegado a Uruguay la mejor plataforma para vender o comprar autos. <br />En CarHouse te la hacemos fácil.</p>
          <a className="btn-explorar" href="#main">Explorar</a>
        </div>
      </section>
      <main id="main" className="main-content">
        <h2>¿Qué puedes Hacer aquí?</h2>
        <p>Todo lo relacionado al mundo de los vehículos se encuentra aquí</p>

        <section className="section-vender">
          <img data-aos="fade-right" data-aos-duration="1500" src="./assets/img/images/landing-page/vender.svg" alt="imagen Businessman" width="50%" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>Vende tu Auto de forma <br /><b>Rápida y Segura</b></h3>
            <a className="btn-vender" href="./pages/vender.html">Vender</a> {/* Boton Vender */}
          </div>
        </section>

        <section className="section-comprar">
          <img data-aos="fade-left" data-aos-duration="1500" src="./assets/img/images/landing-page/auto-verde.webp" alt="imagen auto verde" width="50%" />
          <div data-aos="fade-right" data-aos-duration="1500">
            <h3>Encuentra el Auto de tus <br /><b>Sueños</b></h3>
            <a className="btn-comprar" href="./pages/comprar-home.html">Comprar</a> {/* Boton Comprar */}
          </div>
        </section>

        <section className="section-concesionarias">
          <img data-aos="fade-right" data-aos-duration="1500" src="./assets/img/images/landing-page/auto-rojo.webp" alt="imagen auto rojo" width="50%" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>Las Concesionarias más <br /><b>Reconocidas del País</b> se <br />encuentran aquí</h3>
            <h3>Compra tu <b>Nuevo Auto 0 km</b></h3>
            <a className="btn-concesionarias" href="./pages/concesionarias.html">Ir a Concesionarias</a>
          </div>
        </section>

        <h2>Registra tu Concesionaria</h2>
        <p>Puedes registrar tu concesionaria de forma gratuita para que los usuarios de CarHouse accedan a tus coches</p>

        <section className="section-contacto">
          <img data-aos="fade-right" data-aos-duration="1500" src="./assets/img/images/landing-page/concessionaire-register.svg" alt="imagen contacto" width="50%" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>Registra tu <b>Concesionaria</b><br />en la Plataforma</h3>
            <a className="btn-contacto" href="./pages/contactanos.html">Contáctanos</a>
          </div>
        </section>

        <h2>Información y Estadísticas de tu Cuenta</h2>
        <p>Puedes acceder a tu perfil para ver tu información, publicaciones, ventas, compras, favoritos y muchas cosas más</p>

        <section className="section-contacto section-perfil">
          <img data-aos="fade-right" data-aos-duration="1500" src="./assets/img/images/landing-page/profile.svg" alt="imagen contacto" width="50%" />
          <div data-aos="fade-left" data-aos-duration="1500">
            <h3>Visita tu <b>Perfil</b> para ver tu <br /> información y estadísticas</h3>
            <a className="btn-contacto" href="./pages/user.html">Ir a mi Perfil</a>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
}
