import { Formik, Field, ErrorMessage, Form } from "formik";
import { NavLink } from "react-router-dom";
import Homify from "../assets/commonImgs/Homify.svg";

import { BsEmojiAngry } from "react-icons/bs";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),
  referralCode: Yup.string()
    .trim()
    .matches(
      /^[\w-]+$/,
      "Referral code can only contain letters, numbers, hyphens and underscores"
    )
    .max(20, "Referral code can't be longer than 20 characters")
    .required("Referral code is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignupForm = () => {
  const navigate = useNavigate();
  const onSubmit = (values, { setSubmitting }) => {
    validationSchema
      .validate(values)
      .then(() => {
        navigate("/modulePage");
      })
      .catch(() => {})
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="flex flex-col justify-center my-[100px] sm:my-[60px] bg-[#e5e5e5] h-[100%] w-screen">
      <div className="flex flex-col items-center">
        <img src={Homify} className="self-center" alt="" />
        <div className="bg-white mt-[2rem] w-[24rem] px-[3rem] pb-12 py-[2rem] rounded-[20px]">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <h1 className="text-[#000000] text-center mb-[1rem] text-[1.55rem]">
                  Create an account
                </h1>
                <div className="form-control mb-[1rem]">
                  <Field
                    placeholder="First Name"
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="flex mt-1 text-red-800 items-center">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="firstName" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control mb-[1rem]">
                  <Field
                    placeholder="Last Name"
                    id="lastName"
                    type="text"
                    name="lastName"
                    className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="flex mt-1 text-red-800 items-center">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="lastName" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control mb-[1rem]">
                  <Field
                    placeholder="Email Address"
                    id="email"
                    type="email"
                    name="email"
                    className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                  />
                  {errors.email && touched.email ? (
                    <div className="flex mt-1 text-red-800 items-center">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="email" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control mb-[1rem]">
                  <Field
                    placeholder="Referral Code"
                    id="referralCode"
                    type="text"
                    name="referralCode"
                    className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                  />
                  {errors.referralCode && touched.referralCode ? (
                    <div className="flex mt-1 text-red-800 items-center">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="referralCode" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control mb-[1rem]">
                  <Field
                    placeholder="Password"
                    id="password"
                    type="password"
                    name="password"
                    className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                  />
                  {errors.password && touched.password ? (
                    <div className="flex mt-1 text-red-800 items-center">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="password" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control mb-[1rem]">
                  <Field
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                  />
                  {errors.confirmPassword && touched.Password ? (
                    <div className="flex mt-1 text-red-800 items-center">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="confirmPassword" />
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="bg-[#0A2C33] text-white w-full py-5 mt-5 rounded-[10px]"
                >
                  {isSubmitting ? "logging in....." : "Login"}
                </button>
                <NavLink to="/Login">
                  <h3 className="mt-4 text-center">Already a user? Login</h3>
                </NavLink>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
