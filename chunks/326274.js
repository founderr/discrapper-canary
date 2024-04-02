"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var n = s(r("215528")),
  o = s(r("912804")),
  a = s(r("988153")),
  i = s(r("498613"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = (0, n.default)("youtube-player"),
  c = {};
c.proxyEvents = function(e) {
  var t = {},
    r = function(r) {
      var n = "on" + r.slice(0, 1).toUpperCase() + r.slice(1);
      t[n] = function(t) {
        l('event "%s"', n, t), e.trigger(r, t)
      }
    },
    n = !0,
    o = !1,
    i = void 0;
  try {
    for (var s, c = a.default[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
      var u = s.value;
      r(u)
    }
  } catch (e) {
    o = !0, i = e
  } finally {
    try {
      !n && c.return && c.return()
    } finally {
      if (o) throw i
    }
  }
  return t
}, c.promisifyPlayer = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = {},
    n = function(n) {
      t && i.default[n] ? r[n] = function() {
        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return e.then(function(e) {
          var t = i.default[n],
            o = e.getPlayerState(),
            a = e[n].apply(e, r);
          return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(o) ? new Promise(function(r) {
            e.addEventListener("onStateChange", function n() {
              var o = e.getPlayerState(),
                a = void 0;
              "number" == typeof t.timeout && (a = setTimeout(function() {
                e.removeEventListener("onStateChange", n), r()
              }, t.timeout)), Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(o) && (e.removeEventListener("onStateChange", n), clearTimeout(a), r())
            })
          }).then(function() {
            return a
          }) : a
        })
      } : r[n] = function() {
        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return e.then(function(e) {
          return e[n].apply(e, r)
        })
      }
    },
    a = !0,
    s = !1,
    l = void 0;
  try {
    for (var c, u = o.default[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
      var d = c.value;
      n(d)
    }
  } catch (e) {
    s = !0, l = e
  } finally {
    try {
      !a && u.return && u.return()
    } finally {
      if (s) throw l
    }
  }
  return r
}, t.default = c, e.exports = t.default