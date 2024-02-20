"use strict";
var r = n("859514"),
  a = n("470984"),
  o = n("80282"),
  i = n("823493"),
  s = n("539536"),
  c = n("148066"),
  l = n("366483"),
  u = n("16447"),
  d = n("561051"),
  p = n("571503"),
  f = n("585034"),
  h = n("391358"),
  m = n("174669")("toStringTag"),
  v = Error,
  g = [].push,
  y = function(e, t) {
    var n, r = a(b, this);
    i ? n = i(v(), r ? o(this) : b) : l(n = r ? this : c(b), m, "Error"), void 0 !== t && l(n, "message", h(t)), p(n, y, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
    var s = [];
    return f(e, g, {
      that: s
    }), l(n, "errors", s), n
  };
i ? i(y, v) : s(y, v, {
  name: !0
});
var b = y.prototype = c(v.prototype, {
  constructor: u(1, y),
  message: u(1, ""),
  name: u(1, "AggregateError")
});
r({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: y
})