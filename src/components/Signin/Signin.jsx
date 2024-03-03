import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Signin() {
  let navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  function sendDataToApi(values) {
    setLoading(false);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then(({ data }) => {
        console.log(data);
        if (data.message === "success") {
          localStorage.setItem("token", data.token);
          navigate("/home");
        }
      })
      .catch((err) => {
        setErrorMsg(err.response.data.message);
        setLoading(true);
      });
  }

  function validationSchema() {
    let schema = new Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(/^[A-Z][a-zA-Z0-9@]{6,}$/)
        .required(),
    });
    return schema;
  }

  let login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      sendDataToApi(values);
    },
  });
  return (
    <div>
      <div className="w-75 m-auto my-5">
        <h2>login Now: </h2>
        <form onSubmit={login.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            onBlur={login.handleBlur}
            value={login.values.email}
            onChange={login.handleChange}
            type="email"
            name="email"
            className="form-control mb-3"
            id="email"
            placeholder="Type your email..."
          />
          {login.errors.email && login.touched.email ? (
            <div className="alert alert-danger">{login.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="password">Password: </label>
          <input
            onBlur={login.handleBlur}
            value={login.values.password}
            onChange={login.handleChange}
            type="password"
            name="password"
            className="form-control mb-3"
            id="password"
          />
          {login.errors.password && login.touched.password ? (
            <div className="alert alert-danger">{login.errors.password}</div>
          ) : (
            ""
          )}

          {errorMsg ? <div className="alert alert-danger">{errorMsg}</div> : ""}
          <button
            disabled={!(login.dirty && login.isValid)}
            type="submit"
            className="btn bg-main text-white"
          >
            {loading ? "signin" : <i className="fa fa-spinner fa-spin"></i>}
          </button>
        </form>
      </div>
    </div>
  );
}
