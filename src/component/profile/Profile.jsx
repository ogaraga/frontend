import { useEffect } from "react";
import styles from "./Profile.module.css";
import HeaderLogOut from "../header/HeaderLogOut";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FooterLogin from '../footer/FooterLogin';
import HomeProfile from "./HomeProfile";


function Profile() {
  const { _id, id } = useParams();


  const baseUrl = "https://backend-alpha-two-70.vercel.app";

  const navigate = useNavigate();

  const profile = async () => {
    await fetch(`${baseUrl}/api_v1/profile/${_id}/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.token || !data.id) {
          return navigate("/signin");
        } else {
          return navigate(`/profile/${data_id}/${data.id}`);
        }
      })
      .catch((err) => alert(err.message));
  };
  useEffect(() => {
    profile();
  }, [_id, id]);

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
