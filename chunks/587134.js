"use strict";
n.r(t), n.d(t, {
  useRegisteredDropTarget: function() {
    return l
  }
}), n("70102"), n("222007"), n("424973");
var r = n("29150"),
  a = n("119076"),
  o = n("634115"),
  i = n("146166"),
  s = n("5662");

function c(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function l(e, t, n) {
  var l = (0, a.useDragDropManager)(),
    u = (0, s.useDropTarget)(e, t),
    d = (0, i.useAccept)(e);
  (0, o.useIsomorphicLayoutEffect)(function() {
    var e, a, o = (a = 2, function(e) {
        if (Array.isArray(e)) return e
      }(e = (0, r.registerTarget)(d, u, l)) || function(e, t) {
        var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != a) {
          var o = [],
            i = !0,
            s = !1;
          try {
            for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
          } catch (e) {
            s = !0, r = e
          } finally {
            try {
              !i && null != a.return && a.return()
            } finally {
              if (s) throw r
            }
          }
          return o
        }
      }(e, a) || function(e, t) {
        if (e) {
          if ("string" == typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
        }
      }(e, a) || function() {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()),
      i = o[0],
      s = o[1];
    return t.receiveHandlerId(i), n.receiveHandlerId(i), s
  }, [l, t, u, n, d.map(function(e) {
    return e.toString()
  }).join("|")])
}