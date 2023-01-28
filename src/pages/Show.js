import { useLoaderData, Form } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai';
import Header from "../components/Header";

function Show(props){
    const student = useLoaderData();
    

    
    return(
        <div className="flex flex-col w-screen jus student">
            {/* <h1>{student.name}</h1>
            <h2>{student.gender}</h2>
            <h2>{student.enrollment}</h2>
            <h2>{student.address}</h2>
            <h2>{student.phone}</h2>
            <h2>{student.linkedin}</h2>
            <h2>{student.gpa}</h2>
            <h2>{student.absences}</h2> */}


            <div className="flex text-[1.25rem] w-screen">
                    <a href="/" className="  flex space-x-2 ml-[19rem] mt-[1.5rem] 
                                            bg-[#b8a181] p-[12px] text-white rounded-[20px]
                                            hover:bg-[#796952] cursor-pointer">
                        <AiFillHome className="translate-x-[-.25rem] translate-y-[.25rem]"/>
                    Home</a>
            </div>
            
            <Form action={`/update/${student._id}`} method="post" >

            <div className="flex flex-col m-auto space-y-5 mt-[2rem]"> 
                
                <div className="m-auto space-x-4">
                <input defaultValue={student.name} className='h-[3rem] pl-4' type="input" name="name" placeholder="students's name"/>
                <input defaultValue={student.gender} className='h-[3rem] pl-4' type="input" name="gender" placeholder="students's gender"/>
                <input defaultValue={student.enrollment} className='h-[3rem] pl-4' type="input" name="enrollment" placeholder="students's enrollment"/>
                <input defaultValue={student.address} className='h-[3rem] pl-4' type="input" name="address" placeholder="students's address"/>
                </div>
                
                <div className="m-auto space-x-4">   
                <input defaultValue={student.phone} className='h-[3rem] pl-4' type="input" name="phone" placeholder="students's phone"/>
                <input defaultValue={student.linkedin} className='h-[3rem] pl-4' type="input" name="linkedin" placeholder="students's linkedin"/>
                <input defaultValue={student.gpa} className='h-[3rem] pl-4' type="input" name="gpa" placeholder="students's gpa"/>
                <input defaultValue={student.absences} className='h-[3rem] pl-4' type="input" name="absences" placeholder="students's absences"/>
                </div>
                
            </div>

            <div className="flex w-screen">
                <input 
                    className=" bg-green-500 p-[5px] ml-auto  px-[.80rem] rounded-[10px] text-white shadow-sm 
                                hover:bg-indigo-700 hover:text-white
                                bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 
                                hover:to-yellow-50 ease-in-out duration-500 cursor-pointer
                                m-auto mt-[2rem] w-[25rem]" 
                    type="submit" 
                    value={`Update ${student.name}`}/>
            </div>
            </Form>

            {/* <h2>Delete student</h2> */}
            <Form action={`/delete/${student._id}`} method="post" className="flex w-screen">

                <input className="  bg-red-600 text-[white] p-[5px] ml-auto px-4 rounded-[10px] cursor-pointer 
                                    hover:bg-red-800 m-auto mt-[1rem] w-[25rem]" 
                        type="submit" 
                        value={`Delete ${student.name}`}/>

            </Form>
            
            

        </div>
    )
}

export default Show;