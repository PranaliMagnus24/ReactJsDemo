import { Link } from "react-router";

export default function DynamicRoute() {
    const userData = [
        { id: 1, name: 'John Doe' },    
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Johnson' },
        { id: 5, name: 'Alice' } 
    ];
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Dynamic Route</h1>
            <p>This is a dynamic route page.</p>
            {
                userData.map(user => (
                    <div key={user.id}>
                        <h2><Link to={"/users/details/"+user.id}>{user.name}</Link></h2>
                        <p>User ID: {user.id}</p>
                    </div>
                ))
            }
            <h1>User data is with name in Url</h1>
             {
                userData.map(user => (
                    <div key={user.id}>
                        <h2><Link to={"/users/details/"+user.id+"/"+user.name}>{user.name}</Link></h2>
                        <p>User ID: {user.id}</p>
                    </div>
                ))
            }
            <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go back to Home</a>
        </div>
    );
}