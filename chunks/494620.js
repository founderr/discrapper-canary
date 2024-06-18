"use strict";
n.d(t, {
  Z: function() {
    return d
  },
  z: function() {
    return r
  }
});
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(873773);
(i = r || (r = {})).INFO = "info", i.WARNING = "warning";
let _ = {
    info: u.info,
    warning: u.warning
  },
  c = {
    info: l.CircleInformationIcon,
    warning: l.CircleExclamationPointIcon
  };

function d(e) {
  let {
    children: t,
    className: n,
    look: i = "info"
  } = e, r = c[i];
  return (0, s.jsxs)("div", {
    className: a()(u.root, n, _[i]),
    children: [(0, s.jsx)(r, {
      className: u.icon
    }), (0, s.jsx)(l.Text, {
      className: u.text,
      variant: "text-sm/medium",
      color: "text-normal",
      children: t
    })]
  })
}