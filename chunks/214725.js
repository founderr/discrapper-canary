"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("949337"),
  a = n("837052"),
  o = n("130670"),
  i = n("794040"),
  u = n("483165"),
  s = n("697309"),
  l = n("753671"),
  c = n("796752"),
  f = n("192693");

function d(e, t) {
  void 0 === t && (t = {});
  var n = t,
    d = n.placement,
    p = void 0 === d ? e.placement : d,
    h = n.strategy,
    m = void 0 === h ? e.strategy : h,
    _ = n.boundary,
    y = void 0 === _ ? s.clippingParents : _,
    g = n.rootBoundary,
    v = void 0 === g ? s.viewport : g,
    b = n.elementContext,
    M = void 0 === b ? s.popper : b,
    w = n.altBoundary,
    k = n.padding,
    L = void 0 === k ? 0 : k,
    D = (0, c.default)("number" != typeof L ? L : (0, f.default)(L, s.basePlacements)),
    S = M === s.popper ? s.reference : s.popper,
    T = e.rects.popper,
    Y = e.elements[void 0 !== w && w ? S : M],
    x = (0, r.default)((0, l.isElement)(Y) ? Y : Y.contextElement || (0, a.default)(e.elements.popper), y, v, m),
    E = (0, o.default)(e.elements.reference),
    O = (0, i.default)({
      reference: E,
      element: T,
      strategy: "absolute",
      placement: p
    }),
    P = (0, u.default)(Object.assign({}, T, O)),
    j = M === s.popper ? P : E,
    C = {
      top: x.top - j.top + D.top,
      bottom: j.bottom - x.bottom + D.bottom,
      left: x.left - j.left + D.left,
      right: j.right - x.right + D.right
    },
    H = e.modifiersData.offset;
  if (M === s.popper && H) {
    var N = H[p];
    Object.keys(C).forEach(function(e) {
      var t = [(0, s.right), (0, s.bottom)].indexOf(e) >= 0 ? 1 : -1,
        n = [(0, s.top), (0, s.bottom)].indexOf(e) >= 0 ? "y" : "x";
      C[e] += N[n] * t
    })
  }
  return C
}