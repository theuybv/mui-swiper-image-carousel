import {styled} from "@mui/material";
import {AspectRatio} from "../context/CarouselContext";
import {ImgHTMLAttributes} from "react";

type StyledSlideImageProps = {
    aspectRatio: AspectRatio
    objectFit: 'contain' | 'cover'
} & ImgHTMLAttributes<HTMLImageElement>
export const StyledSlideImage = styled((
    {aspectRatio, objectFit, ...rest}: StyledSlideImageProps) => <img {...rest}
                                                                      alt={rest.alt || 'slider image'}/>)`
  max-width: 100%;
  height: auto;
  aspect-ratio: ${({aspectRatio}) => aspectRatio};
  object-fit: ${({objectFit}) => objectFit};
`
