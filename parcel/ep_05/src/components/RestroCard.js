import {CDN_URL} from "../utils/constants";

const RestroCard = ({resData}) =>{
// const RestroCard = ({resName,cuisine,stars,eta}) =>{
  const {resName,cuisine,stars,eta,cloudinaryImageId} = resData;
  console.log(resData);
  return(
    <div className="res-card" style={{color:"#0b5e50",backgroundColor:"#e7efd6",margin:"9px 3px"}}>
      <img className="rescard"
      src={CDN_URL+cloudinaryImageId}/>
      <div>
      <h3 className="margin-tb-2">{resName}</h3>
      <h5 className="margin-tb-2">{cuisine}</h5>
      <h5 className="margin-tb-2">{stars}</h5>
      <h5 className="margin-tb-2">{eta}</h5>
      </div>
    </div>
  )
}

export default RestroCard;