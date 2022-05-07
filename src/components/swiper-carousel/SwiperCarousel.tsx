import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './swiper.override.css'

import {FC, useState} from "react";
import {MainSwiper} from "./MainSwiper";
import {ThumbsSwiper} from "./ThumbsSwiper";
import {
    CarouselContext,
    CarouselOptions,
    CarouselState,
    CarouselStateContext,
    defaultCarouselOptions
} from "./context/CarouselContext";
import {Box} from "@mui/material";


export const SwiperCarousel: FC<Partial<CarouselOptions>> = ({images, ...rest}) => {
    const currentIndexState = useState<CarouselState>({
        containerWidth: 0,
        currentIndex: 0
    })
    const options = {
        ...defaultCarouselOptions,
        images: images || defaultCarouselOptions.images,
        ...rest
    }
    return <CarouselContext.Provider value={options}>
        <CarouselStateContext.Provider value={currentIndexState}>
            <MainSwiper/>
            <Box mb={1} />
            <ThumbsSwiper/>
        </CarouselStateContext.Provider>
    </CarouselContext.Provider>
}
