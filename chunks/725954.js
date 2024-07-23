s.d(n, {
  Z: function() {
return E;
  }
});
var i = s(735250);
s(470079);
var l = s(120356),
  o = s.n(l),
  t = s(442837),
  r = s(481060),
  a = s(129861),
  d = s(427217),
  c = s(158776),
  u = s(51144),
  I = s(981631),
  _ = s(689938),
  f = s(754090);

function E(e) {
  let {
user: n,
displayProfile: s
  } = e, l = (0, t.e7)([c.Z], () => c.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), E = u.ZP.getName(n);
  return (0, i.jsxs)('div', {
className: f.container,
children: [
  null == E && (0, i.jsx)(a.Z, {
    user: n,
    className: f.nameTag,
    usernameClass: f.username,
    discriminatorClass: f.discriminator
  }),
  null != E && (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-lg/semibold',
        style: {
          marginRight: '12px'
        },
        children: E
      }),
      (0, i.jsx)(a.Z, {
        user: n,
        forceUsername: !0,
        usernameClass: f.discriminator,
        discriminatorClass: f.discriminator,
        className: o()(f.nameTag, f.nameTagSmall)
      })
    ]
  }),
  (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== '' && (0, i.jsx)(r.Tooltip, {
    text: _.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, i.jsx)(r.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: o()(f.pronouns, f.nameTagSmall),
      children: s.pronouns
    })
  }),
  null != l ? (0, i.jsx)('div', {
    className: f.__invalid_customStatusActivity,
    children: (0, i.jsx)(r.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: f.customStatusText,
      children: (0, i.jsx)(d.Z, {
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