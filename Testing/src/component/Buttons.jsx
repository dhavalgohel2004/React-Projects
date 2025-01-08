import React from 'react'
import Digits from './Buttons/Digits'
import Operations from './Buttons/Operations'

function Buttons({onButtonClick}) {
  const Items = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const Operation = [' + ', ' - ', ' X ', ' / ', ' % ', '=', 'C'];

  return (
    <div className='flex w-full py-3'>
      <div className='text-center w-4/5 flex flex-wrap justify-between items-center'>
      {Items.map((Items, index) => (
        <Digits number={Items} key={index} onClick={onButtonClick} />
      ))}
      </div>
      <div className='text-center w-1/5 flex justify-center items-center flex-col pt-2'>
      {Operation.map((Operation, index) => (
        <Operations Operation={Operation} key={index} onClick={onButtonClick} />
      ))}
      </div>
    </div>
  )
}

export default Buttons