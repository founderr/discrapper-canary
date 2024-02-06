"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i, l, r = n("37983");
n("884691");
var s = n("414456"),
  a = n.n(s),
  o = n("394846"),
  c = n("77078"),
  u = n("945330"),
  d = n("381546"),
  f = n("782340"),
  h = n("955892");
(i = l || (l = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
let v = e => {
  let {
    closeAction: t,
    variant: n,
    keybind: i,
    className: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a(h.container, l),
    children: [(0, r.jsx)(c.Clickable, {
      className: a(h.closeButton, {
        [h.closeButtonBold]: "Bold" === n,
        [h.closeButtonSolid]: "Solid" === n
      }),
      onClick: t,
      "aria-label": f.default.Messages.CLOSE,
      children: "Solid" === n ? (0, r.jsx)(d.default, {
        width: 24,
        height: 24,
        "aria-hidden": !0
      }) : (0, r.jsx)(u.default, {
        width: 18,
        height: 18,
        "aria-hidden": !0
      })
    }), o.isMobile ? null : (0, r.jsx)("div", {
      className: a(h.keybind),
      "aria-hidden": !0,
      children: i
    })]
  })
};
v.defaultProps = {
  variant: ""
}, v.Variants = l;
var p = v