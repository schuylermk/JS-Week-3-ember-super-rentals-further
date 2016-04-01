import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        sales: this.get('sales'),
        weather: this.get('weather'),
        news: this.get('news'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
