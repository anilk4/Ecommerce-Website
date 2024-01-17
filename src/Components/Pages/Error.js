import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const {status, statusText, error} = useRouteError();

    return (
        <div>
            <h2>{status}</h2>
            <p>{error?.message}</p>
            <div>Navigate to Home Page</div>
            <Link to = "/" >Home</Link>
        </div>
    )
};

export default Error;