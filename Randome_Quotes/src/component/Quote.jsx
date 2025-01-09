import React from 'react'

function Quote({quote, author}) {
  return (
    <div className="text-center bg-black p-4 rounded-xl shadow-lg mt-10">
        <p className="text-xl font-bold mb-2 text-white">"{quote}"</p>
        <p className="text-gray-400">- {author}</p>
    </div>
  )
}

export default Quote