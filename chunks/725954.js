i.d(n, {
  Z: function() {
    return Z
  }
});
var l = i(735250);
i(470079);
var s = i(120356),
  t = i.n(s),
  o = i(442837),
  a = i(481060),
  r = i(129861),
  d = i(427217),
  u = i(158776),
  c = i(51144),
  I = i(981631),
  E = i(689938),
  f = i(300139);

function Z(e) {
  let {
    user: n,
    displayProfile: i
  } = e, s = (0, o.e7)([u.Z], () => u.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), Z = c.ZP.getName(n);
  return (0, l.jsxs)("div", {
    className: f.container,
    children: [null == Z && (0, l.jsx)(r.Z, {
      user: n,
      className: f.nameTag,
      usernameClass: f.username,
      discriminatorClass: f.discriminator
    }), null != Z && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(a.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: Z
      }), (0, l.jsx)(r.Z, {
        user: n,
        forceUsername: !0,
        usernameClass: f.discriminator,
        discriminatorClass: f.discriminator,
        className: t()(f.nameTag, f.nameTagSmall)
      })]
    }), (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== "" && (0, l.jsx)(a.Tooltip, {
      text: E.Z.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, l.jsx)(a.Text, {
        ...e,
        variant: "text-sm/normal",
        className: t()(f.pronouns, f.nameTagSmall),
        children: i.pronouns
      })
    }), null != s ? (0, l.jsx)("div", {
      className: f.__invalid_customStatusActivity,
      children: (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: f.customStatusText,
        children: (0, l.jsx)(d.Z, {
          activity: s,
          className: f.customStatus,
          emojiClassName: f.customStatusEmoji,
          soloEmojiClassName: f.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}