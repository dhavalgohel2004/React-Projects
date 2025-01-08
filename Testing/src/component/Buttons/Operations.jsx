import React from 'react'

function Operations({Operation, onClick, className}) {
  return (
    <button 
    className={`w-full text-black font-bold py-2 rounded-xl border-gray-400 border-4 mx-auto mb-2 ${className || 'bg-gray-200'}`}
    onClick={() => onClick(Operation)}
    >
        {Operation}
    </button>
  )
}

export default Operations;