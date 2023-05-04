import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React, { useState } from "react";
// import "./loginstyle.css";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

const FormikLogin = () => {
  // const [_, setCookies] = useCookies();
  // const navigate = useNavigate();
  const FormSchema = Yup.object({
    email: Yup.string().email("Please enter email").required("email is must"),
    password: Yup.string()
      .required("Please Enter your password")
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: FormSchema,
      onSubmit: async (value, action) => {

        // main logic
        const response = await axios
          .post("http://localhost:3000/auth/login", {
            username: value.email,
            password: value.password,
          })
          .then((response) => {
            if (response.data.message === "User does not exist") {
              alert("Incorrect username");
              navigate("/login");
            } else if (
              response.data.message === "Username or password incorrect"
            ) {
              alert("Username or password incorrect");
              navigate("/login");
            } else {
              console.log(response.data, "Login successful");
              setCookies("access_token", response.data.token);
              window.localStorage.setItem("userID", response.data.userID);
              navigate("/");
            }
          })
          .catch((err) => {
            console.error("err ", err);
          });
          // main logic ends

        console.log(value);
        action.resetForm();
      },
    });

  return (
    <div className="flex top-0 w-full login gradient  mt-5 justify-center">
      <div class=" shadow-2xl lg:w-[700px] md:w-[600px] w-[90%] rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1 className="text-2xl text-center p-2 font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <label
            className="block text-white mt-3 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            className="shadow-sm appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />{" "}
          <br />
          {errors.email && touched.email ? (
            <span className="text-red-600 text-sm">{errors.email}</span>
          ) : null}
          <br />
          <label
            className="block text-white mt-3 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="text"
            name="password"
            className="shadow-sm appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />{" "}
          <br />
          {errors.password && touched.password ? (
            <span className="text-red-600 text-sm">{errors.password}</span>
          ) : null}
          <br />
          <input
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default FormikLogin;
