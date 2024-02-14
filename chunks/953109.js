"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("37983");
l("884691");
var s = l("414456"),
  n = l.n(s),
  i = l("227422"),
  r = l("476263"),
  c = l("547620"),
  u = l("646718"),
  o = l("877670");
let d = {
    XXSMALL: o.xxsmall,
    XSMALL: o.xsmall,
    SMALL: o.small,
    MEDIUM: o.medium,
    LARGE: o.large
  },
  h = e => {
    let t, {
      game: s,
      guild: h,
      skuId: f,
      pid: p,
      className: I,
      guildClassName: A,
      size: L = d.MEDIUM,
      ...m
    } = e;
    if (null != f && (t = function(e) {
        if (null == e) return null;
        switch (e) {
          case u.PremiumSubscriptionSKUs.GUILD:
            return l("229806");
          case u.PremiumSubscriptionSKUs.TIER_0:
            return l("654125");
          case u.PremiumSubscriptionSKUs.TIER_1:
            return l("108647");
          case u.PremiumSubscriptionSKUs.TIER_2:
          case u.PremiumSubscriptionSKUs.LEGACY:
            return l("943005");
          default:
            return null
        }
      }(f)), null != s && null == t && (t = s.getIconURL(function(e) {
        switch (e) {
          case d.XXSMALL:
            return 16;
          case d.XSMALL:
            return 24;
          case d.SMALL:
            return 30;
          case d.MEDIUM:
            return 40;
          case d.LARGE:
            return 60;
          default:
            return 80
        }
      }(L))), null == (t = (0, i.default)(p, t)) && null != h) {
      let e = function(e) {
        switch (e) {
          case d.XSMALL:
            return r.default.Sizes.SMALLER;
          case d.SMALL:
            return r.default.Sizes.SMALL;
          case d.LARGE:
            return r.default.Sizes.LARGE;
          default:
          case d.MEDIUM:
            return r.default.Sizes.MEDIUM
        }
      }(L);
      return (0, a.jsx)(r.default, {
        className: n(o.gameIcon, A, I),
        guild: h,
        size: e
      })
    }
    return null == t ? (0, a.jsx)(c.default, {
      className: n(o.gameIcon, L, I)
    }) : (0, a.jsx)("div", {
      ...m,
      className: n(o.gameIcon, L, I),
      style: {
        backgroundImage: "url('".concat(t, "')")
      }
    })
  };
h.Sizes = d;
var f = h