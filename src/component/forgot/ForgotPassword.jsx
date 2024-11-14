import styles from "./ForgotPassword.module.css";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import FooterLogin from "../footer/FooterLogin";
import { useState } from "react";
import useLoading from "../hooks/useLoading";

//fpassword components
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [state, setState] = useState(false)
  const [isLoading] = useLoading();
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  };
  const handleSend = async (ev) => {
    ev.preventDefault();
    setState(isLoading);
    await fetch(`${baseUrl}/api_v1/forgot`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.token || data.email) {
          setTimeout(() => {
            alert(`Reset Link sent to ${email}.`);
            navigate("/signin");
          }, 3000);
        } else {
          setTimeout(() => {
            alert(data);      
          }, 3000);
        }
      })
      .catch((error) => alert(error.message))
      .finally(()=>setState(!isLoading))
  };
  const onChangeSend = (ev) => {
    setEmail(ev.target.value);
  };
  return (
    <>
      <Header />
      <div className={styles.forgotPasword}>
        <h1>Forgot password</h1>
        <p>
          Send us an email to reset your password below <FaArrowDown />{" "}
        </p>
        <form onSubmit={handleSend}>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email eg: example@gmail.com"
            onChange={onChangeSend}
          />
          <button type="submit">{state? "Sending e-mail..." : "Send"} </button>
        </form>
      </div>
      <FooterLogin />
    </>
  );
}
export default ForgotPassword;
