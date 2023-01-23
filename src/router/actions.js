import URL from "./url";
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    const formData = await request.formData();

    const newStudent = {
        url: formData.get("url"),
        title: formData.get("title")
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
        url: formData.get("url"),
        title: formData.get("title")
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