"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("509043"),
  a = n("77078"),
  i = n("191814"),
  r = n("45029"),
  o = n("782340"),
  u = n("411531");

function d(e) {
  let {
    locked: t,
    role: n,
    textVariant: d = "text-xs/medium"
  } = e, c = (0, a.useToken)(a.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, s.jsx)("div", {
    className: u.roleTagContainer,
    children: (0, s.jsxs)("div", {
      className: u.roleTag,
      children: [(0, s.jsx)("div", {
        className: u.roleColor,
        style: {
          backgroundColor: (0, l.int2hex)(n.color)
        }
      }), (0, s.jsx)(i.default, {
        size: 8,
        horizontal: !0
      }), (0, s.jsxs)(a.Text, {
        variant: d,
        color: "text-normal",
        children: [(0, s.jsx)(a.HiddenVisually, {
          children: o.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), n.name]
      }), !0 === t && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(i.default, {
          size: 8,
          horizontal: !0
        }), (0, s.jsx)(r.default, {
          color: c
        })]
      })]
    })
  })
}