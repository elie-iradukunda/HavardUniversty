import React from 'react'
import judith from '../assets/judith.jpeg'
import quota from '../assets/quota.svg'
import chan from '../assets/chan.jpeg'

const Landing = () => {
  
  return (
    <>
  <main className="relative h-screen bg-[url('/src/assets/backima.jpeg')] bg-cover bg-center">
 
  <div className="absolute inset-0 bg-black/20"></div>

  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
    <span className="text-4xl md:text-6xl font-bold text-black">
      Inspiring the Next <br /> Generation
    </span>

    <p className="mt-4 text-lg md:text-xl text-black max-w-xl">
      A dedication to mentorship has been part of Harvard's mission for nearly 400 <br />
      years, changing the lives of countless scientists, scholars, and leaders.
    </p>
  </div>
</main>
<hr/>

<section>
    <div>
        <div>
            <div className='flex justify-around md:flex-row flex-col space-y-7 '>
                <span className='md:text-2xl text-xl font-bold '>Educational inspiration begins at home</span>
                <p className='md:text-xl '>In this free online Harvard course, learn how successful collaborations
                    <br />
                    between families and educators can lead to improved outcomes for students
                    <br />
                    and schools.
                </p>
            </div>

            <div className='flex justify-center space-x-24'>
                <div>
                    <img src={judith} alt="" className='w-[500px]' />
                    
                </div>
                <div>
                    <img src={quota} alt="" className='-mb-10' />
                    <p className='text-6xl space-y-9'>When you mentor  <br />
                        people, they mentor <br />
                        people, then they <br />
                        people, then they <br />
                        has a huge exponential <br />
                        impact.”</p>
                        <p className='text-2xl font-semibold pt-5'>Judith Hochman</p>
                        <span>Harvard Medical School alum</span>

                        <div className='flex items-center space-x-10 cursor-pointer hover:text-blue-900 pt-6'>
                             <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-950">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
  
</div>
<span>Read more about her work</span>
                        </div>

  

                </div>
            </div>

            <div>
                <div>
                    <span>Mentorship in health <br />
                    and medicine
                    </span>
                        <hr className="border-black" />

                </div>

                <div className='flex justify-center items-center'>
                    <div>
                        <span className='text-5xl font-semibold'>How mentorship has <br />
                        helped Harvard’s public <br />
                        health students</span>
                        <p>Mentoring is a two-way journey of learning and growth where both <br />
                        the mentor and the mentee provide new perspectives.</p>
                    </div>
                    <div>
                        <img src={chan} alt="" className='w-[400px]' />
                    <span>Meet the mentees</span>
                        
                    </div>
                </div>
              
            </div>
            
        </div>
    </div>
</section>

    </>
  )
}

export default Landing
