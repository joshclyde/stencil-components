import { newE2EPage } from '@stencil/core/testing';

describe('josh-icon-checkmark', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<josh-icon-checkmark></josh-icon-checkmark>');

    const element = await page.find('josh-icon-checkmark');
    expect(element).toHaveClass('hydrated');
  });
});
