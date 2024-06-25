i.d(n, {
  Z: function() {
    return _
  }
});
var t = i(735250);
i(470079);
var s = i(120356),
  o = i.n(s),
  l = i(442837),
  a = i(481060),
  r = i(129861),
  d = i(427217),
  c = i(158776),
  u = i(51144),
  I = i(981631),
  f = i(689938),
  E = i(300139);

function _(e) {
  let {
    user: n,
    displayProfile: i
  } = e, s = (0, l.e7)([c.Z], () => c.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), _ = u.ZP.getName(n);
  return (0, t.jsxs)("div", {
    className: E.container,
    children: [null == _ && (0, t.jsx)(r.Z, {
      user: n,
      className: E.nameTag,
      usernameClass: E.username,
      discriminatorClass: E.discriminator
    }), null != _ && (0, t.jsxs)("div", {
      children: [(0, t.jsx)(a.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: _
      }), (0, t.jsx)(r.Z, {
        user: n,
        forceUsername: !0,
        usernameClass: E.discriminator,
        discriminatorClass: E.discriminator,
        className: o()(E.nameTag, E.nameTagSmall)
      })]
    }), (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== "" && (0, t.jsx)(a.Tooltip, {
      text: f.Z.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, t.jsx)(a.Text, {
        ...e,
        variant: "text-sm/normal",
        className: o()(E.pronouns, E.nameTagSmall),
        children: i.pronouns
      })
    }), null != s ? (0, t.jsx)("div", {
      className: E.__invalid_customStatusActivity,
      children: (0, t.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: E.customStatusText,
        children: (0, t.jsx)(d.Z, {
          activity: s,
          className: E.customStatus,
          emojiClassName: E.customStatusEmoji,
          soloEmojiClassName: E.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}