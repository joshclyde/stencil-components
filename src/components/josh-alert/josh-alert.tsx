import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'josh-alert',
  styleUrl: 'josh-alert.css',
  shadow: true,
})
export class JoshAlert {
  @Prop() kind: 'success' | 'error';

  static titleMap = { success: 'Success', error: 'Error' };
  getTitle(): string {
    return JoshAlert.titleMap[this.kind];
  }

  isSuccess(): boolean {
    return this.kind === 'success';
  }

  isError(): boolean {
    return this.kind === 'error';
  }

  render() {
    return (
      <Host>
        <div class="container" data-kind={this.kind}>
          {this.isSuccess() && <josh-icon-checkmark class="icon" color="var(--black-theme-success)" />}
          {this.isError() && <josh-icon-error class="icon" color="var(--black-theme-error)" />}
          <josh-text class="title">{this.getTitle()}</josh-text>
          <josh-text class="body">
            <slot></slot>
          </josh-text>
        </div>
      </Host>
    );
  }
}
