'use client';

import { useEffect, useState } from "react";


export default function NumberFact() {
    const [fact, setFact ] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        function getRandomInt() {
            return Math.floor(Math.random() * (200 - 1 + 1)) + 1; 
        }; 
        
        const fetchQuote = async () => {
            try {
                const num = getRandomInt();
                const response = await fetch(`https://numbersapi.com/${num}`);
                const data = response.text();
                setFact(await data);
                setLoading(false);
            } catch (error) {
                console.error('error fetching quote', error);
            }
            }
            fetchQuote();
    }, []);


    if (loading) {
        return <div className='font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>Loading...</div>;
    };
    

    return (
        <div className='font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>
            <p className='m-2'>{fact}</p>
            <p className='font-dosis text-xs'>random number facts provided by numbersapi.com</p>
        </div>
    )
};