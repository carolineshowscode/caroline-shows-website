interface GenerateQuoteButtonProps {
    generateQuote: () => void;
}

export default function GenerateQuoteButton({ generateQuote }: GenerateQuoteButtonProps) {

    return (
        <div className='flex justify-end w-full sm:w-1/2'>
            <button onClick={generateQuote} className='font-dosis rounded-xl border-4 border-black shadow-blackSolid bg-primary m-2 w-1/2 hover:duration-500 hover:shadow-none sm:w-1/3'>Generate Quote</button>
        </div>
    ) 
}