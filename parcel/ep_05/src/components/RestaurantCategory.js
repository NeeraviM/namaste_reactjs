import CatItemList from "../components/CatItemList";
const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto p-4 my-4">
        <div className="flex justify-between w-full">
          <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
          <span>{"🔽"}</span>
        </div>
      <CatItemList items={data?.itemCards} />
      </div>
      {/* Accordian description */}
    </div>
  );
};

export default RestaurantCategory;
