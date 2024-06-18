"use strict";
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(873546),
  u = n(481060),
  _ = n(689938),
  c = n(375515);
(i = r || (r = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
let d = e => {
  let {
    closeAction: t,
    variant: n,
    keybind: i,
    className: r
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(c.container, r),
    children: [(0, s.jsx)(u.Clickable, {
      className: a()(c.closeButton, {
        [c.closeButtonBold]: "Bold" === n,
        [c.closeButtonSolid]: "Solid" === n
      }),
      onClick: t,
      "aria-label": _.Z.Messages.CLOSE,
      children: "Solid" === n ? (0, s.jsx)(u.CircleXIcon, {
        size: "md",
        color: "currentColor",
        "aria-hidden": !0
      }) : (0, s.jsx)(u.CloseSmallIcon, {
        size: "sm",
        color: "currentColor",
        "aria-hidden": !0
      })
    }), l.tq ? null : (0, s.jsx)("div", {
      className: a()(c.keybind),
      "aria-hidden": !0,
      children: i
    })]
  })
};
d.defaultProps = {
  variant: ""
}, d.Variants = r, t.Z = d