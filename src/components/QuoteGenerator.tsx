// import React,{useState} from "react";
// import QuoteDisplay from "./QuoteDisplay";

// interface Quote{
//     text: string;
//     author : string;
// }

// const initialQuotes: Quote[] = [
//     { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
//     { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
//     { text: "The mind is everything. What you think you become.", author: "Buddha" },
//     { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
//     { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
//     { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
//   ];
  
//   const QuoteGenerator: React.FC = () => {
//     const [quote, setQuote] = useState<Quote>(initialQuotes[0]);
  
//     const generateRandomQuote = () => {
//       const randomIndex = Math.floor(Math.random() * initialQuotes.length);
//       setQuote(initialQuotes[randomIndex]);
//     };
  
//     return (
//       <div className="quote-container">
//         <QuoteDisplay quote={quote} />
//         <button onClick={generateRandomQuote}>New Quote</button>
//       </div>
//     );
//   };
  
//   export default QuoteGenerator;


import React, { useState, useEffect } from 'react';
import QuoteDisplay from './QuoteDisplay';

interface Quote {
  text: string;
  author: string | null;
}

const famousQuotesList: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
  { text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", author: "Aristotle" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "We know what we are, but know not what we may be.", author: "William Shakespeare" },
  { text: "Happiness is not something readymade. It comes from your own actions.", author: "Dalai Lama" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "May your choices reflect your hopes, not your fears.", author: "Nelson Mandela" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
];

const QuoteGenerator: React.FC = () => {
  const [currentAdvice, setCurrentAdvice] = useState<Quote | null>(null);
  const [famousQuote, setFamousQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch advice from the API
  const fetchAdvice = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      console.log('Advice fetched:', data);  // Debugging: check the fetched data
      setCurrentAdvice({
        text: data.slip.advice,
        author: null,
      });
    } catch (err: any) {
      console.error('Error fetching advice:', err);  // Debugging: log error
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to get a random famous quote
  const getRandomFamousQuote = () => {
    const random = Math.floor(Math.random() * famousQuotesList.length);
    return famousQuotesList[random];
  };

  useEffect(() => {
    fetchAdvice();
    setFamousQuote(getRandomFamousQuote());
  }, []);

  // Handle "New Inspiration" button click
  const handleGenerateNew = () => {
    fetchAdvice();
    setFamousQuote(getRandomFamousQuote());
  };

  // Loading and error handling
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="quote-generator-grid">
      <div className="button-wrapper">
        <button onClick={handleGenerateNew}>✨ New Inspiration</button>
      </div>
      <section className="advice-section">
        <h2 className="section-heading">💡 Daily Advice</h2>
        {currentAdvice && <QuoteDisplay quote={currentAdvice} />}
      </section>

      <section className="famous-section">
        <h2 className="section-heading">🌟 Famous Quote</h2>
        {famousQuote && <QuoteDisplay quote={famousQuote} />}
      </section>

      
    </div>
  );
};

export default QuoteGenerator;
