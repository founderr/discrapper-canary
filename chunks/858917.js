"use strict";
var n = r("859514"),
  o = r("470984"),
  i = r("80282"),
  a = r("823493"),
  u = r("539536"),
  l = r("148066"),
  s = r("366483"),
  c = r("16447"),
  p = r("561051"),
  f = r("571503"),
  y = r("585034"),
  h = r("391358"),
  d = r("174669")("toStringTag"),
  b = Error,
  g = [].push,
  v = function(t, e) {
    var r, n = o(m, this);
    a ? r = a(b(), n ? i(this) : m) : s(r = n ? this : l(m), d, "Error"), void 0 !== e && s(r, "message", h(e)), f(r, v, r.stack, 1), arguments.length > 2 && p(r, arguments[2]);
    var u = [];
    return y(t, g, {
      that: u
    }), s(r, "errors", u), r
  };
a ? a(v, b) : u(v, b, {
  name: !0
});
var m = v.prototype = l(b.prototype, {
  constructor: c(1, v),
  message: c(1, ""),
  name: c(1, "AggregateError")
});
n({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: v
})