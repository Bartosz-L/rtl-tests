import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('buttons tests', () => {
  beforeEach(() => render(<App />)
  )

  it('checks if button has correct color and text', () => {

    // find an element with a role of button
    const button = screen.getByRole('button', { name: 'Change to blue' })

    // expect the bg color to be red
    expect(button).toHaveStyle({ backgroundColor: 'red' })
    // expect the button text to be 'Change to blue'
    expect(button.textContent).toBe('Change to blue')

    // click button
    fireEvent.click(button)

    // expect the bg color to be blue
    expect(button).toHaveStyle({ backgroundColor: 'blue' })

    // expect the button text to be 'Change to red'
    expect(button.textContent).toBe('Change to red')
  });

  it('checks initial conditions', () => {
    // check that the button start out enabled
    const button = screen.getByRole('button', { name: 'Change to blue' })
    expect(button).toBeEnabled()
    // check that the checkbox start out unchecka

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

  })


  it('checks if checkbox disabling and enabling button', () => {
    const button = screen.getByRole('button')
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

    fireEvent.click(button)


    fireEvent.click(checkbox)
    expect(button).toBeDisabled()
    expect(button).toHaveStyle({ backgroundColor: 'gray' })

    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
    expect(button).toHaveStyle({ backgroundColor: 'blue' })

  })
});

