"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("77078"),
  a = n("82636"),
  u = n("782340"),
  d = n("491422");

function c(e) {
  let {
    tabIndex: t,
    className: n,
    onClick: r,
    "aria-expanded": c,
    "aria-controls": f,
    focusProps: p
  } = e, [m, h] = i.useState(!1);

  function E() {
    h(!0)
  }

  function S() {
    h(!1)
  }
  return (0, l.jsx)(s.Button, {
    look: s.Button.Looks.BLANK,
    size: s.Button.Sizes.NONE,
    tabIndex: t,
    className: o(d.activityButton, n),
    onClick: r,
    onMouseEnter: E,
    onMouseOver: E,
    onMouseLeave: S,
    onFocus: E,
    onBlur: S,
    "aria-label": u.default.Messages.SELECT_ACTIVITY,
    "aria-expanded": c,
    "aria-controls": f,
    focusProps: p,
    children: (0, l.jsx)(a.default, {
      className: o(d.rocket, m ? d.rocketHovered : d.rocketUnhovered)
    })
  })
}