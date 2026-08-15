import { CDN_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
  // const RestroCard = ({resName,cuisine,stars,eta}) =>{
  const {
    name,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = resData;
  // console.log(resData);
  return (
    <div
      className="m-1.5 p-4 w-58 h-122 bg-violet-100 rounded-xl hover:bg-violet-50"
    >
      <img className="rescard" src={CDN_URL + cloudinaryImageId} />
      <div>
        <h3 className="font-bold py-3 text-lg h-20">{name}</h3>
        <h5 className="font-light text-cyan-950">{cuisines.join(", ")}</h5>
        <h5 className="font-light">{avgRatingString}</h5>
        <h5 className="font-light">{costForTwo}</h5>
        <h5 className="font-light">{sla.slaString}</h5>
      </div>
    </div>
  );
};

export default RestroCard;
