import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log("I am trying to load rentals, cities, announcements");
    return Ember.RSVP.hash ({
      rentals: this.store.findAll('rental'),
      cities: this.store.findAll('city'),
      announcements: this.store.findAll('announcements')
    });
  },
  actions: {
    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    saveCity(params) {
      var newCity =this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('rentals');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    },
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    }
  }
});
