import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   return this.store.findRecord('announcements', params);
  // },
  actions: {
    saveAnnouncement(params) {
      var newAnnouncements = this.store.createRecord('announcements', params);
      announcements.save();
      this.transitionTo('announcements');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
