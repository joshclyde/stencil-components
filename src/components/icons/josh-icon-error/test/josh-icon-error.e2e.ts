import { newE2EPage } from '@stencil/core/testing';

describe('josh-icon-error', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<josh-icon-error></josh-icon-error>');

    const element = await page.find('josh-icon-error');
    expect(element).toHaveClass('hydrated');
  });
});
