import { Component, h } from '@stencil/core';

@Component({
  tag: 'josh-text',
  styleUrl: 'josh-text.css',
  shadow: true,
})
export class JoshText {
  render() {
    return (
      <span>
        <slot></slot>
      </span>
    );
  }

}
