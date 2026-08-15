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
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <li>
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
        <OnlineStatus />
      </div>
    </div>
  );
};

export default Header;
