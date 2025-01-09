import React from 'react'

function Quote({quote, author}) {
  return (
    <div className="text-center p-4 border rounded shadow-lg mt-10">
        <p className="text-xl font-bold mb-2">"{quote}"</p>
        <p className="text-gray-600">- {author}</p>
    </div>
  )
}

export default Quote