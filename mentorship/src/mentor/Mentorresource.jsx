import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Mentorresource() {
  const [resource, setResource] = useState([])


  useEffect(()=>{
      fetch("https://mentor-hub-hri0.onrender.com/getresource")

      .then(res=> res.json())
    .then(data=> setResource(data))

  },[])

  return (
    <>
      <div className="p-6 w-full flex justify-between items-center">
        <h1 className="text-3xl font-semibold">View Resources</h1>

       <Link
  to="/addresource"
  className="bg-blue-400 text-white font-semibold border py-2 px-3 rounded-full inline-block text-center"
>
  More Resource
</Link>
        </div>
      
      <table className="bg-white shadow rounded mt-6 w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">#</th>
            <th className="p-3">Title</th>
            <th className="p-3">Link</th>
          </tr>
        </thead>

       <tbody>
  {resource.map((res, index) => (
    <tr key={res._id} className="border-b">

    
      <td className="p-3">{index + 1}</td>

      <td className="p-3">{res.title}</td>

      <td className="p-3">
        <a
          href={res.link}
          target="_blank"
          className="text-blue-600 underline"
        >
          Open
        </a>
      </td>
    </tr>
  ))}
</tbody>

      </table>
      
     
    </>
  );
}
