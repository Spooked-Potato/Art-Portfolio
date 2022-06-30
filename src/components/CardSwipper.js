import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { slice } from "./DataCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function CardSwipper() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {slice.map((element) => (
                    <SwiperSlide key={element.id}>
                        <div
                            className="cardSwiper"
                            style={{ backgroundImage: `url(${element.image})` }}
                            alt=""
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
