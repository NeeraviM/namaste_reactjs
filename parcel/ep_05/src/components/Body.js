import RestroCard from "./RestroCard";
import restaurants from "../utils/mockData";
const extractedData = restaurants.map(item => ({
  id: item.info.id,
  resName: item.info.name,
  cuisine: item.info.cuisines.join(", "),
  stars: item.info.avgRating,
  costForTwo: item.info.costForTwo,
  eta: item.info.sla.slaString,
  cloudinaryImageId: item.info.cloudinaryImageId
}));

// Not using keys(not acceptable) <<<<< index as key (not recommended) <<<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {
          extractedData.map((restaurant)=>(
            <RestroCard key={restaurant.id} resData={restaurant}/>
            // <RestroCard key={restaurant.id} {...restaurant}/>
          ))
        }
      </div>
    </div>
  )
}

export default Body;
// export  {Body};