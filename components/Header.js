import Link from 'next/link'
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useSession, signIn, signOut } from 'next-auth/react'
import { deleteCookie, hasCookie, getCookie } from 'cookies-next';

const Header = () => {

  // const { data } = useSession()
  // const { accessToken } = data

  const context = useContext(AppContext)
  const { data: session } = useSession();

  // console.log(session)

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = async (e) => {
    e.preventDefault()
    if (hasCookie('accessToken')) {
      // let data = {
      //   token: getCookie('accessToken'),
      // }
      // const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/logout', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      // })
      deleteCookie('accessToken');
    }

    signOut()
  }


  return (
    <>
      <header>
        <section className="navbar">
          <div className="container-1600">
            <div>
              <Link className="logo" href={`/`}>
                {/* <img src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse" /> */}
                <h1 className='logotext'><span>AUTO</span>ESCAPE</h1>
              </Link>

              <button id="hamburguer" className="hamburguer"><i className="fas fa-bars"></i></button>
            </div>

            <nav id="main-nav" className="main-nav">
              <ul>
                <li>
                  <Link className="nav-link" href={`/vehicles`}>Buy</Link>
                </li>
                {/* {context.apikey && <li> */}
                {session && <Link className="nav-link" href={`/add-item`}>Sell</Link>}
                {/* </li>} */}
                {/* <li>
                  <a className="nav-link" href="./pages/concesionarias.html">Dealerships</a>
                </li> */}
                <li>
                  {session && <a href="#" onClick={handleSignout} className="nav-link btn-ingresar">Sign out</a>}
                  {!session && <a href="#" onClick={handleSignin} className="nav-link btn-ingresar">Sign in</a>}
                  {/* <Link className="nav-link btn-ingresar" href={`/sign-in`}>Sign In</Link> */}
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