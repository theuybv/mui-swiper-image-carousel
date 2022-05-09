import {createContext, Dispatch, SetStateAction} from "react";
import {AutoplayOptions} from "swiper/types";

export type AspectRatio = '1/1' | '3/2' | '4/3'

export type CarouselOptions = {
    images: string[],
    thumbAspectRatio: AspectRatio,
    imageAspectRatio: AspectRatio,
    maxImageHeight: number
    thumbsPerView: number
    sourceImageAspectRatio: AspectRatio,
    autoPlay?: AutoplayOptions
}

export const defaultCarouselOptions: CarouselOptions = {
    imageAspectRatio: "3/2",
    maxImageHeight: 500,
    images: [],
    thumbAspectRatio: "4/3",
    thumbsPerView: 3,
    sourceImageAspectRatio: "3/2",
}

export const defaultCarouselState: CarouselState = {
    containerWidth: 0,
    currentIndex: 0
}

export const CarouselContext = createContext<CarouselOptions>(defaultCarouselOptions)
export type CarouselState = {
    currentIndex: number,
    containerWidth: number
}
export const CarouselStateContext = createContext<[CarouselState,
    Dispatch<SetStateAction<CarouselState>>
]>([defaultCarouselState, () => {
}])
