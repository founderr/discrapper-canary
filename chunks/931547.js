"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("682864"),
  o = s("759231"),
  u = s("79136");

function d(e) {
  let {
    message: t,
    error: s,
    onClick: n,
    submitting: d,
    className: c,
    ctaMessage: E
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(u.container, c),
    children: [(0, a.jsxs)("div", {
      className: u.textContainer,
      children: [(0, a.jsx)(o.default, {
        className: u.warningIcon
      }), (0, a.jsx)(r.default, {
        size: 10,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.default, {
          size: 1
        }), (0, a.jsx)(i.Text, {
          className: u.info,
          variant: "text-sm/normal",
          children: t
        }), null != s && (0, a.jsx)(i.Text, {
          className: l()(u.info, u.error),
          variant: "text-sm/normal",
          children: s
        })]
      })]
    }), (0, a.jsx)(r.default, {
      size: 16,
      horizontal: !0
    }), (0, a.jsx)(i.Button, {
      className: u.undoButton,
      color: i.Button.Colors.LINK,
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.ICON,
      onClick: n,
      submitting: d,
      children: E
    })]
  })
}