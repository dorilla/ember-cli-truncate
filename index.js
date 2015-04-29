/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-truncate',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/truncate.js/truncate.js');
  }
};
