"use strict";
const _ = require('lodash');
module.exports = {
  // find: (req, res) => {
  //   let params = _.extend(req.query || {}, req.params || {}, req.body || {});
  //   let id = params.id;
  //
  //   if (!id) {
  //     delete params.id;
  //     Product.find(params, (err, foundProducts) => {
  //       if (err) {
  //         res.serverError('An error occured while fetching products');
  //       }
  //       res.ok(foundProducts);
  //     });
  //   }
  //   else {
  //     Product.findOne(id, (err, foundProduct) => {
  //       if (err) {
  //         res.serverError('An error occured while fetching products');
  //       }
  //       if (!foundProduct) {
  //         res.notFound();
  //       }
  //       res.ok(foundProduct);
  //     });
  //   }
  // },
  //
  // update: (req, res) => {
  //   let params = _.extend(req.query || {}, req.params || {}, req.body || {});
  //   let id = params.id;
  //
  //   if (!id) return res.send("No id specified.", 500);
  //
  //   Product.update(id, params, (err, updatedProduct) => {
  //     if (err || !updatedProduct) {
  //       res.serverError('An error occured while updating the product');
  //     }
  //     res.ok(updatedProduct);
  //   });
  // },
  //
  // create: (req, res) => {
  //   let params = _.extend(req.query || {}, req.params || {}, req.body || {});
  //
  //   Product.create(params, (err, createdProduct) => {
  //     if (err || !createdProduct) {
  //       res.serverError('An error occured while creating the product');
  //     }
  //     res.ok(createdProduct);
  //   });
  // },
  //
  // destroy: (req, res) => {
  //   let params = _.extend(req.query || {}, req.params || {}, req.body || {});
  //   let id = params.id;
  //
  //   if (!id) return res.send("No id specified.", 500);
  //   Product.find(id, function foundUser(err, user) {
  //     if (err) return res.send(err, 500);
  //     if (!user) return res.send("No product with that id exists.", 404);
  //     Product.destroy(params, (err, deletedProduct) => {
  //       if (err || !deletedProduct) {
  //         res.serverError('An error occured while deleting the product');
  //       }
  //       res.ok(deletedProduct);
  //     });
  //   });
  //
  // }
};

