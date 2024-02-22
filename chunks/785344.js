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
  u = n("981913"),
  o = n("365064");

function d(e) {
  let {
    className: t
  } = e, n = (0, a.useRedesignIconContext)().enabled;
  return (0, l.jsx)(r.default, {
    foreground: n ? void 0 : o.slash,
    className: t
  })
}

function c(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: a,
    centerButton: r = !1,
    awaitingRemote: o,
    ...c
  } = e, f = t || n || a, h = r ? u.CenterControlButton : u.default, m = (0, s.default)(t, n, a, o), p = f ? d : i.default;
  return (0, l.jsx)(h, {
    isActive: !f,
    iconComponent: p,
    label: m,
    ...c
  })
}