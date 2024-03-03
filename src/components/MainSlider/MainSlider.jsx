import React from "react";
import Slider from "react-slick";
import slide1 from "../../Assets/images/slider-image-1.jpeg";
import slide2 from "../../Assets/images/slider-image-2.jpeg";
import slide3 from "../../Assets/images/slider-image-3.jpeg";
import img from "../../Assets/images/grocery-banner.png";
import img2 from "../../Assets/images/grocery-banner-2.jpeg"

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
  };
  return (
  <>
    <div className="container">
    <div className="row my-3 gx-0">
      <div className="col-md-9">
        <Slider {...settings}>
          <img src={slide1} height={400} className="w-100" alt="" />
          <img src={slide2} height={400} className="w-100" alt="" />
          <img src={slide3} height={400} className="w-100" alt="" />
        </Slider>
      </div>
      <div className="col-md-3">
        <div className="images">
          <img src={img} className="w-100" height={200} alt="" />
          <img src={img2} className="w-100" height={200} alt="" />
        </div>
      </div>
    </div>
    </div>
  </>
  
  );
}
