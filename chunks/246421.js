"use strict";
t.r(A), t.d(A, {
  default: function() {
    return d
  }
});
var a = t("37983");
t("884691");
var l = t("509043"),
  n = t("77078"),
  r = t("191814"),
  s = t("45029"),
  o = t("782340"),
  i = t("411531");

function d(e) {
  let {
    locked: A,
    role: t,
    textVariant: d = "text-xs/medium"
  } = e, u = (0, n.useToken)(n.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, a.jsx)("div", {
    className: i.roleTagContainer,
    children: (0, a.jsxs)("div", {
      className: i.roleTag,
      children: [(0, a.jsx)("div", {
        className: i.roleColor,
        style: {
          backgroundColor: (0, l.int2hex)(t.color)
        }
      }), (0, a.jsx)(r.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsxs)(n.Text, {
        variant: d,
        color: "text-normal",
        children: [(0, a.jsx)(n.HiddenVisually, {
          children: o.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), t.name]
      }), !0 === A && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.default, {
          size: 8,
          horizontal: !0
        }), (0, a.jsx)(s.default, {
          color: u
        })]
      })]
    })
  })
}