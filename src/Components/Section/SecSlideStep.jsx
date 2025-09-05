import React, { Fragment, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller, Autoplay } from 'swiper/modules';

import useHostname from '../Provider/HostnameProvider';

const SecSlideStep = () => {
    const originalUrl = useHostname();

    const [swiper1, setSwiper1] = useState(null);
    const [swiper2, setSwiper2] = useState(null);

    const [activeIndex, setActiveIndex] = useState(0); // State to store the active index

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex); // Update the active index when slide changes

        if (swiper1 && swiper2) {
            console.log(swiper.realIndex)
            swiper2.slideTo(swiper.realIndex);
        }
    };

    const StepData = [
        {
            title: "Descarga la app de Andamio",
            desc: "Comienza descargando la app móvil de Andamio desde la App Store o Google Play.",
            img: originalUrl + '/images/mockup0.png'
        },
        {
            title: "Especifica el monto",
            desc: "Ingresa el monto exacto de dinero que quieres transferir.",
            img: originalUrl + '/images/mockup (1).png'
        },
        {
            title: "Configura tu cuenta de Andamio",
            desc: "Sigue las simples instrucciones en pantalla para crear tu cuenta de Andamio.",
            img: originalUrl + '/images/mockup (2).png'
        },
        {
            title: "Revisa y confirma",
            desc: "Antes de finalizar, revisa cuidadosamente todos los detalles ingresados: información del destinatario, monto, fecha y memo (si aplica).",
            img: originalUrl + '/images/mockup (3).png'
        },
        {
            title: "Elige la cuenta de financiamiento",
            desc: "Selecciona la cuenta específica que quieres usar para enviar el dinero.",
            img: originalUrl + '/images/mockup (4).png'
        },
        {
            title: "¡Pago exitoso!",
            desc: "¡Excelentes noticias! Tu pago ha sido procesado exitosamente.",
            img: originalUrl + '/images/mockup (5).png'
        },
    ]

    return (
        <Fragment>
            <section>
                <Container>
                    <Row className='h-full gap-y-4'>
                        <Col md={5} lg={4} className='flex-fill'>
                            <div className="h-[420px] xs:h-[380px] lg:h-[430px] xl:h-[520px] overflow-hidden w-full bg-Mneutral200 rounded-3xl flex flex-wrap gap-3">

                                <div className="w-full flex-shrink-0 p-4 !pb-0">
                                    <Swiper
                                        onSlideChange={handleSlideChange}
                                        direction="vertical"
                                        spaceBetween={0}
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        slidesPerView={"auto"}
                                        autoHeight={true}
                                        loop={true}
                                        onSwiper={setSwiper1}
                                        controller={{ control: swiper2 }}
                                        modules={[Controller, Autoplay]}
                                        autoplay={{
                                            delay: 3000, // 3 seconds delay between slides
                                            disableOnInteraction: false, // Keeps autoplay even after user interaction
                                        }}
                                    >
                                        {StepData.map((obj, idx) => {
                                            return <SwiperSlide key={idx}>
                                                <h5 className='font-medium text__24 mb-2'>{obj.title}</h5>
                                                <p className='text__16'>{obj.desc}</p>
                                            </SwiperSlide>
                                        })}
                                    </Swiper>
                                </div>
                                <div className="w-full self-end pointer-events-none">
                                    <Swiper
                                        direction="vertical"
                                        spaceBetween={0}
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        slidesPerView={"auto"}
                                        autoHeight={true}
                                        loop={true}
                                        onSwiper={setSwiper2}
                                        modules={[Controller, Autoplay]}
                                    >
                                        {StepData.map((obj, idx) => {
                                            return <SwiperSlide key={idx}>
                                                <img src={obj.img} className='w-full object-cover' alt="" />
                                            </SwiperSlide>
                                        })}
                                    </Swiper>
                                </div>



                            </div>
                        </Col>
                        <Col md={7} lg={8} className='flex-fill'>
                            <div className="flex flex-wrap h-full">
                                <h2 className='font-medium text__64 mb-[4rem] sm:mb-0'>Comienza con Andamio: Una Guía ⎯ Paso a Paso</h2>

                                <div className={"grid grid-cols-6 gap-2 w-full self-end"}>
                                    {
                                        StepData.map((obj, idx) => {
                                            return <div className={"w-full h-[4px] rounded-full " + (idx == activeIndex ? "bg-Msecondary600" : "bg-Mneutral200")}></div>
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment >
    )
}

export default SecSlideStep