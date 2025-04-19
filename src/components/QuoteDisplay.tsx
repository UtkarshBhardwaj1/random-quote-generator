import React from "react";

interface Quote {
  text: string;
  author: string|null;
}

interface QuoteDisplayProps {
  quote: Quote;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote }) => {
  return (
    <div className="quote-card">
      
      <p className="quote-text">"{quote.text}"</p>
      {/* <p className="quote-author">- {quote.author}</p> */}
    </div>
  );
};

export default QuoteDisplay;
