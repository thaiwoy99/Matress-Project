
import conImage from "../assets/Images/contactImage.png"
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

import { Formik } from 'formik';
import * as Yup from 'yup';


interface FormDetails {
  name:string, 
  email:string,
  phone:string, 
  textarea:string,    
  selectedOption: string,
}


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  textarea: Yup.string().required('Message is required'),
  selectedOption: Yup.string().required('Please select a communication method'),
});

const ContactPage: React.FC = () => {
  // Initial values for the form
  const initialValues: FormDetails = {
    name: '',
    email: '',
    phone: '',
    textarea: '',
    selectedOption: '',
  };

  const handleSubmit = (values: FormDetails) => {
    console.log('Form Submitted:', values);
  };

  return (
    <>
      <Nav />
      <section className="w-[90%] mx-auto mt-[250px] lg:flex justify-center lg:mb-10">
        {/* Left Section */}
        <div className="w-full relative lg:w-[46%] mb-10">
          <img src={conImage} className="w-full rounded-lg lg:size-full" alt="Contact Us" />
          <h1 className="text-2xl absolute top-3 text-white font-semibold left-10">Contact Us</h1>
          <div className="space-y-5 p-7 bg-white shadow-lg w-[90%] mx-auto pl-5 rounded-lg absolute bottom-3 md:bottom-10 left-[50%] translate-x-[-50%] lg:bottom-40">
            <div className="flex space-x-4 items-center">
              <span className="text-purple-600 text-3xl">
                <IoCallOutline />
              </span>
              <span>+233 24 428 1122</span>
            </div>
            <div className="flex space-x-4 items-center">
              <span className="text-purple-600 text-3xl">
                <LuMail />
              </span>
              <span>wconsult@yahoo.com</span>
            </div>
            <div className="flex space-x-4 items-center">
              <span className="text-purple-600 text-3xl">
                <IoLocationOutline />
              </span>
              <span>Kumasi, Ghana</span>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white shadow-2xl w-full py-7 mb-8 rounded-lg lg:w-[50%]">
          <h2 className="text-yellow-400 text-3xl md:text-4xl font-semibold mb-11 w-[90%] lg:mb-5 mx-auto text-left">
            Send Us A Message
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
              alert("Form submitted successfully")
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit} className="w-[90%] mx-auto">
                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="mb-10 lg:mb-5 focus:border-2 focus:border-blue-500 focus:outline-none border pl-4 border-gray-200 w-full rounded-full py-2 text-lg text-gray-600 placeholder:text-gray-400"
                />
                {touched.name && errors.name && (
                  <div className="text-red-500 text-sm mb-2">{errors.name}</div>
                )}

                {/* Email Input */}
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="mb-10 lg:mb-5 focus:border-2 focus:border-blue-500 focus:outline-none border pl-4 border-gray-200 w-full rounded-full py-2 text-lg text-gray-600 placeholder:text-gray-400"
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-sm mb-5 mt-[-10px]">{errors.email}</div>
                )}

                {/* Phone Input */}
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="mb-10 lg:mb-5 focus:border-2 focus:border-blue-500 focus:outline-none border pl-4 border-gray-200 w-full rounded-full py-2 text-lg text-gray-600 placeholder:text-gray-400"
                />
                {touched.phone && errors.phone && (
                  <div className="text-red-500 text-sm mb-5 mt-[-10px]">{errors.phone}</div>
                )}

                {/* Radio Buttons */}
                <p className="text-lg font-normal text-gray-500 mb-2">
                  Preferred method of communication
                </p>
                <div className="flex items-center space-x-8">
                  <label className="flex items-center text-lg text-gray-500">
                    <input
                      type="radio"
                      name="selectedOption"
                      value="email"
                      onChange={handleChange}
                      checked={values.selectedOption === 'email'}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center text-lg text-gray-500">
                    <input
                      type="radio"
                      name="selectedOption"
                      value="phone"
                      onChange={handleChange}
                      checked={values.selectedOption === 'phone'}
                      className="mr-2"
                    />
                    Phone
                  </label>
                </div>
                {touched.selectedOption && errors.selectedOption && (
                  <div className="text-red-500 text-sm mb-5 ">{errors.selectedOption}</div>
                )}

                {/* Textarea */}
                <textarea
                  name="textarea"
                  value={values.textarea}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="focus:outline-none border h-[30vh] lg:h-[20vh] border-gray-200 w-full px-4 rounded-lg py-2 text-lg text-gray-600 mt-9 mb-5 placeholder:text-gray-400"
                ></textarea>
                {touched.textarea && errors.textarea && (
                  <div className="text-red-500 text-sm mb-5 mt-[-10px]">{errors.textarea}</div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-yellow-300 hover:bg-yellow-400 text-white text-[18px] font-semibold transition-all duration-700"
                >
                  Send
                </button>
              </form>
            )}
          </Formik>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ContactPage
