import React, { useRef, useState, useContext } from 'react'
import Router from 'next/router';
import AppContext from '../context/AppContext'
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
    const context = useContext(AppContext)

    const ref_error_div = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var terrors = [];
    const [errors, setErrors] = useState([]);

    const submitLogin = async (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        setErrors([])

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/login', {
            method: 'POST',
            body: formData,
        })

        if (res.status == 422) {
            terrors = await res.json();
            await setErrors(terrors.errors)
            window.location.hash = '#display_errors';
        }

        if (res.status == 200) {
            var jsonResponce = await res.json();
            console.log(jsonResponce.token)
            context.setApikey(jsonResponce.token)
            Router.push('/vender')
        }

    }

    return (
        <>
            {/* <p>{context.apikey}</p> */}
            <div className="sign-in-container">
                <Image width={1000} height={1000} className="width_100 sign-in-banner" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/sign-in-up/car-image.webp"} alt="imagen auto" /> {/* Parte de la Imagen */}
                <a href="../index.html" className="btn-volver-siu">
                    <svg className="svg-inline--fa fa-arrow-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
                </a>

                <div className="sign-in-content"> {/* Parte del Formulario */}
                    <a href="../index.html"><Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /></a>
                    <h1>Log in</h1>

                    <div id="display_errors" className="display_errors" ref={ref_error_div}>
                        <ul>
                            {errors.map((item, key) => {
                                return (
                                    <li key={key}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <form className="sign-in-form" onSubmit={submitLogin}> {/* Formulario Inicio Sesion */}
                        <div className="sign-in-fields"> {/* Campos */}
                            <div className="sign-up-field">
                                <h3>Email</h3>
                                <input type="email"
                                    onLoad={(e) => setEmail(e.target.value)}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="sign-up-field">
                                <h3>Password</h3>
                                <input type="password"
                                    onLoad={(e) => setPassword(e.target.value)}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password" placeholder="Enter Your password" required />
                            </div>
                            <a href="#">Did you forget your password?</a>
                        </div>
                        <div className="sign-in-btns"> {/* Botones */}
                            <div className="remember-me">
                                <input type="checkbox" id="remember" value="remember" />
                                <label htmlFor="remember">Recordarme</label>
                            </div>
                            <div className="sign-in-up">
                                <input type="submit" value="Log in" />
                                <div className="register-section"> {/* Registrarse */}
                                    <Link className="btn-register" href={`/sign-up`}>Sign Up</Link>
                                    <p>Don't you have an account yet?</p>
                                </div>
                            </div>
                        </div>
                    </form>

                    <footer className="sign-in-footer footer-sign-in">
                        <hr />
                        <div>
                            <h3>© 2021 CarHouse, Inc.</h3>
                            <div className="social-media"> {/* Redes Footer */}
                                <ul>
                                    <li> {/* Instagram */}
                                        <a href="#" target="_blank" rel="noreferrer"><Image className='nextimg' width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/instagram-oscuro.png"} alt="icono instagram" /></a>
                                    </li>
                                    <li> {/* Facebook */}
                                        <a href="#" target="_blank" rel="noreferrer"><Image className='nextimg' width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/facebook-oscuro.png"} alt="icono facebook" /></a>
                                    </li>
                                    <li> {/* Whatsapp */}
                                        <a href="#" target="_blank" rel="noreferrer"><Image className='nextimg' width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/whatsapp-oscuro.png"} alt="icono whatsapp" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="developed-by">
                            <h6>Desarrollado por Mathias Ramilo</h6>
                            <a target="_blank" rel="noreferrer" href="https://github.com/mathiramilo"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg></a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

SignIn.layout = "NormalLayout";
export default SignIn