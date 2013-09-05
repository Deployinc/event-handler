/**
 * @fileoverview Deploy Inc. simple event handler test object.
 *
 * @author nniciforovic@deployinc.com (Nemanja Niciforovic)
 * @author smisic@deployinc.com (Srdjan Misic)
 */

// Declaring the Deploy namespace.
var Deploy = Deploy || {};

(function() {

  'use strict';

  /**
   * Test object, setup for demo purposes.
   * @type {Object}
   */
  Deploy.Test = {

    /**
     * Show test method.
     * @param {?string} text - text to be displayed.
     */
    show: function(text) {
      var message = text ? text : 'Just a plain old default message.';
      window.alert(message);
    }
  };

}());
