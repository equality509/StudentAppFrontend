import URL from "./url";

export const indexLoader = async () => {
    const response = await fetch(URL + "/student")
    const students = await response.json()
    return students
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/student/${params.id}`)
    const student = await response.json()
    return student
}