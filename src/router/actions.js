import URL from "./url";
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    const formData = await request.formData();

    const newStudent = {
        name: formData.get("name"),
        gender: formData.get("gender"),
        enrollment: formData.get("enrollment"),
        address: formData.get("address"),
        phone: formData.get("phone"),
        linkedin: formData.get("linkedin"),
        gpa: formData.get("gpa"),
        absences: formData.get("absences")
    }

    await fetch(URL + "/student", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudent)
    })

    return redirect("/")
}    


export const updateAction = async ({request, params}) => {
    const formData = await request.formData();

    const updatedStudent = {
        name: formData.get("name"),
        gender: formData.get("gender"),
        enrollment: formData.get("enrollment"),
        address: formData.get("address"),
        phone: formData.get("phone"),
        linkedin: formData.get("linkedin"),
        gpa: formData.get("gpa"),
        absences: formData.get("absences")
    }

    await fetch(URL + `/student/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedStudent)
    })

    return redirect("/")
}    


export const deleteAction = async ({params}) => {

    await fetch(URL + `/student/${params.id}`, {
        method: "delete",
    })

    return redirect("/")
}    