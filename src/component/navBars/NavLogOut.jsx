import fatherLogo from "../assets/logo.png";
import styles from "./NavBar.module.css";
import {
  FaBars,
  FaBell,
  FaXbox,
  FaEnvelope,
  FaHome,
  FaInfo,
  FaPeopleCarry,
  FaSearch,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import userContext from "../context/UserContext";
import { Link, useParams } from "react-router-dom";
import Modal from "../modal/Modal";
import Online from "./Online";
import UseLogOut from "../hooks/useLogOut";
import useModal from "../hooks/useModal";
function NavLogOut() {
    const [toggle, setToggle] = useState(true);
  const [activeNavBar, setActiveNavBar] = useState(false);
  const {_id,id} = useParams();
  const { user } = useContext(userContext);
  
  //calling up handleLogout hook
  const [handleLogOut, state] = UseLogOut();

  // calling delete hook here
   const [handleOpenModal,modal]= useModal();
  
  // toggle bar
  const handleBar = () => {
    setToggle(!toggle);
    setActiveNavBar(activeNavBar);
  };
  const handleRemove = () => {
    setToggle(!toggle);
    setActiveNavBar(activeNavBar);
  };
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  
  const options = {
    method: 'GET',
    credentials: 'include',
    headers:{
      'content-type': 'application/json'
    }
  }
  useEffect(()=>{
    fetch(`${baseUrl}/api_v1/profile/home/${_id}/${id}`,options).then(res=>res.json()).then(data=> console.log(data)).catch(err=>console.log(err.message))
  },[user, _id, id])

  return (
    <>
      {modal && <Modal/>}
      <div className={styles.navbar}>
        <span>
          <img src={fatherLogo} alt="Fatherland Logo" />
        </span>
        <span className={styles.online1}>
        <Online /></span>
        <span className={styles.userX}>{user.email}</span>
        <div className={styles.navbarbtn}>
          <button className={styles.menudelete} onClick={handleOpenModal}>
            <span>Delete Account</span>{" "}
          </button>
          <button className={styles.menulogout} onClick={handleLogOut}>
            <span>{state ? "Exiting..." : "LogOut"}</span>
          </button>
          {toggle ? (
            <FaBars className={styles.bars} onClick={handleBar} />
          ) : (
            <>
              {modal && !(<Modal />)}
              <div
                className={
                  activeNavBar ? styles.navbarX : styles.navbarX_isActive
                }
              >
                <span className={styles.online2}><Online /></span>
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="User Image"
                  width="10"
                  height="50"
                  className={styles.img_userX}
                />

                <span className={styles.user}>{user.email}</span>

                <div className={styles.navbarbtn}>
                  <button className={styles.menudeleteX} onClick={handleOpenModal}>
                    <span>Delete Account</span>{" "}
                  </button>
                  <button className={styles.menulogoutX} onClick={handleLogOut}>
                    <span>{state ? "Exiting..." : "LogOut"}</span>
                  </button>
                </div>
              </div>
              <div className={styles.social_header}>
              <ul>
            <span>
              <FaHome />
              <li><Link to={`profile/home/${_id}/${token}`} >Home</Link></li>
            </span>
            <span>
              <FaPeopleCarry />
              <li><Link to={`/profile/comm/${_id}/${id}`} >Communities</Link></li>
            </span>
            <span>
              <FaEnvelope />
              <li><Link to={`/profile/converse/${_id}/${id}`} >Conversations</Link></li>
            </span>
            <span>
              <FaBell />
              <li><Link to={`/profile/notify/${_id}/${token}`} >Notifications</Link></li>
            </span>
            
            <span>
              <FaEnvelope />
              <li><Link to={`/profile/message/${_id}/${id}`} >Message</Link></li>
            </span>
            
            <span>
              <FaInfo />
              <li><Link to={`/profile/news/${_id}/${id}`} >News</Link></li>
            </span>
            <span>
              <FaSearch />
              <li><Link to={`/profile/explore/${_id}/${id}`} >Explore</Link></li>            </span>
          </ul>
        </div>      
              <FaXbox className={styles.xmark} onClick={handleRemove} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NavLogOut;
