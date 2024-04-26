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
     * Size of the avatar in pixels
     *
     * Example: "32"
     */
    @property({ type: Number })
    public size: number = 32;

    /**
     * Border radius of the avatar
     *
     * Example: "10px" or "10px 20px" or "5%"
     */
    @property({ type: String })
    public radius: string = "0px";

    /**
     * Border color of the avatar
     *
     * Example: "#4055fc"
     */
    @property({ type: String })
    public borderColor: string = "#4055fc";

    /**
     * Border thickness of the avatar
     *
     * Example: "2", "5", "10"
     */
    @property({ type: String })
    public borderThickness: string = "2px";

    /**
     * Font size of inner text
     */
    @property({ type: Number })
    public fontSize: number = 0;

    /**
     * Background color of the avatar
     */
    @property({ type: String })
    public background: string = "#5eb8b8";

    /**
     * Text color of innert text
     */
    @property({ type: String })
    public foreground: string = "#fff";

    /**
     * Inner text content
     */
    @property({ type: String })
    public text: string | null = null;

    /**
     * Font family
     */
    @property({ type: String })
    public font: string | null = null;

    /**
     * Text render type
     */
    @property({ type: String })
    public type: "single" | "multi" = "single";

    private getFirstChar(text: string): string {
        // text may contain unicode characters
        return Array.from(text)[0] || "";
    }

    private findRightTextContent(): string {
        if (this.text) {
            if (this.type === "single") {
                return this.getFirstChar(this.text);
            } else if (this.type === "multi") {
                if (this.text.includes(" ")) {
                    return this.text
                        .replace(/\s+/g, " ")
                        .split(" ")
                        .map((word: string) => this.getFirstChar(word))
                        .slice(0, 3)
                        .join("");
                } else {
                    return this.getFirstChar(this.text);
                }
            }
        }

        return "";
    }

    public render(): TemplateResult {
        return html`
            <div
                class="lit-letter-avatar"
                style="
                    border-radius: ${this.radius};
                    width: ${this.size}px;
                    height: ${this.size}px;
                    border: ${this.borderThickness.indexOf("px") > 0
                    ? this.borderThickness
                    : this.borderThickness + "px"} solid ${this.borderColor};
                    font-size: ${this.fontSize > 0 && this.fontSize < this.size
                    ? this.fontSize
                    : this.size / 3.3}px;
                    font-family: ${this.font};
                    background-color: ${this.background};
                    color: ${this.foreground};
                "
            >
                <slot>
                    <span> ${this.findRightTextContent()} </span>
                </slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-letter-avatar": AwesomeElement;
    }
}
