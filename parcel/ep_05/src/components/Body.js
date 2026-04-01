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