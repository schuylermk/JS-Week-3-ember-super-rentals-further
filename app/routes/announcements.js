import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcements');
  },
  actions: {
    saveRental(params) {
      var newAnnouncements = this.store.createRecord('announcements', params);
      newAnnouncements.save();
      this.transitionTo('announcements');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcements');
    }
  }
});
