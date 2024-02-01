"use strict";
var r = n("859514"),
  i = n("470984"),
  o = n("80282"),
  s = n("823493"),
  a = n("539536"),
  c = n("148066"),
  u = n("366483"),
  l = n("16447"),
  d = n("561051"),
  f = n("571503"),
  p = n("585034"),
  h = n("391358"),
  v = n("174669")("toStringTag"),
  g = Error,
  b = [].push,
  m = function(e, t) {
    var n, r = i(y, this);
    s ? n = s(g(), r ? o(this) : y) : u(n = r ? this : c(y), v, "Error"), void 0 !== t && u(n, "message", h(t)), f(n, m, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
    var a = [];
    return p(e, b, {
      that: a
    }), u(n, "errors", a), n
  };
s ? s(m, g) : a(m, g, {
  name: !0
});
var y = m.prototype = c(g.prototype, {
  constructor: l(1, m),
  message: l(1, ""),
  name: l(1, "AggregateError")
});
r({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: m
})