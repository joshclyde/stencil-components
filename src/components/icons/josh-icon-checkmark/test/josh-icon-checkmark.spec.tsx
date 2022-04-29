import { newSpecPage } from '@stencil/core/testing';
import { JoshIconCheckmark } from '../josh-icon-checkmark';

describe('josh-icon-checkmark', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JoshIconCheckmark],
      html: `<josh-icon-checkmark></josh-icon-checkmark>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <josh-icon-checkmark>
        <mock:shadow-root>
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10L6.00001 13L14 3" stroke="var(--black-theme-white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
          </svg>
        </mock:shadow-root>
      </josh-icon-checkmark>
    `);
  });
});
