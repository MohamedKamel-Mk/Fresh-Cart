import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CirclesWithBar } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { storeContext } from "../../context/storeContext";
import toast from "react-hot-toast";

export default function FeaturedProducts() {
  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(true)
  // async function getProducts(){
  // let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  // setProducts(data.data)
  // setLoading(false)
  // }
  // useEffect(()=>{
  // getProducts()
  // },[])

  function getProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isError, isFetching, refetch } = useQuery(
    "featuredProducts",
    getProducts,
    {
      // cacheTime: 300000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // staleTime: 50000,
      // refetchInterval: 10000,
      // refetchOnReconnect: false,
      // enabled: false,
    }
  );
  let { addToCart } = useContext(storeContext);
  async function postToCart(id) {
    let data = await addToCart(id);
    if (data.status == "success") {
      toast.success(data.message, {
        duration: 6000,
      });
    }
  }

  return (
    <>
      <div className="container">
        <h2>Featured Products</h2>
        {/* <button onClick={refetch} className='btn bg-main text-bg-light'>Get Products</button> */}

        {isLoading ? (
          <div className="">
            <CirclesWithBar
              height="100"
              width="100"
              color="#4fa94d"
              outerCircleColor="#4fa94d"
              innerCircleColor="#4fa94d"
              barColor="#4fa94d"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass="d-flex justify-content-center mt-5"
              visible={true}
            />
          </div>
        ) : (
          <div className="row gy-4">
            {data?.data.data.map((product) => (
              <div key={product.id} className="col-lg-2">
                <div className="product p-2">
                  <Link to={"/product-details/" + product._id}>
                    <img
                      src={product.imageCover}
                      className="w-100"
                      alt={product.title}
                    />
                    <span className="font-sm text-main">
                      {product.category.name}
                    </span>
                    <h3 className="h5">
                      {product.title.split(" ").splice(0, 2).join(" ")}
                    </h3>
                    <div className="d-flex py-3 justify-content-between align-items-center">
                      <span className="font-sm">{product.price} EGP</span>
                      <span className="font-sm">
                        <i className="fas fa-star rating-color me-1"></i>
                        {product.ratingsAverage}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
