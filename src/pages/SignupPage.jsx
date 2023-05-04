import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React, { useState } from "react";
// import "./loginstyle.css";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

const FormikForm = () => {
  // const [_, setCookies] = useCookies();
  // const navigate = useNavigate();
  const FormSchema = Yup.object({
    email: Yup.string().email("Please enter email").required("email is must"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: FormSchema,
      onSubmit: async (value, action) => {

        // main logic
        const response = await axios
          .post("http://localhost:3000/auth/register", {
            username: value.email,
            password: value.password,
          })
          .then((response) => {
            if (response.data.message === "User already exist") {
              alert("Already registered please login...");
              navigate("/login");
            } else {
              console.log(response.data, "Register seccessful");
              setCookies("access_token", response.data.token);
              window.localStorage.setItem("userID", response.data.userID);
              navigate("/");
            }
          });
          // main logic ends

        console.log(value);
        action.resetForm();
      },
    });

  return (
    <div className="flex z-50 w-full login gradient mt-5 justify-center">
      <div class=" shadow-md lg:w-[700px] md:w-[600px] w-[90%] rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1 className="text-2xl text-center p-2 font-semibold">Signup</h1>
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
          {errors.email && touched.email ? <span className="text-red-600 text-sm">{errors.email}</span> : null}
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
          <label
            className="block text-white mt-3 text-sm font-bold mb-1"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            type="text"
            name="confirmPassword"
            className="shadow-sm appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />{" "}
          <br />
          {errors.confirmPassword && touched.confirmPassword ? (
            <span className="text-red-600 text-sm">{errors.confirmPassword}</span>
          ) : null}
          <br />
          <input
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default FormikForm;
