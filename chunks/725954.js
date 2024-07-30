n.d(i, {
  Z: function() {
return m;
  }
});
var s = n(735250);
n(470079);
var l = n(120356),
  t = n.n(l),
  o = n(442837),
  a = n(481060),
  r = n(129861),
  d = n(427217),
  c = n(158776),
  u = n(51144),
  I = n(981631),
  _ = n(689938),
  f = n(988546);

function m(e) {
  let {
user: i,
displayProfile: n
  } = e, l = (0, o.e7)([c.Z], () => c.Z.findActivity(i.id, e => e.type === I.IIU.CUSTOM_STATUS)), m = u.ZP.getName(i);
  return (0, s.jsxs)('div', {
className: f.container,
children: [
  null == m && (0, s.jsx)(r.Z, {
    user: i,
    className: f.nameTag,
    usernameClass: f.username,
    discriminatorClass: f.discriminator
  }),
  null != m && (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(a.Text, {
        variant: 'text-lg/semibold',
        style: {
          marginRight: '12px'
        },
        children: m
      }),
      (0, s.jsx)(r.Z, {
        user: i,
        forceUsername: !0,
        usernameClass: f.discriminator,
        discriminatorClass: f.discriminator,
        className: t()(f.nameTag, f.nameTagSmall)
      })
    ]
  }),
  (null == n ? void 0 : n.pronouns) != null && (null == n ? void 0 : n.pronouns) !== '' && (0, s.jsx)(a.Tooltip, {
    text: _.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, s.jsx)(a.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: t()(f.pronouns, f.nameTagSmall),
      children: n.pronouns
    })
  }),
  null != l ? (0, s.jsx)('div', {
    className: f.__invalid_customStatusActivity,
    children: (0, s.jsx)(a.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: f.customStatusText,
      children: (0, s.jsx)(d.Z, {
        activity: l,
        className: f.customStatus,
        emojiClassName: f.customStatusEmoji,
        soloEmojiClassName: f.customStatusSoloEmoji
      })
    })
  }) : null
]
  });
}