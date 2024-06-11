"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("759231"),
  o = s("79136");

function u(e) {
  let {
    message: t,
    error: s,
    onClick: n,
    submitting: u,
    className: d,
    ctaMessage: c
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(o.container, d),
    children: [(0, a.jsxs)("div", {
      className: o.textContainer,
      children: [(0, a.jsx)(r.default, {
        className: o.warningIcon
      }), (0, a.jsx)(i.Spacer, {
        size: 10,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Spacer, {
          size: 1
        }), (0, a.jsx)(i.Text, {
          className: o.info,
          variant: "text-sm/normal",
          children: t
        }), null != s && (0, a.jsx)(i.Text, {
          className: l()(o.info, o.error),
          variant: "text-sm/normal",
          children: s
        })]
      })]
    }), (0, a.jsx)(i.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, a.jsx)(i.Button, {
      className: o.undoButton,
      color: i.Button.Colors.LINK,
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.ICON,
      onClick: n,
      submitting: u,
      children: c
    })]
  })
}