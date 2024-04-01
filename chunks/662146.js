"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("261162");

function u(e) {
  let {
    children: t,
    text: n,
    color: s,
    disableWrapper: u = !1,
    disabled: d = !1,
    hideOnClick: c = !0,
    shouldShow: f,
    forceOpen: h,
    selected: p = !1,
    tooltipClass: C,
    tooltipContentClass: m
  } = e;
  return (0, l.jsx)(r.Tooltip, {
    shouldShow: f,
    forceOpen: h,
    spacing: 20,
    hideOnClick: c,
    text: d ? null : n,
    position: "right",
    color: s,
    "aria-label": !1,
    tooltipClassName: i()(o.listItemTooltip, C),
    tooltipContentClassName: m,
    children: e => u ? a.cloneElement(a.Children.only(t), {
      ...e
    }) : (0, l.jsx)("div", {
      className: i()(o.listItemWrapper, {
        [o.selected]: p
      }),
      ...e,
      children: t
    })
  })
}