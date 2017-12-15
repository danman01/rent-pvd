import { test } from 'qunit';
import moduleForAcceptance from 'rent-pvd/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

//test('should show rentals as the home page', function (assert) {
//
//})
//
//test('should link to information about the company', function (assert) {
//
//})
//
//test('should link to contact information', function (assert) {
//
//})
//test('should list available rentals', function (assert) {
//
//})
//test('should filter the list of rentals by city', function (assert) {
//
//})
//test('should show details for a selected rental', function (assert) {
//
//})


test('visiting /list-rentals', function(assert) {
  visit('/list-rentals');

  andThen(function() {
    assert.equal(currentURL(), '/list-rentals');
  });
});
