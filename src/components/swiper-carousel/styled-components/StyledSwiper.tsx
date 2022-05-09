import {styled} from "@mui/material";
import {Swiper, SwiperProps} from 'swiper/react';
import {CarouselOptions} from "../context/CarouselContext";
import {CSSProperties} from "react";

type StyledSwiperProps =
    SwiperProps
    & Pick<Partial<CarouselOptions>,
    'maxImageHeight' | 'imageAspectRatio'>
    & {
    width?: CSSProperties['width'], backgroundColor?: CSSProperties['backgroundColor']
}


export const StyledSwiper = styled(({
                                        maxImageHeight,
                                        imageAspectRatio,
                                        width,
                                        backgroundColor,
                                        ...rest
                                    }: StyledSwiperProps) => <Swiper {...rest} />)`
  max-height: ${({maxImageHeight}) => maxImageHeight}px;
  aspect-ratio: ${({imageAspectRatio}) => imageAspectRatio};
  background-color: ${({backgroundColor = 'black'}) => backgroundColor};
  width: ${({width}) => width}px;
`
