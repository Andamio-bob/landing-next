import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Careers = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Carreras - Andamio' description='Únete al equipo de Andamio. Encuentra oportunidades de carrera en nuestra fintech especializada en financiamiento para constructores.' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4'>¡Bienvenido a <br />
                            nuestra ⎯ página de Carreras!</h2>
                        <p className='text__20 text-Mneutral700 leading-relaxed mb-4 sm:mb-[3rem]'>Estamos muy contentos de que estés interesado en unirte a nuestro equipo. Somos un grupo de <br className='lg:block hidden' /> individuos apasionados y talentosos que están comprometidos a hacer una diferencia en el <br className='lg:block hidden' /> mundo de la construcción. Creemos que el trabajo debe ser divertido y gratificante, y nos <br className='lg:block hidden' /> esforzamos por crear un ambiente de trabajo donde todos puedan prosperar.</p>

                        <img src={originalUrl + "/images/Group 162645.svg"} className='mx-auto sm:block hidden' alt="" />
                        <img src={originalUrl + "/images/Group 162654.svg"} className='mx-auto sm:hidden' alt="" />
                    </Container>
                </section>
                <section>
                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px]">
                            <Container>
                                <div className="md:text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-2'>Lo que buscamos</h3>
                                    <p className='text__20 text-Mneutral500'>Buscamos personas que sean:</p>
                                </div>

                                <Row className='gap-y-4'>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (4).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Apasionados por nuestra misión</h5>
                                            <p className='text__16 text-Mneutral700'>Buscamos a alguien que realmente crea en lo que estamos haciendo.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (1).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Talentosos y con habilidad para lo que hacen</h5>
                                            <p className='text__16 text-Mneutral700'>Buscamos personas con talento natural y habilidades excepcionales en su campo.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (3).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Jugadores de equipo entusiasmados por colaborar</h5>
                                            <p className='text__16 text-Mneutral700'>Buscamos personas que trabajen bien en equipo y estén emocionadas por colaborar.</p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3} className='flex-fill'>
                                        <div className="h-full p-4 w-full bg-white border-b !border-Mneutral200">
                                            <div className="w-[56px] lg:w-[64px] h-[56px] lg:h-[64px] bg-Mneutral100 flex items-center justify-center rounded-xl mb-[2rem]">
                                                <img src={originalUrl + "/images/xcr (2).svg"} alt="" />
                                            </div>

                                            <h5 className='font-medium text__20 mb-2'>Motivados y orientados a resultados</h5>
                                            <p className='text__16 text-Mneutral700'>Nos enfocamos en hacer las cosas. Alguien que no tenga miedo de arremangarse las mangas.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px] bg-Mneutral900">
                            <Container>
                                <Row className='justify-between'>
                                    <Col md={6} xl={5}>
                                        <h3 className='font-medium text__56 text-white mb-2'>Lo que ofrecemos</h3>
                                        <p className='text__20 opacity-60 text-white'>Ofrecemos un paquete de compensación y beneficios competitivo, incluyendo:</p>
                                    </Col>
                                    <Col md={6} xl={5}>
                                        <div className="grid grid-rows-1 gap-y-3">

                                            {
                                                [
                                                    {
                                                        icon: originalUrl + "/images/lex (3).svg",
                                                        title: "Salario competitivo",
                                                        desc: "No nos andamos con rodeos cuando se trata de salarios.",
                                                    },
                                                    {
                                                        icon: originalUrl + "/images/lex (2).svg",
                                                        title: "Tiempo libre pagado",
                                                        desc: "Te tenemos cubierto (literalmente).",
                                                    },
                                                    {
                                                        icon: originalUrl + "/images/lex (1).svg",
                                                        title: "Plan de ahorro para el retiro",
                                                        desc: "Ahorra para tu futuro. Te ayudaremos a comenzar.",
                                                    },
                                                    {
                                                        icon: originalUrl + "/images/lex (4).svg",
                                                        title: "Reembolso de matrícula",
                                                        desc: "¿Quieres mejorar tus habilidades? Nosotros contribuimos.",
                                                    },
                                                ].map((obj) => {
                                                    return <div className="flex items-start gap-4 py-[2rem] border-b !border-[rgba(229,229,229,0.2)]">
                                                        <div className="w-[56px] xl:w-[72px] h-[56px] xl:h-[72px] rounded-[10px] bg-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                                                            <img src={obj.icon} alt="" />
                                                        </div>

                                                        <div className="">
                                                            <h5 className='font-medium text__24 mb-2 text-white'>{obj.title}</h5>
                                                            <p className='text__16 text-white opacity-60'>{obj.desc}</p>
                                                        </div>
                                                    </div>
                                                })
                                            }
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
                                    <Col md={6} className='my-auto'>
                                        <img src={originalUrl + "/images/dsfdsfdfs.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Nuestra cultura</h4>
                                        <p className='text__20 leading-relaxed text-Mneutral900 mb-3'>Somos un grupo casual y divertido de personas que son apasionadas por nuestro trabajo. Creemos en el equilibrio trabajo-vida y alentamos a nuestros empleados a tomar tiempo para sí mismos. </p>
                                        <p className='text__20 leading-relaxed text-Mneutral900'>También tenemos una variedad de eventos sociales y actividades durante todo el año.</p>
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

                                <div className="text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-2'>Explora nuestras últimas <br /> ⎯ ofertas de trabajo</h3>
                                    <p className='text__20 text-Mneutral500'>Buscamos personas que sean:</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className='font-medium text__24 mb-3'>Industria Tecnológica</h4>

                                    <div className="grid grid-rows-1 gap-y-3">
                                        {
                                            [
                                                {
                                                    title: "Desarrollador Full Stack",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "UI/UX Designer",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Data Scientist",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Product Manage",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                            ].map((obj) => {
                                                return <div className="py-3 pl-8 pr-4 w-full border !border-Mneutral200 rounded-full grid-cols-3 grid md:grid-cols-5 items-center">
                                                    <div className="col-span-2">
                                                        <h5 className='font-medium text__20'>{obj.title}</h5>
                                                        <p className='text__16 text__700'>{obj.status}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 md:block hidden">
                                                        <img src={originalUrl + "/images/MapPin.svg"} alt="" />
                                                        <p className='text__14 text-Mneutral500'>{obj.location}</p>
                                                    </div>
                                                    <div className="text-center md:block hidden">
                                                        <div className="inline-block text-left">
                                                            <p className='text__16 text__500'>{obj.type}</p>
                                                            <h5 className='font-medium text__20'>{obj.price}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <a href={obj.link} className="w-[46px] md:w-[56px] h-[46px] md:h-[56px] rounded-full flex items-center justify-center bg-Mneutral50 border !border-Mneutral200 ml-auto inline-block">
                                                            <img src={originalUrl + "/images/arrowright.svg"} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className='font-medium text__24 mb-3'>Marketing & Sales</h4>

                                    <div className="grid grid-rows-1 gap-y-3">
                                        {
                                            [
                                                {
                                                    title: "Digital Marketing Specialist",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Sales Representative",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Content Marketing Manager",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                            ].map((obj) => {
                                                return <div className="py-3 pl-8 pr-4 w-full border !border-Mneutral200 rounded-full grid-cols-3 grid md:grid-cols-5 items-center">
                                                    <div className="col-span-2">
                                                        <h5 className='font-medium text__20'>{obj.title}</h5>
                                                        <p className='text__16 text__700'>{obj.status}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 md:block hidden">
                                                        <img src={originalUrl + "/images/MapPin.svg"} alt="" />
                                                        <p className='text__14 text-Mneutral500'>{obj.location}</p>
                                                    </div>
                                                    <div className="text-center md:block hidden">
                                                        <div className="inline-block text-left">
                                                            <p className='text__16 text__500'>{obj.type}</p>
                                                            <h5 className='font-medium text__20'>{obj.price}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <a href={obj.link} className="w-[46px] md:w-[56px] h-[46px] md:h-[56px] rounded-full flex items-center justify-center bg-Mneutral50 border !border-Mneutral200 ml-auto inline-block">
                                                            <img src={originalUrl + "/images/arrowright.svg"} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>


                                <div className="">
                                    <h4 className='font-medium text__24 mb-3'>Creative Industry</h4>

                                    <div className="grid grid-rows-1 gap-y-3">
                                        {
                                            [
                                                {
                                                    title: "Graphic Designer",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Copywriter",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },
                                                {
                                                    title: "Video Editor",
                                                    status: "Tiempo completo",
                                                    location: "San Diego, California",
                                                    type: "Por hora",
                                                    price: "$44.75 - $56.00",
                                                    link: "#!",
                                                },

                                            ].map((obj) => {
                                                return <div className="py-3 pl-8 pr-4 w-full border !border-Mneutral200 rounded-full grid-cols-3 grid md:grid-cols-5 items-center">
                                                    <div className="col-span-2">
                                                        <h5 className='font-medium text__20'>{obj.title}</h5>
                                                        <p className='text__16 text__700'>{obj.status}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 md:block hidden">
                                                        <img src={originalUrl + "/images/MapPin.svg"} alt="" />
                                                        <p className='text__14 text-Mneutral500'>{obj.location}</p>
                                                    </div>
                                                    <div className="text-center md:block hidden">
                                                        <div className="inline-block text-left">
                                                            <p className='text__16 text__500'>{obj.type}</p>
                                                            <h5 className='font-medium text__20'>{obj.price}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <a href={obj.link} className="w-[46px] md:w-[56px] h-[46px] md:h-[56px] rounded-full flex items-center justify-center bg-Mneutral50 border !border-Mneutral200 ml-auto inline-block">
                                                            <img src={originalUrl + "/images/arrowright.svg"} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp title='Únete a la Familia <br /> ⎯ Andamio' />
            </Layout>
        </Fragment >
    )
}

export default Careers