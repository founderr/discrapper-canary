"use strict";
n("854508"), e.exports = function(e, t, r, a) {
  var o = this;
  o.sequenceLevels[e] = 0;

  function i(t) {
    var i;
    o.fireCallback(r, t, e), "keyup" !== a && (i = n("791607"), o.ignoreNextKeyup = i(t)), setTimeout(function() {
      o.resetSequences()
    }, 10)
  }
  for (var s = 0; s < t.length; ++s) {
    var c = s + 1 === t.length ? i : function(t) {
      return function() {
        o.nextExpectedAction = t, ++o.sequenceLevels[e], o.resetSequenceTimer()
      }
    }(a || o.getKeyInfo(t[s + 1]).action);
    o.bindSingle(t[s], c, a, e, s)
  }
}