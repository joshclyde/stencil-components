import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'josh-icon-checkmark',
  styleUrl: 'josh-icon-checkmark.css',
  shadow: true,
})
export class JoshIconCheckmark {
  /*
    The CSS color used for the icon. Defaults to var(--black-theme-white).
  */
  @Prop() color: string = 'var(--black-theme-white)';

  render() {
    return (
      <Host>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10L6.00001 13L14 3" stroke={this.color} stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Host>
    );
  }
}
