'use client';

import { useEffect, useState } from 'react';

const RonSwansonQuote: React.FC = () => {
    const [quote, setQuote ] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchQuote = async () => {
        try {
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        const data = await response.json();
        setQuote(data);
        setLoading(false);
        } catch (error) {
            console.error('error fetching quote', error);
        };
        };
        fetchQuote();
    }, []);

    if (loading) {
        return <div className='font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>Loading...</div>;
    };
    
    return (
        <div className='font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>
            <p>{`"${quote}"`}</p>
            <p className='m-2'>~ Ron Swanson</p>
        </div>
    );
};

export default RonSwansonQuote;