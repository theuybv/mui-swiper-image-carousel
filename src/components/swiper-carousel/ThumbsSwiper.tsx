import {FC, MouseEvent, useContext, useEffect, useState} from "react";
import {CarouselContext, CarouselStateContext} from "./context/CarouselContext";
import {SwiperSlide} from "swiper/react";
import {StyledSlideImage} from "./styled-components/StyledSlideImage";
import {Navigation} from "swiper";
import {Swiper as SwiperClass} from "swiper/types";
import {Box, ButtonBase} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {ThumbsNavIconButton} from "./ThumbsNavIconButton";
import {StyledSwiper} from "./styled-components/StyledSwiper";

export const ThumbsSwiper: FC = () => {
    const [currentState, setCurrentState] = useContext(CarouselStateContext)
    const options = useContext(CarouselContext)
    const {images, thumbsPerView} = options

    const [swiperInstance, setSwiperInstance] = useState<SwiperClass>()

    const onSwiper = (swiper: SwiperClass) => {
        setSwiperInstance(swiper)
    };
    const onSlideChange = (swiper: SwiperClass) => {
        // const [swiper]: [typeof Swiper] = e.detail[0];
        // currentActiveIndex.set(swiper.activeIndex)
    };

    const onThumbClick = (_event: MouseEvent, index: number) => {
        setCurrentState({
            ...currentState,
            currentIndex: index
        })
        // console.log(index)
    }

    useEffect(() => {
        if (currentState.currentIndex === 0) {
            swiperInstance?.slideTo(0)
        } else {
            swiperInstance?.slideTo(currentState.currentIndex)
        }
    }, [currentState.currentIndex])


    const navigationOptions = {
        nextEl: '.thumbs-next',
        prevEl: '.thumbs-prev',
    }

    return <>
        <StyledSwiper
            backgroundColor={'white'}
            width={currentState.containerWidth}
            modules={[Navigation]}
            navigation={navigationOptions}
            slidesPerView={thumbsPerView}
            spaceBetween={8}
            onSwiper={onSwiper}
            onSlideChange={onSlideChange}>
            {images.map((src, index) => {
                return <SwiperSlide key={src + index}>
                    <ButtonBase onClick={e => onThumbClick(e, index)} style={{
                        borderBottom: index === currentState.currentIndex ? '4px solid var(--swiper-theme-color)' : 'none',
                    }}>
                        <StyledSlideImage aspectRatio={options.thumbAspectRatio} objectFit={'cover'} src={src}/>
                    </ButtonBase>
                </SwiperSlide>
            })}
            <span slot="container-start">
                <Box
                    style={{pointerEvents: 'none'}}
                    position={'absolute'}
                    zIndex={10}
                    width={"100%"}
                    height={"100%"}>
                    <Box
                        px={1}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        width={"100%"}
                        height={"100%"}>
                        <ThumbsNavIconButton className={'thumbs-prev'}>
                            <ChevronLeft/>
                        </ThumbsNavIconButton>
                        <ThumbsNavIconButton className={'thumbs-next'}>
                            <ChevronRight/>
                        </ThumbsNavIconButton>
                    </Box>
                </Box>
            </span>
        </StyledSwiper>
    </>
}

