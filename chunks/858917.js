"use strict";
var r = n("859514"),
  i = n("470984"),
  o = n("80282"),
  s = n("823493"),
  a = n("539536"),
  c = n("148066"),
  u = n("366483"),
  d = n("16447"),
  l = n("561051"),
  f = n("571503"),
  p = n("585034"),
  h = n("391358"),
  g = n("174669")("toStringTag"),
  b = Error,
  v = [].push,
  m = function(e, t) {
    var n, r = i(y, this);
    s ? n = s(b(), r ? o(this) : y) : u(n = r ? this : c(y), g, "Error"), void 0 !== t && u(n, "message", h(t)), f(n, m, n.stack, 1), arguments.length > 2 && l(n, arguments[2]);
    var a = [];
    return p(e, v, {
      that: a
    }), u(n, "errors", a), n
  };
s ? s(m, b) : a(m, b, {
  name: !0
});
var y = m.prototype = c(b.prototype, {
  constructor: d(1, m),
  message: d(1, ""),
  name: d(1, "AggregateError")
});
r({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: m
})