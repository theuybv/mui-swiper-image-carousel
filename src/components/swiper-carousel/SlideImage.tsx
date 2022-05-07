import {styled} from "@mui/material";
import {AspectRatio} from "./context/CarouselContext";


export const SlideImage = styled('img')<{
    aspectratio: AspectRatio
}>((props) => {
    return {
        maxWidth: "100%",
        height: 'auto',
        aspectRatio: props.aspectratio,
    }
})
