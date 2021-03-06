import { Element } from "engine";
import { const1 } from "moduleTest:testLib";
import { log } from "util.js";

export default class Simple extends Element {
    @api literal = "Default literal";
    @api bound = "Default bound";
    @api unbound = "Default unbound";
    @api expression = 'Default expression';
    @api callbackaction;
    @api nested = "Default nested"

    static publicMethods = ['test'];

    handleFireAction() {
        if (this.callbackaction) {
            this.callbackaction({ something: 'true' });
        }
    }

    handlePressEvent() {
        const event = new CustomEvent('press', {
            bubbles: true,
            cancelable: true,
            detail: { value: 'test!' }
        });

        this.dispatchEvent(event);
    }

    test() {
        window.console.log('Test method!'); // eslint-disable-line no-console
    }
}
