i.d(n, {
  Z: function() {
return m;
  }
});
var s = i(735250);
i(470079);
var l = i(120356),
  t = i.n(l),
  o = i(442837),
  a = i(481060),
  r = i(129861),
  d = i(427217),
  c = i(158776),
  u = i(51144),
  I = i(981631),
  _ = i(689938),
  f = i(988546);

function m(e) {
  let {
user: n,
displayProfile: i
  } = e, l = (0, o.e7)([c.Z], () => c.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), m = u.ZP.getName(n);
  return (0, s.jsxs)('div', {
className: f.container,
children: [
  null == m && (0, s.jsx)(r.Z, {
    user: n,
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
        user: n,
        forceUsername: !0,
        usernameClass: f.discriminator,
        discriminatorClass: f.discriminator,
        className: t()(f.nameTag, f.nameTagSmall)
      })
    ]
  }),
  (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== '' && (0, s.jsx)(a.Tooltip, {
    text: _.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, s.jsx)(a.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: t()(f.pronouns, f.nameTagSmall),
      children: i.pronouns
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