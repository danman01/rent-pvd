import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{address: '52 Trenton Street, Providence RI 02906'},{address: '2 Proctor Place, Providence RI 02906'}]
  }
});
