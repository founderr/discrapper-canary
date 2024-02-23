"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("14124"),
  i = n("849467"),
  r = n("97347"),
  o = n("981913"),
  u = n("365064");

function d(e) {
  let {
    className: t
  } = e, n = (0, a.useRedesignIconContext)().enabled;
  return (0, l.jsx)(r.default, {
    foreground: n ? void 0 : u.slash,
    className: t
  })
}

function c(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: a,
    centerButton: r = !1,
    awaitingRemote: u,
    ...c
  } = e, f = t || n || a, h = r ? o.CenterControlButton : o.default, m = (0, s.default)(t, n, a, u), p = f ? d : i.default;
  return (0, l.jsx)(h, {
    isActive: !f,
    iconComponent: p,
    label: m,
    ...c
  })
}