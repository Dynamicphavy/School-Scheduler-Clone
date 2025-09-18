import React from 'react'
import bgCount from "../assets/study.jpeg"

const Hero = () => {
  return (
    <div>

      {/* Timer */}
      <div className="w-full h-[31.25rem] bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bgCount})` }}>
        <h1 className="text-[#fff] text-[3rem]">COUNTDOWN TO NEXT CLASS</h1>
        <div className="w-[85%] h-[12.5rem] border-[#fff] border-[0.094rem] flex flex-row justify-center items-center gap-[0.938rem] text-[#fff]">
          <div className="w-[7.5rem] h-[7.5rem] flex flex-col justify-center items-center">
            <span className="text-[4rem]">00</span>
            <p>days</p>
          </div>
          <div>
            <p className="text-[3rem]">:</p>
          </div>
          <div className="w-[7.5rem] h-[7.5rem] flex flex-col justify-center items-center">
            <span className="text-[4rem]">00</span>
            <p>hours</p>
          </div>
          <div>
            <p className="text-[3rem]">:</p>
          </div>
          <div className="w-[7.5rem] h-[7.5rem] flex flex-col justify-center items-center">
            <span className="text-[4rem]">00</span>
            <p>minutes</p>
          </div>
          <div>
            <p className="text-[3rem]">:</p>
          </div>
          <div className="w-[7.5rem] h-[7.5rem] flex flex-col justify-center items-center">
            <span className="text-[4rem]">00</span>
            <p>seconds</p>
          </div>
        </div>
      </div>

      {/* Update */}
      <div className="text-[#fff] w-full h-[37.5rem] flex flex-col justify-center items-center gap-[1.875rem]">
        <h3 className="text-[2rem]">Important Updates</h3>
        <li>No updates for now</li>

        <div className="w-[95%] h-[18.75rem] flex flex-row justify-center items-center gap-[2.5rem]">
          <div className="w-[31.25rem] h-[18.75rem] flex flex-col justify-center items-center">
            <h4>Previous Class</h4>
            <span>-</span>
          </div>
          <div className="w-[31.25rem] h-[18.75rem] flex flex-col justify-center items-center">
            <h4>Next Class</h4>
            <ul className="list-none">
              <li>Day: <span>-</span></li>
              <li>Time: <span>-</span></li>
              <li>Venue: <span>-</span></li>
            </ul>
          </div>
        </div>

        <p>Classes for today (<span></span>)</p>
      </div>

      <div>
        <h2>ASSIGNMENTS</h2>
      </div>

      <div>
        <h2>Notes and Slides</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <table></table>
        <button className="w-[7.5rem] h-[2.5rem] bg-[#000] text-[#fff] border border-[#fff] rounded-[1.25rem] cursor-pointer">Go to portal</button>
      </div>
    </div>
  )
}

export default Hero;