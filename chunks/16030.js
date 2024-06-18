"use strict";
n.d(t, {
  G: function() {
    return s
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(390507);
let s = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return function(n) {
    var s, o, a, l, u;
    let {
      color: _,
      ...c
    } = n, d = "currentColor";
    null != _ && (d = "string" != typeof _ && "css" in _ ? _.css : _);
    let E = null !== (s = c.size) && void 0 !== s ? s : "md",
      I = (0, r.m)(E),
      T = null !== (a = null !== (o = null == I ? void 0 : I.width) && void 0 !== o ? o : c.width) && void 0 !== a ? a : 24,
      h = {
        color: d,
        width: T,
        height: null !== (u = null !== (l = null == I ? void 0 : I.height) && void 0 !== l ? l : c.height) && void 0 !== u ? u : 24,
        foreground: c.colorClass
      };
    for (let [e, n] of Object.entries(t)) null != c[e] && (h[n] = c[e]);
    return (0, i.jsx)(e, {
      ...c,
      ...h
    })
  }
}