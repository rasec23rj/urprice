/**
 * Vendedor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
    // e.g., "Polly"
    name: {
      type: 'string'
    },

    // e.g., 3.26
    email: {
      type: 'string',
      required: true
    },

    // e.g., "cm"
    senha: {
      type: 'string'
    }
  }
}
