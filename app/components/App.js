import Marionette from 'backbone.marionette';
import ItemView from './ItemView';
import ShadowRegion from './ShadowRegion';

export default Marionette.Application.extend({
  region: {
      el: '#app',
      regionClass: ShadowRegion
  },



  onStart() {
    this.showView(new ItemView());
  }
});
