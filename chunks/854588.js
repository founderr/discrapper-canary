"use strict";
E.r(_), E.d(_, {
  default: function() {
    return C
  }
}), E("70102");
var t = E("10371"),
  o = E.n(t),
  I = E("773179"),
  T = E.n(I),
  r = E("58539"),
  a = E("891600"),
  n = E("790217"),
  i = E("593251"),
  A = E("130285"),
  s = E("515950");
let {
  Themes: R
} = A._private, {
  SemanticColors: N,
  RawColors: O
} = r._private, {
  Shadows: S
} = n._private, {
  Spacing: L
} = i._private, l = Symbol("semanticColor"), D = {
  themes: R,
  colors: T.mapValues(N, (e, _) => ({
    [l]: _
  })),
  unsafe_rawColors: O,
  shadows: T.mapValues(S, e => {
    function _(_) {
      return {
        resolve: (E, t) => _(e[E].nativeStyles, t)
      }
    }
    return {
      shadowOffset: _(e => e.shadowOffset),
      shadowColor: _((e, _) => _ ? e.shadowColorAndroid : e.shadowColor),
      shadowOpacity: _(e => e.shadowOpacity),
      shadowRadius: _(e => e.shadowRadius),
      elevation: _(e => e.elevation)
    }
  }),
  radii: a.Radius,
  spacing: L,
  internal: {
    isSemanticColor: e => "object" == typeof e && null !== e && l in e,
    resolveSemanticColor(e, _, E) {
      var t, I;
      e = function(e) {
        if ("string" == typeof e) {
          let _ = e.toUpperCase();
          if (!(_ in R)) throw Error("Invalid theme: ".concat(e));
          e = R[_]
        }
        return e
      }(e);
      let T = N[_[l]],
        {
          category: r
        } = T,
        a = T[e],
        n = O[a.raw],
        i = a.opacity;
      if ((null == E ? void 0 : E.gradient) != null && "gradient" in T) {
        let e = T.gradient,
          _ = e[null == E ? void 0 : E.gradient.theme];
        if (null != _) {
          let e = o(_.color in O ? O[_.color] : null == E ? void 0 : E.gradient.colors[_.color]);
          "saturation" in _ && (e = e.set("hsl.s", _.saturation)), "lightness" in _ && (e = e.set("hsl.l", _.lightness)), n = e.hex(), i = "opacity" in _ ? _.opacity : 1
        }
      }
      let A = null !== (t = null == E ? void 0 : E.contrast) && void 0 !== t ? t : 1,
        S = null !== (I = null == E ? void 0 : E.saturation) && void 0 !== I ? I : 1;
      if (S < 1 && (n = (0, s.transformColorForReducedSaturation)(n, r, S)), 1 !== A && (n = (0, s.transformColorContrast)(n, r, e, A)), 1 === i) return n;
      {
        let e = o(n);
        return e.alpha(i).hex()
      }
    },
    adjustColorSaturation: (e, _, E) => (0, s.transformColorForReducedSaturation)(e, E, _),
    adjustColorContrast: (e, _, E, t) => (0, s.transformColorContrast)(e, E, t, _)
  }
};
var C = D