import { useLoaderData, Form } from "react-router-dom";



function Index(props) {
    const students = useLoaderData();

    return (
    <div>
        <h2>Create a New Student</h2>
        <Form action="/create" method="post">
            <input type="input" name="title" placeholder="Name" />
            <input type="input" name="url" placeholder="http://" />
            <input type="submit" value="Create" />
        </Form>

        {/* <h2>Students</h2>
        
            {students.map((student) => (
                <div className="studentEntry" key={student._id}>
            
           <h2>Update <a href={student.name} alt={student.title}>{student.name} </a></h2>
        <Form action={`/update/${student._id}`} method="post">
            <input type="input" name="name" defaultValue={student.title}/>
            <input type="input" name="gender" defaultValue={student.gender}/>
            <input type="submit" value={`update ${student.title}`}/>
        </Form>  
        <Form action={`/delete/${student._id}`} method="post">
            <input type="submit" value={`delete ${student.title}`}/>
        </Form>
                </div>
            ))} */}
    </div>
    )
}

export default Index;