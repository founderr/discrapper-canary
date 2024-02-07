"use strict";
i.r(t), i.d(t, {
  default: function() {
    return v
  }
});
var s, n, l = i("37983");
i("884691");
var r = i("414456"),
  o = i.n(r),
  a = i("394846"),
  u = i("77078"),
  c = i("945330"),
  d = i("381546"),
  h = i("782340"),
  f = i("955892");
(s = n || (n = {})).DEFAULT = "", s.BOLD = "Bold", s.SOLID = "Solid";
let p = e => {
  let {
    closeAction: t,
    variant: i,
    keybind: s,
    className: n
  } = e;
  return (0, l.jsxs)("div", {
    className: o(f.container, n),
    children: [(0, l.jsx)(u.Clickable, {
      className: o(f.closeButton, {
        [f.closeButtonBold]: "Bold" === i,
        [f.closeButtonSolid]: "Solid" === i
      }),
      onClick: t,
      "aria-label": h.default.Messages.CLOSE,
      children: "Solid" === i ? (0, l.jsx)(d.default, {
        width: 24,
        height: 24,
        "aria-hidden": !0
      }) : (0, l.jsx)(c.default, {
        width: 18,
        height: 18,
        "aria-hidden": !0
      })
    }), a.isMobile ? null : (0, l.jsx)("div", {
      className: o(f.keybind),
      "aria-hidden": !0,
      children: s
    })]
  })
};
p.defaultProps = {
  variant: ""
}, p.Variants = n;
var v = p