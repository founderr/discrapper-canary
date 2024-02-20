"use strict";
r.r(t), r.d(t, {
  calculateBoxSize: function() {
    return v
  },
  calculateBoxSizes: function() {
    return p
  }
}), r("222007");
var n = r("209488"),
  i = r("839347"),
  o = r("925691"),
  s = r("355070"),
  a = new WeakMap,
  u = /auto|scroll/,
  c = /^tb|vertical/,
  f = /msie|trident/i.test(s.global.navigator && s.global.navigator.userAgent),
  l = function(e) {
    return parseFloat(e || "0")
  },
  h = function(e, t, r) {
    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = !1), Object.freeze({
      inlineSize: (r ? t : e) || 0,
      blockSize: (r ? e : t) || 0
    })
  },
  d = Object.freeze({
    devicePixelContentBoxSize: h(),
    borderBoxSize: h(),
    contentBoxSize: h(),
    contentRect: new i.DOMRectReadOnly(0, 0, 0, 0)
  }),
  p = function(e, t) {
    if (void 0 === t && (t = !1), a.has(e) && !t) return a.get(e);
    if ((0, o.isHidden)(e)) return a.set(e, d), d;
    var r = getComputedStyle(e),
      n = (0, o.isSVG)(e) && e.ownerSVGElement && e.getBBox(),
      s = !f && "border-box" === r.boxSizing,
      p = c.test(r.writingMode || ""),
      v = !n && u.test(r.overflowY || ""),
      g = !n && u.test(r.overflowX || ""),
      b = n ? 0 : l(r.paddingTop),
      m = n ? 0 : l(r.paddingRight),
      y = n ? 0 : l(r.paddingBottom),
      T = n ? 0 : l(r.paddingLeft),
      O = n ? 0 : l(r.borderTopWidth),
      x = n ? 0 : l(r.borderRightWidth),
      E = n ? 0 : l(r.borderBottomWidth),
      w = n ? 0 : l(r.borderLeftWidth),
      C = T + m,
      A = b + y,
      z = w + x,
      S = O + E,
      R = g ? e.offsetHeight - S - e.clientHeight : 0,
      k = v ? e.offsetWidth - z - e.clientWidth : 0,
      L = n ? n.width : l(r.width) - (s ? C + z : 0) - k,
      M = n ? n.height : l(r.height) - (s ? A + S : 0) - R,
      I = L + C + k + z,
      P = M + A + R + S,
      B = Object.freeze({
        devicePixelContentBoxSize: h(Math.round(L * devicePixelRatio), Math.round(M * devicePixelRatio), p),
        borderBoxSize: h(I, P, p),
        contentBoxSize: h(L, M, p),
        contentRect: new i.DOMRectReadOnly(T, b, L, M)
      });
    return a.set(e, B), B
  },
  v = function(e, t, r) {
    var i = p(e, r),
      o = i.borderBoxSize,
      s = i.contentBoxSize,
      a = i.devicePixelContentBoxSize;
    switch (t) {
      case n.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
        return a;
      case n.ResizeObserverBoxOptions.BORDER_BOX:
        return o;
      default:
        return s
    }
  }