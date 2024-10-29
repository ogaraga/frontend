import React, { useContext, useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import {
  FaArrowRight,
  FaDotCircle,
  FaKey,
  FaMarkdown,
  FaMoneyCheck,
  FaPlaneDeparture,
  FaSadCry,
  FaShoppingCart,
  FaTicketAlt,
  FaToggleOff,
  FaUpload,
  FaUtensilSpoon,
  FaVideo,
} from "react-icons/fa";
import styles from "./Profile.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProfileSubHeader from "./ProfileSubHeader";
import HeaderLogOut from "../header/HeaderLogOut";
import userContext from "../context/UserContext";
import Modal from "../modal/Modal";
import UseLogOut from "../hooks/useLogOut";
import useModal from "../hooks/useModal";
import FooterLogin from "../footer/FooterLogin";
function HomeProfile() {
  const [emoji, setEmoji] = useState(false);
  const [chosenPicker, setChosenPicker] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useContext(userContext);
  const { _id, token } = useParams();
  const navigate = useNavigate();
  const [handleLogOut, state] = UseLogOut();
  const baseUrl = "https://backends-mocha-nine.vercel.app";
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  };
  //to monitor users presence on site
  useEffect(() => {
    fetch(`${baseUrl}/api_v1/profile/home/${_id}/${token}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.token || !data.id)
          return navigate("https://frontends-psi.vercel.app/signin");
      })
      .catch((err) => console.log(err.message));
  }, [user]);

  //set emoji open to pick
  const handleEmoji = () => {
    setEmoji(!emoji);
  };
  //handle to pick emoji
  const handlePickEmoji = (e) => {
    setChosenPicker(e);
    setEmoji(emoji);
  };
  //calling up openmodal hook to delete user profile
  const [handleOpenModal, modal] = useModal();

  //update users profile
  const handleEditProfile = () => {
    navigate(
      `https://frontends-psi.vercel.app/resetpass/${user.email}/${token}`
    );
  };

  return (
    <>
      <HeaderLogOut />
      {modal && <Modal />}
      <ProfileSubHeader />
      <div className={styles.benefits_newpost}>
        <div className={styles.benefits_setting}>
          <h2>Menu & Benefits</h2>

          <details>
            <summary>
              <span>Flights and Holidays</span>
              <FaPlaneDeparture className={styles.menuicons} />
            </summary>
            <p>Immerse yourself in culture-rich destinations</p>
          </details>
          <details>
            <summary>
              <span>Food and Restaurants</span>
              <FaUtensilSpoon className={styles.menuicons} />
            </summary>
            <p>Immerse yourself in culture-rich destinations</p>
          </details>
          <details>
            <summary>
              <span>Shooping</span>
              <FaShoppingCart className={styles.menuicons} />
            </summary>
            <p>Immerse yourself in culture-rich destinations</p>
          </details>
          <details>
            <summary>
              <span>Money</span>
              <FaMoneyCheck className={styles.menuicons} />
            </summary>
            <p>Immerse yourself in culture-rich destinations</p>
          </details>
          <details>
            <summary>
              <span>Tickets and Events</span>
              <FaTicketAlt className={styles.menuicons} />
            </summary>
            <p>Immerse yourself in culture-rich destinations</p>
          </details>
          <details>
            <summary>
              <span>Videos</span>
              <FaVideo className={styles.menuicons} />
            </summary>
            <p>Immerse yourself in culture-rich destinations</p>
          </details>
          <div className={styles.settings}>
            <details>
              <summary>
                <span>
                  <FaKey /> Setting & Privacy
                </span>
              </summary>
              <p
                style={{ margin: "5px auto", textAlign: "end", color: "red" }}
                onClick={handleOpenModal}
              >
                Delete Account
              </p>
              <p
                style={{ margin: "5px auto", textAlign: "end", color: "green" }}
                onClick={handleEditProfile}
              >
                Edit Profile
              </p>
            </details>
            {state ? (
              "Logging out..."
            ) : (
              <span
                style={{ fontWeight: "bold", margin: "20px" }}
                onClick={handleLogOut}
              >
                <b style={{ marginRight: "5px" }}>
                  <FaToggleOff />
                </b>
                LogOut
              </span>
            )}
          </div>
        </div>
        <div className={styles.newpost}>
          <form className={styles.formPost}>
            <h2>New Post</h2>
            <div className={styles.textAContain}>
              <textarea
                type="text"
                name="name"
                value={[message] + [chosenPicker.emoji]}
                onChange={(e) => setMessage(e.target.value)}
                cols="50"
                placeholder="What's on your mind?"
              />
              <div className={styles.emoji_upload}>
                <FaUpload className={styles.attached} />

                {emoji ? (
                  <EmojiPicker
                    onEmojiClick={handlePickEmoji}
                    theme="dark"
                    emojiStyle="facebook"
                    width={365}
                    height={300}
                  />
                ) : (
                  <span onClick={handleEmoji}>
                    <FaSadCry className={styles.emoji} />
                  </span>
                )}
              </div>
            </div>
            <div className={styles.files}></div>
          </form>
        </div>
        <div className={styles.latestNews}>
          <div className={styles.latest}>
            <h3>latest news</h3>
            <span>
              <Link
                to={`https://frontends-psi.vercel.app/profile/news/${_id}/${token}`}
              >
                See more
              </Link>
            </span>
          </div>
          <hr />
          <ul>
            <li>
              <FaDotCircle className={styles.dot} />
              OPC: <b>The hit man of OPC was shot dead yesterday.</b>
            </li>
            <li>
              <FaDotCircle className={styles.dot} />
              Fatherland:{" "}
              <b>
                The chairman of Fatherland has today arrested the miscreants who
                buglarised the office and made away with 5 laptops.
              </b>
            </li>
            <li>
              <FaDotCircle className={styles.dot} />
              CBN:{" "}
              <b>
                The Central Bank of Nigeria is considering devaluating the naira
              </b>
            </li>
            <li>
              <FaDotCircle className={styles.dot} />
              ASUU:{" "}
              <b>
                The Academic Staff Union of Universities has approved the
                graduation of failed students who are partially blind
              </b>
            </li>
            <li>
              <FaDotCircle className={styles.dot} />
              USA:{" "}
              <b>
                The United State of America has threatened to sanction Nigeria
                over gay bill rejection.
              </b>
            </li>
          </ul>
        </div>
        <FooterLogin />
      </div>
    </>
  );
}

export default HomeProfile;
