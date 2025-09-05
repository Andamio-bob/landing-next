import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider';
import Link from 'next/link';

const Footer = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <section className='py-2'>

                <div className="px-2">
                    <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] pb-2 bg-white rounded-[24px] sm:rounded-[56px]">
                        <Container>

                            <Row className="justify-between mb-[3rem] gap-y-6">
                                <Col lg={5}>
                                    <h4 className='font-bold text__24 mb-2'>Andamio</h4>
                                    <p className='text__18'>Comienza descargando la app móvil de Andamio <br className='xl:block hidden' /> desde la App Store o Google Play.</p>
                                </Col>
                                <Col lg={6}>
                                    <Row className='gap-y-[2.5rem]'>
                                        <Col md={5} className='col-8'>
                                            <div className="grid grid-rows-1 gap-3">
                                                <Link href="/digital-wallet-management" className='text__16 text-Mneutral900'>Gestión de Billetera Digital</Link>
                                                <Link href="/investment-and-trading" className='text__16 text-Mneutral900'>Inversión y Comercio</Link>
                                                <Link href="/easy-money-transfers" className='text__16 text-Mneutral900'>Transferencias Fáciles</Link>
                                            </div>
                                        </Col>
                                        <Col md={4} className='col-4'>
                                            <div className="grid grid-rows-1 gap-3">
                                                <Link href="/about" className='text__16 text-Mneutral900'>Acerca de nosotros</Link>
                                                <Link href="/contact" className='text__16 text-Mneutral900'>Contacto</Link>
                                                <Link href="/faq" className='text__16 text-Mneutral900'>Preguntas Frecuentes</Link>
                                                <Link href="/blog" className='text__16 text-Mneutral900'>Blog</Link>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="grid grid-rows-1 gap-3">
                                                <h5 className='text__16 text-Mneutral900'>Redes Sociales</h5>
                                                <div className="flex items-center gap-3">
                                                    <Link href="#!"><img src={originalUrl + "/images/sos (2).svg"} alt="" /></Link>
                                                    <Link href="#!"><img src={originalUrl + "/images/sos (3).svg"} alt="" /></Link>
                                                    <Link href="#!"><img src={originalUrl + "/images/sos (1).svg"} alt="" /></Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <p className='text-center text__14 text-Mneutral500'>© 2024 Andamio. Todos los derechos reservados.</p>

                        </Container>
                    </div>
                </div>

            </section>
        </Fragment>
    )
}

export default Footer