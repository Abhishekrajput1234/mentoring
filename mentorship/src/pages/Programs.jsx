

import { useEffect, useState } from "react";

function Program(){
    const[program,setProgram]=useState([]);

   useEffect(()=>{
    
fetch("https://mentor-hub-hri0.onrender.com/viewprogram")
    .then((res)=>res.json())
    .then((data)=>{
        setProgram(data)
    }).catch((Error)=>console.log(Error))

   },[]);

    
    return(<>
   <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-700 mt-7 mb-15 text-center">
          List of Programs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {program.map((p) => (
            <div
              key={p.id}
              className="w-full bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 duration-300"
            >
              <img
                src={p.image}
                className="h-65 w-full object-cover"
                alt="Program"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{p.name}</h3>

                <p className="mt-3 text-gray-700">
                  {p.description?.slice(0, 120)}...
                </p>

                <button className="bg-blue-500 px-4 py-1 rounded-full text-white font-bold mt-5 hover:bg-blue-700 transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

   
 



    
    </>)
}
export default Program;