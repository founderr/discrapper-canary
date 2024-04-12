"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("803997"),
  l = a.n(s),
  i = a("481060"),
  r = a("369395");

function o(e) {
  let {
    icon: t,
    tooltip: a,
    onClick: s,
    className: o
  } = e, u = e => {
    e.preventDefault(), e.stopPropagation(), s(e)
  };
  return (0, n.jsx)(i.Tooltip, {
    text: a,
    children: e => (0, n.jsx)(i.Clickable, {
      ...e,
      "aria-label": a,
      onClick: u,
      className: l()(r.actionButton, o),
      children: (0, n.jsx)(t, {
        className: r.icon
      })
    })
  })
}