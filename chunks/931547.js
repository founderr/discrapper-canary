"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("682864"),
  o = a("759231"),
  u = a("974927");

function d(e) {
  let {
    message: t,
    error: a,
    onClick: s,
    submitting: d,
    className: c,
    ctaMessage: f
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(u.container, c),
    children: [(0, n.jsxs)("div", {
      className: u.textContainer,
      children: [(0, n.jsx)(o.default, {
        className: u.warningIcon
      }), (0, n.jsx)(r.default, {
        size: 10,
        horizontal: !0
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(r.default, {
          size: 1
        }), (0, n.jsx)(i.Text, {
          className: u.info,
          variant: "text-sm/normal",
          children: t
        }), null != a && (0, n.jsx)(i.Text, {
          className: l()(u.info, u.error),
          variant: "text-sm/normal",
          children: a
        })]
      })]
    }), (0, n.jsx)(r.default, {
      size: 16,
      horizontal: !0
    }), (0, n.jsx)(i.Button, {
      className: u.undoButton,
      color: i.Button.Colors.LINK,
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.ICON,
      onClick: s,
      submitting: d,
      children: f
    })]
  })
}