import { Fragment, useRef, useEffect } from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

const MyContact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    form.current.reset();
  };

  const contactInfo = [
    {
      icon: <MdLocationPin className="text-2xl text-[#38bdf8]" />,
      text: "Bahawalpur, Punjab, Pakistan",
      link: "#",
    },
    {
      icon: <MdOutlineAlternateEmail className="text-2xl text-[#38bdf8]" />,
      text: "jahanzaibmahar18@gmail.com",
      link: "mailto:jahanzaibmahar18@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-[#38bdf8]" />,
      text: "+92 3076341312",
      link: "tel:+923076341312",
    },
    {
      icon: <CgWebsite className="text-2xl text-[#38bdf8]" />,
      text: "jahanzaibmahar.com.app",
      link: "https://jahanzaib-mahar-web.vercel.app/",
    },
  ];

  return (
    <Fragment>
      <section
        id="contact"
        className="relative py-16 md:py-24 px-4 sm:px-6 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-[#38bdf8]">Touch</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              Have a project in mind? Let's connect and build something amazing.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                Send me a message
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#38bdf8]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#38bdf8]"
                  />
                </div>

                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#38bdf8]"
                />

                <textarea
                  rows="4"
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#38bdf8]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/2 bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                    >
                      {item.icon}
                      <span className="text-gray-200 text-sm sm:text-base break-all">
                        {item.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Available for work
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Available for freelance and full-time opportunities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ToastContainer theme="dark" />
    </Fragment>
  );
};

export default MyContact;