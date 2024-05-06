"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("481060"),
  o = n("676327"),
  l = n("763624");

function u(e) {
  let {
    themeColor: t,
    color: n,
    className: r,
    ...u
  } = e, d = (0, s.useToken)(s.tokens.colors.BG_SURFACE_OVERLAY), _ = (0, o.getClanPrimaryButtonStyles)(t, d.hex());
  return (0, i.jsx)(s.Button, {
    ...u,
    style: _,
    className: a()(r, {
      [l.customButton]: null != _
    }),
    color: null != _ ? s.Button.Colors.CUSTOM : n
  })
}