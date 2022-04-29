import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { JoshHeading1 } from '../josh-heading-1';

describe('josh-heading-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JoshHeading1],
      template: () => <josh-heading-1>Lorem ipsum</josh-heading-1>,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <josh-heading-1>
        <mock:shadow-root>
          <h1>
            <slot></slot>
          </h1>
        </mock:shadow-root>
        Lorem ipsum
      </josh-heading-1>
    `);
  });
});
