function Nestedloop() {
    const collegeData = [
        {
            name: "Dr.Moonje Institute",
            city: "Gangapur road, Nashik",
            collegeId: "11",
            student: [
                {
                    name: "ABC",
                    age: "16",
                    class: "10th",
                },
                {
                    name: "ABC",
                    age: "16",
                    class: "10th",
                },
                {
                    name: "ABC",
                    age: "16",
                    class: "10th",
                }
            ]
        },
        {
            name: "Bhosala College",
            city: "Model Coluny, Nashik",
            collegeId: "12",
            student: [
                {
                    name: "EFG",
                    age: "17",
                    class: "11th",
                },
                {
                    name: "EFG",
                    age: "17",
                    class: "11th",
                },
                {
                    name: "EFG",
                    age: "17",
                    class: "11th",
                }
            ]
        },
        {
            name: "KTHM College",
            city: "College road, Nashik",
            collegeId: "13",
            student: [
                {
                    name: "HIJK",
                    age: "18",
                    class: "12th",
                },
                 {
                    name: "HIJK",
                    age: "18",
                    class: "12th",
                },
                 {
                    name: "HIJK",
                    age: "18",
                    class: "12th",
                }
            ]
        },
    ];

    return (
        <div>
            <h3 style={{ color: "red" }}>Nested Loop with child</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>College Name</th>
                        <th>City</th>
                        <th>College Id</th>
                        <th>Student Name</th>
                        <th>Student Age</th>
                        <th>Student Class</th>
                    </tr>
                </thead>
                <tbody>
                    {collegeData.map((college, index) =>
                        college.student.map((stu, stuIndex) => (
                            <tr key={`${index}-${stuIndex}`}>
                                <td>{college.name}</td>
                                <td>{college.city}</td>
                                <td>{college.collegeId}</td>
                                <td>{stu.name}</td>
                                <td>{stu.age}</td>
                                <td>{stu.class}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Nestedloop;
