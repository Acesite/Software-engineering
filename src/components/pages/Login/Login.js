import React from 'react';


function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      {/* Updated the background color to dirty white */}
      <div className="bg-white shadow-md rounded-lg flex overflow-hidden max-w-5xl h-[600px]"> 
        {/* Added height for the form */}
        <div className="w-1/2 p-8">
          <div className="flex items-center mt-10">
            <div className="text-blue-600 text-3xl font-bold">
              <i className="fas fa-wave-square"></i>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-5 ">Sign in</h2>
          <p className="text-gray-600 mb-6">
            Please sign in your  account
            <a href="#" className="text-blue-600"></a>
          </p>
          <form>
            <div className="mb-4 ">
              <label className="block text-gray-700 mb-1 ">Username</label>
              <input
                type="email"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Sign in
            </button>
          </form>
        </div>

        
        <div className="w-1/2">
          <img
            src="/lcc.jpg"
            alt="lcc logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </div>
     
  );
}

export default Login;
