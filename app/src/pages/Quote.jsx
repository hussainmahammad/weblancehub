// WebLanceHub\src\pages\Quote.jsx

import React from 'react';
import QuoteForm from '../components/QuoteForm/QuoteForm.jsx';

const Quote = () => {
  return (
    <div className="quote-page-container min-h-screen pt-24 bg-gray-100 flex flex-col items-center justify-center">
      <QuoteForm />
    </div>
  );
};

export default Quote;