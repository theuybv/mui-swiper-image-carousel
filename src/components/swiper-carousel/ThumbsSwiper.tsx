import {FC, MouseEvent, useContext, useEffect, useState} from "react";
import {CarouselContext, CarouselStateContext} from "./context/CarouselContext";
import {Swiper, SwiperSlide} from "swiper/react";
import {SlideImage} from "./SlideImage";
import {Navigation} from "swiper";
import {Swiper as SwiperClass} from "swiper/types";
import {Box, ButtonBase, IconButton} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

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

    return <div>
        <Swiper
            style={{
                width: currentState.containerWidth
            }}
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
                        <SlideImage style={{
                            objectFit: 'cover'
                        }} aspectratio={options.thumbAspectRatio} src={src}/>
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
                        <IconButton sx={{backgroundColor: "white"}} disableRipple className={'thumbs-prev'} style={{pointerEvents: 'auto'}} size={'small'}>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton sx={{backgroundColor: "white"}} disableRipple className={'thumbs-next'} style={{pointerEvents: 'auto'}}  size={'small'}>
                            <ChevronRight />
                        </IconButton>
                    </Box>
                </Box>
            </span>
        </Swiper>
    </div>
}

