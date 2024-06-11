"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("866442"),
  r = s("481060"),
  l = s("630641"),
  u = s("689938"),
  i = s("347154");

function o(e) {
  let {
    locked: t,
    role: s,
    textVariant: o = "text-xs/medium"
  } = e, c = (0, r.useToken)(r.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, a.jsx)("div", {
    className: i.roleTagContainer,
    children: (0, a.jsxs)("div", {
      className: i.roleTag,
      children: [(0, a.jsx)("div", {
        className: i.roleColor,
        style: {
          backgroundColor: (0, n.int2hex)(s.color)
        }
      }), (0, a.jsx)(r.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, a.jsxs)(r.Text, {
        variant: o,
        color: "text-normal",
        children: [(0, a.jsx)(r.HiddenVisually, {
          children: u.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), s.name]
      }), !0 === t && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, a.jsx)(l.default, {
          color: c
        })]
      })]
    })
  })
}