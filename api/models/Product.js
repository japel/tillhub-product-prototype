/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

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
      type: 'integer',
      min: 0,
      required: true
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3,
      required: true
    }

  },

};

