import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {

  let myObj = {
    name: 'dhaval',
    age: 30
  }

  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='text-4xl bg-green-500 text-black rounded-xl p-2 mb-3'>Tailwind testing by dhaval</h1>
      <Card productName="Jacket" img="https://images.unsplash.com/photo-1532704102644-883111bdf82d?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card productName="Shoes" img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </>
  )
}

export default App
