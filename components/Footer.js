import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react'

const Footer = () => {

    const { data: session } = useSession();

    return (
        <footer className="footer">
            <hr/>
                <div className="footer-bar"> {/* Barra Footer */}
                    <a href="./index.html"> {/* Logo */}
                        {/* <Image src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/> */}
                        <h1 className='logotext'><span>AUTO</span>XCAPE</h1>
                    </a>
                    {/* <div className="social-media"> 
                        <ul>
                            <li> 
                                <a className="social-media-item" href="#" target="_blank" rel="noreferrer"><Image src="/assets/img/icons/instagram-oscuro.png" alt="icono instagram" width="40" height="40"/></a>
                            </li>
                            <li> 
                                <a className="social-media-item" href="#" target="_blank" rel="noreferrer"><Image src="/assets/img/icons/facebook-oscuro.png" alt="icono facebook" width="40" height="40"/></a>
                            </li>
                            <li> 
                                <a className="social-media-item" href="#" target="_blank" rel="noreferrer"><Image src="/assets/img/icons/whatsapp-oscuro.png" alt="icono whatsapp" width="40" height="40"/></a>
                            </li>
                        </ul>
                    </div> */}
                </div>

                <div className="footer-sections"> {/* Secciones Footer */}
                    <section> {/* Categorias */}
                        <h4>Categories</h4>
                        <ul>
                            <li><Link className="nav-link" href={`/vehicles`}>Buy</Link></li>
                            <li>{session && <Link className="nav-link" href={`/add-item`}>Sell</Link>}</li>
                        </ul>
                    </section>

                    <section className="section-footer-contacto"> 
                        <h4>contact us</h4>
                        <ul>
                            <li><a href="mailto:info@cdazzdev.com"><Image className="mail-icon" src="/assets/img/icons/email.png" alt="icono email" width="35" height="35"/><span>info@cdazzdev.com</span></a></li>
                            {/* <li><a href="#"><Image className="phone-icon" src="/assets/img/icons/phone-call.png" alt="icono phone-call" width="35" height="35"/><span>000 000 000</span></a></li> */}
                        </ul>
                    </section>

                    <section> 
                    </section>    
                </div>
                <h3>© {new Date().getFullYear()} AUTOXCAPE.COM</h3>
                <div className="developed-by">
                    <h6>Developed by <a href='https://cdazzdev.com/'>cdazzdev</a></h6>
                    {/* <a target="_blank" rel="noreferrer" href="https://github.com/mathiramilo"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg></a> */}
                </div>
        </footer>
    )
}

export default Footer