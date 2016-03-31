import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      var city = params.city;
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    },
    // save4(params) {
    //   var newAnnouncements = this.store.createRecord('announcement', params);
    //   var city = params.city;
    //   city.get('announcements').addObject(newAnnouncements);
    //   newAnnouncements.save().then(function() {
    //     return city.save();
    //   });
    //   this.transitionTo('city', params.city);
    // }
  }
});
