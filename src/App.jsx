import { useState } from 'react'
import './App.css'

function Field({ currentValue, onFieldClick }) {
  return (
    <button className='border' onClick={onFieldClick}>{currentValue}</button>
  )
}

function App() {
  const [fields, setFields] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState(false);

  const handleClick = (index) => {
    if (turn) {
      fields[index] = 'x';
    } else {
      fields[index] = '0';
    }
    setTurn(!turn);
  }

  const restart = () => {
    setFields(['', '', '', '', '', '', '', '', '']);
    setTurn(false);
  }

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '10px' }}>The next player is: {turn ? 'x' : 'o'}</div >
      <div className='grid'>
        <Field currentValue={fields[0]} onFieldClick={() => handleClick(0)}></Field>
        <Field currentValue={fields[1]} onFieldClick={() => handleClick(1)}></Field>
        <Field currentValue={fields[2]} onFieldClick={() => handleClick(2)}></Field>
        <Field currentValue={fields[3]} onFieldClick={() => handleClick(3)}></Field>
        <Field currentValue={fields[4]} onFieldClick={() => handleClick(4)}></Field>
        <Field currentValue={fields[5]} onFieldClick={() => handleClick(5)}></Field>
        <Field currentValue={fields[6]} onFieldClick={() => handleClick(6)}></Field>
        <Field currentValue={fields[7]} onFieldClick={() => handleClick(7)}></Field>
        <Field currentValue={fields[8]} onFieldClick={() => handleClick(8)}></Field>
      </div>
      <button style={{ display: 'flex', marginTop: '10px' }} onClick={restart}>Restart</button>
    </>
  )
}

export default App
