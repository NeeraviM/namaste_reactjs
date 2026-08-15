import useOnlineStatus from "../utils/useOnlineStatus"
const OnlineStatus = () =>{
    const onlineStatus = useOnlineStatus();
    return (
        <h1>Online Status {onlineStatus? "🟩":"❌"}</h1>
    )
}

export default OnlineStatus;