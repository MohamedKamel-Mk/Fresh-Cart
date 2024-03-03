import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/storeContext";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Cart() {
  let { getCart, removeItem, setCounter, updateQTY } = useContext(storeContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  async function deleteProduct(id) {
    let data = await removeItem(id);
    if (data.status === "success") {
      toast.error("Product deleted successfully.");
      setCounter(data.numOfCartItems);
      setData(data);
    }
  }

  async function updateProductQuntiy(id, count) {
    let data = await updateQTY(id, count);
    console.log(data);
    if (data.status === "success") {
      toast.success("Product updated successfully.");
      setCounter(data.numOfCartItems);
      setData(data);
    }
  }

  useEffect(() => {
    (async () => {
      let data = await getCart();
      if (data?.response?.data.statusMsg === "fail") {
        setData(null);
      } else {
        setData(data);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;
  if (data == null || data.numOfCartItems == 0)
    return <h2 className="text-center my-5 text-main">No items in cart.</h2>;
  return (
    <>
      <div className="container bg-main-light my-3 py-3">
        <h2>Shop Cart: </h2>
        <p className="text-main">
          Total Cart Price: {data?.data.totalCartPrice} EGP
        </p>
        {data.data?.products.map((item) => {
          return (
            <div key={item._id} className="row border-bottom py-3">
              <div className="col-md-1">
                <img
                  src={item.product.imageCover}
                  className="w-100"
                  alt={item.product.title}
                />
              </div>
              <div className="col-md-11 d-flex justify-content-between">
                <div>
                  <h5>{item.product.title}</h5>
                  <p className="text-main m-0">Price: {item.price} EGP</p>
                  <button
                    onClick={() => deleteProduct(item.product._id)}
                    className="btn m-0 mt-2 p-0"
                  >
                    <i className="fa-solid fa-trash-can text-main"></i>
                    Remove
                  </button>
                </div>
                <div>
                  <button
                    onClick={() =>
                      updateProductQuntiy(item.product._id, item.count + 1)
                    }
                    className="btn brdr"
                  >
                    +
                  </button>
                  <span className="mx-2">{item.count}</span>
                  <button
                    disabled={item.count >= 1}
                    onClick={() =>
                      updateProductQuntiy(item.product._id, item.count - 1)
                    }
                    className="btn brdr"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <Link to={`/address/${data.data._id}`} className="btn bg-main text-white my-3">
          Place Order
        </Link>
      </div>
    </>
  );
}
