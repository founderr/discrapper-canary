"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("692547"),
  o = n("829968"),
  l = n("346656"),
  u = n("438071"),
  d = n("474936"),
  _ = n("689938"),
  c = n("458217");
let E = {
    XXSMALL: c.xxsmall,
    XSMALL: c.xsmall,
    SMALL: c.small,
    MEDIUM: c.medium,
    LARGE: c.large
  },
  I = e => {
    let t, {
      game: r,
      guild: I,
      skuId: T,
      pid: f,
      className: S,
      guildClassName: h,
      size: A = E.MEDIUM
    } = e;
    if (null != T && (t = function(e) {
        if (null == e) return null;
        switch (e) {
          case d.PremiumSubscriptionSKUs.GUILD:
            return n("632342");
          case d.PremiumSubscriptionSKUs.TIER_0:
            return n("467596");
          case d.PremiumSubscriptionSKUs.TIER_1:
            return n("670957");
          case d.PremiumSubscriptionSKUs.TIER_2:
          case d.PremiumSubscriptionSKUs.LEGACY:
            return n("480768");
          default:
            return null
        }
      }(T)), null != r && null == t && (t = r.getIconURL(function(e) {
        switch (e) {
          case E.XXSMALL:
            return 16;
          case E.XSMALL:
            return 24;
          case E.SMALL:
            return 30;
          case E.MEDIUM:
            return 40;
          case E.LARGE:
            return 60;
          default:
            return 80
        }
      }(A))), null == (t = (0, o.default)(f, t)) && null != I) {
      let e = function(e) {
        switch (e) {
          case E.XSMALL:
            return l.default.Sizes.SMALLER;
          case E.SMALL:
            return l.default.Sizes.SMALL;
          case E.LARGE:
            return l.default.Sizes.LARGE;
          default:
          case E.MEDIUM:
            return l.default.Sizes.MEDIUM
        }
      }(A);
      return (0, i.jsx)(l.default, {
        className: s()(c.gameIcon, h, S),
        guild: I,
        size: e
      })
    }
    if (null == t) return (0, i.jsx)(u.default, {
      className: s()(c.gameIcon, A, S)
    });
    let m = null == r ? void 0 : r.name,
      N = null != m && "" !== m ? _.default.Messages.APPLICATION_ICON_A11Y_LABEL.format({
        applicationName: m
      }) : _.default.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
    return (0, i.jsx)("img", {
      alt: N,
      src: t,
      className: s()(c.gameIcon, A, S),
      style: {
        borderRadius: function(e) {
          switch (e) {
            case E.XXSMALL:
              return a.default.radii.xs;
            case E.XSMALL:
            case E.SMALL:
              return a.default.radii.sm;
            case E.MEDIUM:
              return a.default.radii.md;
            case E.LARGE:
              return a.default.radii.lg;
            default:
              return a.default.radii.sm
          }
        }(A)
      }
    })
  };
I.Sizes = E, t.default = I