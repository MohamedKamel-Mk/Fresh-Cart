import axios from "axios";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    setCategories(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    getCategories();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="my-4 container">
      <h3>Shop Popular Categories</h3>
      <Slider {...settings}>
        {categories.map((item) => (
          <div className="px-1">
            <img src={item.image} className="w-100" height={150} alt="" />
            <h5>{item.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
}
