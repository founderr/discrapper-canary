t.d(A, {
  Z: function() {
    return o
  }
});
var n = t(735250);
t(470079);
var a = t(866442),
  s = t(481060),
  r = t(689938),
  l = t(394318);

function o(e) {
  let {
    locked: A,
    role: t,
    textVariant: o = "text-xs/medium"
  } = e, i = (0, s.useToken)(s.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, n.jsx)("div", {
    className: l.roleTagContainer,
    children: (0, n.jsxs)("div", {
      className: l.roleTag,
      children: [(0, n.jsx)("div", {
        className: l.roleColor,
        style: {
          backgroundColor: (0, a.Rf)(t.color)
        }
      }), (0, n.jsx)(s.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, n.jsxs)(s.Text, {
        variant: o,
        color: "text-normal",
        children: [(0, n.jsx)(s.HiddenVisually, {
          children: r.Z.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), t.name]
      }), !0 === A && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, n.jsx)(s.LockIcon, {
          size: "md",
          color: i
        })]
      })]
    })
  })
}