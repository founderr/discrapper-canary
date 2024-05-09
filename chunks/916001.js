"use strict";
t.r(A), t.d(A, {
  default: function() {
    return d
  }
});
var a = t("735250");
t("470079");
var l = t("866442"),
  s = t("481060"),
  n = t("682864"),
  r = t("630641"),
  o = t("689938"),
  i = t("347154");

function d(e) {
  let {
    locked: A,
    role: t,
    textVariant: d = "text-xs/medium"
  } = e, u = (0, s.useToken)(s.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, a.jsx)("div", {
    className: i.roleTagContainer,
    children: (0, a.jsxs)("div", {
      className: i.roleTag,
      children: [(0, a.jsx)("div", {
        className: i.roleColor,
        style: {
          backgroundColor: (0, l.int2hex)(t.color)
        }
      }), (0, a.jsx)(n.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsxs)(s.Text, {
        variant: d,
        color: "text-normal",
        children: [(0, a.jsx)(s.HiddenVisually, {
          children: o.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), t.name]
      }), !0 === A && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(n.default, {
          size: 8,
          horizontal: !0
        }), (0, a.jsx)(r.default, {
          color: u
        })]
      })]
    })
  })
}