/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const cc = require('currency-codes');

module.exports = {
  schema: true,
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      maxLength: 540,
      required: true
    },
    price: {
      type: 'float',
      min: 0,
      required: true
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3,
      required: true,
      in: cc.codes(),
      notNull: true
    }

  },

};

