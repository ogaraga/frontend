import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import FooterLogin from "../footer/FooterLogin";
import Header from "../header/Header";
import useLoading from "../hooks/useLoading";
import { useNavigate } from "react-router-dom";
function ContactUs() {
  const [state, setState] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  const [isLoading] = useLoading();
  const handleChangeThem = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: values.username,
      email: values.email,
      subject: values.subject,
      message: values.message,
    }),
  };
  const handleSubmitThem = async (e) => {
    e.preventDefault();
    setState(isLoading);
    await fetch(`${baseUrl}/api_v1/contact`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data === "Your message has been sent!") {
          setTimeout(() => {
            alert(
              `${values.username}, Your message has been sent successfully!`
            );
            navigate("/");
          }, 3000);
        } else {
          setTimeout(() => {
            alert(data);
          }, 3000);
        }
      })
      .catch((err) => alert(err.message))
      .finally(()=>setState(!isLoading));
  };
  return (
    <>
      <Header />
      <div className={styles.allContacts}>
      <div className={styles.formcontainer}>
        <h1>Contact us form</h1>
        <form
          onSubmit={handleSubmitThem}
          method="post"
          className={styles.contactForm}
        >
          <p>
            Kindly send us a message and we shall get back to you as soon as
            possible.
          </p>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            name="username"
            value={values.username}
            placeholder="Enter your full name"
            onChange={handleChangeThem}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter your email"
            onChange={handleChangeThem}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={values.subject}
            placeholder="Subject"
            onChange={handleChangeThem}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={values.message}
            cols="30"
            rows="10"
            placeholder="Write your message here..."
            onChange={handleChangeThem}
          ></textarea>
          <button type="submit">
            {state ? "Sending Message..." : "Submit"}
          </button>
        </form>
        
      </div>
      <div className={styles.otherinfo}>
          <p>You can also reach out to us through: 
            <span>Email: raymond@fatherland.com</span>
            <span>Website: https://fatherland.com || https://tulohinternational.com</span>
            <span>Tel: +2348069304370</span>
          </p>
        </div>
        </div>
      <FooterLogin />
    </>
  );
}

export default ContactUs;
