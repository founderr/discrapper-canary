var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(534761),
  o = n(841144);

function c(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: i,
    className: a,
    children: c,
    contentClassName: u,
    iconClassName: d,
    iconContainerClassName: E,
    compact: _ = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(a, {
      [o.container]: !0,
      [o.compact]: _,
      [o.cozy]: !_
    }),
    children: [null != n && (0, s.jsx)("div", {
      className: l()(o.iconContainer, E),
      children: n
    }), null != t && (0, s.jsx)("div", {
      className: o.iconContainer,
      children: (0, s.jsx)("div", {
        "data-accessibility": "desaturate",
        className: l()(o.icon, o.iconSize, d),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, s.jsxs)("div", {
      className: l()(u, o.content),
      children: [c, null != i && (0, s.jsx)(r.Z, {
        timestamp: i
      })]
    })]
  })
}
c.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, s.jsxs)("span", {
    className: o.action,
    children: ["—", (0, s.jsx)(a.Anchor, {
      onClick: t,
      className: o.actionAnchor,
      children: n
    })]
  })
}, t.Z = c