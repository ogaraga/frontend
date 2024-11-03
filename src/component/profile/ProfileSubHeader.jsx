import React, { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import {
  FaBell,
  FaEnvelope,
  FaHome,
  FaInfo,
  FaPeopleCarry,
  FaSearch,
} from "react-icons/fa";
import destination from "../assets/destination6.png";
import artifacts from "../assets/feature-2.png";
import favorite1 from "../assets/feature-3.png";
import favorite2 from "../assets/feature-4.png";
import transactMan from "../assets/feature-1.png";
import userContext from "../context/UserContext";
import { Link, useParams } from "react-router-dom";
import Explore from "./Explore";
function ProfileSubHeader() {
  const [open, setOpen] = useState(true);
  const { _id, id } = useParams();
  const { user } = useContext(userContext);
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  };
  useEffect(() => {
    fetch(`${baseUrl}/api_v1/profile/home/${_id}/${id}`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  }, [user, _id, id]);

  const handleSearch = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <img
          src="https://avatar.iran.liara.run/public"
          alt="User Image"
          className={styles.img_user}
        />
        <span>{user.email}</span>
      </div>
      <div className={styles.mainprofile}>
        <div className={styles.social_header}>
          <ul>
            <span>
              <FaHome />
              <li>
                <Link to={`/profile/home/${_id}/${id}`}>Home</Link>
              </li>
            </span>
            <span>
              <FaPeopleCarry />
              <li>
                <Link to={`/profile/comm/${_id}/${id}`}>Communities</Link>
              </li>
            </span>
            <span>
              <FaEnvelope />
              <li>
                <Link to={`/profile/converse/${_id}/${id}`}>
                  Conversations
                </Link>
              </li>
            </span>
            <span>
              <FaBell />
              <li>
                <Link to={`/profile/notify/${_id}/${id}`}>
                  Notifications
                </Link>
              </li>
            </span>

            <span>
              <FaEnvelope />
              <li>
                <Link to={`/profile/message/${_id}/${id}`}>Message</Link>
              </li>
            </span>

            <span>
              <FaInfo />
              <li>
                <Link to={`/profile/news/${_id}/${id}`}>News</Link>
              </li>
            </span>
            <span> 
              {open? <FaSearch /> : <Explore />}
              <li style ={{cursor:'pointer', color: 'green'}} onClick={handleSearch}>Explore</li>
            </span>
          </ul>
        </div>
      </div>
      <div className={styles.destopimages}>
        <span>
          <img src={destination} alt="Image" />
          <h2>Explore top destinations</h2>
          <p>fatherland atlantic</p>
        </span>
        <span>
          <img src={transactMan} alt="Image" />
          <h2>Perform financial transactions instantly</h2>
          <p>fatherland money</p>
        </span>
        <span>
          <img src={artifacts} alt="Image" />
          <h2>discover your cultural artifacts</h2>
          <p>artistic shopping</p>
        </span>
        <span>
          <img src={favorite1} alt="Image" />
          <h2>indulge in a satisfying culinary experience</h2>
          <p>food & restaurants</p>
        </span>
        <span>
          <img src={favorite2} alt="Image" />
          <h2>stay connected & engaged</h2>
          <p>tickets & events</p>
        </span>
      </div>
    </>
  );
}

export default ProfileSubHeader;
