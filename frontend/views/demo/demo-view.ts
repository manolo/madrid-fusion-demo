
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../view';
@customElement('demo-view')
export class DemoView extends View {

  render() {
    return html`<h1>Hello World</h1>`;
  }
}
