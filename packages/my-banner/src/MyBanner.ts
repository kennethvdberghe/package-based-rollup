// TODO: I want to import from a module and let rollup change import on build
// This way, clicking through in IDE and cache for NX builds will work
import './shoelace-components.js';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
//TODO: I want to import this from a module
import styles from '@shoelace-style/shoelace/dist/themes/light.styles.js';

export class MyBanner extends LitElement {
  static styles = styles;

  @property({ type: String }) name = 'Kenneth';
  render() {
    return html`<sl-alert open>
      <sl-icon slot="icon" library="fa" name="fas-circle-exclamation"></sl-icon>
      This is a standard alert. You can customize its content and even the icon.
    </sl-alert>`;
  }
}
