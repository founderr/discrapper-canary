    "use strict";
    var n = r("325008"),
      o = r("498576"),
      i = TypeError,
      u = Object.getOwnPropertyDescriptor,
      f = n && ! function() {
        if (void 0 !== this) return !0;
        try {
          Object.defineProperty([], "length", {
            writable: !1
          }).length = 1
        } catch (e) {
          return e instanceof TypeError
        }
      }();
    e.exports = f ? function(e, t) {
      if (o(e) && !u(e, "length").writable) throw i("Cannot set read only .length");
      return e.length = t
    } : function(e, t) {
      return e.length = t
    }