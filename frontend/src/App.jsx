


function App() {


  return (
         

  

  
        <form className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">To-Do List</h1>
    
            <div className="flex items-center space-x-3 mb-6">
              <input 
                type="text" 
                placeholder="Add a new task"
                className="w-full p-4 border-2 border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
              <button 
                className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
    
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                <button className="text-gray-500 hover:text-red-500">Edit</button>
                <span className="text-gray-800 font-medium">Finish React project</span>
                <button className="text-gray-500 hover:text-red-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
              <li className="flex items-center justify-between p-4  bg-gray-100 rounded-lg shadow-md">
                <button className="text-gray-500 hover:text-red-500">Edit</button>
                <span className="text-gray-800 font-medium">Go grocery shopping</span>
                <button className="text-gray-500 hover:text-red-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </form>
      );
    };
    
   
    

 

export default App
