    "use strict";
    var n = e("97131").f;
    r.exports = function(r, t, e) {
      e in r || n(r, e, {
        configurable: !0,
        get: function() {
          return t[e]
        },
        set: function(r) {
          t[e] = r
        }
      })
    }