import {FC, useContext, useEffect, useState} from "react";
import {CarouselContext, CarouselStateContext} from "./context/CarouselContext";
import {SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Pagination} from "swiper";
import {Swiper as SwiperClass} from "swiper/types";
import {StyledSlideImage} from "./styled-components/StyledSlideImage";
import {StyledSwiper} from "./styled-components/StyledSwiper";


export const MainSwiper: FC = () => {
    const options = useContext(CarouselContext)
    const [currentState, setCurrentState] = useContext(CarouselStateContext)
    const {images, maxImageHeight, imageAspectRatio} = options
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass>()

    const onSwiper = (swiper: SwiperClass) => {
        setCurrentState({
            ...currentState,
            containerWidth: swiper.el.offsetWidth
        })
        setSwiperInstance(swiper)
    }
    const onSlideChange = (swiper: SwiperClass) => {
        setCurrentState({
            ...currentState,
            currentIndex: swiper.activeIndex
        })
    };

    useEffect(() => {
        if (currentState.currentIndex === 0) {
            swiperInstance?.slideTo(0)
        } else {
            swiperInstance?.slideTo(currentState.currentIndex)
        }
    }, [currentState.currentIndex])

    const onWindowResize = () => {
        setCurrentState({
            ...currentState,
            containerWidth: swiperInstance?.el.offsetWidth || currentState.containerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowResize)
        return () => window.removeEventListener('resize', onWindowResize)
    })

    return <StyledSwiper
        autoplay={options.autoPlay}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        slidesPerView={1}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        maxImageHeight={maxImageHeight}
        imageAspectRatio={imageAspectRatio}>
        {images.map((src, index) => {
            return <SwiperSlide key={index + src}>
                <StyledSlideImage
                    aspectRatio={imageAspectRatio}
                    objectFit={'contain'}
                    src={src}
                    alt={src}/>
            </SwiperSlide>
        })}
    </StyledSwiper>
}
