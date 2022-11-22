import React from 'react'
import Header from '../components/Header'

function signIn() {
  return (

       <>
       <Header/>

       <div className="sign-in-container">
        <img className="sign-in-banner" src="../assets/img/images/sign-in-up/car-image.webp" alt="imagen auto" width="100%" height="50%" /> {/* Parte de la Imagen */}
        <a href="../index.html" className="btn-volver-siu"><i className="fas fa-arrow-left"></i></a>

        <div className="sign-in-content"> {/* Parte del Formulario */}
            <a href="../index.html"><img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" /></a>
            <h1>Iniciar Sesion</h1>

            <form className="sign-in-form"> {/* Formulario Inicio Sesion */}
                <div className="sign-in-fields"> {/* Campos */}
                    <div className="sign-up-field">
                        <h3>Email</h3>
                        <input type="email" name="email" placeholder="Ingresa tu email" required />
                    </div>
                    <div className="sign-up-field">
                        <h3>Contraseña</h3>
                        <input type="password" name="password" placeholder="Ingresa tu contraseña" required />
                    </div>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="sign-in-btns"> {/* Botones */}
                    <div className="remember-me">
                        <input type="checkbox" id="remember" value="remember"/>
                        <label htmlFor="remember">Recordarme</label>
                    </div>
                    <div className="sign-in-up">
                        <input type="submit" value="Iniciar Sesion"/>
                        <div className="register-section"> {/* Registrarse */}
                            <a className="btn-register" href="./sign-up.html">Registrarse</a>
                            <p>¿Aún no tienes una cuenta?</p>
                    </div>
                    </div>
                </div>
            </form>

            <footer className="sign-in-footer footer-sign-in">
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
                                <a href="#" target="_blank"><img src="../assets/img/icons/whatsapp-oscuro.png" alt="icono whatsapp" width="25" height="25" /></a>
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
        </div>
    </div>
       </>

    )
}

export default signIn