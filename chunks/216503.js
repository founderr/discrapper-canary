"use strict";
s.r(t), s.d(t, {
  InfoBoxLooks: function() {
    return n
  },
  default: function() {
    return T
  }
});
var a, n, l = s("37983");
s("884691");
var i = s("414456"),
  r = s.n(i),
  o = s("77078"),
  d = s("266926"),
  u = s("423487"),
  c = s("235464");
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
    className: r(c.root, s, S[a]),
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