'use client';

import { useEffect, useState } from 'react';
import GenerateQuoteButton from './generateQuoteButton';

interface Quote {
    author: string;
    quote: string;
    type: string;
  }

export default function InspirationalQuote() {
    const [quote, setQuote ] = useState<Quote>({author: '', quote: '', type: ''});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const url = process.env.NEXT_PUBLIC_API_URL;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
            }
        };
        const fetchQuote = async () => {
        try {
        const response = await fetch(url, options);
        const data = await response.json();
        setQuote(data);
        setLoading(false);
        } catch (error) {
            console.error('error fetching quote', error);
        };
        };
        fetchQuote();
    }, []);

    const generateQuote = () => {
        return '';
    };



    if (loading) {
        return <div className='font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>Loading...</div>;
    };
    
    return (
        <div className='font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>
            <p>{`"${quote.quote}"`}</p>
            <p className='m-2'>{`~${quote.author}`}</p>
            <GenerateQuoteButton generateQuote={generateQuote}/>
        </div>
    );
};