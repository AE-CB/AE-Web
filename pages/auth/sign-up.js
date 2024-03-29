import React, { useEffect, useRef, useState } from "react";
import Router from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { getProviders, signIn, getSession, csrfToken } from "next-auth/react"

const SignUp = () => {
    const ref_password = useRef(null);
    const ref_confirm_password = useRef(null);
    const ref_error_div = useRef(null);

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconf, setPasswordconf] = useState("");
    const [departament, setDepartament] = useState("");
    const [location, setLocation] = useState("");

    var terrors = [];
    const [errors, setErrors] = useState([]);

    const submitLogin = async (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordconf);
        formData.append('dob', dob);
        formData.append('mobile', mobile);
        formData.append('departament', departament);
        formData.append('location', location);

        // console.log(formData)

        setErrors([])

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/register', {
            method: 'POST',
            body: formData,
        })

        if (res.status == 422) {
            terrors = await res.json();
            await setErrors(terrors.errors)
            window.location.hash = '#display_errors';
        }

        if (res.status == 200) {
            Router.push('/sign-in/?message=register_success')
        }

        console.log(res.json());
    }

    // Create custom validation for password match
    function validatePassword() {
        if (ref_password.current.value != ref_confirm_password.current.value) {
            ref_confirm_password.current.setCustomValidity("Passwords Don't Match");
        } else {
            setPassword(ref_password.current.value)
            setPasswordconf(ref_confirm_password.current.value)
            ref_confirm_password.current.setCustomValidity('');
        }
    }

    return (
        <>
            <div className="sign-in-container">

                <Image width={1000} height={1000} className="width_100 sign-in-banner" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/sign-in-up/car-image.webp"} alt="imagen auto" /> {/* Parte de la Imagen */}
                <Link href={`/`} className="btn-volver-siu">
                    <svg className="svg-inline--fa fa-arrow-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
                </Link>


                <main className="sign-in-content"> {/* Parte del Formulario */}
                    <Link href={`/`}>
                        <h1 className='logotext'><span>AUTO</span>XCAPE</h1>
                        {/* <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                    </Link>
                    <h1>Register</h1>

                    <div id="display_errors" className="display_errors" ref={ref_error_div}>
                        <ul>
                            {errors.map((item, key) => {
                                return (
                                    <li key={key}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <form className="sign-up-form" onSubmit={submitLogin}> {/* Formulario Registro */}
                        <div className="sign-up-fields"> {/* Campos */}
                            <div className="sign-up-field">
                                <h3 className="input-heading">Full name</h3>
                                <input type="text" onChange={(e) => setName(e.target.value)}
                                    name="name" placeholder="Enter your first and last name" required />
                            </div>
                            <div className="sign-up-field birthdate-field">
                                <h3 className="input-heading">Date of birth</h3>
                                <input type="date" onChange={(e) => setDob(e.target.value)}
                                    name="birthdate" placeholder="Enter your date of birth" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">Email</h3>
                                <input type="email" onChange={(e) => setEmail(e.target.value)}
                                    name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">Mobile</h3>
                                <input type="tel" onChange={(e) => setMobile(e.target.value)}
                                    name="mobile" placeholder="Enter your cell phone" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">Password</h3>
                                <input type="password" onChange={validatePassword} ref={ref_password} name="password" placeholder="Enter your password" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">Repeat your password</h3>
                                <input type="password" onChange={validatePassword} ref={ref_confirm_password} name="password-repeat" placeholder="Repeat your password" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">City</h3>
                                <select name="localidad" id=""
                                    onChange={(e) => setLocation(e.target.value)} required>
                                    <option value="" selected disabled>Select a city</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Dehiwala-Mount-Lavinia">Dehiwala-Mount-Lavinia</option>
                                    <option value="Moratuwa">Moratuwa</option>
                                    <option value="Kotte">Kotte</option>
                                    <option value="Battaramulla">Battaramulla</option>
                                    <option value="Maharagama">Maharagama</option>
                                    <option value="Kotikawatta">Kotikawatta</option>
                                    <option value="Kolonnawa">Kolonnawa</option>
                                    <option value="Keselwatta">Keselwatta</option>
                                    <option value="Homagama">Homagama</option>
                                    <option value="Mulleriyawa">Mulleriyawa</option>
                                    <option value="Kesbewa">Kesbewa</option>
                                    <option value="Avissawella">Avissawella</option>
                                    <option value="Kaduwela">Kaduwela</option>
                                    <option value="Boralesgamuwa">Boralesgamuwa</option>
                                    <option value="Piliyandala">Piliyandala</option>
                                    <option value="Nugegoda">Nugegoda</option>
                                    <option value="Nawala">Nawala</option>
                                    <option value="Padukka">Padukka</option>
                                    <option value="Kottawa">Kottawa</option>
                                    <option value="Pannipitiya">Pannipitiya</option>
                                    <option value="Malabe">Malabe</option>
                                    <option value="Hanwella">Hanwella</option>
                                </select>
                            </div>
                        </div>
                        <div className="sign-in-up"> {/* Botones */}
                            <input type="submit" value="Register" />
                            <div className="register-section"> {/* Iniciar Sesion */}
                                <Link className="btn-register" href={`/auth/sign-in`}>Sign In</Link>
                                <p>Already have an account?</p>
                            </div>
                        </div>
                    </form>

                    <footer className="sign-in-footer sign-up-footer">
                        <hr />
                        <div>
                            <h3>© {new Date().getFullYear()} AUTOXCAPE.COM</h3>
                            {/* <div className="social-media">
                                <ul>
                                    <li> 
                                        <a href="#" target="_blank" rel="noreferrer"><Image className='nextimg' width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/instagram-oscuro.png"} alt="icono instagram" /></a>
                                    </li>
                                    <li> 
                                        <a href="#" target="_blank" rel="noreferrer"><Image className='nextimg' width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/facebook-oscuro.png"} alt="icono facebook" /></a>
                                    </li>
                                    <li> 
                                        <a href="#" target="_blank" rel="noreferrer"><Image className='nextimg' width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/whatsapp-oscuro.png"} alt="icono whatsapp" /></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="developed-by">
                            <h6>Developed by <a href='https://cdazzdev.com/'>cdazzdev</a></h6>
                            {/* <a target="_blank" rel="noreferrer" href="https://github.com/mathiramilo"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg></a> */}
                        </div>
                    </footer>
                </main>

            </div>

        </>
    )
}

export async function getServerSideProps(context) {

    const { req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }

    const providers = await getProviders()
    return {
        props: { providers },
    }
}

SignUp.layout = "NormalLayout";
export default SignUp

