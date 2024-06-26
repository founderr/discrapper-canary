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
  l = n(451684);

function u(e) {
  var t;
  let {
    command: n,
    application: u,
    onClick: _
  } = e, {
    iconURL: c,
    name: d,
    description: E
  } = r.useMemo(() => (0, o.sl)(u, {
    botIconFirst: !0
  }), [u]);
  return (0, i.jsxs)(s.Clickable, {
    className: l.container,
    onClick: _,
    children: [null != c && (0, i.jsx)(a.Z, {
      src: c,
      className: l.icon,
      "aria-hidden": !0
    }), (0, i.jsxs)("div", {
      className: l.cmdDetails,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null !== (t = null == n ? void 0 : n.displayName) && void 0 !== t ? t : d
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        lineClamp: 1,
        children: E
      })]
    }), null != n ? (0, i.jsx)(s.Text, {
      className: l.cmdAppName,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: d
    }) : null, (0, i.jsx)("div", {
      className: l.underline
    })]
  })
}