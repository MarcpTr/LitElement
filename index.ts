import {LitElement, css, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background: #f0f8ff;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-family: sans-serif;
      color: #333;
    }

    p {
      font-size: 1.2em;
    }

    button {
      padding: 8px 12px;
      margin-top: 8px;
      font-size: 1em;
      cursor: pointer;
    }
  `;
  @property()
  name: string = 'World';

  @state()
  private count: number = 0;

  private changeName() {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
    this.name = names[Math.floor(Math.random() * names.length)];
  }

  private increment() {
    this.count++;
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <p>You clicked ${this.count} times.</p>
      <button @click=${this.changeName}>Change Name</button>
      <button @click=${this.increment}>Click Me</button>
    `;
  }
}
