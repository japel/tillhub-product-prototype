/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

const Bluebird = require('bluebird');
const faker = require('faker');

module.exports.bootstrap = function (cb) {
  let dummyData = [];

  let i;

  for (i = 0; i < 5; i++) {
    dummyData.push({
      name: faker.fake("{{commerce.productName}}"),
      description: faker.fake("{{hacker.phrase}}"),
      price: faker.fake("{{random.number}}"),
      currency: faker.fake("{{finance.currencyCode}}").substring(0,3)
    });
  }

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  Bluebird.map(dummyData, function (oneDummy) {
    return Product.create(oneDummy)
      .catch(function (error) {
        "use strict";
        sails.log.error(error);
      });
  }, {concurrency: 1})
    .then(function () {
      "use strict";
      sails.log.info("Dummy data loaded");
      cb();
    });

};
