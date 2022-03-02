/* eslint-disable react/jsx-key */
import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
interface Props {
    photos: any;
}

const CustomCarosuel = ({photos}:Props) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      function SampleNextArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#1C3988" , color: "white" ,borderRadius:50, fontSizeAdjust:0.5 }}
            onClick={onClick}
          />
        );
      }
  return (
   <>
       <Slider {...settings}>
              {photos.map((photo:any) => (
                <div key={photo.id}>
                    <Image 
                    width={300}
                    height={150}
                    blurDataURL={photo.url}
                    placeholder="blur"

                    src={photo.url} alt={photo.id} />
                </div>
                ))}

        </Slider>
    
   </>
  )
}

export default CustomCarosuel