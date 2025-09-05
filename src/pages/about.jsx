import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const about = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Acerca de Nosotros - Andamio' description='Conoce más sobre Andamio, la fintech líder en financiamiento para constructores. Nuestra misión, valores y equipo.' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative overflow-hidden'>
                    <img src={originalUrl + "/images/Container.svg"} className='absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-0 pointer-events-none' alt="" />
                    <Container className='relative z-[1] mt-[3rem]'>
                        <h2 className='font-medium text__72 mb-4 sm:mb-[2rem]'>Tu socio financiero <br />
                            ⎯ digital para construcción</h2>

                        <Row className='gap-y-8'>
                            <Col md={7} className='md:!order-1 order-2'>
                                <img src={originalUrl + "/images/Group 162646.png"} alt="" />
                            </Col>
                            <Col md={5} className='order-1 md:!order-2'>
                                <p className='text__20 text-Mneutral700 leading-relaxed mb-[2rem]'>Andamio es un innovador líder en el panorama de la banca digital especializada en construcción. Empoderamos a constructores y empresas con las herramientas y recursos que necesitan para prosperar en el mundo financiero actual.</p>

                                <ActionBtn link='/about' title="Comenzar" />
                            </Col>
                        </Row>

                    </Container>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[56px]">
                            <Container>
                                <h3 className='font-medium text__40 mb-[2rem]'>Líderes y <br />
                                    startups ⎯ del sector construcción.</h3>
                                <div className="flex xl:flex-nowrap flex-wrap xl:justify-between gap-x-4 lg:gap-x-3 gap-y-4 xl:gap-3">
                                    <img src={originalUrl + "/images/cop (4).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (5).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (1).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (2).png"} className='lg:w-auto w-[150px]' alt="" />
                                    <img src={originalUrl + "/images/cop (3).png"} className='lg:w-auto w-[150px]' alt="" />
                                </div>

                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full px-[0.5rem] xx:px-[1.5rem] xs:px-[2.5rem] py-[1.5rem] xx:py-[2.5rem] xs:py-[4rem] rounded-[56px]">
                            <Container>

                                <Row className='gap-y-4'>
                                    <Col md={6} lg={4}>
                                        <div className="w-full h-[300px] xl:h-[400px] p-4 rounded-[24px] bg-Mneutral50 flex flex-wrap">
                                            <h5 className='font-medium text__24 w-full'>Lanzado</h5>

                                            <div className="self-end">
                                                <h3 className='font-medium text__72 mb-2'>2019</h3>
                                                <p className='text__14'>5 años de experiencia en fintech</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <div className="w-full h-[300px] xl:h-[400px] p-4 rounded-[24px] bg-Mneutral50 flex flex-wrap">
                                            <h5 className='font-medium text__24 w-full'>Países representados</h5>

                                            <div className="self-end">
                                                <h3 className='font-medium text__72 mb-2'>45+</h3>
                                                <p className='text__14'>Países representados (hasta ahora)</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4}>
                                        <div className="w-full h-[300px] xl:h-[400px] p-4 rounded-[24px] bg-Mneutral50 flex flex-wrap">
                                            <h5 className='font-medium text__24 w-full'>Financiamiento</h5>

                                            <div className="self-end">
                                                <h3 className='font-medium text__72 mb-2'>$12M+</h3>
                                                <p className='text__14'>Recaudado por inversionistas institucionales de todo el mundo.</p>
                                            </div>
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
                                        <img src={originalUrl + "/images/fvhfghfgh.png"} alt="" />
                                    </Col>
                                    <Col md={6} className='my-auto'>
                                        <h4 className='font-medium text__56 mb-3'>Nuestra misión</h4>
                                        <p className='text__20 leading-relaxed text-Mneutral700 mb-2'>En Andamio, estamos dedicados a hacer el financiamiento más simple, inteligente y accesible para todos los constructores.
                                            Lo logramos mediante</p>
                                        <ul className='text__20 leading-relaxed text-Mneutral700 pl-6 list-disc'>
                                            <li>Desarrollando plataformas de financiamiento digital intuitivas y seguras.</li>
                                            <li>Ofreciendo una suite completa de productos y servicios financieros adaptados a las necesidades únicas de la construcción.</li>
                                            <li>Proporcionando soporte al cliente excepcional para asegurar una experiencia financiera positiva.</li>
                                        </ul>
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
                                        <h4 className='font-medium text__56 mb-3'>Nuestros valores</h4>
                                        <p className='text__20 leading-relaxed text-Mneutral700 mb-2'>Nuestros valores fundamentales guían todo lo que hacemos:</p>
                                        <ul className='text__20 leading-relaxed text-Mneutral700 pl-6 list-disc'>
                                            <li>Innovación: Constantemente empujamos los límites para desarrollar soluciones de financiamiento digital de vanguardia.</li>
                                            <li>Seguridad: Priorizamos la seguridad de tu información financiera y de tus proyectos de construcción.</li>
                                            <li>Conveniencia: Hacemos el financiamiento sin esfuerzo y accesible, permitiéndote gestionar tus finanzas en tus términos.</li>
                                            <li>Transparencia: Creemos en la comunicación clara y en proporcionarte la información que necesitas para tomar decisiones financieras informadas.</li>
                                        </ul>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <div className="text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-3'>Conoce nuestro ⎯ <br />
                                        equipo</h3>
                                    <p className='text__20 text-Mneutral700'>Todo se trata de las personas</p>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (2).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Ruben Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>CEO</h5>
                                        <p className='text__16 text-Mneutral500'>Un líder visionario con más de 20 años de experiencia en finanzas y tecnología.</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (3).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>James Culhane</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>CFO</h5>
                                        <p className='text__16 text-Mneutral500'>Con una profunda comprensión de las operaciones financieras y el crecimiento estratégico.</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (4).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>CTO</h5>
                                        <p className='text__16 text-Mneutral500'>Un entusiasta de la tecnología con experiencia en ingeniería de software y fintech</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (5).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>Expertos Financieros</h5>
                                        <p className='text__16 text-Mneutral500'>Nuestro equipo financiero asegura que ofrecemos las mejores tasas y productos</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (6).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>Desarrolladores</h5>
                                        <p className='text__16 text-Mneutral500'>El equipo técnico detrás de nuestra plataforma está constantemente innovando.</p>
                                    </div>
                                    <div className="w-full">
                                        <img src={originalUrl + "/images/pp (1).png"} className='w-full h-[300px] md:h-[400px] rounded-[24px] object-cover mb-2' alt="" />

                                        <h5 className='font-medium text__24 mb-1'>Cheyenne Bergson</h5>
                                        <h5 className='font-medium text__18 mb-1 text-Mneutral600'>Soporte al Cliente</h5>
                                        <p className='text__16 text-Mneutral500'>Siempre aquí para ayudar, nuestro equipo de soporte al cliente está disponible 24/7 para asistir.</p>
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </div>

                </section>

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] rounded-[24px] sm:rounded-[56px]">
                            <Container>

                                <div className="text-center mb-[2.5rem]">
                                    <h3 className='font-medium text__64 mb-3'>Escucha más de ⎯ personas <br className='ss:block hidden' /> como Andamio</h3>
                                </div>


                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                                    {
                                        [
                                            {
                                                desc: `"Estábamos luchando por contar nuestra historia de marca efectivamente. Andamio nos ayudó a desarrollar un mensaje claro y convincente que resonó con nuestra audiencia. Hemos visto un aumento significativo en el conocimiento de la marca y las ventas desde que trabajamos con ellos."`,
                                                name: "Skylar Workman",
                                                company: "Gerente de Marketing en [Empresa Cliente]",
                                            },
                                            {
                                                desc: `"El equipo de Andamio es increíblemente creativo y estratégico. Siempre están al día con las últimas tendencias de marketing y saben cómo aplicarlas a nuestras necesidades específicas. Me siento confiado de que estamos en buenas manos con ellos."`,
                                                name: "Rayna Donin",
                                                company: "CEO de [Empresa Cliente]",
                                            },
                                            {
                                                desc: `"Andamio nos ayudó a desarrollar una identidad de marca que realmente refleja nuestros valores y resuena con nuestra audiencia objetivo. Hemos visto un aumento significativo en la lealtad de la marca desde que trabajamos con ellos."`,
                                                name: "Aspen Dias",
                                                company: "Gerente de Marketing en [Empresa Cliente]",
                                            },
                                            {
                                                desc: `"La campaña dirigida de redes sociales de Andamio nos ayudó a llegar a una nueva base de clientes y resultó en un aumento del 25% en membresías de gimnasio en el primer trimestre. ¡Estamos encantados con los resultados!"`,
                                                name: "Anika Torff",
                                                company: "Propietaria, Acme Fitness",
                                            },
                                            {
                                                desc: `"Estábamos luchando por competir con los minoristas en línea. Andamio desarrolló una campaña de marketing creativa que destacó nuestra selección única y eventos comunitarios. Vimos un aumento del 20% en el tráfico peatonal en solo unos meses. ¡Nos ayudaron a redescubrir la magia de las librerías locales!"`,
                                                name: "Ashlynn Dokidis",
                                                company: "CEO, Technovation Inc.",
                                            },
                                            {
                                                desc: `"Andamio ha sido nuestro socio de marketing de confianza durante más de 5 años. Su experiencia en SEO y marketing de contenido ha mantenido nuestro sitio web en la parte superior de los resultados de búsqueda, generando constantemente leads de alta calidad. Apreciamos su pensamiento estratégico y enfoque basado en datos."`,
                                                name: "Livia Press",
                                                company: "Propietaria, Bloom Books.",
                                            },
                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px]">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>

                                <div className="text-center mt-8">
                                    <ActionBtn title="Ver Todo" type={2} />
                                </div>
                            </Container>
                        </div>
                    </div>

                </section>

                <SecGetApp title='Únete a la Familia <br /> ⎯ Andamio' />
            </Layout>
        </Fragment>
    )
}

export default about