"use strict";
if (n("70102"), n("424973"), !Object.keys) {
  var r, i = Object.prototype.hasOwnProperty,
    o = Object.prototype.toString,
    s = n("142726"),
    a = Object.prototype.propertyIsEnumerable,
    c = !a.call({
      toString: null
    }, "toString"),
    u = a.call(function() {}, "prototype"),
    l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
    d = function(e) {
      var t = e.constructor;
      return t && t.prototype === e
    },
    f = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    },
    p = function() {
      if ("undefined" == typeof window) return !1;
      for (var e in window) try {
        if (!f["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
          d(window[e])
        } catch (e) {
          return !0
        }
      } catch (e) {
        return !0
      }
      return !1
    }(),
    h = function(e) {
      if ("undefined" == typeof window || !p) return d(e);
      try {
        return d(e)
      } catch (e) {
        return !1
      }
    };
  r = function(e) {
    var t = null !== e && "object" == typeof e,
      n = "[object Function]" === o.call(e),
      r = s(e),
      a = t && "[object String]" === o.call(e),
      d = [];
    if (!t && !n && !r) throw TypeError("Object.keys called on a non-object");
    var f = u && n;
    if (a && e.length > 0 && !i.call(e, 0))
      for (var p = 0; p < e.length; ++p) d.push(String(p));
    if (r && e.length > 0)
      for (var v = 0; v < e.length; ++v) d.push(String(v));
    else
      for (var g in e) !(f && "prototype" === g) && i.call(e, g) && d.push(String(g));
    if (c) {
      for (var b = h(e), m = 0; m < l.length; ++m) !(b && "constructor" === l[m]) && i.call(e, l[m]) && d.push(l[m])
    }
    return d
  }
}
e.exports = r