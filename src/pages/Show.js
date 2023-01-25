import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const student = useLoaderData();
  
    return (
      <div className="student">
        <h1>{student.name}</h1>
        <h1>{student.gender}</h1>
        <a href={student.url}></a>
        

        <h2>Update {student.title}</h2>
        <Form action={`/update/${student._id}`} method="post">
            <input type="input" name="name" defaultValue={student.title}/>
            <input type="input" name="url" defaultValue={student.url}/>
            <input type="submit" value={`update ${student.title}`}/>
        </Form>
        <h2>Delete Bookmark</h2>
        <Form action={`/delete/${student._id}`} method="post">
            <input type="submit" value={`delete ${student.title}`}/>
        </Form>
      </div>
    );
}

export default Show;
