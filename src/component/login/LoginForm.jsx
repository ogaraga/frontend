import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useContext, useEffect, useState } from "react";
import userContext from "../context/UserContext";
import useLoading from "../hooks/useLoading";
import { FaEye } from "react-icons/fa";
import useRevealPassword from "../hooks/useRevealPassword";
function LoginForm() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(true);
  const {user} = useContext(userContext);
  const[state, setState] = useState();
  const [isLoading] = useLoading();
  const [handleReveal, reveal] = useRevealPassword();
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  const options = {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: value.email, password: value.password }),
  };
  const handleChange = (ev) => {
    setValue((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setState(isLoading);
    setUser({ email: value.email });
    await fetch(`${baseUrl}/api_v1/signin`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.token || data.id) {
         
          setTimeout(() => {
            alert("You are logged in!");
            navigate(`/profile/${data._id}/${data.id}`);
          }, 3000);
        } else {
          setTimeout(() => {
            alert(data);
          }, 3000);
        }
      })
      .catch((err) => alert(err.message))
      .finally(()=>setState(!isLoading))
  };
  const {_id, id} = useParams();
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
    <>
    
      <div className={styles.login}>
        <h4 className={styles.h4login}>Log In</h4>
        <p className={styles.plogin}>Welcome back! Glad to see you again.</p>
        <form className={styles.loginform} onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={user? user.username : value.email}
            placeholder="Enter your email address. eg: example@gmail.com"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          {reveal? 
          <input
            type="password"
            name="password"
            value={value.password}
            placeholder="Enter your password, at least 6 characters"
            onChange={handleChange} 
          />:<input
          type="text"
          name="password"
          value={value.password}
          placeholder="Enter your password, at least 6 characters"
          onChange={handleChange} 
        />}
          <FaEye className={styles.reveal} onClick={handleReveal}/>
          <button type="submit" className={styles.loginBtn}>
            {state? 'Logging in...': 'Sign In'}
          </button>
        </form>
        <div className={styles.laststat}>
          <span className={styles.forgot}>
            <Link to="/forgot">Forgot Password?</Link>
          </span>
          <hr className={styles.loginHr} />
          <p className={styles.p2login}>
            <span className={styles.loginspan}>You dont have an account?</span>
            <Link to="/joinnow">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
