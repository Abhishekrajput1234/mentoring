 import { useEffect, useState } from "react"

export default function Programlist(){
    const[programlist,setProgramlist]=useState([]);

    useEffect(()=>{
       fetch("https://mentor-hub-hri0.onrender.com/programlist")

        .then((res)=>res.json())
        .then((data)=>setProgramlist(data));

    },[]);
    return(<>
   
     <h1 className="text-3xl font-bold text-center mt-10 text-gray-700">
        Available Programs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10">
        {programlist.map((res) => (
          <div
            key={res._id}
            className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{res.title}</h2>

            <p className="text-gray-600 mt-2">
              {res.description.length > 90
                ? res.description.substring(0, 90) + "..."
                : res.description}
            </p>

            <div className="mt-4">
              <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {res.type}
              </span>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <span
                className={`text-sm font-semibold ${
                  res.status === "Active"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {res.status}
              </span>

              <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    
  

      


    </>)
}