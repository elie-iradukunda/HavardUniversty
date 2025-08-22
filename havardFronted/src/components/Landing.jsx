import React from 'react'
import judith from '../assets/judith.jpeg'
import quota from '../assets/quota.svg'
import chan from '../assets/chan.jpeg'
  import chag from '../assets/fag.jpeg'
  import kim from '../assets/kim.jpeg'
  import sufiya from '../assets/sufiy.jpeg'
  import tea from '../assets/tea.jpeg'
  import pods from '../assets/pods.jpeg'

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

           <div className="flex flex-col md:flex-row items-center justify-center md:space-x-24 space-y-10 md:space-y-0 px-4">
  <div className="flex justify-center">
    <img src={judith} alt="" className="w-full max-w-[500px]" />
  </div>

  <div className="text-center md:text-left">
    <img src={quota} alt="" className="mx-auto md:mx-0 -mb-6 w-12 md:w-16" />
    <p className="text-2xl md:text-4xl lg:text-6xl leading-snug">
      When you mentor <br />
      people, they mentor <br />
      people, then they <br />
      people, then they <br />
      has a huge exponential <br />
      impact.”
    </p>
    <p className="text-lg md:text-2xl font-semibold pt-4">Judith Hochman</p>
    <span className="block text-sm md:text-base">Harvard Medical School alum</span>

    <div className="flex items-center justify-center md:justify-start space-x-4 cursor-pointer hover:text-blue-900 pt-6">
      <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-950">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
      <span className="text-sm md:text-base">Read more about her work</span>
    </div>
  </div>
</div>


            <div>
                <div className='text-3xl p-8'>
                    <span>Mentorship in health <br />
                    and medicine
                    </span>
                        <hr className="border-black" />

                </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 px-4">
  <div className="text-center md:text-left">
    <span className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug">
      How mentorship has <br />
      helped Harvard’s public <br />
      health students
    </span>
    <p className="mt-4 text-sm md:text-base lg:text-lg">
      Mentoring is a two-way journey of learning and growth where both <br className="hidden md:block" />
      the mentor and the mentee provide new perspectives.
    </p>
  </div>

  <div className="cursor-pointer text-center md:text-left">
    <img src={chan} alt="" className="w-full max-w-[400px] mx-auto" />
    <span className="block text-lg md:text-xl lg:text-2xl pt-3">Meet the mentees</span>
  </div>
</div>


               <div className="bg-white text-black grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
  <div className="flex flex-col items-start space-y-4">
    <img src={chag} alt="" className="w-full max-w-sm rounded-lg" />
    <span className="text-xl font-semibold">Mentorship fuels Big ideas</span>
    <p className="text-sm leading-relaxed">
      As part of mentee - mentor pair Oolumide Fagboyegun was
      awarded a fellowship to support his dissertation research,
      which focused on the substances that surround and interact
      with cells in the cortex of the brain.
    </p>
    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-slate-950 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      <span className="text-sm">Learn more about his work</span>
    </button>
  </div>

  <div className="flex flex-col items-start space-y-4">
    <img src={sufiya} alt="" className="w-full max-w-sm rounded-lg" />
    <span className="text-xl font-semibold">Mentorship fuels Big ideas</span>
    <p className="text-sm leading-relaxed">
      As part of mentee - mentor pair Oolumide Fagboyegun was
      awarded a fellowship to support his dissertation research,
      which focused on the substances that surround and interact
      with cells in the cortex of the brain.
    </p>
    <button className="flex items-center gap-2 bg-black  text-white px-4 py-2 rounded-full hover:bg-slate-950 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      <span className="text-sm">Learn more about his work</span>
    </button>
  </div>

  <div className="flex flex-col items-start space-y-4">
    <img src={kim} alt="" className="w-full max-w-sm rounded-lg" />
    <span className="text-xl font-semibold">Mentorship fuels Big ideas</span>
    <p className="text-sm leading-relaxed">
      As part of mentee - mentor pair Oolumide Fagboyegun was
      awarded a fellowship to support his dissertation research,
      which focused on the substances that surround and interact
      with cells in the cortex of the brain.
    </p>
    <button className="flex items-center gap-2 bg-black px-4 py-2  text-white rounded-full hover:bg-slate-950 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      <span className="text-sm">Learn more about his work</span>
    </button>
  </div>
</div>

              
            </div>
            
            <div>
              <span className='text-5xl'>Supporting scientists</span>
              
            </div>
            <hr className='border-black border-2'/>

<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 px-4">
  <div>
<img src={tea} alt="" />
<span>Advices for aspiring researchers</span>
<p>Knowing the impact Mentoringship has on tyhe next generation of  <br />
Scientist  ways community members shared guidance <br />
for those aiming for a career in STEM</p>
 <button className="flex items-center gap-2 bg-black px-4 py-2  text-white rounded-full hover:bg-slate-950 transition mt-9">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      <span className="text-sm">Lead their devices</span>
    </button>
            </div>
            <div>
              <img src={pods} alt="" />
             <p>Knowing the impact Mentoringship has on tyhe next generation of  <br />
Scientist  ways community members shared guidance <br />
for those aiming for a career in STEM</p>
<button className="flex items-center gap-2 bg-black px-4 py-2  text-white rounded-full hover:bg-slate-950 transition mt-9">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      <span className="text-sm">Lead about their successful</span>
    </button>
            </div>
            </div>
            
        </div>
    </div>
</section>

    </>
  )
}

export default Landing
