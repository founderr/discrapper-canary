"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("629806");

function u(e) {
  let {
    icon: t,
    tooltip: s,
    onClick: n,
    className: u
  } = e, o = e => {
    e.preventDefault(), e.stopPropagation(), n(e)
  };
  return (0, a.jsx)(i.Tooltip, {
    text: s,
    children: e => (0, a.jsx)(i.Clickable, {
      ...e,
      "aria-label": s,
      onClick: o,
      className: l()(r.actionButton, u),
      children: (0, a.jsx)(t, {
        className: r.icon
      })
    })
  })
}