import { TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindBaseElement } from "./shared/elements/base/tailwind-base-element";

import style from "./lit-letter-avatar.scss?inline";

@customElement("lit-letter-avatar")
export class AwesomeElement extends TailwindBaseElement({
    componentStyle: style,
    tailwindBase: true,
}) {
    /**
     * The number of times the button has been clicked.
     */
    @property({ type: Number })
    private count = 0;

    public render(): TemplateResult {
        return html` <div class="lit-letter-avatar"></div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-letter-avatar": AwesomeElement;
    }
}
