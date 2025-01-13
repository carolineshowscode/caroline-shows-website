import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='flex border-b bg-primary p-4 sm:'>
        <div className='text-lg basis-1/2 sm:flex justify-center'>
          <h1 className='font-playwrite text-xl sm:text-5xl'>Hi, I'm Caroline.</h1>
          <p> I'm a software engineer and I love to build things. </p>
        </div>
        <div>
          <Image src='/caroline.png' width={500} height={600} layout='responsive' className='rounded-3xl shadow-xl sm:w-3/4' alt='Caroline' />
        </div>
      </div>
      <div className='bg-secondary border-b text-wrap p-4'>
        <p>Software engineer with three years of professional experience working in the edtech industry. Proficient in front end development with extensive experience working in react frameworks with typescript. Currently expanding skill set to include back-end
        frameworks to become a more versatile full-stack developer</p>
      </div>
      <div className='flex flex-row p-4'>
        <div className='bg-primary grid grid-cols-1 rounded-3xl max-h-min p-4 w-full'>
          <h2 className='text-center font-semibold'>Technical Skills</h2>
          <Image src='/reacticon.png' width={100} height={100} alt='React Logo' className=''/>
          <Image src='/awslogo.png' width={100} height={100} alt='AWS Logo' />
          <Image src='/graphqllogo.png' width={100} height={100} alt='GraphQL Logo' />
          <Image src='/jslogo.png' width={100} height={100} alt='JS Logo' />
          <Image src='/tslogo.png' width={100} height={100} alt='TS Logo' />
          <Image src='/nextjslogo.png' width={100} height={100} alt='Next.js Logo' />
          <Image src='/tailwindcsslogo.png' width={100} height={100} alt='Tailwind Logo' />
        </div>
        <div>
          <ol className="relative border-s border-grey dark:border-darkGrey ml-4">                  
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
              <h3 className="text-lg font-semibold text-darkGrey dark:text-white">Graduated from Florida State University</h3>
              <p className="mb-4 text-base font-normal text-darkGrey dark:text-grey">Graduated with a marketing degree and had seven successful years in sales before going back to school to make a career change</p>
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
