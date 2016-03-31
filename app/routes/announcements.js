import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('announcements', params.announcements_id);
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
