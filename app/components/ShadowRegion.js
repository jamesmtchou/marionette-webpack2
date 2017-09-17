import Marionette from 'backbone.marionette';

export default class ShadowRegion extends Marionette.Region {
    static get shadowRoot() {return this._shadowRoot};
    static set shadowRoot(el) {
        this._shadowRoot = el;
    };
    getEl(el) {
        this.parentEl = ShadowRegion.shadowRoot;
        const context = _.result(this, 'parentEl');
        return $(el, context);
    }
}
