interface GenerateQuoteButtonProps {
    generateQuote: () => string;
}

export default function GenerateQuoteButton({ generateQuote }: GenerateQuoteButtonProps) {

    return (
        <button onClick={generateQuote}></button>
    ) 
}