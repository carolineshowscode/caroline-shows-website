'use client';

export default function ResumeButton() {

    const handleClick = () => {
        window.open('https://carolines-website.s3.us-east-2.amazonaws.com/Caroline+Eubanks+Shows+Resume.pdf', '_blank')
    }

    return(
        <button className='rounded-xl border-4 border-black shadow-blackSolid bg-primary m-2 w-3/4 hover:duration-500 hover:shadow-none sm:w-1/4' onClick={handleClick}>Resume</button>
        
    );
};