import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='flex border-b bg-primary'>
        <div className='grow'>
          <h1>Hi, I'm Caroline.</h1>
          <p> I'm a software engineer and I love to build things. </p>
        </div>
        <div>
          <Image src='/caroline.png' width={560} height={620} className='rounded-3xl' alt='Caroline' />
        </div>
      </div>
      <div className='bg-secondary border-b'>
        <p>Software engineer with three years of professional experience working in the edtech industry. Proficient in front end development with extensive experience working in react frameworks with typescript. Currently expanding skill set to include back-end
        frameworks to become a more versatile full-stack developer</p>
      </div>
      <div className='flex flex-row'>
        <div>
          <h2>Tech Highlights</h2>
        </div>
        <div>
          <ol className="relative border-s border-grey dark:border-darkGrey">                  
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2024</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-white">Software Engineer II</h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey">Enhanced reimbursement, tuition assistance, and student loan systems by leading front-end development, improving infrastructure and security, and optimizing documentation, testing, and maintainability at an Edtech company.</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2022</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-white">Software Engineer I</h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey">Developed React components, integrated APIs, and supported rebranding efforts to enhance functionality, performance, and business alignment at an Edtech company.</p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2021</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-white">Graduated from Turing School of Software & Design</h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey">Completed the 1800+ hour, accredited front-end software development program</p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2020</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-white"></h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey"></p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-grey rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkGrey dark:bg-darkGrey"></div>
              <time className="mb-1 text-sm font-normal leading-none text-grey dark:text-darkGrey">2013</time>
              <h3 className="text-lg font-semibold text-darkGrey dark:text-white"></h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey"></p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
