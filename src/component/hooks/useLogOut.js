import { useState } from "react";
import useLoading from "./useLoading";
import { useNavigate } from "react-router-dom";

function UseLogOut() {
    const [state, setState] = useState(false);
    const [isLoading] = useLoading();
    const navigate =useNavigate();
    const baseUrl = "https://backend-alpha-two-70.vercel.app";  
  
    const handleLogOut = async () => {
        setState(isLoading);
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
                    setTimeout(() => {
                        alert(data);
                        navigate("/signin");
                    }, 3000);
                } else {
                    setTimeout(() => {
                        alert("LogOut failled!");                      
                    }, 3000);
                }
            })
            .catch((error) => alert(error.message))
            .finally(()=>setState(!isLoading))
    };
    return [handleLogOut, state]
}
export default UseLogOut;
