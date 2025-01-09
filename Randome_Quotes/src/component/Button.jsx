import React from 'react'

function Button({fetchQuote}) {
  return (
    <button 
    onClick={fetchQuote}
    className='bg-green-400 text-white py-2 px-4 rounded-xl mt-5'>
        Get Quote
    </button>
  )
}

export default Button