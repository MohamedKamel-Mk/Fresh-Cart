import axios from "axios";
import { createContext, useState } from "react";
import { baseURL } from "../utils/baseUrl";

export let storeContext = createContext(0);

function addToCart(productId) {
  return axios
    .post(
      baseURL + "cart",
      { productId },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => err);
}

async function removeItem(productId) {
  return axios
    .delete(baseURL + "cart/" + productId, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then(({ data }) => data)
    .catch((err) => err);
}

async function updateQTY(productId, count) {
  return axios
    .put(
      baseURL + "cart/" + productId,
      { count },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => err);
}

async function getCart() {
  return axios
    .get(baseURL + "cart", {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then(({ data }) => data)
    .catch((err) => err);
}

async function pay(cartId, shippingAddress) {
  return axios
    .post(
      baseURL + "orders/checkout-session/" + cartId,
      { shippingAddress },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => err);
}

export default function StoreContextProvider({ children }) {
  let [counter, setCounter] = useState(0);

  return (
    <storeContext.Provider
      value={{ counter, setCounter, addToCart, getCart, removeItem, updateQTY, pay }}
    >
      {children}
    </storeContext.Provider>
  );
}
