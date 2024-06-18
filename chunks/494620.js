"use strict";
n.d(t, {
  Z: function() {
    return m
  },
  z: function() {
    return s
  }
});
var l, s, a = n(735250);
n(470079);
var i = n(120356),
  r = n.n(i),
  o = n(481060),
  u = n(239260);
(l = s || (s = {})).INFO = "info", l.WARNING = "warning";
let c = {
    info: u.info,
    warning: u.warning
  },
  d = {
    info: o.CircleInformationIcon,
    warning: o.CircleExclamationPointIcon
  };

function m(e) {
  let {
    children: t,
    className: n,
    look: l = "info"
  } = e, s = d[l];
  return (0, a.jsxs)("div", {
    className: r()(u.root, n, c[l]),
    children: [(0, a.jsx)(s, {
      className: u.icon
    }), (0, a.jsx)(o.Text, {
      className: u.text,
      variant: "text-sm/medium",
      color: "text-normal",
      children: t
    })]
  })
}