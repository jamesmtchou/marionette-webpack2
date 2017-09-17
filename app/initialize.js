import './styles/application.css';
import App from 'components/App';
import ShadowRegion from 'components/ShadowRegion';

class MarionetteApp extends Polymer.Element {
    static get is() { return 'marionette-app'; }
    connectedCallback() {
        const mountPoint = document.createElement('div');
        mountPoint.setAttribute('id', 'app');
        this.attachShadow({mode: 'open'}).appendChild(mountPoint);
        ShadowRegion.shadowRoot = this.shadowRoot;
        const app = new App({
            shadowRoot: this.shadowRoot
        });
        app.start();
    }
}

window.customElements.define(MarionetteApp.is, MarionetteApp);