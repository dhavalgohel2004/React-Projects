import { useEffect, useState } from 'react'
import Button from './component/Button'
import Quote from './component/Quote'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://quotes-api-self.vercel.app/quote'); // Fetch API data
      const data = await response.json(); // Convert to JSON

      // Update state with quote and author
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => { 
    fetchQuote();
  }, [])

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <Quote quote={quote} author={author} />
      <Button fetchQuote={fetchQuote} />
    </div>
  )
}

export default App
