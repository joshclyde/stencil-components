import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { JoshText } from '../josh-text';

describe('josh-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JoshText],
      template: () => <josh-text>Lorem ipsum</josh-text>,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <josh-text>
        <mock:shadow-root>
          <span>
            <slot></slot>
          </span>
        </mock:shadow-root>
        Lorem ipsum
      </josh-text>
    `);
  });
});
