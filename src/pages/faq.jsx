import AccordionHelp from '@/Components/Accordion/AccordionHelp';
import ActionBtn from '@/Components/Button/ActionBtn';
import Layout from '@/Components/Layout/Layout'
import useHostname from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Faq = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Preguntas Frecuentes - Andamio' description='Encuentra respuestas a las preguntas más frecuentes sobre Andamio y nuestros servicios de financiamiento para constructores.' >

                <section className='py-2'>

                    <div className="px-2">
                        <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral100 rounded-[24px] sm:rounded-[56px]">
                            <Container className="relative z-[1] mt-[3rem]">

                                <Row className='gap-y-4'>
                                    <Col md={6}>
                                        <h2 className='font-medium text__64 mb-2'>Preguntas <br />
                                            frecuentes ⎯</h2>
                                        <p className='text__18 leading-relaxed text-Mneutral700'>Hemos estado haciendo esto por bastante tiempo, así que hemos reunido algunas de las preguntas más comunes que nos hacen.</p>


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
                                            <div className="flex flex-wrap gap-y-3">
                                                <p className='text__18 text-Mneutral700'>Preguntas y respuestas</p>
                                                {

                                                    [
                                                        {
                                                            title: "¿Qué es Andamio?",
                                                            desc: "R1: Andamio es una plataforma de financiamiento digital diseñada para proporcionar servicios financieros convenientes, seguros y eficientes para constructores. Nuestro objetivo es hacer que la gestión de tus finanzas de construcción sea lo más fácil y accesible posible.",
                                                        },
                                                        {
                                                            title: "¿Cómo me registro para una cuenta de Andamio?",
                                                            desc: "R2: Para registrarte en Andamio, simplemente descarga nuestra app móvil desde la App Store o Google Play, completa el proceso de registro con tu información de constructor y verifica tu identidad. El proceso es rápido y seguro.",
                                                        },
                                                        {
                                                            title: "¿Cómo puedo mantener segura la información de mi cuenta?",
                                                            desc: "R3: Para mantener segura tu cuenta de Andamio, usa una contraseña fuerte y única, habilita la autenticación de dos factores, y nunca compartas tus credenciales. Monitorea regularmente tu cuenta y mantén tu app actualizada.",
                                                        },
                                                        {
                                                            title: "¿Hay comisiones por usar Andamio?",
                                                            desc: "R4: Andamio ofrece tarifas competitivas y transparentes para constructores. Nuestras comisiones son bajas y claramente comunicadas. Puedes ver todos los costos en nuestra plataforma antes de realizar cualquier transacción.",
                                                        },
                                                        {
                                                            title: "¿Cómo restablezco mi contraseña?",
                                                            desc: "R5: Para restablecer tu contraseña, ve a la sección de configuración en la app de Andamio, selecciona 'Restablecer contraseña' y sigue las instrucciones. También puedes contactar a nuestro soporte si necesitas ayuda.",
                                                        },
                                                        {
                                                            title: "¿Cómo puedo actualizar mi información personal?",
                                                            desc: "R6: Puedes actualizar tu información personal directamente desde la app de Andamio en la sección de perfil. Para cambios importantes, contacta a nuestro equipo de soporte para asistencia.",
                                                        },
                                                        {
                                                            title: "¿Cómo protege Andamio mi información financiera?",
                                                            desc: "R7: Andamio utiliza tecnología de encriptación de grado bancario y cumple con todos los estándares de seguridad financiera. Tu información está protegida con las mismas medidas de seguridad que los bancos tradicionales.",
                                                        },
                                                        {
                                                            title: "¿Qué debo hacer si noto actividad sospechosa en mi cuenta?",
                                                            desc: "R8: Si notas actividad sospechosa, contacta inmediatamente a nuestro equipo de soporte 24/7. Bloquearemos tu cuenta temporalmente y investigaremos la situación para proteger tus fondos.",
                                                        },
                                                        {
                                                            title: "¿Cómo transfiero dinero a otra cuenta?",
                                                            desc: "R9: Para transferir dinero, ve a la sección de transferencias en la app de Andamio, ingresa los detalles de la cuenta de destino y confirma la transacción. Las transferencias son instantáneas y seguras.",
                                                        },
                                                        {
                                                            title: "¿Puedo configurar pagos automáticos para mis facturas?",
                                                            desc: "R10: Sí, puedes configurar pagos automáticos para tus facturas de construcción desde la app de Andamio. Esto te ayuda a mantener tus pagos al día y evitar retrasos en tus proyectos.",
                                                        },
                                                        {
                                                            title: "¿La app de Andamio está disponible para iOS y Android?",
                                                            desc: "R11: Sí, la app de Andamio está disponible tanto para iOS como para Android. Puedes descargarla desde la App Store o Google Play Store.",
                                                        },
                                                        {
                                                            title: "¿Cómo puedo habilitar el inicio de sesión biométrico en la app de Andamio?",
                                                            desc: "R12: Para habilitar el inicio de sesión biométrico, ve a la configuración de seguridad en la app, selecciona 'Autenticación biométrica' y sigue las instrucciones para configurar tu huella dactilar o reconocimiento facial.",
                                                        },
                                                    ].map((obj) => {
                                                        return <Fragment>
                                                            <AccordionHelp title={obj.title} desc={obj.desc} />
                                                            <div className="w-full h-[1px] bg-Mneutral200"></div>
                                                        </Fragment>
                                                    })
                                                }



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

export default Faq