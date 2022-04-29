import { Component, h } from '@stencil/core';

@Component({
  tag: 'josh-heading-1',
  styleUrl: 'josh-heading-1.css',
  shadow: true,
})
export class JoshHeading1 {
  render() {
    return (
      <h1>
        <slot />
      </h1>
    );
  }
}
