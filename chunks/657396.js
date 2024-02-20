"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("808653");
var r = n("195548"),
  a = n("697309"),
  o = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function(e) {
      var t = e.state,
        n = e.options,
        o = e.name,
        i = n.offset,
        u = void 0 === i ? [0, 0] : i,
        s = a.placements.reduce(function(e, n) {
          var o, i, s, l, c, f, d, p;
          return e[n] = (o = n, i = t.rects, s = u, l = (0, r.default)(o), c = [(0, a.left), (0, a.top)].indexOf(l) >= 0 ? -1 : 1, d = (f = "function" == typeof s ? s(Object.assign({}, i, {
            placement: o
          })) : s)[0], p = f[1], d = d || 0, p = (p || 0) * c, [(0, a.left), (0, a.right)].indexOf(l) >= 0 ? {
            x: p,
            y: d
          } : {
            x: d,
            y: p
          }), e
        }, {}),
        l = s[t.placement],
        c = l.x,
        f = l.y;
      null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = s
    }
  }