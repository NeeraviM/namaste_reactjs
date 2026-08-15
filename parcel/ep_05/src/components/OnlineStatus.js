import useOnlineStatus from "../utils/useOnlineStatus"
const OnlineStatus = () =>{
    const onlineStatus = useOnlineStatus();
    return onlineStatus?<h1>Back To online</h1>:<h1>Looks like you're offline</h1>
}

export default OnlineStatus;