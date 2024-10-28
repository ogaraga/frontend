import { useState } from "react";
import useLoading from "./useLoading";
import { useNavigate } from "react-router-dom";

function UseLogOut() {
    const [state, setState] = useState(false);
    const [isLoading] = useLoading();
    const navigate =useNavigate();
    const baseUrl = "http://localhost:8080";  
  
    const handleLogOut = async () => {
        await fetch(`${baseUrl}/api_v1/logout`, {
            method: "GET",
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data === "You are logged out!") {
                    setState(isLoading);
                    setTimeout(() => {
                        alert(data);
                        navigate("/signin");
                    }, 3000);
                } else {
                    setState(isLoading);
                    setTimeout(() => {
                        alert("LogOut failled!");
                        setState(!isLoading);
                    }, 3000);
                }
            })
            .catch((error) => alert(error.message));
    };
    return [handleLogOut, state]
}
export default UseLogOut;
