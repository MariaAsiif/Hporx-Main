import React from "react";
import Slider from "react-slick";
import markSlick1 from "../../../assets/landingImages/markSlick.jpg";
import markSlick2 from "../../../assets/landingImages/markSlick2.jpg";
import {
  MarketSlickContainer,
  MarkSlickImg,
  MarkSlickImgContainer,
} from "./StyledMarketPlace";
import VideoModal from "../Header/VideoModal";
import Popup from "../../../utils/popup/Popup";

export const MarketPlaceSlick = () => {
  const marketPlaceImgs = [markSlick1, markSlick2, markSlick1, markSlick2];
  var settings = {
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const [modalShow, setModalShow] = React.useState(false);

  const data = localStorage.getItem("ageGateActive");





  return (
    <MarketSlickContainer>
      {modalShow &&
        <VideoModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
          children={
            data !== "active" ? (
              <Popup setModalShow={setModalShow} />
            ) : (
              <div>
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/658094191?h=992c066852"
                  width="100%"
                  height="550px"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            )
          }
        />
      }
      <Slider {...settings} className="inhalate-slick lg:w-[65%]  lg:-ml-[270px] ">
        {marketPlaceImgs.map((img, index) => (
          <MarkSlickImgContainer key={index}>
            {/* <div className="inner-overlay">
              <PlayBtn clicked={() => openModalContainer()} />
            </div> */}
            <MarkSlickImg src={img} alt={img} />
          </MarkSlickImgContainer>
        ))}
      </Slider>
    </MarketSlickContainer>
  );
};
