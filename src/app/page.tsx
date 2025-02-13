import InspirationalQuote from "@/components/inspirationalQuote";
import ResumeButton from "@/components/resumeButton";
import Socials from "@/components/socials";
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col dark:text-black'>
      <div className='flex justify-center border-b-2 bg-primary w-full sm:items-center'>
        <div className='basis-1/2 p-2 sm:flex flex-col items-center content-center'>
          <h1 className='text-sm font-playwrite text-center sm:text-3xl'>Hi, I&apos;m Caroline.</h1>
          <p className='text-sm text-center mt-2 sm:m-4 sm:text-xl'> I&apos;m a software engineer and I love to build things. </p>
          <ResumeButton />
        </div>
        <div className='w-full m-0 p-0 sm:w-1/4'>
          <Image src='/profilePhoto.png' width={300} height={600} layout='responsive' className='rounded-xl m-0 p-0 w-full' alt='Caroline' />
        </div>
      </div>
      <div className='flex justify-center bg-accent border-b-2 text-wrap p-4'>
        <p className='text-black font-dosis text- sm:w-1/2 text-left sm:text-center'>Software engineer with three years of professional experience working in the edtech industry. Proficient in front end development with extensive experience working in react frameworks with typescript. Currently expanding skill set to include back-end
        frameworks to become a more versatile full-stack developer</p>
      </div>
      <div className='flex flex-row p-4 sm:justify-center dark:bg-white'>
        <div className='bg-accent border-4 grid grid-cols-1 flex-col items-center rounded-3xl max-w-max p-2 w-full max-h-screen sm:p-8'>
          <h2 className='text-center font-semibold sm:text-xl'>Technical Skills</h2>
          <Image src='/reacticon.png' width={100} height={100} alt='React Logo' className='mx-auto sm:m-4'/>
          <Image src='/awslogo.png' width={100} height={100} alt='AWS Logo' className='mx-auto sm:m-4'/>
          <Image src='/graphqllogo.png' width={100} height={100} alt='GraphQL Logo' className='mx-auto sm:m-4'/>
          <Image src='/jslogo.png' width={100} height={100} alt='JS Logo' className='mx-auto sm:m-4'/>
          <Image src='/tslogo.png' width={100} height={100} alt='TS Logo' className='mx-auto sm:m-4'/>
          <Image src='/nextjslogo.png' width={100} height={100} alt='Next.js Logo' className='mx-auto sm:m-4'/>
          <Image src='/tailwindcsslogo.png' width={100} height={100} alt='Tailwind Logo' className='mx-auto sm:m-4'/>
        </div>
        <div className='w-full sm:w-1/2'>
        <h2 className='text-xl text-center font-extrabold'>Career Timeline</h2>
          <ol className="relative border-grey border-s dark:border-darkGrey ml-4">                  
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2024</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-darkGrey">Software Engineer II</h3>
              <p className="text-base font-normal text-darkGrey dark:text-grey">Enhanced reimbursement, tuition assistance, and student loan systems by leading front-end development, improving infrastructure and security, and optimizing documentation, testing, and maintainability at an Edtech company.</p>
            </li> 
              <ol className="relative border-grey border-s dark:border-darkGrey ml-4">     
                <li className="ms-4 h-10">
                  <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2023</div>
                  <p className="mb-4 text-base font-normal text-white dark:text-white">x</p>
                </li>
                <li className="ms-4 h-10">
                <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2022</div>
                  <p className="mb-4 text-base font-normal text-white dark:text-white">x</p>
                </li>
              </ol>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2021</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-darkGrey">Software Engineer I</h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey">Developed React components, integrated APIs, and supported rebranding efforts to enhance functionality, performance, and business alignment at an Edtech company.</p>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-darkGrey">Graduated from Turing School of Software & Design</h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey">Went back to school full time and completed an 1800+ hour, accredited front-end software development program</p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2020</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-white"></h3>
              <p className="text-base font-normal text-darkGrey dark:text-grey"></p>
            </li>
              <ol className="relative border-grey border-s dark:border-darkGrey ml-4">
                <li className="ms-4 h-10">
                  <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2019</div>
                  <p className="mb-4 text-base font-normal text-white dark:text-white">x</p>
                </li>
                <li className="ms-4 h-10">
                <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2018</div>
                  <p className="mb-4 text-base font-normal text-white dark:text-white">x</p>
                </li>
                <li className="ms-4 h-10">
                <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2017</div>
                  <p className="mb-4 ml-4 4text-base font-normal text-darkGrey dark:text-grey">Seven years of success in hotel sales, excelling as a sales professional and stepping into leadership roles.</p>
                </li>
                <li className="ms-4 h-10">
                <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2016</div>
                  <p className="mb-4 text-base font-normal text-white dark:text-white">x</p>
                </li>
                <li className="ms-4 h-10">
                <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2015</div>
                  <p className="mb-4 text-base font-normal text-white dark:text-white">x</p>
                </li>
                <li className="ms-4 h-10">
                <div className="absolute mt-1.5 -start-3 bg-white text-grey text-sm dark:border-darkGrey dark:bg-white">2014</div>
                  <p className="mb-4 text-base font-normal text-white dark:text-white">x</p>
                </li>
              </ol>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2013</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-darkGrey">Graduated from Florida State University</h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey">Graduated with a B.S. in Marketing</p>
            </li>
          </ol>
        </div>
      </div>
      <InspirationalQuote />
      <Socials />
    </div>
  );
};
