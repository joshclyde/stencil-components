import { newE2EPage } from '@stencil/core/testing';

describe('josh-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<josh-alert></josh-alert>');

    const element = await page.find('josh-alert');
    expect(element).toHaveClass('hydrated');
  });
});
