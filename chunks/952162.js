"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.r(t), n.d(t, {
  PreviewListImpl: function() {
    return s
  }
}), n("70102"), n("222007"), n("424973");

function a(e, t) {
  var n = o(e, t, "get");
  return function(e, t) {
    return t.get ? t.get.call(e) : t.value
  }(e, n)
}

function o(e, t, n) {
  if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e)
}
var i = new WeakMap;
class s {
  constructor() {
    var e, t, n, s, c, l;
    e = this, n = {
        writable: !0,
        value: void 0
      },
      function(e, t) {
        if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
      }(e, t = i), t.set(e, n), r(this, "register", e => {
        a(this, i).push(e)
      }), r(this, "unregister", e => {
        let t;
        for (; - 1 !== (t = a(this, i).indexOf(e));) a(this, i).splice(t, 1)
      }), r(this, "backendChanged", e => {
        for (let t of a(this, i)) t.backendChanged(e)
      }), s = this, c = [], l = o(s, i, "set"),
      function(e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable) throw TypeError("attempted to set read only private field");
          t.value = n
        }
      }(s, l, c)
  }
}