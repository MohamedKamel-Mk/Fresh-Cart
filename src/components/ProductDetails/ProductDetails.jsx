import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { storeContext } from "../../context/storeContext";
import Slider from "react-slick";
import { toast } from "react-toastify";

export default function ProductDetails() {
  let [btnLoading, setBtnLoading] = useState(true);

  async function addProductToCart(productId) {
    setBtnLoading(false);
    let data = await addToCart(productId);
    console.log(data);
    if (data.status === "success") {
      setBtnLoading(true);
      setCounter(data.numOfCartItems);
      toast.success("Product added successfully");
    }
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: false
  };
  let { counter, setCounter, addToCart } = useContext(storeContext);
  let x = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);

  async function getProduct() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${x.id}`
    );
    setProduct(data.data);
    setLoading(false);
  }
  useEffect(() => {
    getProduct();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-md-3">
            <Slider {...settings}>
              {product.images.map((image,index)=><img src={image} key={index} className="w-100" alt="" />)}
            </Slider>
          </div>
          <div className="col-md-9">
            <h4>{product.title}</h4>
            <p className="my-3">{product.description}</p>
            <span>{product.category.name}</span>
            <div className="d-flex justify-content-between my-3">
              <div>
                <p>{product.price} EGP</p>
              </div>
              <div>
                <i className="fa-solid fa-star rating-color"></i>
                {product.ratingsAverage}
              </div>
            </div>
            <button
            disabled={!btnLoading}
            onClick={() => addProductToCart(product._id)}
            className="btn bg-main text-white w-100"
          >
            {btnLoading ? "Add To Cart" : "Loading..."}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
