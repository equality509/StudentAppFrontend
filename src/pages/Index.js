import { useLoaderData, Form } from "react-router-dom";

function Index(props) {
  const students = useLoaderData();

  return (
    <div className="flex flex-col w-screen">
        
      <div className="flex flex-col m-auto  mt-[1rem] border-[2px] rounded-[20px] w-[55rem]">
        
        <h2 className="py-3 mr-auto ml-[2.75rem] font-bold text-lg uppercase text-[black]">Create a New Student</h2>
        
        <div className="">
          <Form action="/create" method="post" className="flex flex-col border-t-[2px]  border-[black] pt-4">
            
            <div className="flex flex-col justify-center">
              
              <div className="flex pb-[.5rem] m-auto space-x-4">
                <input type="input" name="name" placeholder="Name" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]"/>
                <input type="input" name="gender" placeholder="Gender" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]"/>
                <input type="input" name="enrollment" placeholder="Enrollment #" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]" />
                <input type="input" name="address" placeholder="Address" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]"/>
              </div>

            <div className="flex m-auto space-x-4">  
                <input type="input" name="phone" placeholder="Phone" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]"/>
                <input type="input" name="linkedin" placeholder="Linkedin" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]"/>
                <input type="input" name="gpa" placeholder="Gpa" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]"/>
                <input type="input" name="absences" placeholder="Absences" className="pl-2 border-[black] outline-none h-[2rem] bg-transparent border-b-[2px]"/>
            </div>
            
            </div>
            <div className="flex py-3">
            <input  type="submit" value="Create" 
                      className="pl-2inline-flex items-center rounded-md border-[3px] px-4 py-0 text-sm h-[2.5rem]
                      font-medium text-white shadow-sm hover:bg-indigo-700 hover:text-white
                      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                      uppercase ease-in-out duration-500 cursor-pointer w-[20rem] m-auto"/>
            </div>
          </Form>
        </div>
      </div>
      
      <div className="border-[2px] border-[#b8a181] w-[65rem] m-auto bg-[#b8a181] text-[white] pl-[2.5rem] text-[1.5rem]">
        <h2>All Students</h2>
      </div>
      
      {students.map((student) => (
        <div className="studentEntry w-[65rem] m-auto bg-[#EAE7DC] px-5 border-[#b8a181] border-[2px]" key={student._id}>
          <h2 className="ml-[-.25rem] p-[.25rem] uppercase font-semibold text-gray-500">
            <a href={student._id} alt={student.title}>
              {/* {student.name}{" "} */}
            </a>
          </h2>

          <Form action={`/update/${student._id}`} method="post" className="flex px-0">
            <input type="input" 
                   name="name" 
                   className="w-[10rem] border-[1px] border-[black] pl-1" 
                   defaultValue={student.name} />
            <input type="input" 
                   name="gender" 
                   className="w-[5rem] border-[1px] border-[black] pl-1"
                   defaultValue={student.gender} />
            <input
              type="input"
              name="enrollment"
              className="w-[4rem] border-[1px] border-[black] pl-1"
              defaultValue={student.enrollment}
            />
            <input type="input" 
                   className="w-[14rem] border-[1px] border-[black] pl-1"
                   name="address" defaultValue={student.address} />
            <input type="input" 
                   name="phone" 
                   className="w-[7rem] border-[1px] border-[black] pl-1"
                   defaultValue={student.phone} />
            <input
              type="input"
              name="linkedin"
              className="w-[6rem] border-[1px] border-[black] pl-1"
              defaultValue={student.linkedin}
            />
            <input type="input" 
            className="w-[3rem] border-[1px] border-[black] pl-1"
            name="gpa" defaultValue={student.gpa} />
            <input
              type="input"
              className="w-[3rem] border-[1px] border-[black] pl-1"
              name="absences"
              defaultValue={student.absences}
            />
            <div className="flex w-[11rem]">
            <input type="submit" 
                   className="bg-green-500 p-[5px] ml-auto  px-[.80rem] rounded-[10px] text-white shadow-sm hover:bg-indigo-700 hover:text-white
                   bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-50 ease-in-out duration-500 cursor-pointer"
                   value={`Update ${student.name}`} />
            </div>
          </Form>
          <Form action={`/delete/${student._id}`} method="post" className="flex py-3">
            <input className="bg-red-600 text-[white] p-[5px] ml-auto px-4 rounded-[10px] cursor-pointer hover:bg-red-800" type="submit" value={`Delete ${student.name}`} />
          </Form>
       </div>
      ))}
    </div>
    );}

export default Index;