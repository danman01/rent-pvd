import ENV from 'rent-pvd/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

import Ember from 'ember';

//export default ActiveModelAdapter.extend({
//  host: ENV.apiHost,
//
//  auth: Ember.inject.service(),
//
//  headers: Ember.computed('auth.credentials.token', {
//    get () {
//      let headers = {};
//      const token = this.get('auth.credentials.token');
//      if (token) {
//        headers.Authorization = `Token token=${token}`;
//      }
//
//      return headers;
//    },
//  }),
import DS from 'ember-data';
export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
