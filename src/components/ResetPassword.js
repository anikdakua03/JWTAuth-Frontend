import React from 'react'

const ResetPassword = () => {
  return (
      <div className='dark:bg-slate-800 flex mt-5 justify-center border-spacing-2'>
          <div className="w-full mt-4 max-w-xs justify-center">
              <div className='flex justify-center font-bold text-rose-600 text-2xl'>Reset Password</div>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Type ypur old Password
                      </label>
                      <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your new password" />
                  </div>
                  <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          New Password
                      </label>
                      <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your new password" />
                  </div>
                  <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Retype New Password
                      </label>
                      <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your new password again" />
                  </div>
                  <div className="flex items-center justify-center">
                      <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Reset 
                      </button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default ResetPassword