"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(153311),
  o = n(481060),
  a = n(783097),
  l = n(753972),
  u = n(833339);

function _(e) {
  let {
    application: t,
    onClick: n
  } = e, {
    iconURL: _,
    name: c,
    description: d
  } = r.useMemo(() => (0, a.sl)(t, {
    botIconFirst: !0
  }), [t]);
  return (0, i.jsxs)(o.Clickable, {
    className: u.container,
    onClick: n,
    children: [null != _ && (0, i.jsx)(l.Z, {
      src: _,
      className: u.icon,
      "aria-hidden": !0
    }), (0, i.jsxs)("div", {
      className: u.appDetails,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: c
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        lineClamp: 1,
        children: d
      })]
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(s.L, {})
    }), (0, i.jsx)("div", {
      className: u.underline
    })]
  })
}