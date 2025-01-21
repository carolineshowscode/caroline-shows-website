'use client';

import { useEffect, useState } from "react";


export default function NumberFact() {
    const [fact, setFact ] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        function getRandomInt() {
            return Math.floor(Math.random() * (200 - 1 + 1)) + 1; 
        }; 
        
        const fetchQuote = async () => {
            try {
                const num = getRandomInt();
                const response = await fetch(`http://numbersapi.com/${num}`);
                const data = response.text();
                setFact(data);
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
        <div>
            <p>{fact}</p>
        </div>
    )
};