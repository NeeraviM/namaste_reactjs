import { useRouteError } from "react-router";

const PageNotFound = () =>{
    const err = useRouteError();
    console.log(err);
    return (
    <div>
        <h1>Page Not Found</h1>
        <h3>{err?.statusText?err.statusText:"Something Wrong"}</h3>
        </div>
        )
}

export default PageNotFound;