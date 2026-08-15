import useUserData from "../utils/useUserData";

const User = () => {
    const { name, location, avatar_url } = useUserData();
    // const userInfo = useUserData();
    // console.log(userInfo);

  return (
    <div className="user-card">
        <div className="card_top">
          <img src={avatar_url} />
      <h2>Name: {name}</h2>
        </div>
      
      <h3>Location: {location}</h3>
      <h4>Contact: @neeravisa</h4>
    </div>
  );
};

export default User;
