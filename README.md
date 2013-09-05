Simple, native Javascript event handler
=============

What does it do?
-------------

This is a native JS event handler that implements a basic "pubsub" patern. (http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)

In a nutshell, you subscribe a cetain method of a certain object (or an inline javascript function) to be executed on request, and identify it with an event name. Then you fire it when needed using the name you specified.

How do I try it out?
-------------

Well, there is an index.html file in the repo with basic use case examples that should give you a general idea of how the event handler class works. 

Remember to download test.js as well if you want to try the demo, because It's a part of the demo stack.


Can you give me a basic usage example?
-------------

Sure, the flow would be:

I want to subscribe a custom event called "showPlayerName". I want it to trigger a method "show" in the "Player" class once fired.

```javascript
Deploy.Event.subscribe('showPlayerName', 'show', Player);
```

Now at one point, when I want to fire it I just call:

```javascript
Deploy.Event.fire('showPlayerName');
```

Or, if a playername accepts a parameter, let's say a boolean named "firstNameOnly", you can fire it like this:

```javascript
Deploy.Event.fire('showPlayerName', true);
```

If you are triggering a window function, e.g. a function declared in the markup and not an object method, just pass in "window" as a scope in the subscription method, like this:

```javascript

function showMe() {
  alert('Show me');
}

Deploy.Event.subscribe('cleverEventNameHere', 'showMe', window);
```

Hope this makes it a bit clearer.


