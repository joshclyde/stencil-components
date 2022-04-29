import { newSpecPage } from '@stencil/core/testing';
import { JoshAlert } from '../josh-alert';

describe('josh-alert', () => {
  it('should render a success alert', async () => {
    const page = await newSpecPage({
      components: [JoshAlert],
      html: `<josh-alert kind='success'>Lorem Ipsum</josh-alert>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <josh-alert kind="success">
        <mock:shadow-root>
          <div class="container" data-kind="success">
            <josh-icon-checkmark class="icon" color="var(--black-theme-success)"></josh-icon-checkmark>
            <josh-text class="title">
              Success
            </josh-text>
            <josh-text class="body">
              <slot></slot>
            </josh-text>
          </div>
        </mock:shadow-root>
        Lorem Ipsum
      </josh-alert>
    `);
  });

  it('should render an error alert', async () => {
    const page = await newSpecPage({
      components: [JoshAlert],
      html: `<josh-alert kind='error'>Lorem Ipsum</josh-alert>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <josh-alert kind="error">
        <mock:shadow-root>
          <div class="container" data-kind="error">
            <josh-icon-error class="icon" color="var(--black-theme-error)"></josh-icon-error>
            <josh-text class="title">
              Error
            </josh-text>
            <josh-text class="body">
              <slot></slot>
            </josh-text>
          </div>
        </mock:shadow-root>
        Lorem Ipsum
      </josh-alert>
    `);
  });
});
