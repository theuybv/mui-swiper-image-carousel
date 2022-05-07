import {SwiperCarousel} from "./components/swiper-carousel/SwiperCarousel";
import {Container, Grid, Typography} from "@mui/material";
import {getDemoImages} from "./components/swiper-carousel/utils";
import {CarouselOptions, defaultCarouselOptions} from "./components/swiper-carousel/context/CarouselContext";


const demoOptions: CarouselOptions[] = [
    {
        ...defaultCarouselOptions,
        imageAspectRatio: "1/1",
        sourceImageAspectRatio: "4/3",
        thumbsPerView: 3,
        get images() {
            return getDemoImages(10, this.sourceImageAspectRatio)
        },
        thumbAspectRatio: "1/1",
        autoPlay: {
            delay: 3000
        }
    },
    {
        ...defaultCarouselOptions,
        sourceImageAspectRatio: "3/2",
        get images() {
            return getDemoImages(10, this.sourceImageAspectRatio)
        },
        imageAspectRatio: "3/2",
        thumbsPerView: 2
    },
    {
        ...defaultCarouselOptions,
        sourceImageAspectRatio: "4/3",
        get images() {
            return getDemoImages(10, this.sourceImageAspectRatio)
        },
        thumbsPerView: 5
    },
    {
        ...defaultCarouselOptions,
        sourceImageAspectRatio: "3/2",
        get images() {
            return getDemoImages(10, this.sourceImageAspectRatio)
        },
        thumbsPerView: 4,
        thumbAspectRatio: "3/2"
    }
]

function App() {

    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={2} py={2}>
                <Grid item xs={12}>
                    <Typography variant={'h3'} textAlign={'center'}>React Swiper Image Carousel</Typography>
                </Grid>
                {demoOptions.map(options => {
                    return <Grid item xs={12} md={6}>
                        <>
                            <SwiperCarousel {...options}/>
                            <ul>
                                {Object.keys(options).filter(key => key !== 'images').map((optionKey) => {
                                    const optionsString = options[optionKey as keyof typeof options]
                                    return <>
                                        <li>
                                            <strong>{optionKey}: </strong> {JSON.stringify(optionsString)}
                                        </li>
                                    </>
                                })}
                                <li><strong>totalImages: </strong>{options.images.length}</li>
                            </ul>
                        </>
                    </Grid>
                })}

            </Grid>
        </Container>
    )
}

export default App
