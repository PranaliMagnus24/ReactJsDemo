import { Looping } from "./App";

function Loop() {
    const userData1 = [
        { name: "ABC", age: "20", id: 1 },
        { name: "EFG", age: "21", id: 2 },
        { name: "HIJ", age: "22", id: 3 },
        { name: "KLM", age: "23", id: 4 },
    ];

    const userData = [
        { name: "ABC", age: "20", id: 1 },
        { name: "EFG", age: "21", id: 2 },
        { name: "HIJ", age: "22", id: 3 },
        { name: "KLM", age: "23", id: 4 },
    ];

    return (
        <div>
            <h2 style={{ color: "red" }}>Loops with Map function</h2>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData1.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h3 style={{color: "red"}}>Reuse component in loop</h3>
            {
                userData.map((user)=>(
                    <Looping data={user}/>
                ))
            }
        </div>
    );
}

export default Loop;
