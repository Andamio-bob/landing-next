import React, { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Navbar from '../Nav/Navbar';
import Footer from '../Nav/Footer';

const Layout = ({ children, title = "Homepage", description = "Homepage Desc", navbar = true, footer = true }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            </Head>

            <div className='w-full overflow-hidden min-h-screen'>

                {
                    navbar ? <Navbar /> : ""
                }

                {children}

                {
                    footer ? <Footer /> : ""
                }
            </div>

            <script
                src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
                crossorigin
            ></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossorigin
            ></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin
            ></script>
        </Fragment>
    )
}

export default Layout