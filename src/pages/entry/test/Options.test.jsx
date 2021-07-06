import { screen, render } from '@testing-library/react';
import Options from '../Options';

describe('options tests', () => {
  it('displays image for each scoop option from server', async () => {
    render(<Options optionType='scoops' />);
    // find images

    // when using async data use async function and findBy which is asynchronous
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    // @ts-ignore
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

  it('displays image for each toppings option from server', async () => {
    render(<Options optionType='toppings' />);

    // find images

    // when using async data use async function and findBy which is asynchronous
    const toppingsImages = await screen.findAllByRole('img', {
      name: /topping$/i,
    });
    expect(toppingsImages).toHaveLength(3);

    // confirm alt text of images
    // @ts-ignore
    const altText = toppingsImages.map((element) => element.alt);
    expect(altText).toEqual([
      'Cherries topping',
      'M&Ms topping',
      'Hot fudge topping',
    ]);
  });
});
