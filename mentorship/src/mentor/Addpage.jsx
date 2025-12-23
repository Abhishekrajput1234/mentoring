

import React from "react"
import { useState } from "react"



export default function Addpage(){
    const[form,setForm]=useState({

        name:"",
        description:"",

    })

    //inputHandler

    const InputHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})

    }

    


    const saveprogram=(e)=>{
        e.preventDefault();
       // console.log("data inserted",form)

   fetch("https://mentor-hub-hri0.onrender.com/getprogram",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(form),

    })
    .then((res)=>res.json())
    .then((data)=>{
        alert("program added successfully");
        console.log("saved",data)
    })

    }
    return(<>
    <div className="p-6 flex justify-center">
        
    <div className="bg-white shadow  md:w-1/2 rounded p-6 ">
     <h1 className="text-2xl font-semibold px-6 ">Add Programs</h1>
       

    <div className="mt-4">
       <input type="text" placeholder=" Enter Program Name" className="w-full border p-2 mt-1 rounded hover:border-blue-600"
       name="name" value={form.name} onChange={InputHandler}></input> 
    </div>

        <label className="block mt-3">
          <span className="font-medium">Description</span>
          <textarea
            name="description"
           
            rows="4"
            className="w-full border p-2 mt-1 rounded"
            placeholder="Enter program description"
           
            value={form.description}
            onChange={InputHandler}

          />
        </label>
        <div className="flex justify-center">

        <button onClick={saveprogram} className="bg-blue-400 px-3 py-2 text-white rounded-full mt-5">Save Program</button>

        </div>

    </div>
    </div>
    
    </>)
}