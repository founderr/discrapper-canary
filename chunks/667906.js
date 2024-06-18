"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(783097),
  a = n(753972),
  l = n(870979);

function u(e) {
  let {
    command: t,
    application: n,
    onClick: u
  } = e, {
    iconURL: _,
    name: c,
    description: d
  } = r.useMemo(() => (0, o.sl)(n, {
    botIconFirst: !0
  }), [n]);
  return (0, i.jsxs)(s.Clickable, {
    className: l.container,
    onClick: u,
    children: [null != _ && (0, i.jsx)(a.Z, {
      src: _,
      className: l.icon,
      "aria-hidden": !0
    }), (0, i.jsxs)("div", {
      className: l.cmdDetails,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: t.displayName
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        lineClamp: 1,
        children: d
      })]
    }), (0, i.jsx)(s.Text, {
      className: l.cmdAppName,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: c
    }), (0, i.jsx)("div", {
      className: l.underline
    })]
  })
}