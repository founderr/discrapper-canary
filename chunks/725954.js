n.d(i, {
  Z: function() {
return E;
  }
});
var s = n(735250);
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
  f = n(689938),
  _ = n(988546);

function E(e) {
  let {
user: i,
displayProfile: n
  } = e, l = (0, t.e7)([c.Z], () => c.Z.findActivity(i.id, e => e.type === I.IIU.CUSTOM_STATUS)), E = u.ZP.getName(i);
  return (0, s.jsxs)('div', {
className: _.container,
children: [
  null == E && (0, s.jsx)(a.Z, {
    user: i,
    className: _.nameTag,
    usernameClass: _.username,
    discriminatorClass: _.discriminator
  }),
  null != E && (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(r.Text, {
        variant: 'text-lg/semibold',
        style: {
          marginRight: '12px'
        },
        children: E
      }),
      (0, s.jsx)(a.Z, {
        user: i,
        forceUsername: !0,
        usernameClass: _.discriminator,
        discriminatorClass: _.discriminator,
        className: o()(_.nameTag, _.nameTagSmall)
      })
    ]
  }),
  (null == n ? void 0 : n.pronouns) != null && (null == n ? void 0 : n.pronouns) !== '' && (0, s.jsx)(r.Tooltip, {
    text: f.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, s.jsx)(r.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: o()(_.pronouns, _.nameTagSmall),
      children: n.pronouns
    })
  }),
  null != l ? (0, s.jsx)('div', {
    className: _.__invalid_customStatusActivity,
    children: (0, s.jsx)(r.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: _.customStatusText,
      children: (0, s.jsx)(d.Z, {
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