"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("866442"),
  r = n("481060"),
  i = n("682864"),
  l = n("630641"),
  u = n("689938"),
  o = n("347154");

function d(e) {
  let {
    locked: t,
    role: n,
    textVariant: d = "text-xs/medium"
  } = e, c = (0, r.useToken)(r.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, s.jsx)("div", {
    className: o.roleTagContainer,
    children: (0, s.jsxs)("div", {
      className: o.roleTag,
      children: [(0, s.jsx)("div", {
        className: o.roleColor,
        style: {
          backgroundColor: (0, a.int2hex)(n.color)
        }
      }), (0, s.jsx)(i.default, {
        size: 8,
        horizontal: !0
      }), (0, s.jsxs)(r.Text, {
        variant: d,
        color: "text-normal",
        children: [(0, s.jsx)(r.HiddenVisually, {
          children: u.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), n.name]
      }), !0 === t && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(i.default, {
          size: 8,
          horizontal: !0
        }), (0, s.jsx)(l.default, {
          color: c
        })]
      })]
    })
  })
}