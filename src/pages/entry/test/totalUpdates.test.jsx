import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
import Options from '../Options';

it('updates scoop subtotal when scoops change', async () => {
  render(<Options optionType='scoops' />);

  // make sure total start out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });

  userEvent.click(vanillaInput);
  userEvent.type(vanillaInput, '1');

  expect(scoopsSubtotal).toHaveTextContent('2.00');

  // update chocolate scoops to 2 and check subtotal

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });

  userEvent.click(chocolateInput);
  userEvent.type(chocolateInput, '2');

  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

it('should update topping subtotal when toppings change', async () => {
  render(<Options optionType='toppings' />);

  // make sure total start out at $0.00
  const toppingsTotal = screen.getByText('Toppings total: $', {
    exact: false,
  });
  expect(toppingsTotal).toHaveTextContent('0.00');

  // add cherries and check subtotal
  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });
  userEvent.click(cherriesCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');

  // add a hot fudge and check subtotal
  const hotFugeCheckbox = screen.getByRole('checkbox', {
    name: 'Hot fudge',
  });
  userEvent.click(hotFugeCheckbox);
  expect(toppingsTotal).toHaveTextContent('3.00');

  // remove hot fudge and check subtotal
  userEvent.click(hotFugeCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');
});
