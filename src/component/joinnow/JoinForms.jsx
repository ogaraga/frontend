import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./JoinForms.module.css";
import { useContext, useState, useEffect } from "react";
import useLoading from "../hooks/useLoading";
import useRevealPassword from "../hooks/useRevealPassword";
import { FaEye } from "react-icons/fa";
import userContext from "../context/UserContext";

function JoinForms() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
    photos: "",
    password: "",
    password2: "",
  });
  const {user} =useContext(userContext);
  const [state, setState] = useState(false);
  
  // consume usehook for loading and password reveal
  const [isLoading] = useLoading();
  const [handleReveal, reveal] = useRevealPassword();
  const {_id, id} = useParams();
  const navigate = useNavigate();
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: value.username,
      email: value.email,
      phone: value.phone,
      dob: value.dob,
      password: value.password,
      password2: value.password2,
      photos: value.photos,
    }),
  };
  const handleChange = (ev) => {
    setValue((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await fetch(`${baseUrl}/api_v1/joinnow`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data === "User registration successful!") {
          setState(isLoading);
          setTimeout(() => {
            alert("User successfully registered!");
            navigate("/signin");
          }, 3000);
        } else {
          setState(isLoading);
          setTimeout(() => {
            alert(data);
            setState(!isLoading);
          }, 3000);
        }
      })
      .catch((err) => alert(err.message));
  };
  const getProfile = async () => {
    await fetch(`${baseUrl}/api_v1/profile/${_id}/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id || data.id)      
          return navigate(`/profile/${data._id}/${data.id}`);      
      })
      .catch((err) => alert(err.message));
  };
  useEffect(()=>{
    getProfile()
  },[user, id, _id])
  return (
    <div className={styles.join}>
      <h4 className={styles.h4join}>Create Your Account</h4>
      <form onSubmit={handleSubmit} className={styles.joinform}>
        <label htmlFor="username">Full name</label>
        <input
          type="text"
          name="username"
          value={user? value.username: user.email}
          placeholder="Enter your full name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={value.email}
          placeholder="Enter your email eg: example@gmail.com"
          onChange={handleChange}
        />
        <div className={styles.label}>
          <label htmlFor="phone" className={styles.phone}>
            Phone
          </label>
          <label htmlFor="dob" className={styles.dob}>
            DOB
          </label>
        </div>
        <div className={styles.phonedob}>
          <input
            type="text"
            name="phone"
            value={value.phone}
            placeholder="Enter your phone number"
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            value={value.dob}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          name="photos"
          value={value.photos}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        {reveal? 
        <input
          type="password"
          name="password"
          value={value.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />:<input
        type="text"
        name="password"
        value={value.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />}        
        <FaEye className={styles.reveal} onClick={handleReveal}/>

        <label htmlFor="password">Confirm Password</label>
        {reveal?
        <input
          type="password"
          name="password2"
          value={value.password2}
          placeholder="Enter your confirm password"
          onChange={handleChange}/>:<input
          type="text"
          name="password2"
          value={value.password2}
          placeholder="Enter your confirm password"
          onChange={handleChange}/>}
        
        <FaEye className={styles.reveal2} onClick={handleReveal}/>
        <p className={styles.agreejoin}>
          By clicking {" 'Create Account' "}, you agree to the Fatherland{" "}
          {"community's"}{" "}
          <b style={{ color: "green" }}>User Agreement and Privacy Policy</b>{" "}
        </p>
        <button type="submit" className={styles.joinBtn}>
          {state ? "Processing..." : "Sign Up"}
        </button>
        <hr className={styles.joinHr} />
        <div className={styles.lastjoin}>
          <span className={styles.joinspan}>
            Already have an account?
            <Link to="/signin">Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default JoinForms;
