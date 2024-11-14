import { useState } from "react";
import styles from "./Modal.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useLoading from "../hooks/useLoading";
import useNo from "../hooks/useNo";
function Modal() {
  const [text, setText] = useState(false);
  const [isLoading] = useLoading();
  const [handleNo, no] = useNo();
  const { _id, token } = useParams();
  const baseUrl = "https://backend-alpha-two-70.vercel.app";
  
  const navigate = useNavigate();
  const handleYes = async () => {
    setText(isLoading);
    await fetch(`${baseUrl}/api_v1/profile/${_id}/${token}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: _id, token: token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === `User with Id: ${_id}, and token: ${token}, deleted!`) {
         
          setTimeout(() => {
            alert("User deleted permanently!");
            navigate("/signin");
          }, 3000);
        } else {
          setTimeout(() => {
            alert(data);
          }, 3000);
        }
      })
      .catch((error) => alert(error.message))
      .finally(()=>setText(!isLoading))
  };
  return (
    <>
      {no && (
        <div className={styles.modal}>
          <span className={styles.question}>
            {text
              ? "Deleting profile..."
              : "Are you sure you want to delete your account?"}{" "}
          </span>
          <span className={styles.response}>
            <b
              style={{
                marginLeft: "5px",
                border: "1px solid red",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={handleYes}
            >
              Yes
            </b>
            <b
              style={{
                marginLeft: "5px",
                border: "1px solid grey",
                cursor: "pointer",
                borderRadius: "50%",
                padding: "5px",
                backgroundColor: "grey",
                color: "white",
              }}
              onClick={handleNo}
            >
              No
            </b>{" "}
          </span>
        </div>
      )}
    </>
  );
}

export default Modal;
