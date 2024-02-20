"use strict";
var r = n("859514"),
  a = n("503486"),
  o = n("335925").set,
  i = n("694803"),
  u = a.setImmediate ? i(o, !1) : o;
r({
  global: !0,
  bind: !0,
  enumerable: !0,
  forced: a.setImmediate !== u
}, {
  setImmediate: u
})