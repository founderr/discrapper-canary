n.d(s, {
  Z: function() {
return f;
  }
});
var i = n(735250);
n(470079);
var l = n(120356),
  o = n.n(l),
  t = n(442837),
  r = n(481060),
  a = n(129861),
  d = n(427217),
  c = n(158776),
  u = n(51144),
  _ = n(981631),
  I = n(689938),
  E = n(988546);

function f(e) {
  let {
user: s,
displayProfile: n
  } = e, l = (0, t.e7)([c.Z], () => c.Z.findActivity(s.id, e => e.type === _.IIU.CUSTOM_STATUS)), f = u.ZP.getName(s);
  return (0, i.jsxs)('div', {
className: E.container,
children: [
  null == f && (0, i.jsx)(a.Z, {
    user: s,
    className: E.nameTag,
    usernameClass: E.username,
    discriminatorClass: E.discriminator
  }),
  null != f && (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-lg/semibold',
        style: {
          marginRight: '12px'
        },
        children: f
      }),
      (0, i.jsx)(a.Z, {
        user: s,
        forceUsername: !0,
        usernameClass: E.discriminator,
        discriminatorClass: E.discriminator,
        className: o()(E.nameTag, E.nameTagSmall)
      })
    ]
  }),
  (null == n ? void 0 : n.pronouns) != null && (null == n ? void 0 : n.pronouns) !== '' && (0, i.jsx)(r.Tooltip, {
    text: I.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, i.jsx)(r.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: o()(E.pronouns, E.nameTagSmall),
      children: n.pronouns
    })
  }),
  null != l ? (0, i.jsx)('div', {
    className: E.__invalid_customStatusActivity,
    children: (0, i.jsx)(r.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: E.customStatusText,
      children: (0, i.jsx)(d.Z, {
        activity: l,
        className: E.customStatus,
        emojiClassName: E.customStatusEmoji,
        soloEmojiClassName: E.customStatusSoloEmoji
      })
    })
  }) : null
]
  });
}