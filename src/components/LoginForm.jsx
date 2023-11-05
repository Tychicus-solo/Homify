import { Field, Formik, Form, ErrorMessage } from "formik";
import { RxPerson } from "react-icons/rx";
import { useNavigate, NavLink } from "react-router-dom";
import { BsEmojiAngry } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Homify from "../assets/commonImgs/Homify.svg";
import InfoImg from "../assets/commonImgs/productInfoImg.svg";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("email address is required"),
  password: Yup.string()
    .required("password is required")
    .min(8, "password must be at least 8 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

const FormField = () => {
  const navigate = useNavigate();
  const onSubmit = (values, { setSubmitting }) => {
    validationSchema
      .validate(values)
      .then(() => {
        // validation passed, navigate to the desired page
        navigate("/modulePage");
      })
      .catch(() => {
        // validation failed, do nothing
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="flex flex-col bg-[#E5E5E5]  items-center h-screen w-screen">
      <div className="flex flex-col  mt-[6rem]  items-center">
        <img src={Homify} alt="" />
        <div className=" bg-white mt-[2rem] w-[24rem] px-[3rem] py-[2rem] rounded-[20px] ">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <h1 className="text-[#000000] text-center mb-[2.2rem] text-[1.55rem]">
                  Login to continue
                </h1>
                <div className="mb-[1.2rem] form-control">
                  <div className="  flex relative items-center ">
                    <Field
                      placeholder="Enter email address"
                      id="email"
                      type="email"
                      name="email"
                      className=" border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                    />
                    <div className="absolute right-3 top-3">
                      <RxPerson className="text-gray-600" />
                    </div>
                  </div>
                  {errors.email && touched.email ? (
                    <div className="flex mt-2 text-red-800 items-center">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="email" />
                    </div>
                  ) : null}
                </div>
                <div className="mb-4 form-control">
                  <div className="flex relative items-center ">
                    <Field
                      placeholder="Enter password here"
                      id="password"
                      type="password"
                      name="password"
                      className="border-solid border-2 bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] w-full py-2 px-4 rounded-md"
                    />
                    <div className="absolute right-3 top-3  ">
                      <FiKey className="text-gray-600" />
                    </div>
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-red-800 flex items-center mt-2">
                      <BsEmojiAngry className="mr-2" />
                      <ErrorMessage name="password" className="text-sm" />
                    </div>
                  ) : null}
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <input type="checkbox" className="accent-[#0a2c33]" />
                    <h3 className="text-start text-[0.8rem] ml-2">
                      Remember me
                    </h3>
                  </div>
                  <h3 className="text-start text-[0.8rem]">
                    <NavLink className="underline" to="/forgotpassword">
                      Forgot Password ?
                    </NavLink>
                  </h3>
                </div>
                <button
                  type="submit"
                  className="bg-[#0A2C33] text-white w-full py-5 mt-4 rounded-[10px]"
                >
                  {isSubmitting ? "Logging In...." : "Login"}
                </button>
                <h3 className="mt-6 text-center">
                  {" "}
                  Do not have an account?{" "}
                  <span>
                    {" "}
                    <NavLink to="/signup">Sign up</NavLink>{" "}
                  </span>
                </h3>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex mt-[8rem] ">
          <img src={InfoImg} alt="" />

          <button
            type="submit"
            className="bg-[#181818] rounded-[30px] ml-4 px-9 text-white"
          >
            <a
              href="https://www.linkedin.com/in/tolu-eniolorunda-b3a043208/"
              target="blank"
            >
              Having issues? Talk to us
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormField;
