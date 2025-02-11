'use client';

import { useEffect, useState } from 'react';
import GenerateQuoteButton from './generateQuoteButton';

interface Quote {
    author: string;
    quote: string;
    type: string;
}

export default function InspirationalQuote() {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [newQuote, setNewQuote] = useState<boolean>(false);

    useEffect(() => {
        const fetchQuote = async () => {
            const apiKey = process.env.NEXT_PUBLIC_API_KEY;
            const url = process.env.NEXT_PUBLIC_API_URL;

            if (!apiKey || !url) {
                console.error("API key or URL is missing");
                setLoading(false);
                return;
            }

            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setQuote(data);
                localStorage.setItem('quote', JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching quote', error);
            } finally {
                setLoading(false);
                setNewQuote(false);
            }
        };

        const storedData = localStorage.getItem('quote');
        
        if (storedData && !newQuote) {
            setQuote(JSON.parse(storedData));
            setLoading(false);
        } else {
            fetchQuote();
        }
    }, [newQuote]);

    const generateQuote = () => {
        setLoading(true);  // Show loading while fetching new quote
        setNewQuote(true);
    };

    if (loading) {
        return <div className='font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>Loading...</div>;
    }

    return (
        <div className='flex flex-col items-center font-playwrite bg-primary w-full h-1/4 border-t-2 p-4 text-center dark:bg-primary dark:text-black'>
            <p>{`"${quote?.quote}"`}</p>
            <p className='m-2'>{`~${quote?.author}`}</p>
            <GenerateQuoteButton generateQuote={generateQuote} />
        </div>
    );
};