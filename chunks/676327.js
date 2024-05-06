"use strict";
n.r(t), n.d(t, {
  getClanPrimaryButtonStyles: function() {
    return d
  }
});
var a = n("688619"),
  s = n.n(a),
  l = n("392711"),
  i = n.n(l),
  r = n("780384"),
  o = n("353093"),
  u = n("308083");

function d(e, t) {
  var n;
  let a = function(e, t) {
    var n;
    if (null == e) return;
    let a = null !== (n = function(e) {
        var t;
        let n = s()(e);
        return null === (t = i()(u.CLAN_BRAND_PALETTE_PRESETS).map(e => {
          let {
            primary: t
          } = e;
          return {
            primary: t,
            distance: s().distance(n, s()(t), "hsl")
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
      l = s()(a),
      o = s()((0, r.getContrastingColor)(l, {
        base: t,
        contrastRatio: r.WCAGContrastRatios.NonText
      })),
      d = .2 > o.luminance() ? o.brighten(.3) : o.darken(.3),
      c = .2 > o.luminance() ? o.brighten(.35) : o.darken(.35);
    return {
      "--custom-clan-bg": o.css(),
      "--custom-clan-hover-bg": d.css(),
      "--custom-clan-active-bg": c.css()
    }
  }(e, t);
  if (null == a) return;
  let l = (n = a["--custom-clan-bg"], {
    "--custom-clan-text": (0, o.getAccessibleTextColor)(n).hex()
  });
  return {
    ...a,
    ...l
  }
}