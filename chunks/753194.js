"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(866442),
  s = n(442837),
  o = n(692547),
  a = n(481060),
  l = n(607070),
  u = n(797717),
  _ = n(689938);

function c(e) {
  let t, {
      color: n,
      size: c,
      forcedIconColor: d,
      className: E,
      iconClassName: I,
      tooltipText: T
    } = e,
    [h, f] = (0, s.Wu)([l.Z], () => [l.Z.desaturateUserColors, l.Z.saturation]),
    S = (0, a.useToken)(o.Z.unsafe_rawColors.PRIMARY_300).hex(),
    N = (0, r._i)(null != n ? n : S),
    A = (0, r.ho)(N, !1, h ? f : null);
  return t = null != d ? d : .3 > (0, r.Bd)(N) ? o.Z.unsafe_rawColors.PRIMARY_630.css : o.Z.unsafe_rawColors.WHITE_500.css, (0, i.jsx)(a.Tooltip, {
    text: null != T ? T : _.Z.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
    children: e => (0, i.jsx)(u.Z, {
      ...e,
      className: E,
      color: A,
      size: c,
      children: (0, i.jsx)(a.CheckmarkSmallIcon, {
        size: "custom",
        color: t,
        height: c,
        width: c,
        className: I
      })
    })
  })
}