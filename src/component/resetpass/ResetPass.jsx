
import styles from "./ResetPass.module.css";
import Header from "../header/Header";
import FooterJoin from "../footer/FooterJoin";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useLoading from "../hooks/useLoading";

function ResetPass() {
  //using the parameters of this specific url.
  const { email, token } = useParams();

  //state management
  const [value, setValue] = useState({
    email: email,
    phone: "",
    dob:'',
    picture: '',
    password: "",
  });
  const [state, setState] = useState(false);
  const [isLoading] = useLoading();

  //change your input fields
  const onChangeSend = (ev) => {
    setValue((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };
  const navigate = useNavigate();

  //variable declaration
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  const options = {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: value.email,
      phone: value.phone,
      dob: value.dob,
      picture:value.picture,
      password: value.password,
    }),
  };
  //   send or submit your request by a click
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await fetch(`${baseUrl}/api_v1/resetpass/${email}/${token}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.token || data.token === token) {
          setState(isLoading);
          setTimeout(() => {
            alert("Update successfully saved!");
            navigate("/signin");
          }, 3000);
        } else if (
          data ===
          "This user is not in the database; you are now being redirected to create an account"
        ) {
          setState(isLoading);
          setTimeout(() => {
            alert(data);
            navigate("/joinnow");
          }, 3000);
        } else {
          setState(isLoading);
          setTimeout(() => {
            alert(data);
            setState(!isLoading);
          }, 3000);
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <Header />
      <div className={styles.resetPasword}>
        <h1 className={styles.resetH1}>Update your details</h1>
        <p className={styles.resetP}>
          you are about to reset your vital statistics
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            value={value.email}
            placeholder="Enter your valid email"
            onChange={onChangeSend}
            
          />
          <label htmlFor="picture">Picture</label>
          <input
            type="file"
            name="picture"
            value={value.picture}
            accept="jpg, jpeg, png, svg" multiple
            onChange={onChangeSend}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={value.phone}
            placeholder="Enter your phone no"
            onChange={onChangeSend}
          />
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            name="dob"
            value={value.dob}
            onChange={onChangeSend}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={value.password}
            placeholder="Enter your password"
            onChange={onChangeSend}
          />

          <button type="submit">{state? 'Resetting & updating...': 'Reset'}</button>
          <FooterJoin />
        </form>
      </div>
    </>
  );
}

export default ResetPass;
