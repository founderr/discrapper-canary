"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("481060"),
  r = n("534761"),
  o = n("410003");

function u(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: l,
    className: i,
    children: u,
    contentClassName: d,
    iconClassName: c,
    iconContainerClassName: f,
    compact: E = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(i, {
      [o.container]: !0,
      [o.compact]: E,
      [o.cozy]: !E
    }),
    children: [null != n && (0, s.jsx)("div", {
      className: a()(o.iconContainer, f),
      children: n
    }), null != t && (0, s.jsx)("div", {
      className: o.iconContainer,
      children: (0, s.jsx)("div", {
        "data-accessibility": "desaturate",
        className: a()(o.icon, o.iconSize, c),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, s.jsxs)("div", {
      className: a()(d, o.content),
      children: [u, null != l && (0, s.jsx)(r.default, {
        timestamp: l
      })]
    })]
  })
}
u.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, s.jsxs)("span", {
    className: o.action,
    children: ["—", (0, s.jsx)(i.Anchor, {
      onClick: t,
      className: o.actionAnchor,
      children: n
    })]
  })
}, t.default = u