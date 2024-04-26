import { TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindBaseElement } from "./shared/elements/base/tailwind-base-element";

import litLogo from "./assets/lit.svg";
import viteLogo from "/vite.svg";
import style from "./awesome-element.scss?inline";

@customElement("awesome-element")
export class AwesomeElement extends TailwindBaseElement({
    componentStyle: style,
    tailwindBase: true,
}) {
    /**
     * Copy for the read the docs hint.
     */
    @property()
    private docsHint = "Click on the Vite and Lit logos to learn more";

    /**
     * The number of times the button has been clicked.
     */
    @property({ type: Number })
    private count = 0;

    private _onClick(): void {
        this.count++;
    }

    public render(): TemplateResult {
        return html`
            <div class="awe-container">
                <div class="logo-wrapper">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src=${viteLogo} class="logo" alt="Vite logo" />
                    </a>

                    <a href="https://lit.dev" target="_blank">
                        <img src=${litLogo} class="logo lit" alt="Lit logo" />
                    </a>
                </div>

                <slot></slot>

                <h1>${this.count}</h1>

                <div class="card">
                    <button
                        @click=${this._onClick}
                        part="button"
                        class="awe-button"
                    >
                        click me
                    </button>
                </div>

                <p class="read-the-docs">${this.docsHint}</p>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "awesome-element": AwesomeElement;
    }
}
