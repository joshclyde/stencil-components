import { newSpecPage } from '@stencil/core/testing';
import { JoshIconError } from '../josh-icon-error';

describe('josh-icon-error', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JoshIconError],
      html: `<josh-icon-error></josh-icon-error>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <josh-icon-error>
        <mock:shadow-root>
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M1.28079 1.2858C0.499742 2.06684 0.499742 3.33317 1.28079 4.11422L5.16988 8.00331L1.28079 11.8924C0.499745 12.6734 0.499745 13.9398 1.28079 14.7208C2.06184 15.5019 3.32817 15.5019 4.10922 14.7208L7.99831 10.8317L11.8874 14.7208C12.6684 15.5019 13.9348 15.5019 14.7158 14.7208C15.4969 13.9398 15.4969 12.6734 14.7158 11.8924L10.8267 8.00331L14.7158 4.11423C15.4969 3.33318 15.4969 2.06685 14.7158 1.2858C13.9348 0.50475 12.6684 0.50475 11.8874 1.2858L7.99831 5.17489L4.10922 1.2858C3.32817 0.504747 2.06184 0.504747 1.28079 1.2858Z" fill="var(--black-theme-white)" fill-rule="evenodd"></path>
          </svg>
        </mock:shadow-root>
      </josh-icon-error>
    `);
  });
});
