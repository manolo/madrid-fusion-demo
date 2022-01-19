
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { View } from '../view';
import '@vaadin/text-field';
import '@vaadin/grid';
import Person from 'Frontend/generated/com/example/application/data/entity/Person';
import { PersonEndpoint } from 'Frontend/generated/endpoints';
import { GridActiveItemChangedEvent } from '@vaadin/grid';
import '@vaadin/email-field';
import '@vaadin/button';
import PersonModel from 'Frontend/generated/com/example/application/data/entity/PersonModel';
import { Binder, field } from '@vaadin/form';
@customElement('demo-view')
export class DemoView extends View {

  @property()
  name = 'World';

  @state()
  people: Person[] = [];

  @state()
  selected?: Person;


  private binder = new Binder(this, PersonModel);

  async connectedCallback() {
    super.connectedCallback();
    this.people = await PersonEndpoint.findAll();
  }

  render() {
    const {model} = this.binder;


    return html`
      <h1>Hello ${this.name}</h1>
      <vaadin-text-field
        @input="${(e: any) => this.name = e.target.value}"
        .value="${this.name}"
        > </vaadin-text-field>


        <vaadin-grid .items="${this.people}"
          @active-item-changed="${this.selectionChanged}"
          .selectedItems="${[this.selected]}"
          >
          <vaadin-grid-column path="firstName"></vaadin-grid-column>
          <vaadin-grid-column path="lastName"></vaadin-grid-column>
          <vaadin-grid-column path="occupation"></vaadin-grid-column>
          <vaadin-grid-column path="email"></vaadin-grid-column>
          <vaadin-grid-column path="phone"></vaadin-grid-column>
        </vaadin-grid>

        <div class="grid grid-cols-2 gap-m items-baseline"
          ?hidden="${!this.selected}">
          <vaadin-text-field label="First Name"   ${field(model.firstName)}></vaadin-text-field>
          <vaadin-text-field label="Last Name"    ${field(model.lastName)}></vaadin-text-field>
          <vaadin-email-field label="Password" ${field(model.email)}></vaadin-email-field>
          <vaadin-button>Save</vaadin-button>
        </div>

    `;
  }
  selectionChanged(e:GridActiveItemChangedEvent<Person>)  {
    this.selected = e.detail.value;
    this.selected ? this.binder.read(this.selected) : this.binder.clear();
  }
}
