import React from 'react'
import Header from '../components/Header'

function signUp() {
  return (
   
    <>
    <Header/>

    <div className="sign-in-container">

    <img className="sign-in-banner" src="../assets/img/images/sign-in-up/car-image.webp" alt="imagen auto" width="100%" height="50%"/> {/* Parte de la Imagen */}
        <a href="../index.html" className="btn-volver-siu"><i className="fas fa-arrow-left"></i></a>

         
        <main className="sign-in-content"> {/* Parte del Formulario */}
            <a href="../index.html"><img className="" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" /></a>
            <h1>Registrarse</h1>

            <form className="sign-up-form"> {/* Formulario Registro */}
                <div className="sign-up-fields"> {/* Campos */}
                    <div className="sign-up-field">
                        <h3 className="input-heading">Nombre Completo</h3>
                        <input type="text" name="name" placeholder="Ingresa tu nombre y apellido" required />
                    </div>
                    <div className="sign-up-field birthdate-field">
                        <h3 className="input-heading">Fecha de Nacimiento</h3>
                        <input type="date" name="birthdate" placeholder="Ingresa tu fecha de nacimiento" required />
                    </div>
                    <div className="sign-up-field">
                        <h3 className="input-heading">Email</h3>
                        <input type="email" name="email" placeholder="Ingresa tu email" required />
                    </div>
                    <div className="sign-up-field">
                        <h3 className="input-heading">Celular</h3>
                        <input type="tel" name="phone" placeholder="Ingresa tu celular" required />
                    </div>
                    <div className="sign-up-field">
                        <h3 className="input-heading">Contraseña</h3>
                        <input type="password" name="password" placeholder="Ingresa tu contraseña" required/>
                    </div>
                    <div className="sign-up-field">
                        <h3 className="input-heading">Repite tu Contraseña</h3>
                        <input type="password" name="password-repeat" placeholder="Repite tu contraseña" required />
                    </div>
                    <div className="sign-up-field">
                        <h3 className="input-heading">Departamento</h3>
                        <select name="departamento" id="">
                            <option value="default" selected disabled>Seleccione un departamento</option>
                            <option value="artigas">Artigas</option>
                            <option value="canelones">Canelones</option>
                            <option value="cerro largo">Cerro Largo</option>
                            <option value="colonia">Colonia</option>
                            <option value="durazno">Durazno</option>
                            <option value="flores">Flores</option>
                            <option value="florida">Florida</option>
                            <option value="lavalleja">Lavalleja</option>
                            <option value="maldonado">Maldonado</option>
                            <option value="montevideo">Montevideo</option>
                            <option value="paysandu">Paysandu</option>
                            <option value="rio negro">Rio Negro</option>
                            <option value="rivera">Rivera</option>
                            <option value="rocha">Rocha</option>
                            <option value="salto">Salto</option>
                            <option value="san jose">San Jose</option>
                            <option value="soriano">Soriano</option>
                            <option value="tacuarembo">Tacuarembo</option>
                            <option value="treinta y tres">Treinta y Tres</option>
                        </select>
                    </div>
                    <div className="sign-up-field">
                        <h3 className="input-heading">Localidad</h3>
                        <select name="localidad" id="">
                            <option value="" selected disabled>Seleccione una Localidad</option>
                            <option value="">Aguada</option>
                            <option value="">Aires Puros</option>
                            <option value="">Barra de Carrasco</option>
                            <option value="">Barrio Sur</option>
                            <option value="">Paso Molino</option>
                            <option value="">Brazo Oriental</option>
                            <option value="">Buceo</option>
                            <option value="">Capurro</option>
                            <option value="">Carrasco Norte</option>
                            <option value="">Casabo</option>
                            <option value="">Casavalle</option>
                            <option value="">Centro</option>
                            <option value="">Cerrito</option>
                            <option value="">Ciudad Vieja</option>
                            <option value="">Colon</option>
                            <option value="">Conciliacion</option>
                            <option value="">Cordon</option>
                            <option value="">Flor de Maroñas</option>
                            <option value="">Jacinto Vera</option>
                            <option value="">Jardines del Hipodromo</option>
                            <option value="">La Blanqueada</option>
                        </select>
                    </div>
                </div>
                <div className="sign-in-up"> {/* Botones */}
                    <input type="submit" value="Registrase" />
                    <div className="register-section"> {/* Iniciar Sesion */}
                        <a className="btn-register" href="./sign-in.html">Iniciar Sesión</a>
                        <p>¿Ya tienes una cuenta?</p>
                    </div>
                </div>
            </form>

            <footer className="sign-in-footer sign-up-footer">
                <hr/>
                <div>
                    <h3>© 2021 CarHouse, Inc.</h3>
                    <div className="social-media"> {/* Redes Footer */}
                        <ul>
                            <li> {/* Instagram */}
                                <a href="#" target="_blank"><img src="../assets/img/icons/instagram-oscuro.png" alt="icono instagram" width="25" height="25"/></a>
                            </li>
                            <li> {/* Facebook */}
                                <a href="#" target="_blank"><img src="../assets/img/icons/facebook-oscuro.png" alt="icono facebook" width="25" height="25"/></a>
                            </li>
                            <li> {/* Whatsapp */}
                                <a href="#" target="_blank"><img src="../assets/img/icons/whatsapp-oscuro.png" alt="icono whatsapp" width="25" height="25"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="developed-by">
                    <h6>Desarrollado por Mathias Ramilo</h6>
                    <a target="_blank" href="https://github.com/mathiramilo"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg></a>
                </div>
            </footer>
        </main>

        </div>
    
    </>


  )
}

export default signUp