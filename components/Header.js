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
              <Link className="logo" href={`/`}>
                <img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" />
              </Link>

              <button id="hamburguer" className="hamburguer"><i className="fas fa-bars"></i></button>
            </div>

            <nav id="main-nav" className="main-nav"> {/* Navegacion */}
              <ul>
                <li>
                  <Link className="nav-link" href={`/comprar`}>Buy</Link>
                </li>
                {context.apikey && <li>
                  <Link className="nav-link" href={`/vender`}>Sell</Link>
                </li>}
                {/* <li>
                  <a className="nav-link" href="./pages/concesionarias.html">Dealerships</a>
                </li> */}
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