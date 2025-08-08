import { useParams } from "react-router";

export default function DynamicRouteDetail() {
    const userParams = useParams();
    console.log(userParams);
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Dynamic Route</h1>
            <p>User Id {userParams.id}</p>
            <a href="/users" style={{ color: 'blue', textDecoration: 'underline' }}>Go back to Home</a>
        </div>
    );
}