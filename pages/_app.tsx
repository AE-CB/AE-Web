import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, createContext, useState } from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import AppContext from '../context/AppContext'
import AdminLayout from '../components/Layouts/AdminLayout'
import NormalLayout from '../components/Layouts/NormalLayout';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const layouts = {
  AdminLayout: AdminLayout,
  NormalLayout: NormalLayout
};

export default function App({ Component, pageProps }: AppProps) {

  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  const [apikey, setApikey] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjRmZTQ5NThkZTNlOWM3ZWQwYzAwZGVkNWE4NmMzMDdkM2NhMmI1YWE2MTQ3YTgzNGVjMjFkNjFiYjA2NTlmN2EyNDNkY2NlYTRlYzU5YTMiLCJpYXQiOjE2NzIwMjc3NzEuMzU0ODU3LCJuYmYiOjE2NzIwMjc3NzEuMzU0ODU4LCJleHAiOjE3MDM1NjM3NzEuMzUwOTk2LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.E6BHv_hihrM-Pr_BHZ1UOss9OygclUOT8JC5DfSBxaShBioO7t-u0RyxzoyRIs1g0XkXIaWwCFojlf_zJKPriYEAjbCQcqYsZJsfvq8RtGsqhylb-MjbPGIGKV9Ue6HDlLn0z_63lUyXIign8SLv6xvPh5wZfxUOPlAVxw6rhFvHvHGJpFirGhz7pcf090eewAoSEe-PeTXa01jsl4-DYR38nYU_-MdQOohUUpXziw7Q20-elSVieEAlBq04prBpOHnajtcz_OphHVei6V4ag9Et4H71rr7ch6fypvbl1iFtViOrKKheVKP9rXTuoyg4M5WyxyMxsFjHou8X_iwUCgsAU8ixG2xiJ5XV2qpuL_Duv3mKJ-97aKN7u3EviN_b93iPxDol15jqUqFF-57SnqLhxN95K2IQ0Tvq3GNtIANC81MJE7RK4d-s0MkGwLSzeCAN4nvWYCitznGPpLCL_niHlDo9gfnyESJeLnSOA7Sij1r5yO3VOR7Hb0K-sYVGzdzu9fnwPw9EcnYn9WMuiDw5ibWLE9dq0cds-1sVhOnr1dY3CbS0OIXjj7IMy6xQMj9B337OVWTPkRk3mWLM_P7P-n7KX-qtmzpst7_51xw7rvGZ9trMJgUfj-Hn41qrCtYeePRSVsfLm1t_0_pKozCX20AAPiHWtAaz8cXD5I0')

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
