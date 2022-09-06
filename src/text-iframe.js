import { LitElement, css, html } from 'lit'
import { property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class TextIFrame extends LitElement {
  static get properties() {
    return {
      /**
       * Source of the site to load in the iframe.
       */
      src: { type: String },

      /**
       * Whether this system is scrollable.
       */

      scroll: { type: Boolean },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number }
    }
  }

  constructor() {
    super()
    this.count = 0
  }

  render() {
    return html`
      <div id="wrapper">
        <iframe id="scaled-frame" src=${this.src}></iframe>
      </div>
    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
    #wrapper { width: 9.45em; height: 5em; padding: 0; overflow: ${this.scroll ? "scroll" : "hidden"}; border: 1px solid black; }
    #scaled-frame { width: 2000px; height: 2000px; border: 0px; }
    #scaled-frame {
        transform: scale(2);
        transform-origin: 1790px 575px;
    }
    `
  }
}

window.customElements.define('text-iframe', TextIFrame)
