import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiPhone } from "react-icons/hi";
import TextField from "utils/TextField";
import { values as ValuesType } from "utils/validateForm";
import { validateForm } from "utils/validateForm";

export default function Contact() {
  const [formErrors, setFormErrors] = useState<ValuesType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [values, setValues] = useState<ValuesType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const { errors } = validateForm(values);
    setFormErrors(errors);
  };

  const handleBlur = (e: any) => {
    // setValues
    // setValues({ ...values, [e.target.name]: e.target.value });
    const { errors } = validateForm(values);
    setFormErrors(errors);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { isValid, errors } = validateForm(values);
    if (isValid) {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.status === 200) {
        toast.success("You have successfully been sent message.");
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong.");
      }
    }
    setFormErrors(errors);
  };

  // contact social data
  const contactData = [
    {
      id: 1,
      href: "https://www.facebook.com/abdizamed143",
      icon: <FaFacebook className="mx-4 h-8 w-8" />,
    },
    {
      id: 2,
      href: "https://github.com/abdi-aaqyaar",
      icon: <FaGithub className="mx-4 h-8 w-8" />,
    },
    {
      id: 3,
      href: "https://www.instagram.com/abdizamed",
      icon: <FaInstagram className="mx-4 h-8 w-8" />,
    },
  ];

  return (
    <>
      <div id="contact-head" className="mt-48 flex justify-center">
        <h1 className="font-montserrat text-4xl font-bold tracking-wide text-gray-700">
          👋 Get in Touch
        </h1>
      </div>
      <section
        id="contact"
        className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
      >
        <div className-="relative bg-white shadow-xl shadow-indigo-100 lg:rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-gray-800 py-10 px-6 text-white sm:px-10 xl:p-12">
              <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                <h1 className="font-poppins text-2xl">Get In Touch</h1>
                <p className="mt-5 text-center font-poppins text-base md:text-left">
                  If you have any question or simply want to contact with us
                </p>
                <div className="mt-7">
                  <div className="flex items-center">
                    <HiPhone className="mx-2 h-8 w-8" />
                    <span className="p-2 font-poppins text-base font-medium md:text-lg">
                      +252 618 977249
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelopeOpen className="mx-2 h-8 w-8" />
                    <span className="p-2 font-poppins text-base font-medium md:text-lg">
                      abdizamedmo@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex justify-center">
                  {contactData.map((contact) => (
                    <a key={contact.id} href={contact.href} target="_blank">
                      {contact.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-10 px-6 shadow-lg shadow-slate-200 sm:px-10 lg:col-span-2">
              <h3 className="font-poppins text-2xl font-medium text-gray-900">
                Send me message 👋
              </h3>

              <form
                className="mt-6 grid grid-cols-1 gap-y-6 font-poppins sm:grid-cols-2 sm:gap-x-8"
                onSubmit={onSubmit}
                noValidate
              >
                <div>
                  <TextField
                    type="text"
                    id="firstName"
                    name="firstName"
                    label="First name *"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="inputStyle"
                    placeholder="First Name..."
                    errors={formErrors.firstName && formErrors.firstName}
                  />
                </div>
                <div>
                  <TextField
                    type="text"
                    id="lastName"
                    name="lastName"
                    label="Last name *"
                    className="inputStyle"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Last Name..."
                    errors={formErrors.lastName && formErrors.lastName}
                  />
                </div>
                <div>
                  <TextField
                    type="email"
                    label="Email Address *"
                    id="email"
                    name="email"
                    className="inputStyle"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email Address..."
                    errors={formErrors.email && formErrors.email}
                  />
                </div>
                <div>
                  <TextField
                    type="number"
                    label="Phone Number *"
                    id="phone"
                    name="phone"
                    className="inputStyle"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Phone number..."
                    errors={formErrors.phone && formErrors.phone}
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="labelStyle">
                      Message *
                    </label>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      rows={3}
                      name="message"
                      className="textarea"
                      placeholder="Message......."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    ></textarea>

                    {formErrors.message && (
                      <span className="mt-2 text-red-500">
                        {formErrors.message && formErrors.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <input
                    type="submit"
                    className="cursor-pointer rounded-md bg-slate-800 px-4 py-3 text-sm text-white transition hover:-translate-y-2 hover:bg-gray-800 md:px-5 md:py-4 md:text-lg"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
