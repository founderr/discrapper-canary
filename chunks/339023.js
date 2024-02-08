"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("509043"),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("206230"),
  c = n("83900"),
  f = n("391866");

function p(e) {
  let t, {
      color: n,
      size: i,
      forcedIconColor: p,
      className: m,
      iconClassName: h
    } = e,
    [E, g] = (0, r.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
    S = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_300).hex(),
    C = (0, s.hex2int)(null != n ? n : S),
    T = (0, s.int2hsl)(C, !1, E ? g : null);
  t = null != p ? p : .3 > (0, s.getDarkness)(C) ? o.default.unsafe_rawColors.PRIMARY_630.css : o.default.unsafe_rawColors.WHITE_500.css;
  let v = i / 8;
  return (0, l.jsx)("div", {
    style: {
      background: T,
      width: i,
      height: i,
      borderRadius: i,
      lineHeight: "".concat(i, "px")
    },
    className: m,
    children: (0, l.jsx)(c.default, {
      color: t,
      className: a(f.linkIcon, h),
      width: i - 2 * v,
      height: i - 2 * v,
      style: {
        margin: v
      }
    })
  })
}