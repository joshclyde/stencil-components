/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JoshButton {
    }
    interface JoshHeading {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLJoshButtonElement extends Components.JoshButton, HTMLStencilElement {
    }
    var HTMLJoshButtonElement: {
        prototype: HTMLJoshButtonElement;
        new (): HTMLJoshButtonElement;
    };
    interface HTMLJoshHeadingElement extends Components.JoshHeading, HTMLStencilElement {
    }
    var HTMLJoshHeadingElement: {
        prototype: HTMLJoshHeadingElement;
        new (): HTMLJoshHeadingElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "josh-button": HTMLJoshButtonElement;
        "josh-heading": HTMLJoshHeadingElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface JoshButton {
    }
    interface JoshHeading {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "josh-button": JoshButton;
        "josh-heading": JoshHeading;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "josh-button": LocalJSX.JoshButton & JSXBase.HTMLAttributes<HTMLJoshButtonElement>;
            "josh-heading": LocalJSX.JoshHeading & JSXBase.HTMLAttributes<HTMLJoshHeadingElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
