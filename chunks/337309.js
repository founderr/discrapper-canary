r.d(t, {
  Z: function() {
return a;
  }
});
var n = r(104576);

function a(e, t) {
  if ('function' != typeof t && null !== t)
throw TypeError('Super expression must either be null or a function');
  e.prototype = Object.create(t && t.prototype, {
constructor: {
  value: e,
  writable: !0,
  configurable: !0
}
  }), Object.defineProperty(e, 'prototype', {
writable: !1
  }), t && (0, n.Z)(e, t);
}