"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("629806");

function o(e) {
  let {
    icon: t,
    tooltip: s,
    onClick: n,
    className: o
  } = e, u = e => {
    e.preventDefault(), e.stopPropagation(), n(e)
  };
  return (0, a.jsx)(i.Tooltip, {
    text: s,
    children: e => (0, a.jsx)(i.Clickable, {
      ...e,
      "aria-label": s,
      onClick: u,
      className: l()(r.actionButton, o),
      children: (0, a.jsx)(t, {
        className: r.icon
      })
    })
  })
}