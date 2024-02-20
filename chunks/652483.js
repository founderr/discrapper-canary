"use strict";

function r(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
n.r(t), n.d(t, {
  createStore: function() {
    return s
  }
}), n("781738"), n("70102"), n("424973"), n("808653"), n("466501");
var a = "function" == typeof Symbol && Symbol.observable || "@@observable",
  o = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
  },
  i = {
    INIT: "@@redux/INIT" + o(),
    REPLACE: "@@redux/REPLACE" + o(),
    PROBE_UNKNOWN_ACTION: function() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + o()
    }
  };

function s(e, t, n) {
  if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw Error(r(0));
  if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
    if ("function" != typeof n) throw Error(r(1));
    return n(s)(e, t)
  }
  if ("function" != typeof e) throw Error(r(2));
  var o, c = e,
    l = t,
    u = [],
    d = u,
    p = !1;

  function f() {
    d === u && (d = u.slice())
  }

  function h() {
    if (p) throw Error(r(3));
    return l
  }

  function m(e) {
    if ("function" != typeof e) throw Error(r(4));
    if (p) throw Error(r(5));
    var t = !0;
    return f(), d.push(e),
      function() {
        if (t) {
          if (p) throw Error(r(6));
          t = !1, f();
          var n = d.indexOf(e);
          d.splice(n, 1), u = null
        }
      }
  }

  function v(e) {
    if (! function(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
      }(e)) throw Error(r(7));
    if (void 0 === e.type) throw Error(r(8));
    if (p) throw Error(r(9));
    try {
      p = !0, l = c(l, e)
    } finally {
      p = !1
    }
    for (var t = u = d, n = 0; n < t.length; n++)(0, t[n])();
    return e
  }
  return v({
    type: i.INIT
  }), (o = {
    dispatch: v,
    subscribe: m,
    getState: h,
    replaceReducer: function(e) {
      if ("function" != typeof e) throw Error(r(10));
      c = e, v({
        type: i.REPLACE
      })
    }
  })[a] = function() {
    var e;
    return (e = {
      subscribe: function(e) {
        if ("object" != typeof e || null === e) throw Error(r(11));

        function t() {
          e.next && e.next(h())
        }
        return t(), {
          unsubscribe: m(t)
        }
      }
    })[a] = function() {
      return this
    }, e
  }, o
}