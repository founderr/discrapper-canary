"use strict";
n.r(t), n.d(t, {
  isTablet: function() {
    return S
  },
  isMobile: function() {
    return g
  },
  isIOSWeb: function() {
    return T
  }
}), n("222007");
var i, r, s, a, o, l, u, c, d, p, h = n("383536"),
  f = n.n(h);
let E = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  _ = new Set(["Android", "iOS", "Windows Phone"]),
  m = (null === (r = window) || void 0 === r ? void 0 : null === (i = r.navigator) || void 0 === i ? void 0 : i.platform) === "MacIntel" && void 0 !== (null === (a = window) || void 0 === a ? void 0 : null === (s = a.navigator) || void 0 === s ? void 0 : s.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (o = l.navigator) || void 0 === o ? void 0 : o.maxTouchPoints) > 1,
  S = E.has(null !== (d = f.product) && void 0 !== d ? d : "") || m,
  g = !S && _.has(null !== (p = null == f ? void 0 : null === (u = f.os) || void 0 === u ? void 0 : u.family) && void 0 !== p ? p : ""),
  T = (null == f ? void 0 : null === (c = f.os) || void 0 === c ? void 0 : c.family) === "iOS"