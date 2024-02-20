"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var r = n("697309"),
  a = n("195548"),
  o = n("774728"),
  i = n("632840"),
  u = n("903751"),
  s = n("31644"),
  l = n("986257"),
  c = n("214725"),
  f = n("794230"),
  d = n("576955"),
  p = n("757367"),
  h = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function(e) {
      var t = e.state,
        n = e.options,
        h = e.name,
        m = n.mainAxis,
        _ = n.altAxis,
        y = n.boundary,
        g = n.rootBoundary,
        v = n.altBoundary,
        b = n.padding,
        M = n.tether,
        w = void 0 === M || M,
        k = n.tetherOffset,
        L = void 0 === k ? 0 : k,
        D = (0, c.default)(t, {
          boundary: y,
          rootBoundary: g,
          padding: b,
          altBoundary: v
        }),
        S = (0, a.default)(t.placement),
        T = (0, f.default)(t.placement),
        Y = !T,
        x = (0, o.default)(S),
        E = (0, i.default)(x),
        O = t.modifiersData.popperOffsets,
        P = t.rects.reference,
        j = t.rects.popper,
        C = "function" == typeof L ? L(Object.assign({}, t.rects, {
          placement: t.placement
        })) : L,
        H = "number" == typeof C ? {
          mainAxis: C,
          altAxis: C
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, C),
        N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        F = {
          x: 0,
          y: 0
        };
      if (O) {
        if (void 0 === m || m) {
          var I, A = "y" === x ? r.top : r.left,
            R = "y" === x ? r.bottom : r.right,
            W = "y" === x ? "height" : "width",
            z = O[x],
            U = z + D[A],
            B = z - D[R],
            K = w ? -j[W] / 2 : 0,
            q = T === r.start ? P[W] : j[W],
            J = T === r.start ? -j[W] : -P[W],
            V = t.elements.arrow,
            G = w && V ? (0, s.default)(V) : {
              width: 0,
              height: 0
            },
            $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, d.default)(),
            Q = $[A],
            Z = $[R],
            X = (0, u.within)(0, P[W], G[W]),
            ee = Y ? P[W] / 2 - K - X - Q - H.mainAxis : q - X - Q - H.mainAxis,
            et = Y ? -P[W] / 2 + K + X + Z + H.mainAxis : J + X + Z + H.mainAxis,
            en = t.elements.arrow && (0, l.default)(t.elements.arrow),
            er = en ? "y" === x ? en.clientTop || 0 : en.clientLeft || 0 : 0,
            ea = null != (I = null == N ? void 0 : N[x]) ? I : 0,
            eo = (0, u.within)(w ? (0, p.min)(U, z + ee - ea - er) : U, z, w ? (0, p.max)(B, z + et - ea) : B);
          O[x] = eo, F[x] = eo - z
        }
        if (void 0 !== _ && _) {
          var ei, eu = "x" === x ? r.top : r.left,
            es = "x" === x ? r.bottom : r.right,
            el = O[E],
            ec = "y" === E ? "height" : "width",
            ef = el + D[eu],
            ed = el - D[es],
            ep = -1 !== [(0, r.top), (0, r.left)].indexOf(S),
            eh = null != (ei = null == N ? void 0 : N[E]) ? ei : 0,
            em = ep ? ef : el - P[ec] - j[ec] - eh + H.altAxis,
            e_ = ep ? el + P[ec] + j[ec] - eh - H.altAxis : ed,
            ey = w && ep ? (0, u.withinMaxClamp)(em, el, e_) : (0, u.within)(w ? em : ef, el, w ? e_ : ed);
          O[E] = ey, F[E] = ey - el
        }
        t.modifiersData[h] = F
      }
    },
    requiresIfExists: ["offset"]
  }