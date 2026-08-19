import { useState } from "react";
import CatItemList from "../components/CatItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    console.log("click");
    setShowItems((val)=> !val);
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto p-4 my-4">
        <div
          className="flex justify-between w-full cursor-pointer border-gray-200 "
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {!showItems && <span>{"🔽"}</span>}
          {showItems && <span>{"🔼"}</span>}
        </div>
        {showItems && <CatItemList items={data?.itemCards} />}
      </div>
      {/* Accordian description */}
    </div>
  );
};

export default RestaurantCategory;
