import { useLoaderData, Form } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

function Index(props) {
  const students = useLoaderData();

  return (
    // Main Div Containig Everything
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Add Student Div */}
      <div className="flex-col w-[100%] sm:flex sm:items-center">
        {/* Div Containing The Main Title */}
        <div className="w-[100%] p-[.75rem] text-xl uppercase">
          <h2>Create A new Student</h2>
        </div>
        {/* Div Containig The inputs for adding a student */}
        <div className="flex w-[100%] py-[1rem] pr-[1rem]">
          {/* Div for input fields */}
          <div className="flex mt-4 ml-auto sm:mt-0">
            {/* Form with input fields */}
            <Form className="flex space-x-6" action="/create" method="post">
              {/* divs containing input fields */}
              <div class="relative rounded-md border border-black px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" className="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">Name</label>
                <input type="text" name="name" id="name" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              <div class="relative rounded-md border border-black w-[5rem] px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" className="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">Gender</label>
                <input type="text" name="gender" id="gender" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              <div class="relative rounded-md border border-black w-[5rem] px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" className="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">Enrollment</label>
                <input type="text" name="enrollment" id="enrollment" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              <div class="relative rounded-md border border-black px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" className="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">Address</label>
                <input type="text" name="address" id="address" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              <div class="relative rounded-md border border-black px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" className="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">Phone</label>
                <input type="text" name="[phone]" id="phone" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              <div class="relative rounded-md border border-black px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" className="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">LinkedIn</label>
                <input type="text" name="linkedin" id="linkedin" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              <div class="relative outline-none w-[3.25rem] rounded-md border border-black px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" className="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">GPA</label>
                <input type="text" name="gpa" id="gpa" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              <div class="relative outline-none w-[4.5rem] rounded-md border border-black px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block bg-[#EAE7DC] px-1 text-xs font-medium text-gray-900">Absneces</label>
                <input type="text" name="absences" id="absences" className="bg-[transparent] outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"/>
              </div>

              {/* Button for adding a student */}
              <button
                type="submit"
                class=" inline-flex items-center justify-center rounded-md 
                    border-[3px] px-4 py-0 text-sm h-[2.5rem]
                    font-medium text-white shadow-sm hover:bg-indigo-700 hover:text-white
                    bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                    uppercase ease-in-out duration-500"
              >
                Add A Student
              </button>
            </Form>
          </div>
        </div>
        
      </div>

      {/* Div containing the table with the data output and the table header */}
      <div className="flex flex-col mt-8">
        {/* Div containing the table with data output */}
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          {/* Div containig the table with data output */}
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                {/* table header */}
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Enrollment
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Linkedin
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      GPA
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Absneces
                    </th>
                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                {/* mapping through the data */}
                {students.map((student) => (
                  // table element with data output
                  <tbody
                    key={student._id}
                    className="bg-white divide-y divide-gray-200"
                  >
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {student.name}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-900 whitespace-nowrap">
                        {student.gender}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-900 whitespace-nowrap">
                        {student.enrolment}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                        {student.address}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                        {student.phone}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                        {student.linkedin}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                        {student.gpa}
                      </td>
                      <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                        {student.absences}
                      </td>
                      {/* update/edit button  */}
                      <td className="relative whitespace-nowrap py-2 w-[1.75rem] pl-0 pr-0 text-center text-sm font-medium sm:pr-6">
                        <Form action={`/update/${student._id}`} method="post">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            {`Edit ${student.name}`}
                          </button>
                        </Form>
                      </td>
                      {/* delete button */}
                      <td className="relative whitespace-nowrap w-[1.75rem] py-2 pl-0 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Form action={`/delete/${student.name}`}>
                          <button
                            type="submit"
                            className="text-[#e98074] hover:text-[#e85a4f] text-[2rem]"
                          >
                            <MdDeleteForever />
                          </button>
                        </Form>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
