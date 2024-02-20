"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var r = n("697309"),
  a = n("986257"),
  o = n("320959"),
  i = n("837052"),
  u = n("593882"),
  s = n("195548"),
  l = n("794230"),
  c = n("757367"),
  f = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

function d(e) {
  var t, n, s, l, d, p, h, m = e.popper,
    _ = e.popperRect,
    y = e.placement,
    g = e.variation,
    v = e.offsets,
    b = e.position,
    M = e.gpuAcceleration,
    w = e.adaptive,
    k = e.roundOffsets,
    L = e.isFixed,
    D = v.x,
    S = void 0 === D ? 0 : D,
    T = v.y,
    Y = void 0 === T ? 0 : T,
    x = "function" == typeof k ? k({
      x: S,
      y: Y
    }) : {
      x: S,
      y: Y
    };
  S = x.x, Y = x.y;
  var E = v.hasOwnProperty("x"),
    O = v.hasOwnProperty("y"),
    P = r.left,
    j = r.top,
    C = window;
  if (w) {
    var H = (0, a.default)(m),
      N = "clientHeight",
      F = "clientWidth";
    H === (0, o.default)(m) && (H = (0, i.default)(m), "static" !== (0, u.default)(H).position && "absolute" === b && (N = "scrollHeight", F = "scrollWidth")), (y === r.top || (y === r.left || y === r.right) && g === r.end) && (j = r.bottom, Y -= (L && H === C && C.visualViewport ? C.visualViewport.height : H[N]) - _.height, Y *= M ? 1 : -1), (y === r.left || (y === r.top || y === r.bottom) && g === r.end) && (P = r.right, S -= (L && H === C && C.visualViewport ? C.visualViewport.width : H[F]) - _.width, S *= M ? 1 : -1)
  }
  var I = Object.assign({
    position: b
  }, w && f);
  var A = !0 === k ? (t = {
    x: S,
    y: Y
  }, n = (0, o.default)(m), s = t.x, l = t.y, d = n.devicePixelRatio || 1, {
    x: (0, c.round)(s * d) / d || 0,
    y: (0, c.round)(l * d) / d || 0
  }) : {
    x: S,
    y: Y
  };
  return (S = A.x, Y = A.y, M) ? Object.assign({}, I, ((h = {})[j] = O ? "0" : "", h[P] = E ? "0" : "", h.transform = 1 >= (C.devicePixelRatio || 1) ? "translate(" + S + "px, " + Y + "px)" : "translate3d(" + S + "px, " + Y + "px, 0)", h)) : Object.assign({}, I, ((p = {})[j] = O ? Y + "px" : "", p[P] = E ? S + "px" : "", p.transform = "", p))
}
var p = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      a = n.adaptive,
      o = n.roundOffsets,
      i = void 0 === o || o,
      u = {
        placement: (0, s.default)(t.placement),
        variation: (0, l.default)(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: void 0 === r || r,
        isFixed: "fixed" === t.options.strategy
      };
    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, d(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: void 0 === a || a,
      roundOffsets: i
    })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, d(Object.assign({}, u, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: !1,
      roundOffsets: i
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    })
  },
  data: {}
}