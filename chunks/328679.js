"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("808653");
var r = n("794230"),
  a = n("697309"),
  o = n("214725"),
  i = n("195548");

function u(e, t) {
  void 0 === t && (t = {});
  var n = t,
    u = n.placement,
    s = n.boundary,
    l = n.rootBoundary,
    c = n.padding,
    f = n.flipVariations,
    d = n.allowedAutoPlacements,
    p = void 0 === d ? a.placements : d,
    h = (0, r.default)(u),
    m = h ? f ? a.variationPlacements : a.variationPlacements.filter(function(e) {
      return (0, r.default)(e) === h
    }) : a.basePlacements,
    _ = m.filter(function(e) {
      return p.indexOf(e) >= 0
    });
  0 === _.length && (_ = m);
  var y = _.reduce(function(t, n) {
    return t[n] = (0, o.default)(e, {
      placement: n,
      boundary: s,
      rootBoundary: l,
      padding: c
    })[(0, i.default)(n)], t
  }, {});
  return Object.keys(y).sort(function(e, t) {
    return y[e] - y[t]
  })
}