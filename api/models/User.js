/**
 * User.js
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

    email: {
        type: 'string',
        unique: true,
        required: true
      },

    // e.g., "cm"
    senha: {
      type: 'string'
    }
  }
}
