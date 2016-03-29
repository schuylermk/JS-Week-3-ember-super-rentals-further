import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    // update(rental, params) {
    //   this.sendAction('update', rental, params);
    // },
    ////////this is now in the app/routes/rental.js file so we don't need it here.//////
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
