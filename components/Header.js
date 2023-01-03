import Link from 'next/link'
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const Header = () => {

  const context = useContext(AppContext)

  return (
    <>
      <header>
        <section className="navbar"> {/* Barra de Navegacion */}
          <div className="container-1600">
            <div>
              <a className="logo" href="./index.html"> {/* Logo */}
                <img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" />
              </a>

              <button id="hamburguer" className="hamburguer"><i className="fas fa-bars"></i></button>
            </div>

            <nav id="main-nav" className="main-nav"> {/* Navegacion */}
              <ul>
                <li>
                  <a className="nav-link" href="./pages/comprar-home.html">Comprar</a>
                </li>
                {context.apikey && <li>
                  <a className="nav-link" href="./pages/vender.html">Vender</a>
                </li>}

                <li>
                  <a className="nav-link" href="./pages/concesionarias.html">Concesionarias</a>
                </li>
                <li>
                  <Link className="nav-link btn-ingresar" href={`/sign-in`}>Sign In</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header