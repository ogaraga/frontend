import { useEffect } from "react";
import styles from "./Profile.module.css";
import HeaderLogOut from "../header/HeaderLogOut";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FooterLogin from '../footer/FooterLogin';
import HomeProfile from "./HomeProfile";
import News from "./News";

function Profile() {
  const { _id, token } = useParams();


  const baseUrl = "https://backends-mocha-nine.vercel.app";

  const navigate = useNavigate();

  const profile = async () => {
    await fetch(`${baseUrl}/api_v1/profile/${_id}/${token}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.token || !data.id) {
          return navigate("/signin");
        } else {
          return navigate(`/profile/${_id}/${token}`);
        }
      })
      .catch((err) => alert(err.message));
  };
  useEffect(() => {
    profile();
  }, []);

  return (
    <>
      <div className={styles.profile}>
        <HeaderLogOut />
        <HomeProfile/> 
        <FooterLogin/>      
      </div>
    </>
  );
}

export default Profile;
