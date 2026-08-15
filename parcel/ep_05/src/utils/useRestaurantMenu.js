import { useState,useEffect } from "react";
import { MENU_UPI_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    // fetch data and return 
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch(MENU_UPI_URL + resId);
        const json = await response.json();
        setResInfo(json?.data);
    }
    return resInfo;
}

export default useRestaurantMenu;