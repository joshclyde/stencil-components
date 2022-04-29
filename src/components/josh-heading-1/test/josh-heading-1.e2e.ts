import { newE2EPage } from '@stencil/core/testing';

describe('josh-heading-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<josh-heading-1></josh-heading-1>');

    const element = await page.find('josh-heading-1');
    expect(element).toHaveClass('hydrated');
  });
});
