import React, { Children } from "react";

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import "swiper/css";

import { ReactNode } from "react";

interface SliderProps {settings: SwiperProps , children: ReactNode }

export default function SectionPotfolio({settings, children}: SlideProps) {
    return (

        <Swiper {...settings}>{children}</Swiper>


    )
}