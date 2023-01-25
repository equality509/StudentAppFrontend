import { useLoaderData, Form } from "react-router-dom";
import Card from "../UI/Card/Card";
import classes from './index.module.css';
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

function Index(props) {
  const students = useLoaderData();

  return (
    <div>
      <h2>Create a New Student</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="name" />
        <input type="input" name="gender" placeholder="gender" />
        <input type="input" name="enrollment" placeholder="enrollment #" />
        <input type="input" name="address" placeholder="address" />
        <input type="input" name="phone" placeholder="phone" />
        <input type="input" name="linkedin" placeholder="linkedin" />
        <input type="input" name="gpa" placeholder="gpa" />
        <input type="input" name="absences" placeholder="absences" />
        <input type="submit" value="Create" />
      </Form>

      <Card>
        <h2>Students</h2>
      </Card>
      {students.map((student) => (
        <div className={`studentEntry ${classes.studentInfo}`} key={student._id}>
          {/* <h2>
            Update{" "}
            <a href={student._id} alt={student.title}>
              {student.name}{" "}
            </a>
          </h2> */}

          <Card className={classes.display}>
            {/* Content Container */}
            <div className={classes.studentInfoContainer}>
            {/* Student Information */}
            <div className={classes.studentInfo}>
            <Form action={`/update/${student._id}`} method="post">
              <input type="input" name="name" defaultValue={student.name} />
              <input type="input" name="gender" defaultValue={student.gender} />
              <input
                style={{
                  width:'3rem'
                }}
                type="input"
                name="enrollment"
                defaultValue={student.enrollment}
              />
              <input
                type="input"
                name="address"
                style={{
                  width:'15rem'
                }}
                defaultValue={student.address}
              />
              <input type="input" name="phone" defaultValue={student.phone} />
              <input
                type="input"
                name="linkedin"
                defaultValue={student.linkedin}
              />
              <input
                type="input"
                name="gpa"
                style={{
                  width: "2rem",
                }}
                defaultValue={student.gpa}
              />
              <input
                type="input"
                name="absences"
                style={{
                  width: "2rem",
                }}
                defaultValue={student.absences}
              />
            </Form>
                </div>

                {/* action buttons */}
                <div className={classes.actionBtns}>
              <Form action={`/delete/${student._id}`} method="post">
              <input className={classes.updateBtn} type="submit" value={`Update ${student.name}`} />
                <button
                  className={classes.deleteBtn}
                  type="submit"
                  value={`Delete ${student.name}`}
                >
                  <MdDeleteForever />
                </button>
              </Form>
              </div>

            </div>
          </Card>

        </div>
      ))}
    </div>
  );
}

export default Index;
