import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
const Header = () => {
  // let btnName = "Login";
  const [btnText, setBtnText] = useState("Login");

  useEffect(() => {
    console.log("useEffect called for btnText changes");
  }, [btnText]);

  console.log("Header rendered");

  return (
    <div>
      <div className="flex justify-between shadow-lg mb-2 bg-pink-100">
        <div>
          <img className="h-25 w-25" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <OnlineStatus/>
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <li className="px-4">
              <button
                className="loginButton"
                onClick={(e) => {
                  // if(btnText === "Login"){
                  //   setBtnText("Logout");
                  // }
                  // else{
                  //   setBtnText("Login")
                  // }
                  btnText === "Login"
                    ? setBtnText("Logout")
                    : setBtnText("Login");
                  console.log(btnText);
                }}
              >
                {btnText}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Header;
