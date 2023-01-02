import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, createContext, useState } from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import AppContext from '../context/AppContext'
import AdminLayout from '../components/Layouts/AdminLayout'
import NormalLayout from '../components/Layouts/NormalLayout';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const layouts = {
  AdminLayout: AdminLayout,
  NormalLayout: NormalLayout
};

export default function App({ Component, pageProps }: AppProps) {

  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  const [apikey, setApikey] = useState(null)

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <AppContext.Provider value={{ apikey, setApikey }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}
