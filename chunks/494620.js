"use strict";
s.r(t), s.d(t, {
  InfoBoxLooks: function() {
    return n
  },
  default: function() {
    return T
  }
});
var a, n, l = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  o = s("481060"),
  d = s("507893"),
  u = s("759231"),
  c = s("239260");
(a = n || (n = {})).INFO = "info", a.WARNING = "warning";
let S = {
    info: c.info,
    warning: c.warning
  },
  E = {
    info: d.default,
    warning: u.default
  };

function T(e) {
  let {
    children: t,
    className: s,
    look: a = "info"
  } = e, n = E[a];
  return (0, l.jsxs)("div", {
    className: r()(c.root, s, S[a]),
    children: [(0, l.jsx)(n, {
      className: c.icon
    }), (0, l.jsx)(o.Text, {
      className: c.text,
      variant: "text-sm/medium",
      color: "text-normal",
      children: t
    })]
  })
}