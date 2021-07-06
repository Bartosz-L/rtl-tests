import { useState } from 'react';
const App = () => {

  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const handleClick = () => {
    setButtonColor(newButtonColor)
  }

  const handleCheckboxClick = (e) => {
    setDisabled(e.target.checked)
  }

  return (
    <div>
      <button style={{ backgroundColor: disabled ? 'gray' : buttonColor }} onClick={handleClick} disabled={disabled}>Change to {newButtonColor}</button>

      <input type="checkbox" id='disable-button-checkbox' defaultChecked={disabled} aria-checked={disabled} onChange={handleCheckboxClick} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
