import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
          <div className='bg-white flex flex-wrap justify-center gap-3 shadow-lg rounded-full py-2 px-3'>

            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('red')} style={{ background: 'red' }}>Red</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('green')} style={{ background: 'green' }}>Green</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('blue')} style={{ background: 'blue' }}>Blue</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('orange')} style={{ background: 'orange' }}>Orange</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('Purple')} style={{ background: 'Purple' }}>Purple</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('Grey')} style={{ background: 'Grey' }}>Grey</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('black')} style={{ background: 'black' }}>Black</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('yellow')} style={{ background: 'yellow' }}>Yellow</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('cyan')} style={{ background: 'cyan' }}>Cyan</button>
            <button className='outline-none px-4 py-2 rounded-full text-white' onClick={() => setColor('magenta')} style={{ background: 'magenta' }}>Magenta</button>

          </div>
      </div>
    </div>
  )
}

export default App
