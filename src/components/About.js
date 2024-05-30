import React from 'react'
import im from '../Assets/Images/cv.png'

function About() {
  return (
    <div>
      <div className="flex">
          <div className="ml-6 pt-28">
            <img src={im} className='h-[70%] w-[90%] bg-green-200 rounded-full'></img>
          </div>
          <div className="">
            <p className="pt-24 ml-4">
            <span className='text-red-600 font-bold text-2xl'> Hi, I am Dina Shrestha.</span>
             <p>I live in Itahari Sunsari. I'm currently
              reading in 8th semester. I am new in website desiging and learning
              new designing. I love cooking and coding.{" "}</p>
            </p>
            
            <h4 className='mt-[10%] ml-[15%] text-red-600 text-3xl'>-------Intro</h4>

            <p className="ml-[15%]">
              {" "}
              I was born and raised in itahari, where i grew up in a town and
              always had playing around the house. I am entering my final year
              at the University Of Koshi St james College where i am studying
              Bachelor of Computer Application. I am jdcgiwudhsnksjfhwoewfndsvjfh
              <p>nklfhvifhvbjvjfhvifhvbbbbbbbbbbbbbbbbbbjfhgierfebbvvvvvvvvvvvvvvvvvvvvvv
              nklfhvifhvbjvjfhvifhvbbbbbbbbbbbbbbbbbbjfhgierfebbvvvvvvvvvvvvvvvvvvvvvvvnnnnnnnnn
              vnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
              jjjjjjjjjjjjjjjjjjjjjjk
              jfffffffffffff
              ccccccccc
              djjjjjjjjjjjjjjj
            </p>
          </div>
        </div>
        
    <div className="flex">
    <div className="rounded-full bg-green-600 h-20 w-20 ml-[50%] hover:bg-slate-700">
     <p className='ml-3 mt-5 text-white '>Resume</p> 
    </div>
    <div className="rounded-full bg-green-600 h-20 w-20 ml-[2%] hover:bg-blue-300">
     <p className='mt-5 ml-3 text-white'>Resume</p> 
    </div>
    </div>
       <button class="shadow-[#8a8d89]"></button>
      </div>
     
    
  )
}

export default About