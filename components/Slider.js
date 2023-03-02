import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import {
    GridList,
    GridListTile,
    Modal,
    Backdrop,
    Fade
} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Slider = ({ images }) => {
    const [open, setOpen] = useState(false);
    // const [image, setImage] = useState("false");

    const handleClose = () => {
        setOpen(false);
    };

    const handleImage = (value) => {
        setOpen(true);
    };

    const [selectedImg, setSelectedImg] = useState(images[0]);
    const carsectionRef = useRef(null);
    const [imagePlace, setImagePlace] = useState(0);
    const handleImg = (event) => {
        setSelectedImg(event.target.attributes.dataimg.value)
        setImagePlace(event.target.attributes.dataplace.value)
        carsectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const leftClick = () => {
        var min = 0;
        var place = parseInt(imagePlace);
        if (imagePlace > min) {
            setImagePlace(imagePlace - 1)
            place = parseInt(imagePlace) - 1;
            setSelectedImg(images[place])
        }
    }

    const rightClick = () => {
        var max = images.length - 1;
        var place = parseInt(imagePlace);
        if (imagePlace < max) {
            setImagePlace(imagePlace + 1)
            place = parseInt(imagePlace) + 1;
            setSelectedImg(images[place])
        }
    }

    useEffect(() => {
        if(images[0]){
            setSelectedImg(images[0])
        }
    }, [images])
    

    return (
        <>
            <Modal
                className="slider_modal"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
            >
                <span>
                    <span onClick={leftClick} className='arrow_circle_wrap left_circle'>
                        <ArrowBackIosNewIcon />
                    </span>
                    <span onClick={rightClick} className='arrow_circle_wrap right_circle'>
                        <ArrowForwardIosIcon />
                    </span>
                    <Fade in={open} timeout={500} className="slider_img">
                        <img
                            src={process.env.NEXT_PUBLIC_IMAGE_HOST + selectedImg}
                            alt="asd"
                            style={{ maxHeight: "80%", maxWidth: "80%" }}
                        />
                    </Fade>
                </span>
            </Modal>
            <section className="car-img" ref={carsectionRef}>
                <div className='sliderImgWrap'>
                    <span onClick={leftClick} className='arrow_circle_wrap left_circle'>
                        <ArrowBackIosNewIcon />
                    </span>
                    <span onClick={rightClick} className='arrow_circle_wrap right_circle'>
                        <ArrowForwardIosIcon />
                    </span>
                    <Image
                        className='singleimage'
                        width={1000} height={1000}
                        src={process.env.NEXT_PUBLIC_IMAGE_HOST + selectedImg}
                        alt="Main Image"
                        onClick={(e) => handleImage(process.env.NEXT_PUBLIC_IMAGE_HOST + selectedImg)} />
                </div>

                <div className="car-secondary-images">
                    {images.map((image, key) => {
                        return (
                            <Image dataplace={key} className='nextimg' width={1000} height={1000} key={key} dataimg={image} onClick={(event) => handleImg(event)} src={process.env.NEXT_PUBLIC_IMAGE_HOST + image} alt="Volkswagen Golf GTI costado" />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Slider