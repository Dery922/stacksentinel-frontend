import React, { useState } from "react";
import "./style.css";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FullPageLoader from "../../components/fullPageLoader";

const XLoginPage = () => {
  const [view, setView] = useState("main");
  const [isLoading, setIsLoading] = useState(false); // Add this state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(initialValues);
  const { email, password } = login;

  // validation logic goes here

  const loginValidation = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const handleRegisterSubmit = async (values) => {
    try {
      setIsLoading(true); // Show loader
      await axios.post("http://localhost:8989/api/register", values);
      // Notice: process.env and also endpoint path added
    } catch (error) {
      setIsLoading(false);
      console.log({ error: error.message });
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        // This is a network error or CORS issue
        toast.error("Network error: " + error.message);
      }
    }
  };

  const handleLoginSubmit = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "http://localhost:8989/api/login",
        values
      );
      // Properly extract user and token if data is flat
      const { token, ...user } = data;
      if (!token) {
        toast.info("No token received!!");

        return;
      }

      // Set in redux
      dispatch({ type: "LOGIN", payload: { user, token } });

      // Save in cookies
      Cookies.set("user", JSON.stringify(user));
      Cookies.set("token", token);
      navigate("/dashboard");
      toast.success("Login successfully!");
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        // This is a backend error with a JSON response
        toast.error(error.response.data.message);
      } else {
        // This is a network error or CORS issue
        toast.error("Network error: " + error.message);
      }
      console.error(error);
    }
  };

  return (
    <div className="x-login-container">
      {isLoading && <FullPageLoader />}
      <div className="x-login-left">
        <h1>Welcome to </h1>
        <span>
          <a href="/">
            <img
              src="/logo1.svg"
              style={{ width: 350, height: 250 }}
              alt="logo"
            />
          </a>
        </span>
        <p>Connect with your world in one click.</p>
      </div>

      <div className="x-login-right">
        {view === "main" && (
          <form className="x-login-form">
            <h2>Create an account</h2>

            <button className="button-custom-google" type="button">
              <img
                style={{ width: 50, height: 25 }}
                className="googleimg"
                src="/assets/img/googlelogo.svg"
                alt="Google logo"
              />
              Sign up with Google
            </button>

            <div className="divider">
              <span className="line1"></span>
              <p>Or</p>
              <span className="line2"></span>
            </div>

            <button
              onClick={() => setView("register")}
              type="button"
              className="btn-g-stack"
            >
              Create account
            </button>

            <div className="terms1">
              <span className="terms">
                By signing up, you agree to the{" "}
                <a href="/" style={{ color: "orange" }}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/" style={{ color: "orange" }}>
                  Privacy Policy
                </a>
                , including{" "}
                <a href="/" style={{ color: "orange" }}>
                  Cookie Use
                </a>
                .
              </span>
            </div>

            <p className="x-forgot">Forgot password?</p>

            <div style={{ padding: 19 }} className="alr-stack">
              <div>
                <h4>Already have an account?</h4>
              </div>
              <button
                onClick={() => setView("login")}
                className="button-custom-google"
                type="button"
              >
                Sign in
              </button>
            </div>
          </form>
        )}

        {view === "login" && (
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidation}
            onSubmit={handleLoginSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="login-form">
                <h3 className="form-title">Login to your StackSentinel ID</h3>

                {/* Email Field */}
                <div
                  className={`form-group ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                >
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <Field
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      aria-describedby="email-error"
                    />
                    <div className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                  {errors.email && touched.email && (
                    <div
                      id="email-error"
                      className="error-message"
                      role="alert"
                    >
                      <svg
                        className="error-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div
                  className={`form-group ${
                    errors.password && touched.password ? "error" : ""
                  }`}
                >
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      aria-describedby="password-error"
                    />
                    <div className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  </div>
                  {errors.password && touched.password && (
                    <div
                      id="password-error"
                      className="error-message"
                      role="alert"
                    >
                      <svg
                        className="error-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {errors.password}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" viewBox="0 0 50 50">
                        <circle
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          strokeWidth="5"
                        ></circle>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>

                <p className="form-footer">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => setView("register")}
                  >
                    Create an account
                  </button>
                </p>
              </Form>
            )}
          </Formik>
        )}

        {view === "register" && (
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={handleRegisterSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="login-form">
                <h3 className="form-title">Sign up for StackSentinel</h3>

                {/* Email Field */}
                <div
                  className={`form-group ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                >
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <Field
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      aria-describedby="email-error"
                    />
                    <div className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                  {errors.email && touched.email && (
                    <div
                      id="email-error"
                      className="error-message"
                      role="alert"
                    >
                      <svg
                        className="error-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div
                  className={`form-group ${
                    errors.password && touched.password ? "error" : ""
                  }`}
                >
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      aria-describedby="password-error"
                    />
                    <div className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  </div>
                  {errors.password && touched.password && (
                    <div
                      id="password-error"
                      className="error-message"
                      role="alert"
                    >
                      <svg
                        className="error-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {errors.password}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" viewBox="0 0 50 50">
                        <circle
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          strokeWidth="5"
                        ></circle>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <p className="form-footer">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => setView("login")}
                  >
                    Log in
                  </button>
                </p>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default XLoginPage;
