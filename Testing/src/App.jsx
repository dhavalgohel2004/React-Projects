import { useState } from 'react'
import Screen from './component/Screen'
import Buttons from './component/Buttons'

function App() {

  const [currentValue, setCurrentValue] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [operator, setOperator] = useState('');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (typeof value === 'number') {

      setCurrentValue((prevValue) => prevValue + value)
      setExpression((prevValue) => prevValue + value)
    }else if (value === ' = '){

      calculateResult();

    }else if (value === 'C'){

      clearCalculator();

    }else{

      if (currentValue === '') return;

      if (prevValue !== '' && operator !== '') {
        calculateResult();
      }

      setPrevValue(currentValue);
      setOperator(value);
      setExpression((prev) => prev + `${value}`)
      setCurrentValue('');
    }
  }

  const calculateResult = () => {
    let calculation;
    switch(operator){
      case ' + ':
        calculation = parseFloat(prevValue) + parseFloat(currentValue);
        break;
      case ' - ':
        calculation = parseFloat(prevValue) - parseFloat(currentValue);
        break;
      case ' X ':
        calculation = parseFloat(prevValue) * parseFloat(currentValue);
        break;
      case ' / ':
        calculation = parseFloat(prevValue) / parseFloat(currentValue);
        break;
      case ' % ':
        calculation = (parseFloat(prevValue) * parseFloat(currentValue)) / 100;
        break;
      default:
        calculation = calculation;
    }

    setResult(calculation);
    setPrevValue('');
    setOperator('');
    setCurrentValue('');
    setExpression('');

  }

  const clearCalculator = () => {
    setCurrentValue('');
    setPrevValue('');
    setOperator('');
    setResult('');
    setExpression('');
  }

  return (
    <div className='bg-gray-400 w-1/2 mx-auto mt-16 flex flex-col justify-center items-center p-4 rounded-xl'>
      <h1 className='font-bold text-3xl pb-3'>CALCULATOR</h1>
      <Screen value={result ? result : expression || '0'} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  )
}

export default App
