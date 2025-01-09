import { useEffect, useState } from 'react'
import Button from './component/Button'
import Quote from './component/Quote'

function App() {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true); 
    try {
      const response = await fetch('https://quotes-api-self.vercel.app/quote');
      const data = await response.json();
      
      setQuoteData({ quote: data.quote, author: data.author });
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => { 
    fetchQuote();
  }, [])

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : (
        <Quote quote={quoteData.quote} author={quoteData.author} />
      )}
      <Button fetchQuote={fetchQuote} />
    </div>
  )
}

export default App
