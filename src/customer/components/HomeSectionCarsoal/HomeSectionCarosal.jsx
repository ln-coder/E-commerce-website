import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeCarosal/HomeSectionCard/HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';

const HomeSectionCarosal = () => {

    const responsive = {
        0: { items: 1 },
        520: { items: 2 },
        720: { items: 3 },
        920: { items: 5 },
        1024: { items: 6 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)


    return (
        <div className="relative px-4 lg:px-8">
            <div className="relative p-5 ">
                <AliceCarousel

                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    touchTracking={false}
                    disableButtonsControls
                    items={items}
                    responsive={responsive}
                />

                <Button className="z-50" sx={{
                    position: 'absolute', top: "8rem", right: "0rem",
                    transform: "translate(50%) rotate(90deg)", bgcolor: "white"
                }} aria-label='next' >
                    <ChevronLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>

                <Button variant="contained" className="z-50" sx={{
                    position: 'absolute', top: "8rem", left: "0rem",
                    transform: "translate(50%) rotate(-90deg)", bgcolor: "white"
                }} aria-label='next' >
                    <ChevronLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
            </div>
        </div>


    )
}

export default HomeSectionCarosal