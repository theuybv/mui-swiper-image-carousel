import {AspectRatio} from "../context/CarouselContext";

export const parseStringMathEquation = (str: string) => {
    return Function(`'use strict'; return (${str})`)()
}

export const getDemoImages = (
    numberOfImages: number,
    aspectRatio: AspectRatio
) => {
    return [...Array(numberOfImages)].map((_value, index) => {
        const maxWidth = 1024;
        const ratio = parseStringMathEquation(aspectRatio)
        const height = Math.round(ratio * maxWidth);
        const width = Math.round(height * ratio);
        return `https://picsum.photos/${width}/${height}?random=${index}`;
    });
};
