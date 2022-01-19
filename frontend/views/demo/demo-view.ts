
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { View } from '../view';
import '@vaadin/text-field';
import '@vaadin/grid';
import Person from 'Frontend/generated/com/example/application/data/entity/Person';
import { PersonEndpoint } from 'Frontend/generated/endpoints';
@customElement('demo-view')
export class DemoView extends View {

  @property()
  name = 'World';

  @state()
  people: Person[] = [];


  async connectedCallback() {
    super.connectedCallback();
    this.people = await PersonEndpoint.findAll();
  }

  render() {
    return html`
      <h1>Hello ${this.name}</h1>
      <vaadin-text-field
        @input="${(e: any) => this.name = e.target.value}"
        .value="${this.name}"
        > </vaadin-text-field>


        <vaadin-grid .items="${this.people}">
          <vaadin-grid-column path="firstName"></vaadin-grid-column>
          <vaadin-grid-column path="lastName"></vaadin-grid-column>
          <vaadin-grid-column path="occupation"></vaadin-grid-column>
          <vaadin-grid-column path="email"></vaadin-grid-column>
          <vaadin-grid-column path="phone"></vaadin-grid-column>
        </vaadin-grid>

    `;
  }
}
