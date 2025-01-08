import React from 'react'

function Digits({number = 0, onClick, className}) {
  return (
    <button 
    className={`w-1/3 bg-black text-white py-6 rounded-xl border-gray-400 border-4 mx-auto mb-2 ${className || 'bg-black'}`}
    onClick={() => onClick(number)}
    >
        {number}
    </button>
  )
}

export default Digits