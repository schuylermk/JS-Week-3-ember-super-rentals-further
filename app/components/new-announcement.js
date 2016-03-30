import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save4() {
      var params = {
        sales: this.get('sales'),
        weather: this.get('weather'),
        news: this.get('news'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveRental', params);
    }
  }
});
