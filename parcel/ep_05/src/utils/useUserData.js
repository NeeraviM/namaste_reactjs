import { useState, useEffect } from "react";
const useUserData = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    location: "Default",
    avatar_url: "ssdff",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    setUserInfo(json);
  };

  return userInfo;
};

export default useUserData;
