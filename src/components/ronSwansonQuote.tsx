import { useEffect, useState } from 'react';

const RonSwansonQuote: React.FC = () => {
    const [quote, setQuote ] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const useEffect(() => {
        const fetchQuote = async () => {
        try {
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        const data = await response.json();
        } catch (error) {
            console.error('error fetching quote', error);
        };
    }, []);

    
    return (<div></div>);
};