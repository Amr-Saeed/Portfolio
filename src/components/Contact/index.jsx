import { useEffect, useState } from "react";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import gifImg from "../../assets/images/aa.gif";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const contactArray = "Contact Me".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    let fullName = form.current.name.value;
    let subject = form.current.subject.value;
    let message = form.current.message.value;
    let email = form.current.email.value;

    let firstName = fullName.split(" ")[0];
    firstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

    const templateParams = {
      firstname: firstName,
      name: fullName,
      subject: subject,
      message: message,
      email: email,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message successfully sent!", { theme: "dark" });
          const timeout = setTimeout(() => {
            form.current.reset();
            setLoading(false);
          }, 3800);
          return () => clearTimeout(timeout);
        },
        () => {
          setLoading(false);
          toast.error("Failed to send the message, please try again", {
            theme: "dark",
          });
        }
      );
  };

  console.log(import.meta.env.VITE_EMAIL_SERVICE_ID);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I’m open to new opportunities and collaborations! If you’re looking
            for someone who can bring fresh ideas and deliver impactful results,
            let’s get in touch!
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button
                    type="submit"
                    className="flat-button"
                    disabled={loading}
                  >
                    {loading ? <ClipLoader color="#fff" size={20} /> : "SEND"}
                  </button>
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className="profile-card map-wrap">
          <img
            src="/12.jpg"
            alt="Contact illustration"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* <div className="map-wrap">
          <div className="info-map">
            Sudip Banerjee
            <br />
            Kolkata, <br />
            West Bengal, <br />
            India
            <br />
          </div>
          <MapContainer center={[22.56263, 88.36304]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.56263, 88.36304]}>
              <Popup>
                Sudip lives here, come over for a cup of coffee :{')'}
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
