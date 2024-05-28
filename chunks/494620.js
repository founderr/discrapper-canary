"use strict";
l.r(t), l.d(t, {
  InfoBoxLooks: function() {
    return n
  },
  default: function() {
    return S
  }
});
var a, n, s = l("735250");
l("470079");
var i = l("120356"),
  r = l.n(i),
  u = l("481060"),
  o = l("507893"),
  d = l("759231"),
  c = l("239260");
(a = n || (n = {})).INFO = "info", a.WARNING = "warning";
let f = {
    info: c.info,
    warning: c.warning
  },
  m = {
    info: o.default,
    warning: d.default
  };

function S(e) {
  let {
    children: t,
    className: l,
    look: a = "info"
  } = e, n = m[a];
  return (0, s.jsxs)("div", {
    className: r()(c.root, l, f[a]),
    children: [(0, s.jsx)(n, {
      className: c.icon
    }), (0, s.jsx)(u.Text, {
      className: c.text,
      variant: "text-sm/medium",
      color: "text-normal",
      children: t
    })]
  })
}