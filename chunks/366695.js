"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(829968),
  l = n(346656),
  u = n(474936),
  _ = n(689938),
  c = n(866699);
let d = {
    XXSMALL: c.xxsmall,
    XSMALL: c.xsmall,
    SMALL: c.small,
    MEDIUM: c.medium,
    LARGE: c.large
  },
  E = e => {
    let t, {
      game: r,
      guild: E,
      skuId: I,
      pid: T,
      className: h,
      guildClassName: S,
      size: f = d.MEDIUM
    } = e;
    if (null != I && (t = function(e) {
        if (null == e) return null;
        switch (e) {
          case u.Si.GUILD:
            return n(632342);
          case u.Si.TIER_0:
            return n(467596);
          case u.Si.TIER_1:
            return n(670957);
          case u.Si.TIER_2:
          case u.Si.LEGACY:
            return n(480768);
          default:
            return null
        }
      }(I)), null != r && null == t && (t = r.getIconURL(function(e) {
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
      }(f))), null == (t = (0, a.Z)(T, t)) && null != E) {
      let e = function(e) {
        switch (e) {
          case d.XSMALL:
            return l.Z.Sizes.SMALLER;
          case d.SMALL:
            return l.Z.Sizes.SMALL;
          case d.LARGE:
            return l.Z.Sizes.LARGE;
          default:
          case d.MEDIUM:
            return l.Z.Sizes.MEDIUM
        }
      }(f);
      return (0, i.jsx)(l.Z, {
        className: s()(c.gameIcon, S, h),
        guild: E,
        size: e
      })
    }
    if (null == t) return (0, i.jsx)(o.UnknownGameIcon, {
      size: "md",
      color: "currentColor",
      className: s()(c.gameIcon, f, h)
    });
    let N = null == r ? void 0 : r.name,
      A = null != N && "" !== N ? _.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
        applicationName: N
      }) : _.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
    return (0, i.jsx)("img", {
      alt: A,
      src: t,
      className: s()(c.gameIcon, f, h)
    })
  };
E.Sizes = d, t.Z = E