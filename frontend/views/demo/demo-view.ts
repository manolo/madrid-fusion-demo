
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { View } from '../view';
import '@vaadin/text-field';
@customElement('demo-view')
export class DemoView extends View {

  @property()
  name = 'World';

  render() {
    return html`
      <h1>Hello ${this.name}</h1>
      <vaadin-text-field
        @input="${(e: any) => this.name = e.target.value}"
        .value="${this.name}"
        > </vaadin-text-field>
    `;
  }
}
