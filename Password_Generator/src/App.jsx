import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Passwrod, setPassword] = useState(false)

  const passwordRef = useRef(null)

  // this function copy the password to the clipboard
  const copyPass = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 40)
    window.navigator.clipboard.writeText(Passwrod)
  }, [Passwrod])

  // this function generats the password 
  const passwrodGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "!@#$%&/()=?¡¿"

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)  
        pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  // when any changes make then this state is change the password 
  useEffect(() => {
    passwrodGenerator()
  }, [length, number, character, passwrodGenerator])

  return (
    <>
        <div className='w-full max-w-md text-white mx-auto shadow-md rounded-lg my-8 px-3 py-3 bg-gray-600'>
          <div className='shodow overflow-hidden mb-4 align-items-center justify-center flex flex-col'>
            <h1 className='text-xl my-3 text-center'>Password Generator</h1>
            <input type="text" value={Passwrod} ref={passwordRef} className='outline-none text-red-600 text-center px-3 py-2 w-full rounded-lg' readOnly placeholder="Password" />
            <button className='bg-blue-500 rounded-lg py-1 px-3 mt-3' onClick={copyPass}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-8'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={40} onChange={(e) => {setLength(e.target.value)}} value={length} className='cursor-pointer' />
              <label htmlFor="">Lenght: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={number} onChange={() => { setNumber((prev) => !prev)}} />
            <label htmlFor="">Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={character} onChange={() => { setCharacter((prev) => !prev)}} />
              <label htmlFor="">Character</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
