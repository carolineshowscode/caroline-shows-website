'use client';

export default function ResumeButton() {

    const handleClick = () => {
        window.open('https://carolines-website.s3.us-east-2.amazonaws.com/Caroline+Eubanks+Shows+Resume.pdf', '_blank')
    }

    return(
        <button className='rounded-xl b-4 b-black shadow-blackSolid bg-white w-64 h-32' onClick={handleClick}>Resume</button>
        
    )
} 