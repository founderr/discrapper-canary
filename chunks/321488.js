"use strict";
a.r(t);
var n, s, l = a("735250");
a("470079");
var i = a("803997"),
  r = a.n(i),
  o = a("873546"),
  u = a("481060"),
  d = a("503179");

function c(e) {
  let {
    icon: t,
    tooltip: a,
    onClick: n,
    actionType: s = 2,
    shouldHighlight: i
  } = e;
  return (0, l.jsx)(u.Tooltip, {
    text: a,
    children: e => (0, l.jsx)(u.Clickable, {
      ...e,
      "aria-label": a,
      onClick: n,
      className: r()(d.actionButton, {
        [d.actionAccept]: 0 === s,
        [d.actionDeny]: 1 === s,
        [d.highlight]: i,
        [d.actionButtonMobile]: o.isMobile
      }),
      children: (0, l.jsx)(t, {
        className: d.icon
      })
    })
  })
}(n = s || (s = {}))[n.ACCEPT = 0] = "ACCEPT", n[n.DENY = 1] = "DENY", n[n.DEFAULT = 2] = "DEFAULT", c.ActionTypes = s, t.default = c