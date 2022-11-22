import React from 'react'
import Footer from '../components/Footer'

function contactanos() {
  return (

       <>

        <section className="banner-contactanos">
            <h1>Contáctanos</h1>
        </section>   

          <main className="main-contactanos">
        <section className="section-contactanos">
            <div className="issues">
                <h3>Asunto</h3>
                <a href="#">Registra tu Concesionaria</a>
                <a href="#">Problemas con la Compra de un Vehiculo</a>
                <a href="#">Problemas con la Venta de un Vehiculo</a>
                <a href="#">Problemas con Concesionarias</a>
                <a href="#">Problemas con tu Cuenta</a>
            </div>
            <div className="form-section">
                <h2>Registra tu Concesionaria</h2>
                <form className="contact-form">
                    <div className="sign-up-field">
                        <h3>Nombre de la Concesionaria</h3>
                        <input type="text" name="concessionaire-name" placeholder="Ingresa el nombre" autoComplete="off" required />
                    </div>
                    <div className="sign-up-field">
                        <h3>¿Que Marca Vende tu Concesionaria?</h3>
                        <input type="text" name="brand" placeholder="Ingresa la marca que venden" autoComplete="off" required />
                    </div>
                    <div className="sign-up-field">
                        <h3>Email de Contácto</h3>
                        <input type="email" name="email" placeholder="Ingresa un email" autoComplete="off" required />
                    </div>
                    <div className="sign-up-field">
                        <h3>Cuentanos Sobre tu Concesionaria</h3>
                        <textarea name="about" id="" cols={30} placeholder="Cuente algo sobre ustedes" rows={10} minLength={25} maxLength={2500} required></textarea>
                    </div>
                    <input className="btn-enviar" type="submit" value="Enviar" />
                </form>
                <img className="logo-carhouse" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" />
            </div>
        </section>
    </main>

    <Footer/>
       
       </>

    )
}

export default contactanos