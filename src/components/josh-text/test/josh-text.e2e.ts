import { newE2EPage } from '@stencil/core/testing';

describe('josh-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<josh-text></josh-text>');

    const element = await page.find('josh-text');
    expect(element).toHaveClass('hydrated');
  });
});
