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

        <h2>Students</h2>
        
            {students.map((student) => (
                <div className="studentEntry" key={student._id}>
            
           <h2>Update <a href={student._id} alt={student.title}>{student.name} </a></h2>
           
        <Form action={`/update/${student._id}`} method="post">
            <input type="input" name="name" defaultValue={student.name}/>
            <input type="input" name="gender" defaultValue={student.gender}/>
            <input type="input" name="enrollment" defaultValue={student.enrollment}/>
            <input type="input" name="address" defaultValue={student.address}/>
            <input type="input" name="phone" defaultValue={student.phone}/>
            <input type="input" name="linkedin" defaultValue={student.linkedin}/>
            <input type="input" name="gpa" defaultValue={student.gpa}/>
            <input type="input" name="absences" defaultValue={student.absences}/>
            <input type="submit" value={`Update ${student.name}`}/>
        </Form>  
        <Form action={`/delete/${student._id}`} method="post">
            <input type="submit" value={`Delete ${student.name}`}/>
        </Form>
                </div>
            ))}
    </div>
    )
}

export default Index;