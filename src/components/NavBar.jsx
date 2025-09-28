import React from 'react'
import { useNavigate } from 'react-router'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full flex justify-between fixed p-[1.25rem] border-[#fff] border-1">
        <h1 className="text-[2rem] text-[#fff] font-medium">COMPUTER ENGINEERING</h1>
        <div className="flex flex-row gap-[0.938rem]">
          <button
            className="w-[5.625rem] h-[2.rem] text-[#fff] bg-transparent border-[0.125rem] border-[#fff] rounded-[1.25rem] cursor-pointer hover:bg-[#fff]text-[#000]"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;