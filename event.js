/**
 * @fileoverview Deploy Inc. simple event handler object.
 *
 * @author nniciforovic@deployinc.com (Nemanja Niciforovic)
 * @author smisic@deployinc.com (Srdjan Misic)
 */

// Declaring the Deploy namespace.
var Deploy = Deploy || {};

(function() {

  'use strict';

  /**
   * Deploy Event handler object.
   *
   * @type {Object}
   */
  Deploy.Event = {

    /**
     * Container object holding the event subscriptions list.
     *
     * @type {Object}
     */
    subscriptions: {},

    /**
     * Event object handler invoker - method called when invoking an
     * already subscribed event.
     *
     * @param {string} name - Name of the event being fired.
     * @param {?*} eventArguments - Optional event arguments to be passed to the
     *                                                          handler method.
     */
    fire: function(name, eventArguments)
    {
      if (this.subscriptions[name] !== null &&
          this.subscriptions[name] instanceof Array) {

        for (var i = 0; i < this.subscriptions[name].length; i++) {

          var subscription = this.subscriptions[name][i];

          if (typeof subscription.scope[subscription.handler] === 'function') {

            subscription.scope[subscription.handler](eventArguments);
          }
        }
      }
    },

    /**
     * The subscriber method, adding the subscribed event, its handler and
     * the scope to the Event watcher object.
     *
     * @param {string} name
     * @param {string} handler
     * @param {Object} scope
     */
    subscribe: function(name, handler, scope)
    {
      this.checkSubscriptionParams_(name, handler, scope);

      if (typeof this.subscriptions[name] === 'undefined') {

        this.subscriptions[name] = [];
      }

      if (!this.isSubscribed_(name, handler, scope)) {

        this.subscriptions[name].push({'handler': handler, 'scope': scope});
      }
    },

    /**
     * Helper method that checks if all the parameters for subscription have
     * been properly set and if not throws an error.
     *
     * @param {string} name
     * @param {string} handler
     * @param {Object} scope
     */
    checkSubscriptionParams_: function(name, handler, scope)
    {
      // Subscription event name must be defined.
      if (typeof name === 'undefined') {
        throw 'Invalid parameter exception: No event name specified.';
      }

      // Subscription event handler must be defined.
      if (typeof handler === 'undefined') {
        throw 'Invalid parameter exception: No event handler specified.';
      }

      // Subscription event handler scope must be defined.
      if (typeof scope === 'undefined') {
        throw 'Invalid parameter exception: No event handler scope specified.';
      }

      // Type of the subscription event name parameter must be a string.
      if (typeof name !== 'string') {
        throw 'Invalid parameter exception: Event name must be a string.';
      }

      // Type of the subscription event handler parameter must be a string.
      if (typeof handler !== 'string') {
        throw 'Invalid parameter exception: Event handler must be a string ' +
            'representation of the method to be invoked.';
      }
    },

    /**
     * Helper method checking if the same event with the same handler has
     * already been added to avoid double invocation.
     *
     * @param {string} name
     * @param {string} handler
     * @param {Object} scope
     * @return {boolean}
     */
    isSubscribed_: function(name, handler, scope)
    {
      var subscribed = false;

      for (var i = 0; i < this.subscriptions[name].length; i++) {

        var subscription = this.subscriptions[name][i];

        if (subscription.handler === handler && subscription.scope === scope) {

          subscribed = true;
        }
      }

      return subscribed;
    }

  };

}());
