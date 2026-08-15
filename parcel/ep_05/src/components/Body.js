import RestroCard from "./RestroCard";
import restaurants from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Not using keys(not acceptable) <<<<< index as key (not recommended) <<<<< unique id (best practice)
const Body = () => {
  // Normal JS variable
  // let listOfRestaurantsJS = restaurants.map((item) => ({
  //   id: item.info.id,
  //   resName: item.info.name,
  //   cuisines: item.info.cuisines.join(", "),
  //   costForTwo: item.info.costForTwo,
  //   eta: item.info.sla.slaString,
  //   cloudinaryImageId: item.info.cloudinaryImageId,
  //   avgRating: item.info.avgRating,
  // }));

  // Local State variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  let chk = 0;
  const [st, setSt] = useState(0);
  const onlineStatus = useOnlineStatus();
  //data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info
  // fetch Data
  //https://corsproxy.io/
  //"https://corsproxy.io/"+"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/" +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    console.log(listOfRestaurants);
  };
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  // return !onlineStatus ? (
  //   <h1>Looks like you're offline</h1>
  // ) : (
  //   <h1>Back to Online</h1>
  // );

  console.log("Body Rendered");
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="m-2 p-2">
          <input
            type="text"
            name="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
           className="rounded-lg border-blue-300 outline-1 m-2 p-2"/>
          <button className="m-2 p-2 bg-green-100 border-amber-200 rounded-xl"
            onClick={(e) => {
              console.log(listOfRestaurants);
              let filteredData = listOfRestaurants.filter((val) => {
                return val.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filteredData);
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
          <button
            className="m-2 p-2 bg-violet-300 rounded-xl"
            onClick={() => {
              console.log("Button Clicked");
              let rate = 4;
              let filteredData = listOfRestaurants.filter((val) => {
                return val.avgRating > 4.3;
              });
              setlistOfRestaurants(filteredData);
              console.log(filteredData);
            }}
            // onMouseOver={()=>{console.log("Button Hovered")}}
          >
            Top Restaurants
          </button>
        </div>
        
      </div>

      {/* <button>Check let vs state</button>
      <button
        onClick={() => {
          chk += 1;
          setSt(st + 1);
          console.log("chk  ====> ", chk);
          console.log("st  ====> ", st);
        }}
      >
        {st}
      </button> */}
      <div className="flex flex-wrap m-2 gap-1">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestroCard resData={restaurant.info} />
          </Link>
          // <RestroCard key={restaurant.id} {...restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
// export  {Body};
