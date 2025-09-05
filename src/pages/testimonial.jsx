import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import SecGetApp from '@/Components/Section/SecGetApp';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const testimonial = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Testimonios - Andamio' description='Lee los testimonios de nuestros clientes constructores que han transformado sus finanzas con Andamio.' >
                <section className='pt-[50px] md:pt-[80px] pb-0 relative'>
                    <Container className='relative mt-[3rem]'>
                        <img src={originalUrl + "/images/Group 162647.png"} className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:block hidden' alt="" />
                        <img src={originalUrl + "/images/Group 162657.png"} className='absolute left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 md:hidden' alt="" />
                        <div className="text-center relative z-[1]">
                            <h2 className='font-medium text__72 mb-4'>Escucha a ⎯ personas <br /> como Andamio</h2>
                            <p className='text__18 text-Mneutral700 leading-relaxed'>Les preguntamos qué piensan de nuestro servicio. <br className='ss:block hidden' /> Esto es lo que tenían que decir…</p>

                        </div>
                    </Container>
                </section>

                <section className='pb-2'>
                    <div className="xs:px-2">
                        <div className="w-full px-[0.5rem] xx:px-[1.5rem] xs:px-[2.5rem] py-[1.5rem] xx:py-[2.5rem] xs:py-[4rem] rounded-[56px]">

                            <Container>
                                <h4 className='text__32 font-medium text-center mb-4'>Líderes y <br />
                                    startups ⎯ del sector construcción.</h4>

                                <div className="flex items-center justify-center gap-6 flex-wrap">
                                    <img src={originalUrl + "/images/br (1).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (2).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (3).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (4).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (5).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (6).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (7).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                    <img src={originalUrl + "/images/br (8).svg"} className='lg:w-auto w-[80px] md:w-[120px]' alt="" />
                                </div>
                            </Container>
                        </div>
                    </div>
                </section>

                <section className='py-2'>
                    <div className="xs:px-2">
                        <div className="w-full px-[0.5rem] xx:px-[1.5rem] xs:px-[2.5rem] py-[1.5rem] xx:py-[2.5rem] xs:py-[4rem] rounded-[56px]">
                            <Container>
                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                                    {
                                        [
                                            {
                                                desc: `"La app de Andamio ha hecho que gestionar las finanzas de mis proyectos de construcción sea muy fácil. Puedo revisar mi balance, transferir dinero y pagar facturas desde la comodidad de mi oficina."`,
                                                name: "Miguel Brown",
                                                company: "Constructor",
                                            },
                                            {
                                                desc: `"He probado varias apps de fintech, pero Andamio es con mucho la mejor. Es fácil de usar, tiene excelentes características y el soporte al cliente es de primera clase."`,
                                                name: "Susana Taylor",
                                                company: "Arquitecta",
                                            },
                                            {
                                                desc: `"La app de Andamio ha sido un salvavidas para mis proyectos de construcción. Puedo revisar mi balance, transferir dinero y pagar facturas sin tener que salir de la obra."`,
                                                name: "Sara Jones",
                                                company: "Gerente de Proyectos",
                                            },
                                            {
                                                desc: `"Siempre fui reacio a usar apps de fintech por preocupaciones de seguridad. Pero Andamio me tranquilizó con sus robustas características de seguridad."`,
                                                name: "David Smith",
                                                company: "Ingeniero de Construcción",
                                            },
                                            {
                                                desc: `"Inicialmente era escéptica sobre usar una app de fintech, pero mi hijo me convenció de probar Andamio. ¡Me alegro mucho de haberlo hecho! Es muy fácil de usar, incluso para alguien como yo que no es experta en tecnología."`,
                                                name: "Jessica Miller",
                                                company: "Contratista",
                                            },
                                            {
                                                desc: `"Me encanta que la app de Andamio me permita configurar alertas para la actividad de mi cuenta. Siempre puedo estar al tanto de mis finanzas, incluso cuando estoy en movimiento."`,
                                                name: "Christopher Lee",
                                                company: "Ingeniero de Construcción",
                                            },
                                            {
                                                desc: `"La app de Andamio me ha ayudado a optimizar las finanzas de mi negocio de construcción. Puedo rastrear fácilmente mis ingresos y gastos, e incluso enviar facturas a mis clientes."`,
                                                name: "Marco Williams",
                                                company: "Propietario de Empresa",
                                            },
                                            {
                                                desc: `"La app de Andamio ha hecho muy fácil para mí transferir dinero a mi familia y amigos. También es excelente para enviar pagos rápidos a mis trabajadores."`,
                                                name: "Ana Davis",
                                                company: "Profesional de la Construcción",
                                            },
                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px] border !border-Mneutral200">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>
                                <div className="grid md:grid-cols-2 gap-6 my-6">

                                    {
                                        [
                                            {
                                                desc: `"La app de Andamio ha sido un salvavidas para mis proyectos de construcción. Puedo revisar mi balance, transferir dinero y pagar facturas sin tener que salir de la obra."`,
                                                name: "Susana Taylor",
                                                company: "Arquitecta",
                                            },
                                            {
                                                desc: `"Me encanta que la app de Andamio me permita configurar alertas para la actividad de mi cuenta. Siempre puedo estar al tanto de mis finanzas, incluso cuando estoy en movimiento."`,
                                                name: "Christopher Lee",
                                                company: "Ingeniero de Construcción",
                                            },

                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px] border !border-Mneutral200">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>
                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                                    {
                                        [
                                            {
                                                desc: `"Managing my car loan used to be a chore, but Andamio's mobile banking app has changed that. The ability to view my loan balance, make payments, and track my payment history all in one place is incredibly convenient. The app's autopay feature ensures that my payments are always on time, saving me from late fees. I also appreciate the loan payoff calculator, which helps me plan ahead and pay off my loan early."`,
                                                name: "Chloe L",
                                                company: "Fitness Enthusiast",
                                            },
                                            {
                                                desc: `"Managing my car loan used to be a chore, but Andamio's mobile banking app has changed that. The ability to view my loan balance, make payments, and track my payment history all in one place is incredibly convenient. The app's autopay feature ensures that my payments are always on time, saving me from late fees. I also appreciate the loan payoff calculator, which helps me plan ahead and pay off my loan early."`,
                                                name: "Christopher F",
                                                company: "Marketing Manager at [Client Company]",
                                            },
                                            {
                                                desc: `"Andamio's focus on financial wellness resonates with me as a fitness enthusiast. The step challenge rewards and cashback offers for gym memberships motivate me to stay active while saving money. The app's budgeting tools help me prioritize spending on healthy food and fitness equipment. Andamio has become an integral part of my overall wellness journey."`,
                                                name: "Nancy G",
                                                company: "Pet Owner",
                                            },
                                            {
                                                desc: `"Andamio's mobile banking app has been instrumental in helping me achieve my financial goals as a student. The budgeting tools have helped me prioritize spending and save for tuition, while the savings goal feature keeps me motivated. The app's educational resources have also been valuable, teaching me about investing and building credit. I'm excited to see how Andamio will continue to support my financial journey as I enter the workforce."`,
                                                name: "Christopher Lee",
                                                company: "Engineer",
                                            },
                                            {
                                                desc: `"I was initially skeptical about using a mobile banking app, but my son convinced me to try Andamio. I'm so glad I did! It's so easy to use, even for someone like me who isn't tech-savvy."`,
                                                name: "Jessica Miller",
                                                company: "Retired teacher",
                                            },
                                            {
                                                desc: `"I love that Andamio's mobile banking app lets me set up alerts for my account activity. I can always stay on top of my finances, even when I'm on the go."`,
                                                name: "Ethan M",
                                                company: "Student",
                                            },
                                            {
                                                desc: `"Andamio's mobile banking app has helped me streamline my business finances. I can easily track my income and expenses, and even send invoices to my clients."`,
                                                name: "Anna Davis",
                                                company: "Healthcare professional",
                                            },
                                            {
                                                desc: `"Andamio's mobile banking app has made it so easy for me to transfer money to my family and friends. It's also great for sending quick payments to my kids for their allowance."`,
                                                name: "Mark Williams",
                                                company: "Business owner",
                                            },
                                        ].map((obj) => {
                                            return <div className="break-inside-avoid p-4 bg-Mneutral50 rounded-[32px] border !border-Mneutral200">
                                                <p className='textr__18 leading-relaxed mb-3'>{obj.desc}</p>

                                                <h5 className='font-medium text__18'>{obj.name}</h5>
                                                <p className='text__14 text-Mneutral700'>{obj.company}</p>
                                            </div>
                                        })
                                    }

                                </div>

                                <div className="mt-6 text-center">
                                    <ActionBtn title="Cargar Más" type={2} />
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

export default testimonial