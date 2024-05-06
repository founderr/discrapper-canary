"use strict";
n.r(t), n.d(t, {
  getAccessibleClanColor: function() {
    return I
  },
  getAccessibleTextColor: function() {
    return c
  },
  getClanPrimaryButtonStyles: function() {
    return T
  }
});
var i = n("688619"),
  r = n.n(i),
  a = n("392711"),
  s = n.n(a),
  o = n("780384"),
  l = n("481060"),
  u = n("564334"),
  d = n("302221"),
  _ = n("308083");

function c(e) {
  let t = r()(e),
    n = t.get("rgb.r"),
    i = t.get("rgb.g"),
    a = t.get("rgb.b");
  return (299 * n + 587 * i + 114 * a) / 1e3 < 128 ? l.tokens.colors.HEADER_PRIMARY.resolve({
    theme: "dark",
    saturation: 1
  }) : l.tokens.colors.HEADER_PRIMARY.resolve({
    theme: "light",
    saturation: 1
  })
}

function E(e) {
  return new u.default(e.get("rgb.r"), e.get("rgb.g"), e.get("rgb.b"), e.alpha())
}

function I(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.WCAGContrastRatios.Text;
  if (null == e) return;
  let a = null !== (n = function(e) {
      var t;
      let n = r()(e);
      return null === (t = s()(_.CLAN_BRAND_PALETTE_PRESETS).map(e => {
        let {
          primary: t
        } = e;
        return {
          primary: t,
          distance: r().distance(n, r()(t), "hsl")
        }
      }).filter(e => {
        let {
          distance: t
        } = e;
        return t < 15
      }).minBy(e => {
        let {
          distance: t
        } = e;
        return t
      })) || void 0 === t ? void 0 : t.primary
    }(e)) && void 0 !== n ? n : e,
    l = r()(a),
    u = r()(t),
    c = (0, d.getAccessibleColor)({
      colors: [E(l), E(u)],
      ratio: i,
      saturationFactor: 1
    });
  if (null != c) return r()(c.toHexString())
}

function T(e, t) {
  let n = function(e, t) {
    if (null == e) return;
    let n = I(e, t, o.WCAGContrastRatios.NonText);
    if (null == n) return;
    let i = .2 > n.luminance() ? n.brighten(.3) : n.darken(.3),
      r = .2 > n.luminance() ? n.brighten(.35) : n.darken(.35);
    return {
      "--custom-clan-bg": n.css(),
      "--custom-clan-hover-bg": i.css(),
      "--custom-clan-active-bg": r.css()
    }
  }(e, t);
  if (null == n) return;
  let i = {
    "--custom-clan-text": c(n["--custom-clan-bg"]).hex()
  };
  return {
    ...n,
    ...i
  }
}