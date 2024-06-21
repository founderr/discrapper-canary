s.d(i, {
  Z: function() {
    return f
  }
});
var n = s(735250);
s(470079);
var l = s(120356),
  t = s.n(l),
  o = s(442837),
  r = s(481060),
  a = s(129861),
  d = s(427217),
  c = s(158776),
  u = s(51144),
  I = s(981631),
  E = s(689938),
  Z = s(300139);

function f(e) {
  let {
    user: i,
    displayProfile: s
  } = e, l = (0, o.e7)([c.Z], () => c.Z.findActivity(i.id, e => e.type === I.IIU.CUSTOM_STATUS)), f = u.ZP.getName(i);
  return (0, n.jsxs)("div", {
    className: Z.container,
    children: [null == f && (0, n.jsx)(a.Z, {
      user: i,
      className: Z.nameTag,
      usernameClass: Z.username,
      discriminatorClass: Z.discriminator
    }), null != f && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: f
      }), (0, n.jsx)(a.Z, {
        user: i,
        forceUsername: !0,
        usernameClass: Z.discriminator,
        discriminatorClass: Z.discriminator,
        className: t()(Z.nameTag, Z.nameTagSmall)
      })]
    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, n.jsx)(r.Tooltip, {
      text: E.Z.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, n.jsx)(r.Text, {
        ...e,
        variant: "text-sm/normal",
        className: t()(Z.pronouns, Z.nameTagSmall),
        children: s.pronouns
      })
    }), null != l ? (0, n.jsx)("div", {
      className: Z.__invalid_customStatusActivity,
      children: (0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: Z.customStatusText,
        children: (0, n.jsx)(d.Z, {
          activity: l,
          className: Z.customStatus,
          emojiClassName: Z.customStatusEmoji,
          soloEmojiClassName: Z.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}