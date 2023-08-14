'use client'

import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

import avatar from '../public/dev-ed-wave.png'
import web from '../public/code.png'
import data_eng from '../public/data_eng.png'
import ai_logo from '../public/ai.png'
import web1 from '../public/face_rec.png'
import web2 from '../public/formore.png'
import web3 from '../public/formore.png'
import web4 from '../public/formore.png'
import web5 from '../public/formore.png'
import web6 from '../public/formore.png'
// import resume from '/Rohan_Lagare_Resume.pdf'

// import { useState } from 'react'


export default function Home() {
  // const [darkMode, setDarkmode] = useState(false);

  return (
    <main className='bg-white px-10 text-gray-800 md:px-20 lg:px-40'>
     {/* {darkMode ? 'dark bg-white px-10 text-gray-800 md:px-20 lg:px-40' : 'bg-white px-10 text-gray-800 md:px-20 lg:px-40' } */}
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons text-gray-500'>developed by rohan</h1>
          <ul className='flex items-center'>
            {/* <li>
              <BsFillMoonStarsFill onClick={() => setDarkmode(!darkMode)} className='cursor-pointer text-2xl'/>
            </li> */}
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" 
                href='/Rohan_Lagare_Resume.pdf'
                // href={resume}
                target="_blank"
                locale={false}
                rel="noopener noreferrer">
              Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
            Rohan Lagare
          </h2>
          <h3 className='text-2xl py-2 md:text-3xl'>
            Software Engineer
          </h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto'>
          Experienced in Software & AI/ML development and Data Engineering, I am passionate about delivering impactful projects.
          </p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href="https://www.linkedin.com/in/rohan-lagare"><AiFillLinkedin/></a>
          <a href="https://www.github.com/rohanl1"><AiFillGithub/></a>
          <a href="https://www.twitter.com"><AiFillTwitterCircle/></a>
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={avatar} alt='3d-avatar' layout='fill' objectFit='cover'/>
        </div>
      </section>
      {/* section 2  */}

      <section>
        <div>
          <h3 className='text-3xl py-1'>What I do</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            I am passionate about leveraging data to solve complex problems and have expertise in 
            <span className='text-teal-500'> Data Engineering, web, machine learning, and AI development.</span> 
            Currently pursuing a <span className='text-teal-500'>Master&aposs degree in Computer Science</span> at Santa Clara University, I am focused on advanced topics like machine learning and AI.
          </p>
          <p className='text-md py-5 leading-8 text-gray-800'>
            I am an adept developer with a web development background, skilled in building intelligent systems and applying ML algorithms to real-world challenges. My focus is on creating engaging, user-friendly experiences that blend aesthetics with functionality. Check out my portfolio for more on my projects and achievements.
          </p>
        </div>

        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className="mx-auto" src={data_eng} alt='data-eng-logo' width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2 '>Data Engineer</h3>
            <p className='py-2'>
            Experienced data engineer with 3 years in designing scalable pipelines, ETL, cloud tech.
            </p>
            <h4 className='py-4 text-teal-600'>Tools</h4>
            <p className='text-gray-800 py-1'>Ab-initio</p>
            <p className='text-gray-800 py-1'>SQL</p>
            <p className='text-gray-800 py-1'>Cloud</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className="mx-auto" src={ai_logo} alt='ai-logo' width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2 '>AI and ML developer</h3>
            <p className='py-2'>
              Passionate about artificial intelligence and machine learning to create innovative solutions. 
            </p>
            <h4 className='py-4 text-teal-600'>Tools</h4>
            <p className='text-gray-800 py-1'>Python</p>
            <p className='text-gray-800 py-1'>Scikit-learn</p>
            <p className='text-gray-800 py-1'>Kaggle</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className="mx-auto" src={web} alt='web-logo' width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2 '>Web developer</h3>
            <p className='py-2'>
            Experienced web developer in MERN stack. 
            Passionate about crafting user-friendly websites.
            </p>
            <h4 className='py-4 text-teal-600'>Tools</h4>
            <p className='text-gray-800 py-1'>React</p>
            <p className='text-gray-800 py-1'>Tailwind</p>
            <p className='text-gray-800 py-1'>MongoDB</p>
          </div>

        </div>

      </section>

      {/* section 3 */}
      <section>
        <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            <span className='text-teal-500'>Explore my projects </span> showcasing a diverse range of web development, data engineering and AI/ML ventures. 
            <br/>
            From responsive websites built with React to data-driven solutions leveraging Python, SQL, and cloud technologies, 
            these projects highlight my expertise and passion for creating impactful and innovative solutions.
          </p>
          
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1 '>
          <a href="https://github.com/RohanL1/face_recognition" target="_blank">
            <Image src={web1} alt='web1 image' className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
          </a>
          </div>
          
          <div className='basis-1/3 flex-1 '>
          <a href="https://github.com/RohanL1/" target="_blank">
            <Image src={web2} alt='web1 image' className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
          </a>
          </div>

          <div className='basis-1/3 flex-1 '>
          <a href="https://github.com/RohanL1/" target="_blank">
            <Image src={web3} alt='web1 image' className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
          </a>
          </div>

          <div className='basis-1/3 flex-1 '>
          <a href="https://github.com/RohanL1/" target="_blank">
            <Image src={web4} alt='web1 image' className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
          </a>
          </div>


        </div>
      </section>
    
      <footer className='py-0 mb-5 flex justify-between' >
        <div className='flex items-center'>
          <h4 className='flex justify-center'>Developed by Rohan Lagare</h4>
        </div>
        <div className='text-3xl flex justify-center gap-16 text-gray-600'>
          <a href="https://www.linkedin.com/in/rohan-lagare"><AiFillLinkedin/></a>
          <a href="https://www.github.com/rohanl1"><AiFillGithub/></a>
          <a href="https://www.twitter.com"><AiFillTwitterCircle/></a>
        </div>
      </footer>
    </main>
  )
}
