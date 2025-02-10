import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true); // Show loading state

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/knarvekar31@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        toast.error("Failed to send message!");
      }
    } catch (error) {
      toast.error("An error occurred. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Contact Me
          </h1>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-darkblue p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          {/* Contact Info Section */}
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1 className="hidden md:block text-2xl lg:text-3xl text-cyan font-medium mb-3 lg:mb-4">
              Get In Touch
            </h1>
            <div className="flex gap-5 mb-4 justify-center md:mb-5">
              <SocialHandles />
            </div>
            <div className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaPhoneAlt className="text-white" />
              <p className="text-white md:text-lg">{ContactData.phone}</p>
            </div>
            <div className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaEnvelope className="text-white" />
              <a href={`mailto:${ContactData.email}`} className="text-white md:text-lg">
                {ContactData.email}
              </a>
            </div>
            <div className="flex gap-3 items-center md:gap-2 lg:gap-5">
              <FaMapMarkerAlt className="text-white" />
              <p className="leading-normal text-start text-white md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex bg-whitesmoke flex-col p-2 rounded-lg md:w-1/2 md:p-4 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <div className="p-2 w-full">
              <input
                required
                placeholder="Name"
                type="text"
                name="name"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <input
                required
                placeholder="Email"
                type="email"
                name="email"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                required
                placeholder="Message"
                name="message"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black p-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                disabled={loading}
                className={`font-medium mx-auto my-3 text-black bg-cyan border-0 py-2 px-12 focus:outline-none rounded-xl text-lg transition duration-500 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:scale-110 hover:bg-orange-600"
                }`}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
