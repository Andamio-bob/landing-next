import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import SecTestimonial from '@/Components/Section/SecTestimonial';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DigitalWalletManagement = () => {
    const originalUrl = useHostname();

    return (
        <Fragment>
            <Layout title='Gestión de Billetera Digital - Andamio' description='Gestiona tu billetera digital de manera eficiente con Andamio. Herramientas avanzadas para constructores.' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4 sm:mb-[3rem] lg:mb-[5rem] text-center'>Gestión Sin Esfuerzo de <br className='xx:block hidden' /> Billetera Digital</h2>
                        <img src={originalUrl + "/images/asdasdasd.svg"} className='mx-auto sm:block hidden' alt="" />
                        <img src={originalUrl + "/images/Group 162652 (1).svg"} className='mx-auto sm:hidden' alt="" />
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row className='justify-between lg:px-4 xl:px-[2.5rem]'>
                            <Col md={6} xl={5}>
                                <h3 className='font-medium text__64'>Descubre lo Esencial ⎯ Desbloquea lo Mejor</h3>
                            </Col>
                            <Col md={6} xl={5}>
                                <div className="grid grid-rows-1 gap-y-3">

                                    {
                                        [
                                            {
                                                icon: originalUrl + "/images/disc (1).svg",
                                                title: "Panel Unificado",
                                                desc: "Ve todas tus cuentas financieras en un panel centralizado.",
                                            },
                                            {
                                                icon: originalUrl + "/images/disc (2).svg",
                                                title: "Actualizaciones en Tiempo Real",
                                                desc: "Recibe notificaciones instantáneas de transacciones y cambios de saldo.",
                                            },
                                            {
                                                icon: originalUrl + "/images/disc (3).svg",
                                                title: "Seguridad",
                                                desc: "Seguridad de nivel bancario con encriptación de 256 bits para proteger tus datos.",
                                            },
                                            {
                                                icon: originalUrl + "/images/disc (4).svg",
                                                title: "Accesibilidad",
                                                desc: "Accede a tu billetera desde cualquier lugar, en cualquier momento, usando cualquier dispositivo.",
                                            },
                                        ].map((obj) => {
                                            return <div className="flex items-start gap-4 py-[2rem] border-b !border-Mneutral200">
                                                <div className="w-[56px] xl:w-[72px] h-[56px] xl:h-[72px] rounded-[10px] bg-Mneutral100 flex items-center justify-center flex-shrink-0">
                                                    <img src={obj.icon} alt="" />
                                                </div>

                                                <div className="">
                                                    <h5 className='font-medium text__24 mb-2'>{obj.title}</h5>
                                                    <p className='text__16'>{obj.desc}</p>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='py-2'>

                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <div className="grid grid-rows-1 gap-y-6">

                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={5} className='my-auto'>
                                                <img src={originalUrl + "/images/asdasd.svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Gestión Financiera Optimizada</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Gestiona tus finanzas sin esfuerzo con todas tus cuentas, gastos e inversiones en un solo lugar. Di adiós a cambiar entre múltiples apps.</p>

                                                    <ActionBtn link='/about' title="Comenzar" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={7} className='my-auto md:!order-1 order-2'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Seguridad Mejorada</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Disfruta de tranquilidad con medidas de seguridad de primer nivel y protocolos de encriptación avanzados que mantienen tu información financiera segura y confidencial.</p>

                                                    <ActionBtn link='/about' title="Comenzar" />
                                                </div>
                                            </Col>
                                            <Col md={5} className='my-auto order-1 md:!order-2'>
                                                <img src={originalUrl + "/images/gfbgfh (1).svg"} alt="" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-full p-3 bg-white rounded-[32px]">
                                        <Row className='justify-between gap-y-3'>
                                            <Col md={5} className='my-auto'>
                                                <img src={originalUrl + "/images/gfbgfh (2).svg"} alt="" />
                                            </Col>
                                            <Col md={7} className='my-auto'>
                                                <div className="lg:px-[4rem]">
                                                    <h4 className='font-medium text__48 mb-2'>Eficiencia que Ahorra Tiempo</h4>
                                                    <p className='text__18 leading-relaxed mb-[3rem] text-Mneutral800'>Aprovecha el seguimiento automatizado y las actualizaciones en tiempo real, permitiéndote mantenerte informado y tomar decisiones financieras rápidas y efectivas sin el esfuerzo manual.</p>

                                                    <ActionBtn link='/about' title="Comenzar" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>


                <SecTestimonial />

                <SecGetApp title='Comienza con la gestión ⎯ <br class="ss:block hidden" /> de billetera digital hoy' subtext='Abre una cuenta hoy y experimenta la <br class="ss:block hidden" /> diferencia de la banca digital con Andamio!' />
            </Layout>
        </Fragment>
    )
}

export default DigitalWalletManagement