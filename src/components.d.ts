/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JoshAlert {
        "kind": 'success' | 'error';
    }
    interface JoshHeading1 {
    }
    interface JoshIconCheckmark {
        "color": string;
    }
    interface JoshIconError {
        "color": string;
    }
    interface JoshText {
    }
}
declare global {
    interface HTMLJoshAlertElement extends Components.JoshAlert, HTMLStencilElement {
    }
    var HTMLJoshAlertElement: {
        prototype: HTMLJoshAlertElement;
        new (): HTMLJoshAlertElement;
    };
    interface HTMLJoshHeading1Element extends Components.JoshHeading1, HTMLStencilElement {
    }
    var HTMLJoshHeading1Element: {
        prototype: HTMLJoshHeading1Element;
        new (): HTMLJoshHeading1Element;
    };
    interface HTMLJoshIconCheckmarkElement extends Components.JoshIconCheckmark, HTMLStencilElement {
    }
    var HTMLJoshIconCheckmarkElement: {
        prototype: HTMLJoshIconCheckmarkElement;
        new (): HTMLJoshIconCheckmarkElement;
    };
    interface HTMLJoshIconErrorElement extends Components.JoshIconError, HTMLStencilElement {
    }
    var HTMLJoshIconErrorElement: {
        prototype: HTMLJoshIconErrorElement;
        new (): HTMLJoshIconErrorElement;
    };
    interface HTMLJoshTextElement extends Components.JoshText, HTMLStencilElement {
    }
    var HTMLJoshTextElement: {
        prototype: HTMLJoshTextElement;
        new (): HTMLJoshTextElement;
    };
    interface HTMLElementTagNameMap {
        "josh-alert": HTMLJoshAlertElement;
        "josh-heading-1": HTMLJoshHeading1Element;
        "josh-icon-checkmark": HTMLJoshIconCheckmarkElement;
        "josh-icon-error": HTMLJoshIconErrorElement;
        "josh-text": HTMLJoshTextElement;
    }
}
declare namespace LocalJSX {
    interface JoshAlert {
        "kind"?: 'success' | 'error';
    }
    interface JoshHeading1 {
    }
    interface JoshIconCheckmark {
        "color"?: string;
    }
    interface JoshIconError {
        "color"?: string;
    }
    interface JoshText {
    }
    interface IntrinsicElements {
        "josh-alert": JoshAlert;
        "josh-heading-1": JoshHeading1;
        "josh-icon-checkmark": JoshIconCheckmark;
        "josh-icon-error": JoshIconError;
        "josh-text": JoshText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "josh-alert": LocalJSX.JoshAlert & JSXBase.HTMLAttributes<HTMLJoshAlertElement>;
            "josh-heading-1": LocalJSX.JoshHeading1 & JSXBase.HTMLAttributes<HTMLJoshHeading1Element>;
            "josh-icon-checkmark": LocalJSX.JoshIconCheckmark & JSXBase.HTMLAttributes<HTMLJoshIconCheckmarkElement>;
            "josh-icon-error": LocalJSX.JoshIconError & JSXBase.HTMLAttributes<HTMLJoshIconErrorElement>;
            "josh-text": LocalJSX.JoshText & JSXBase.HTMLAttributes<HTMLJoshTextElement>;
        }
    }
}
