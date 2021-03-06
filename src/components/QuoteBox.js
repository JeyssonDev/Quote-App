import React from 'react';
import { useState } from 'react';
import Quotes from '../Quotes.json';
import Button from './Button';

const getRandom = () => Math.floor(Math.random() * Quotes.length);

const colors = ["#F05000","#F70F0C","#D900E0","#5F05FA","#0C3FED"];

const QuoteBox = () => {

    const [Quote, setQuote] = useState(Quotes[getRandom()]);

    const changeQuote = () => {
        const random = getRandom()
        setQuote(Quotes[random])
    }

    const color = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style = `background: ${color}`

    return (
        <div style={{color: color}} className="card">
            <i className="fa-solid fa-quote-left"></i>
            <div className="text-contain">
                <h3>
                    {Quote.quote}
                </h3>
                <p> 
                    {Quote.author}
                </p>
            </div>

            <Button changeQuote={changeQuote} color={color}/>

        </div>
    )
}

export default QuoteBox;