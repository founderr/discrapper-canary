"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  i = s("481060"),
  r = s("629806");

function o(e) {
  let {
    icon: t,
    tooltip: s,
    onClick: a,
    className: o
  } = e, u = e => {
    e.preventDefault(), e.stopPropagation(), a(e)
  };
  return (0, n.jsx)(i.Tooltip, {
    text: s,
    children: e => (0, n.jsx)(i.Clickable, {
      ...e,
      "aria-label": s,
      onClick: u,
      className: l()(r.actionButton, o),
      children: (0, n.jsx)(t, {
        className: r.icon
      })
    })
  })
}