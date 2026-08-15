import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_UPI_URL } from "../utils/constants";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  
  // useEffect(() => {
  //   console.log("useEffect");
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const response = await fetch(MENU_UPI_URL + resId);
  //   const json = await response.json();
  //   setResInfo(json.data);
  //   console.log(json?.data);
  // };

  // console.log("PPPPPPPPPPP ",resInfo?.data?.cards[2]?.card?.card?.info)
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[5].groupedCard);
  console.log("-----------------------------------");
  console.log(itemCards);
  console.log("-----------------------------------");
  console.log(itemCards[0]?.card.info.name);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card.info.name} - Rs.
            {(item.card.info.price
              ? item.card.info.price
              : item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
