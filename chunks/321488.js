"use strict";
n.r(t);
var a, s, i = n("735250");
n("470079");
var l = n("120356"),
  r = n.n(l),
  o = n("873546"),
  u = n("481060"),
  d = n("742274");

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: a,
    actionType: s = 2,
    shouldHighlight: l
  } = e;
  return (0, i.jsx)(u.Tooltip, {
    text: n,
    children: e => (0, i.jsx)(u.Clickable, {
      ...e,
      "aria-label": n,
      onClick: a,
      className: r()(d.actionButton, {
        [d.actionAccept]: 0 === s,
        [d.actionDeny]: 1 === s,
        [d.highlight]: l,
        [d.actionButtonMobile]: o.isMobile
      }),
      children: (0, i.jsx)(t, {
        className: d.icon
      })
    })
  })
}(a = s || (s = {}))[a.ACCEPT = 0] = "ACCEPT", a[a.DENY = 1] = "DENY", a[a.DEFAULT = 2] = "DEFAULT", c.ActionTypes = s, t.default = c