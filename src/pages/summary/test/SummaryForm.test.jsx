import { waitForElementToBeRemoved } from '@testing-library/dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SummaryForm from '../SummaryForm';

describe('Summary form', () => {
  beforeEach(() => render(<SummaryForm setOrderPhase={jest.fn()} />));

  it('checks initial condition', () => {
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    expect(confirmButton).toBeDisabled();
  });

  it('checks ability to disable/enable button by clicking checkbox', () => {
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });

    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});

describe('popover tests', () => {
  beforeEach(() => render(<SummaryForm setOrderPhase={jest.fn()} />));

  it('should respond to hover', async () => {
    // popover starts out hidden and
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);

    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disapears when we mouse out
    userEvent.unhover(termsAndConditions);

    await act(async () => {
      await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i)
      );
    });
  });
});
