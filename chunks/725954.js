i.d(s, {
  Z: function() {
return m;
  }
});
var n = i(735250);
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
  f = i(689938),
  _ = i(988546);

function m(e) {
  let {
user: s,
displayProfile: i
  } = e, l = (0, o.e7)([c.Z], () => c.Z.findActivity(s.id, e => e.type === I.IIU.CUSTOM_STATUS)), m = u.ZP.getName(s);
  return (0, n.jsxs)('div', {
className: _.container,
children: [
  null == m && (0, n.jsx)(r.Z, {
    user: s,
    className: _.nameTag,
    usernameClass: _.username,
    discriminatorClass: _.discriminator
  }),
  null != m && (0, n.jsxs)('div', {
    children: [
      (0, n.jsx)(a.Text, {
        variant: 'text-lg/semibold',
        style: {
          marginRight: '12px'
        },
        children: m
      }),
      (0, n.jsx)(r.Z, {
        user: s,
        forceUsername: !0,
        usernameClass: _.discriminator,
        discriminatorClass: _.discriminator,
        className: t()(_.nameTag, _.nameTagSmall)
      })
    ]
  }),
  (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== '' && (0, n.jsx)(a.Tooltip, {
    text: f.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, n.jsx)(a.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: t()(_.pronouns, _.nameTagSmall),
      children: i.pronouns
    })
  }),
  null != l ? (0, n.jsx)('div', {
    className: _.__invalid_customStatusActivity,
    children: (0, n.jsx)(a.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: _.customStatusText,
      children: (0, n.jsx)(d.Z, {
        activity: l,
        className: _.customStatus,
        emojiClassName: _.customStatusEmoji,
        soloEmojiClassName: _.customStatusSoloEmoji
      })
    })
  }) : null
]
  });
}