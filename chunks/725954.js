n.d(s, {
  Z: function() {
return E;
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
  I = n(981631),
  _ = n(689938),
  f = n(988546);

function E(e) {
  let {
user: s,
displayProfile: n
  } = e, l = (0, t.e7)([c.Z], () => c.Z.findActivity(s.id, e => e.type === I.IIU.CUSTOM_STATUS)), E = u.ZP.getName(s);
  return (0, i.jsxs)('div', {
className: f.container,
children: [
  null == E && (0, i.jsx)(a.Z, {
    user: s,
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
        user: s,
        forceUsername: !0,
        usernameClass: f.discriminator,
        discriminatorClass: f.discriminator,
        className: o()(f.nameTag, f.nameTagSmall)
      })
    ]
  }),
  (null == n ? void 0 : n.pronouns) != null && (null == n ? void 0 : n.pronouns) !== '' && (0, i.jsx)(r.Tooltip, {
    text: _.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, i.jsx)(r.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: o()(f.pronouns, f.nameTagSmall),
      children: n.pronouns
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