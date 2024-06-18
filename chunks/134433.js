"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(866442),
  a = n(442837),
  l = n(692547),
  u = n(481060),
  _ = n(607070),
  c = n(107057);

function d(e) {
  let t, {
      color: n,
      size: r,
      forcedIconColor: d,
      className: E,
      iconClassName: I
    } = e,
    [T, h] = (0, a.Wu)([_.Z], () => [_.Z.desaturateUserColors, _.Z.saturation]),
    S = (0, u.useToken)(l.Z.unsafe_rawColors.PRIMARY_300).hex(),
    f = (0, o._i)(null != n ? n : S),
    N = (0, o.ho)(f, !1, T ? h : null);
  t = null != d ? d : .3 > (0, o.Bd)(f) ? l.Z.unsafe_rawColors.PRIMARY_630.css : l.Z.unsafe_rawColors.WHITE_500.css;
  let A = r / 8;
  return (0, i.jsx)("div", {
    style: {
      background: N,
      width: r,
      height: r,
      borderRadius: r,
      lineHeight: "".concat(r, "px")
    },
    className: E,
    children: (0, i.jsx)(u.LinkIcon, {
      size: "custom",
      color: t,
      className: s()(c.linkIcon, I),
      width: r - 2 * A,
      height: r - 2 * A,
      style: {
        margin: A
      }
    })
  })
}