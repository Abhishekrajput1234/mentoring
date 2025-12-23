import { useState } from "react"

export default function Addresource(){
    const[resource,setResource]=useState({
      
        title:"",
        link:"",
    })

    //inputhandler

    const InputHandler=(e)=>{
        setResource({...resource,[e.target.name]:e.target.value})

    }

    //resource
const Addresource=(e)=>{
    e.preventDefault();
    //console.log("data insert",resource)
   // alert("data insert")
    
    fetch("https://mentor-hub-hri0.onrender.com/getresource",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(resource)

  })
  .then((res)=>res.json())
  .then((data)=>{
    alert("resource added successfully");
    console.log("saved",data)
  })
    

} 


    return(<>
    
    <div className="p-6 flex justify-center items-center  ">
    
    <div className="text-4xl font-bold text-gray-600 mx-20 mt-10">
        Add Resources
    </div>

    </div>

  <div className="bg-gray-100 p-4 ">

     <div className="mb-4 flex justify-center">
     <input type="text" placeholder="Enter resource" className="w-1/2 border rounded-lg p-2 hover:border-blue-800 "
     name="title" value={resource.title} onChange={InputHandler}/>   
    </div>

    <div className="flex justify-center">
    <input type="text" placeholder="Resource link" className="w-1/2 border rounded-lg p-2 hover:border-blue-800 "
    name="link" value={resource.link} onChange={InputHandler}/>
    </div>

    <div className="flex justify-center mt-10">


    <button onClick={Addresource} className="bg-blue-400 text-white font-bold px-3 py-2 rounded-full">Add Resource</button>
    </div>



    </div>

 
    

    

    </>)
}