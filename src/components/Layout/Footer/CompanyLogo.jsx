import React from 'react'
import aboveCopyright1 from "../../../assets/landingImages/aboveCopyright1.svg";
import aboveCopyright2 from "../../../assets/landingImages/aboveCopyright2.svg";
import aboveCopyright3 from "../../../assets/landingImages/aboveCopyright3.svg";
import aboveCopyright4 from "../../../assets/landingImages/aboveCopyright4.svg";
import aboveCopyright5 from "../../../assets/landingImages/aboveCopyright5.svg";
import aboveCopyright6 from "../../../assets/landingImages/aboveCopyright6.svg";
import aboveCopyright7 from "../../../assets/landingImages/aboveCopyright7.svg";
import aboveCopyright8 from "../../../assets/landingImages/aboveCopyright8.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper";


const CompanyLogo = () => {


    const aboveCopyrightImgs = [
        aboveCopyright1,
        aboveCopyright2,
        aboveCopyright3,
        aboveCopyright6,
        aboveCopyright4,
        aboveCopyright5,
        aboveCopyright7,
        aboveCopyright8,
    ];





    return (
        <div className='bg-[#FBFAFA] '>
            <div className='bscontainer p-5 mt-5'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {aboveCopyrightImgs.map((supplierImg, index) => (
                        <SwiperSlide>
                            <div key={index}>
                                <img src={supplierImg} className=" lg:p-[2rem] h-[7rem] object-fill  " alt="images" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div >
        </div >
    )
}

export default CompanyLogo