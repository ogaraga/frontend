import React, { useContext, useEffect } from "react";
import HeaderLogOut from "../header/HeaderLogOut";
import ProfileSubHeader from "./ProfileSubHeader";
import styles from "./News.module.css";
import FooterLogin from "../footer/FooterLogin";
import { FaDotCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../context/UserContext";
import SwiperLatestNews from "../swiper/SwiperLatestNews";
function News() {
  const { _id, token } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const baseUrl = "https://backends-mocha-nine.vercel.app/";
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  };
  //to monitor users presence on site
  useEffect(() => {
    fetch(`${baseUrl}/api_v1/profile/news/${_id}/${token}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.token || !data.id)
          return navigate("/signin");
      })
      .catch((err) => console.log(err.message));
  }, [user]);

  return (
    <>
      <HeaderLogOut />
      <ProfileSubHeader />
      <h1 className={styles.newsh1}>Welcome to fatherland news desk!.</h1>
      <div className={styles.news}>
        <div className={styles.olderNews}>
          <h2>News Gallery</h2>
          <ul>
            <li>
              <FaDotCircle className={styles.dot} />
              Extern Recruiting:
              <b>
                Extern in partnership with Tuloh international seeks to inform
                all newly graduated students with first class results to visit
                the career page of the company for a paid internship
              </b>
            </li>
            <li>
              <FaDotCircle className={styles.dot} />
              Fatherland Hiring:{" "}
              <b>Fatherland is looking for female software developers </b>
            </li>
            <li>
              <FaDotCircle className={styles.dot} />
              FCT:{" "}
              <b>
                Wike finally nominated and appointed as the FCT minister for the
                first time in the history of this regional landscape.
              </b>
            </li>
            <li>
              <FaDotCircle className={styles.dot} />
              JAMB:{" "}
              <b>
                The girl allerged to forge her JAMB result has gotten a
                scholarship to study abroad.
              </b>
            </li>
          </ul>
        </div>
        <div className={styles.latNews}>
          <h2>Latest news</h2>
          <SwiperLatestNews />
        </div>
      </div>
      <FooterLogin />
    </>
  );
}

export default News;
