"use strict";
n.r(t), n.d(t, {
  getResizeObserver: function() {
    return i
  },
  unwatch: function() {
    return o
  },
  watch: function() {
    return r
  }
}), n("47120");
let a = new WeakMap,
  l = new WeakMap;

function s(e, t) {
  e.forEach(e => {
    var n;
    let a = null === (n = l.get(t)) || void 0 === n ? void 0 : n.get(e.target);
    null != a && a.call(null, e)
  })
}

function i(e) {
  let t = a.get(e);
  return null == t && (t = new ResizeObserver(s), a.set(e, t), l.set(t, new WeakMap)), t
}

function r(e, t, n) {
  var a;
  let s = i(e),
    r = null !== (a = l.get(s)) && void 0 !== a ? a : new WeakMap;
  !r.has(t) && s.observe(t), r.set(t, n), l.set(s, r)
}

function o(e, t) {
  var n;
  let a = i(e),
    s = null !== (n = l.get(a)) && void 0 !== n ? n : new WeakMap;
  s.has(t) && (s.delete(t), a.unobserve(t), l.set(a, s))
}