import React, { useEffect, useRef, useState } from "react";
import Router from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { getProviders, signIn, getSession, csrfToken } from "next-auth/react"
import { getCookie } from 'cookies-next';
import { Alert } from '@mui/material';

const Profile = () => {

    const ref_error_div = useRef(null);

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");

    const [returnMessage, setReturnMessage] = useState("");

    var notran = true;
    const token = getCookie('accessToken');
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (notran) {
            const fetchData = async () => {
                const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/loged_user', {
                    method: 'POST',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + token,
                    })
                })
                setUser(await res.json())

            }
            fetchData();

            notran = false
        }
    }, [])

    useEffect(() => {
        setName(user?.name)
        setDob(user?.dob)
        setEmail(user?.email)
        setMobile(user?.mobile)
        setLocation(user?.location)
    }, [user])


    var terrors = [];
    var message = ""
    const [errors, setErrors] = useState([]);

    const submitUpdate = async (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('dob', dob);
        formData.append('mobile', mobile);
        formData.append('location', location);

        setErrors([])

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/update_user', {
            method: 'POST',
            body: formData,
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })

        if (res.status == 422) {
            terrors = await res.json();
            await setErrors(terrors.errors)
            window.location.hash = '#display_errors';
        }

        if (res.status == 200) {
            message = await res.json();
            await setReturnMessage(message?.message);
            ref_error_div.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }


    return (
        <>
            <div className="sign-in-container">
                <Image width={1000} height={1000} className="width_100 sign-in-banner" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/sign-in-up/car-image.webp"} alt="imagen auto" />
                <Link href={`/`} className="btn-volver-siu">
                    <svg className="svg-inline--fa fa-arrow-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
                </Link>


                <main className="sign-in-content"> {/* Parte del Formulario */}
                    <Link href={`/`}>
                        <h1 className='logotext'><span>AUTO</span>ESCAPE</h1>
                        {/* <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                    </Link>

                    <h1>Profile</h1>

                    <div id="display_errors" className="display_errors" ref={ref_error_div}>
                        {(returnMessage && returnMessage == 'user_updated') && <Alert sx={{ color: 'green', fontSize: '14px !important', width: '90%', marginTop: '20px' }} severity="success">
                            Data updated successfully
                        </Alert>}

                        {(returnMessage && returnMessage == 'error_occured') && <Alert sx={{ color: '#d32f2f', fontSize: '14px !important', width: '90%', marginTop: '20px' }} severity="error">
                            Error occured please contact admin
                        </Alert>}
                        <ul>
                            {errors.map((item, key) => {
                                return (
                                    <li key={key}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <form className="sign-up-form" onSubmit={submitUpdate}> {/* Formulario Registro */}
                        <div className="sign-up-fields"> {/* Campos */}
                            <div className="sign-up-field">
                                <h3 className="input-heading">Full name</h3>
                                <input value={name} type="text" onChange={(e) => setName(e.target.value)}
                                    name="name" placeholder="Enter your first and last name" required />
                            </div>
                            <div className="sign-up-field birthdate-field">
                                <h3 className="input-heading">Date of birth</h3>
                                <input value={dob} type="date" onChange={(e) => setDob(e.target.value)}
                                    name="birthdate" placeholder="Enter your date of birth" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">Email</h3>
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}
                                    name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">Mobile</h3>
                                <input value={mobile} type="tel" onChange={(e) => setMobile(e.target.value)}
                                    name="mobile" placeholder="Enter your cell phone" required />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">Password (Keep empty if you need to use the same)</h3>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password" />
                            </div>
                            <div className="sign-up-field">
                                <h3 className="input-heading">City</h3>
                                <select name="localidad" id="" value={location}
                                    onChange={(e) => setLocation(e.target.value)} required>
                                    <option value="" disabled>Select a city</option>
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
                            <input type="submit" value="Update profile" />
                        </div>
                    </form>

                    <footer className="sign-in-footer sign-up-footer">
                        <hr />
                        <div>
                            <h3>© {new Date().getFullYear()} AUTOESCAPE, Inc.</h3>
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
                            <h6>Developed by cdazzdev</h6>
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

    if (!session) {
        return {
            redirect: { destination: "/" },
        };
    }

    const providers = await getProviders()
    return {
        props: { providers },
    }
}

Profile.layout = "NormalLayout";
export default Profile

