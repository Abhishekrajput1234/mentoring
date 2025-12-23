import { Link } from "react-router-dom"
export default function Sidebarpage(){
    return(<>
    <aside className="w-64 flex min-h-screen  bg-white  shadow-md space-y-4 mt-1">
        <div className="space-y-3 mt-2 "> 
      
  <Link to="/dashboard" className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
    Dashboard
  </Link>
  <Link to="/programlist" className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
    My Programs
  </Link>
  <Link to="/resourcepath"className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
    Resources
  </Link>
  <Link to="/query" className="block text-xl font-semibold mx-10 py-3 text-gray-900 hover:bg-gray-100 mt-4">
    Ask a Question
  </Link>
</div>


    </aside>
    
    </>)
}