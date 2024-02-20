"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("808653"), n("222007"), n("424973");
var r = n("299192"),
  a = n("195548"),
  o = n("521289"),
  i = n("214725"),
  u = n("328679"),
  s = n("697309"),
  l = n("794230"),
  c = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function(e) {
      var t = e.state,
        n = e.options,
        c = e.name;
      if (!t.modifiersData[c]._skip) {
        for (var f = n.mainAxis, d = void 0 === f || f, p = n.altAxis, h = void 0 === p || p, m = n.fallbackPlacements, _ = n.padding, y = n.boundary, g = n.rootBoundary, v = n.altBoundary, b = n.flipVariations, M = void 0 === b || b, w = n.allowedAutoPlacements, k = t.options.placement, L = (0, a.default)(k) === k, D = m || (L || !M ? [(0, r.default)(k)] : function(e) {
            if ((0, a.default)(e) === s.auto) return [];
            var t = (0, r.default)(e);
            return [(0, o.default)(e), t, (0, o.default)(t)]
          }(k)), S = [k].concat(D).reduce(function(e, n) {
            return e.concat((0, a.default)(n) === s.auto ? (0, u.default)(t, {
              placement: n,
              boundary: y,
              rootBoundary: g,
              padding: _,
              flipVariations: M,
              allowedAutoPlacements: w
            }) : n)
          }, []), T = t.rects.reference, Y = t.rects.popper, x = new Map, E = !0, O = S[0], P = 0; P < S.length; P++) {
          var j = S[P],
            C = (0, a.default)(j),
            H = (0, l.default)(j) === s.start,
            N = [(0, s.top), (0, s.bottom)].indexOf(C) >= 0,
            F = N ? "width" : "height",
            I = (0, i.default)(t, {
              placement: j,
              boundary: y,
              rootBoundary: g,
              altBoundary: v,
              padding: _
            }),
            A = N ? H ? s.right : s.left : H ? s.bottom : s.top;
          T[F] > Y[F] && (A = (0, r.default)(A));
          var R = (0, r.default)(A),
            W = [];
          if (d && W.push(I[C] <= 0), h && W.push(I[A] <= 0, I[R] <= 0), W.every(function(e) {
              return e
            })) {
            O = j, E = !1;
            break
          }
          x.set(j, W)
        }
        if (E) {
          for (var z = M ? 3 : 1, U = function(e) {
              var t = S.find(function(t) {
                var n = x.get(t);
                if (n) return n.slice(0, e).every(function(e) {
                  return e
                })
              });
              if (t) return O = t, "break"
            }, B = z; B > 0 && "break" !== U(B); B--);
        }
        t.placement !== O && (t.modifiersData[c]._skip = !0, t.placement = O, t.reset = !0)
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  }