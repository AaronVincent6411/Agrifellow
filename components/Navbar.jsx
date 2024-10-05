import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-center mt-10">
        <div className="w-[90%] flex justify-center items-center py-4 bg-slate-200 h-20 opacity-75 rounded-[20px] m-5 relative"
            style={{ fontFamily: 'inkut' }}>
                <div className="flex w-[90%] justify-stretch">
                    <div className="flex gap-5 w-full relative">
                        <h1 className="cursor-pointer">Home</h1>
                        <h1 className="cursor-pointer">About Us</h1>
                        <h1 className="cursor-pointer">Team</h1>
                    </div>
                <div className="flex items-center w-1/3 gap-5 absolute right-0 top-0 bg-red-950 h-20">
                    <h1>Register</h1>
                    <h1>Login</h1>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Navbar