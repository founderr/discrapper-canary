    "use strict";
    var n = r("147018"),
      o = r("339718"),
      i = r("49693"),
      u = r("610148"),
      f = r("886960"),
      l = r("936940")(function() {
        return 4294967297 !== [].push.call({
          length: 4294967296
        }, 1)
      });
    n({
      target: "Array",
      proto: !0,
      arity: 1,
      forced: l || ! function() {
        try {
          Object.defineProperty([], "length", {
            writable: !1
          }).push()
        } catch (e) {
          return e instanceof TypeError
        }
      }()
    }, {
      push: function(e) {
        var t = o(this),
          r = i(t),
          n = arguments.length;
        f(r + n);
        for (var l = 0; l < n; l++) t[r] = arguments[l], r++;
        return u(t, r), r
      }
    })