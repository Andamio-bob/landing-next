import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import ActionBtn from '../Button/ActionBtn'
import useHostname from '../Provider/HostnameProvider';

const SecTestimonial = ({ title = `"Andamio ha transformado cómo gestiono las finanzas de mis proyectos de construcción. Tener todas mis cuentas en un solo lugar es increíblemente conveniente, y las actualizaciones en tiempo real me mantienen informado sobre cada transacción. ¡Es un cambio total!"`, action = true, name = "Susana Taylor", status = "Arquitecta" }) => {
    const originalUrl = useHostname();

    return (
        <Fragment>
            <section className='py-2'>

                <div className="px-2">
                    <div className="w-full lg:px-4 xl:px-[2.5rem] py-[2rem] lg:py-[4rem] bg-Mneutral900 rounded-[24px] sm:rounded-[56px]">
                        <Container>

                            <img src={originalUrl + "/images/Frame 22607.svg"} className='w-[54px] lg:w-auto' alt="" />

                            <h4 className='font-medium text__48 my-[2rem] sm:my-[3.5rem] text-white'>{title}</h4>

                            <div className="flex items-center flex-wrap ss:flex-nowrap gap-y-8 justify-between">
                                <div className="ss:w-auto w-full">
                                    <h5 className='font-medium text__24 mb-2 text-white'>{name}</h5>
                                    <p className='text__18 text-Mneutral300'>{status}</p>
                                </div>

                                {
                                    action ? <ActionBtn link='/testimonial' title="Ver todos los testimonios" type={2} size='small' /> : ""
                                }

                            </div>

                        </Container>
                    </div>
                </div>

            </section>
        </Fragment>
    )
}

export default SecTestimonial