import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import useHostname from '@/Components/Provider/HostnameProvider'
import Layout from '@/Components/Layout/Layout'
import CurrencySlide from '@/Components/Slide/CurrencySlide'
import ActionBtn from '@/Components/Button/ActionBtn'
import SecSlideStep from '@/Components/Section/SecSlideStep'
import { ChartStepIcon, InfoStepIcon, MCardIcon, XCardIcon } from '@/Components/svg/Svg'
import AccordionHelp from '@/Components/Accordion/AccordionHelp'
import SecGetApp from '@/Components/Section/SecGetApp'

const Index = () => {
    const originalUrl = useHostname();

    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const [activeChartIndex, setActiveChartIndex] = useState(1);

    const handleChartMouseEnter = (index) => {
        setActiveChartIndex(index);
    };

    const [activePhoneIndex, setActivePhoneIndex] = useState(1);

    const handlePhoneMouseEnter = (index) => {
        setActivePhoneIndex(index);
    };
    
    return (
        <Fragment>
            <Layout title='Andamio - Financiamiento para Constructores' description='Andamio es la fintech líder que ofrece préstamos y servicios financieros especializados para constructores y empresas del sector construcción.' >

                <section className='relative pt-[50px] md:pt-[80px] md:pb-[9rem] xl:pb-[18rem]'>

                    <img src={originalUrl + "/images/mockup.png"} className='absolute right-0 bottom-0 w-[380px] lg:w-[450px] xl:w-auto sm:block hidden' alt="" />

                    <Container className='mt-[3rem]'>
                        <div className="relative z-[1]">
                            <h1 className='font-medium text-[36px] xx:text-[48px] ss:text-[54px] lg:text-[76px] xl:text-[108px]'>
                                <div className="flex items-center gap-4">
                                    Financiamiento <CurrencySlide />
                                </div>
                                <span className='sm:pl-[2rem] lg:pl-[3rem] xl:pl-[5rem]'>con Andamio.</span>
                            </h1>

                            <p className='text__18 text-Mneutral700 mt-[2rem] lg:mt-[4rem] mb-8'>Andamio es la fintech líder que ofrece <br className='hidden sm:block lg:hidden' /> servicios financieros <br className='hidden lg:block xl:hidden' /> especializados <br className='hidden xl:block' /> para constructores. Con nuestra <br className='hidden sm:block lg:hidden' /> plataforma digital, puedes gestionar <br className='hidden lg:block xl:hidden' /> fácilmente tus <br className='xl:block hidden sm:block lg:hidden' /> proyectos de construcción.</p>

                            <ActionBtn link='/about' title="Comenzar" />
                        </div>


                        <img src={originalUrl + "/images/mockup.png"} className='-mt-[2rem] ml-auto sm:hidden' alt="" />
                    </Container>
                </section>

                <SecSlideStep />

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral900 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <Row className='justify-between mb-[3rem]'>
                                    <Col md={6} className='lg:my-auto'>
                                        <h4 className='font-medium text__64 text-white'>Gestiona tus <br /> proyectos ⎯ en cualquier momento</h4>
                                    </Col>
                                    <Col md={5} className='lg:my-auto'>
                                        <p className='text__18 text-white leading-relaxed mb-[2.5rem]'>Experimenta la comodidad de transferencias instantáneas, herramientas de presupuesto avanzadas y una amplia gama de opciones de financiamiento para tus proyectos de construcción.</p>

                                        <ActionBtn type={2} title="Obtener la App" />
                                    </Col>
                                </Row>

                                <Row className='h-full gap-y-4'>
                                    <Col md={5} className='flex-fill'>
                                        <div className="grid grid-rows-2 gap-y-4 md:gap-y-8 h-full">
                                            <div className="w-full flex items-center justify-center p-4 rounded-[32px] bg-Msecondary600">
                                                <div className="">
                                                    <div className="bg-white w-[80px] h-[80px] rounded-full mb-4">
                                                        <img src={originalUrl + "/images/Avatar Image.png"} className='object-cover w-full h-full' alt="" />
                                                    </div>

                                                    <p className='text__18 leading-relaxed text-white mb-2'>"Los recursos de Andamio me ayudaron a financiar mi proyecto de construcción. Ahora tomo decisiones informadas."</p>
                                                    <h5 className='font-medium text-white text__18'>Carlos Mendoza</h5>
                                                </div>
                                            </div>
                                            <div className="w-full flex items-end justify-center p-4 rounded-[32px] bg-white">
                                                <div className="">
                                                    <h5 className='font-medium text__48 mb-2 text-Mneutral900'>80%</h5>
                                                    <p className='text__18 leading-relaxed text-Mneutral600'>de los constructores reportan alcanzar sus objetivos de proyecto más rápido con nuestras herramientas de planificación.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7} className='flex-fill'>
                                        <img src={originalUrl + "/images/dsasds.png"} className='object-cover w-full rounded-[32px] h-full' alt="" />
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>
                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <Row className='gap-y-4'>
                                    <Col md={6} className='my-auto'>
                                        <img src={originalUrl + "/images/sadsadsad.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Experimenta la - comodidad, seguridad y bajas comisiones de Andamio.</h4>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>Con la app móvil de Andamio, puedes gestionar fácilmente tus proyectos de construcción. Disfruta de la tranquilidad sabiendo que tus transacciones financieras son seguras y aprovecha nuestras bajas comisiones.</p>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>
                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <Row className='gap-y-4'>
                                    <Col md={6} className='my-auto'>
                                        <img src={originalUrl + "/images/asdsad.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Gestiona tus proyectos
                                            de construcción con nuestra app móvil intuitiva.</h4>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>Nos esforzamos por asegurar que tengas acceso a la máxima comodidad y flexibilidad para todas tus necesidades de financiamiento, para que puedas gestionar tus proyectos con facilidad y confianza.</p>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral900 rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <h2 className='text-Mbasewhite text__64 font-medium mb-[2.5rem] text-center'>Descubre un mundo de conveniencia <br className='sm:block hidden' />
                                    ⎯ con nuestra app móvil</h2>

                                <div className="grid gap-3">
                                    <div className="grid lg:grid-cols-2 gap-3">
                                        <div className="p-8 rounded-[32px] bg-[rgba(46,46,46,0.32)] relative overflow-hidden cardGrid" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseEnter(1)}>
                                            <img src={originalUrl + "/images/Group 162642 (1).svg"} className={'absolute w-full h-full left-0 top-0 transition-all duration-300 opacity-0 imgCoverBg'} alt="" />
                                            <div className="relative z-[1]">
                                                <h4 className='font-medium text__24 text-white mb-2'>Gestiona tu billetera digital.</h4>
                                                <p className='text__18 leading-relaxed opacity-60 text-white'>Financiamiento simplificado. Gestiona tu billetera digital, invierte, comercia, envía dinero - todo al alcance de tus dedos.</p>

                                                <div className="mt-[2.5rem] flex items-center justify-center gap-3 wrapCaradHover">
                                                    <div className="inline-block">
                                                        <MCardIcon classData={"transition-all duration-300 " + (activeIndex == 1 ? "hoverCard one" : "")} />
                                                    </div>
                                                    <div className="inline-block">
                                                        <XCardIcon classData={"transition-all duration-300 " + (activeIndex == 2 ? "hoverCard two" : "")} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8 rounded-[32px] bg-[rgba(46,46,46,0.32)] relative overflow-hidden cardGrid" onMouseEnter={() => handleChartMouseEnter(2)} onMouseLeave={() => handleChartMouseEnter(1)}>
                                            <img src={originalUrl + "/images/Group 162642 (1).svg"} className={'absolute w-full h-full left-0 top-0 transition-all duration-300 opacity-0 imgCoverBg'} alt="" />
                                            <div className="relative z-[1]">
                                                <h4 className='font-medium text__24 text-white mb-2'>Invierte, comercia y más.</h4>
                                                <p className='text__18 leading-relaxed opacity-60 text-white'>Rastrea tus gastos, establece presupuestos y recibe insights financieros personalizados para tus proyectos.</p>

                                                <div className="mt-[2.5rem]">

                                                    <div className="flex flex-wrap sm:!flex-nowrap items-start gap-2">
                                                        <div className="w-[40%] sm:!w-auto">
                                                            <InfoStepIcon activeChartIndex={activeChartIndex} classData='w-full' />
                                                        </div>
                                                        <div className="w-full sm:!w-[68%] flex-shrink-0">
                                                            <ChartStepIcon activeChartIndex={activeChartIndex} classData="w-full" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 !pb-0 rounded-[32px] bg-[rgba(46,46,46,0.32)] relative overflow-hidden cardGrid" onMouseEnter={() => handlePhoneMouseEnter(2)} onMouseLeave={() => handlePhoneMouseEnter(1)}>

                                        <img src={originalUrl + "/images/Group 162642 (1).svg"} className={'absolute w-full h-full left-0 top-0 transition-all duration-300 opacity-0 imgCoverBg'} alt="" />

                                        <Row className='relative z-[1]'>
                                            <Col md={6} className='pb-8'>

                                                <h5 className='font-medium text__48 mb-2 text-white'>Envía dinero con <br />
                                                    ⎯ facilidad.</h5>
                                                <p className='text__18 leading-relaxed text-white opacity-80 mb-[2.5rem]'>Tu centro financiero integral. Gestiona tu <br className='lg:block hidden' /> billetera digital, invierte, comercia y envía <br className='lg:block hidden' /> dinero con facilidad.</p>

                                                <ActionBtn Onhover={true} activeState={activePhoneIndex == 2 ? false : true} type={2} title="Obtener la App" />

                                            </Col>
                                            <Col md={6} className='relative overflow-hidden h-full'>

                                                <img src={originalUrl + "/images/Transfer detail.svg"} className={'absolute left-0 w-[60%] md:w-[200px] lg:w-auto transition-all duration-500 z-[1] ' + (activePhoneIndex == 2 ? "bottom-0" : "-bottom-[30rem]")} alt="" />
                                                <img src={originalUrl + "/images/iPhone 14 Pro.svg"} className={'mx-auto transition-all duration-300 ' + (activePhoneIndex == 2 ? "opacity-30" : "opacity-100")} alt="" />
                                            </Col>
                                        </Row>

                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-white rounded-[24px] sm:rounded-[56px]">
                            <Container>
                                <h4 className='font-medium text__64 text-center mb-8'>Artículo destacado ⎯ de <br /> la semana</h4>

                                <Row className='gap-y-4'>
                                    <Col md={6} lg={4}>
                                        <img src={originalUrl + "/images/img (2).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-3 lg:p-4">
                                            <h4 className='font-medium text__20 mb-2'>Top 5 formas en que el financiamiento digital
                                                facilita la construcción</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Descubre las cinco formas clave en que el financiamiento digital simplifica la gestión de proyectos de construcción</p>

                                            <ActionBtn link='/blog/detail/top-5-ways-digital-banking-makes-life-easier' title="Leer Más" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <img src={originalUrl + "/images/img (3).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-3 lg:p-4">
                                            <h4 className='font-medium text__20 mb-2'>Seguridad y velocidad: por qué el financiamiento digital es el futuro</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Enfatiza las medidas de seguridad robustas en el financiamiento digital y los beneficios de transacciones más rápidas.</p>

                                            <ActionBtn link='/blog/detail/top-5-ways-digital-banking-makes-life-easier' title="Leer Más" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <img src={originalUrl + "/images/img (1).png"} className='w-full h-[330px] object-cover rounded-[24px]' alt="" />
                                        <div className="p-3 lg:p-4">
                                            <h4 className='font-medium text__20 mb-2'>Mejora tu experiencia de financiamiento: ¡hemos lanzado nuevas funciones emocionantes!</h4>
                                            <p className='text__16 text-Mneutral600 leading-relaxed mb-3 clamp-2'>Enfócate en la comodidad y el poder de las apps de financiamiento móvil para constructores.</p>

                                            <ActionBtn link='/blog/detail/top-5-ways-digital-banking-makes-life-easier' title="Leer Más" size='small' type={"2"} />

                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                </section>


                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container>
                                <Row className='gap-y-4'>
                                    <Col md={5}>
                                        <h2 className='text__64 font-medium mb-[2rem] md:b-[4.5rem]'>¿Necesitas ⎯ <br />
                                            ayuda?</h2>

                                        <div className="w-full bg-Mneutral900 p-6 rounded-[24px]">
                                            <h5 className='font-medium text__24 text-white mb-[2.5rem]'>¿No encontraste la respuesta que buscabas? ¡Nuestro equipo de soporte está aquí para ayudarte!</h5>

                                            <ActionBtn link={"/contact"} title="Contáctanos" size='small' type={"2"} />
                                        </div>
                                    </Col>
                                    <Col md={7}>

                                        <div className="flex flex-wrap gap-y-3">
                                            {

                                                [
                                                    {
                                                        title: "¿Cómo puedo mantener segura la información de mi cuenta?",
                                                        desc: "Para mantener segura la información de tu cuenta Andamio, usa una contraseña fuerte y única y habilita la autenticación de dos factores. Monitorea regularmente tu cuenta para detectar actividad sospechosa y asegúrate de que tu app y el software de tu dispositivo estén actualizados. Ten cuidado con las estafas de phishing—Andamio nunca te pedirá tu contraseña por correo electrónico.",
                                                    },
                                                    {
                                                        title: "¿Hay comisiones por usar Andamio para constructores?",
                                                        desc: "Andamio ofrece tarifas competitivas y transparentes para constructores. Nuestras comisiones son bajas y claramente comunicadas. Puedes ver todos los costos en nuestra plataforma antes de realizar cualquier transacción. Ofrecemos planes especiales para proyectos de construcción a gran escala.",
                                                    },
                                                    {
                                                        title: "¿Es seguro Andamio para constructores?",
                                                        desc: "Sí, Andamio utiliza tecnología de encriptación de grado bancario y cumple con todos los estándares de seguridad financiera. Tu información y transacciones están protegidas con las mismas medidas de seguridad que los bancos tradicionales, adaptadas específicamente para las necesidades del sector construcción.",
                                                    },
                                                    {
                                                        title: "¿Qué debo hacer si sospecho actividad fraudulenta en mi cuenta?",
                                                        desc: "Si sospechas de actividad fraudulenta, contacta inmediatamente a nuestro equipo de soporte 24/7. Bloquearemos tu cuenta temporalmente y investigaremos la situación. Andamio tiene protocolos especiales para proteger los fondos de proyectos de construcción.",
                                                    },
                                                    {
                                                        title: "¿Qué puedo hacer con Andamio para constructores?",
                                                        desc: "Con Andamio puedes gestionar préstamos para construcción, pagar a proveedores, rastrear gastos de proyecto, obtener financiamiento para materiales, gestionar nóminas de trabajadores y acceder a herramientas de presupuesto especializadas para el sector construcción.",
                                                    },
                                                ].map((obj) => {
                                                    return <Fragment>
                                                        <AccordionHelp title={obj.title} desc={obj.desc} />
                                                        <div className="w-full h-[1px] bg-Mneutral200"></div>
                                                    </Fragment>
                                                })
                                            }



                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp />
            </Layout>

        </Fragment>
    )
}

export default Index