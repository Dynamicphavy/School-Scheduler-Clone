import React from 'react'

const LogCard = () => {
  return (
    <div>
      <div className="w-[37.5rem] h-[25rem] flex flex-col justify-center items-center gap-[1.25rem] text-[#fff] border-[#fff] border-[0.063rem]">
        <h2 className="font-medium">One of Us?</h2>
        <p>You can login with the button below</p>
        <button>Login</button>
      </div>
    </div>
  )
}

export default LogCard;