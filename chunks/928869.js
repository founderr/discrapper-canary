"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("195548"),
  a = n("31644"),
  o = n("843279"),
  i = n("986257"),
  u = n("774728"),
  s = n("903751"),
  l = n("796752"),
  c = n("192693"),
  f = n("697309"),
  d = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function(e) {
      var t, n = e.state,
        o = e.name,
        d = e.options,
        p = n.elements.arrow,
        h = n.modifiersData.popperOffsets,
        m = (0, r.default)(n.placement),
        _ = (0, u.default)(m),
        y = [(0, f.left), (0, f.right)].indexOf(m) >= 0 ? "height" : "width";
      if (p && h) {
        var g, v, b = (g = d.padding, v = n, g = "function" == typeof g ? g(Object.assign({}, v.rects, {
            placement: v.placement
          })) : g, (0, l.default)("number" != typeof g ? g : (0, c.default)(g, f.basePlacements))),
          M = (0, a.default)(p),
          w = "y" === _ ? f.top : f.left,
          k = "y" === _ ? f.bottom : f.right,
          L = n.rects.reference[y] + n.rects.reference[_] - h[_] - n.rects.popper[y],
          D = h[_] - n.rects.reference[_],
          S = (0, i.default)(p),
          T = S ? "y" === _ ? S.clientHeight || 0 : S.clientWidth || 0 : 0,
          Y = b[w],
          x = T - M[y] - b[k],
          E = T / 2 - M[y] / 2 + (L / 2 - D / 2),
          O = (0, s.within)(Y, E, x);
        n.modifiersData[o] = ((t = {})[_] = O, t.centerOffset = O - E, t)
      }
    },
    effect: function(e) {
      var t = e.state,
        n = e.options.element,
        r = void 0 === n ? "[data-popper-arrow]" : n;
      if (null != r && ("string" != typeof r || !!(r = t.elements.popper.querySelector(r))))(0, o.default)(t.elements.popper, r) && (t.elements.arrow = r)
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  }