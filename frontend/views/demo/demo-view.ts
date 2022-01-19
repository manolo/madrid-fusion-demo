
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { View } from '../view';
@customElement('demo-view')
export class DemoView extends View {

  @property()
  name = 'World';

  render() {
    return html`
      <h1>Hello ${this.name}</h1>
      <input type="text" @input="${(e:any) => this.name = e.target.value}">
    `;
  }
}
