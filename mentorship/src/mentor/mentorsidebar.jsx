import { Link } from "react-router-dom"
export default function Mentorsidebar(){
    return(<>
    <aside className="w-64 flex min-h-screen  bg-white  shadow-md space-y-5 mt-1">
        <div className="space-y-4 mt-2 "> 
      
  <Link to="/Admin" className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
    Admin Dashboard
  </Link>
  <Link to="/manage" className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
    Manage Programs
  </Link>
  <Link to="/resource"className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
     manage Resources
  </Link>
  <Link to="/querypage" className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
    Mentee query
  </Link>
</div>


    </aside>
    
    </>)
}