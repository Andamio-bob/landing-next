import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Contáctanos - Andamio' description='Ponte en contacto con Andamio. Estamos aquí para ayudarte con tus necesidades de financiamiento para construcción.' >

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container className="relative z-[1] mt-[3rem]">

                                <Row className='gap-y-4'>
                                    <Col md={6}>
                                        <h2 className='font-medium text__64 mb-2'>Ponte en ⎯ <br />
                                            contacto con nosotros</h2>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>¡Estamos aquí para ayudar! Ya sea que tengas una pregunta sobre nuestros servicios, necesites asistencia con tu cuenta, o quieras proporcionar retroalimentación, nuestro equipo está listo para asistirte. </p>


                                        <div className="my-3">
                                            <p className='text__18 leading-relaxed text-Mneutral700'>Email:</p>
                                            <a href="mailto:hello@andamio.com" className='font-medium text__24 text-Mneutral900'>hello@andamio.com</a>
                                        </div>
                                        <div className="mt-3 mb-8">
                                            <p className='text__18 leading-relaxed text-Mneutral700'>Teléfono:</p>
                                            <div className='font-medium text__24 text-Mneutral900'>+1 234 567 78</div>
                                            <p className='text__14 leading-relaxed text-Mneutral600'>Disponible de lunes a viernes, 9 AM - 6 PM GMT</p>
                                        </div>

                                        <ActionBtn title='Chat en Vivo' />
                                    </Col>
                                    <Col md={6}>
                                        <div className="w-full p-8 rounded-[32px] bg-white">
                                            <Row className='gap-y-3'>
                                                <Col md={6}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">Nombre</label>
                                                    <input type="text" placeholder='Ingresa tu nombre...' className='w-full h-[46px] px-3 rounded-full bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900' />
                                                </Col>
                                                <Col md={6}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">Apellido</label>
                                                    <input type="text" placeholder='Ingresa tu apellido...' className='w-full h-[46px] px-3 rounded-full bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900' />
                                                </Col>
                                                <Col md={12}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">Email</label>
                                                    <input type="text" placeholder='Ingresa tu dirección de correo...' className='w-full h-[46px] px-3 rounded-full bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900' />
                                                </Col>
                                                <Col md={12}>
                                                    <label className='font-medium text__12 text-Mneutral700 mb-2' htmlFor="">¿Cómo podemos ayudarte?</label>
                                                    <textarea name="" id="" placeholder='Ingresa tu mensaje...' className='w-full h-[144px] px-3 py-2 rounded-[20px] bg-Mneutral50 border !border-Mneutral200 outline-none hover:focus:active:outline-none font-medium text__14 placeholder:text-Mneutral400 text-Mneutral900'  ></textarea>
                                                </Col>
                                            </Row>

                                            <div className="mt-[2rem] text-right">
                                                <ActionBtn title='Enviar Mensaje' />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>


                            </Container>
                        </div>
                    </div>

                </section>

            </Layout>
        </Fragment>
    )
}

export default Contact