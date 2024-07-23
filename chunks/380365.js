var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(481060),
  r = n(271383),
  o = n(430824),
  c = n(594174),
  d = n(5192),
  u = n(645896),
  h = n(979264),
  p = n(308083),
  m = n(689938),
  _ = n(903521);
t.Z = a.memo(function(e) {
  var t, n, a, f, E, C;
  let {
guildId: g,
isTagAdopted: I,
onChangeUseTag: x
  } = e, T = (0, u.Cc)(g), N = (0, s.e7)([o.Z], () => o.Z.getGuild(g)), v = null !== (f = null == T ? void 0 : null === (t = T.badge) || void 0 === t ? void 0 : t.imageHash) && void 0 !== f ? f : null == N ? void 0 : null === (n = N.clan) || void 0 === n ? void 0 : n.badge, S = null !== (E = null == T ? void 0 : T.tag) && void 0 !== E ? E : null == N ? void 0 : null === (a = N.clan) || void 0 === a ? void 0 : a.tag, Z = (0, s.e7)([c.default], () => c.default.getCurrentUser()), A = (0, s.e7)([r.ZP], () => null != Z ? r.ZP.getMember(g, Z.id) : null);
  return null == N || null == Z || null == A || null == v ? null : (0, i.jsxs)('div', {
className: _.previewSection,
children: [
  (0, i.jsxs)('div', {
    className: _.chatPreview,
    children: [
      (0, i.jsx)(l.Avatar, {
        src: Z.getAvatarURL(g, 40),
        size: l.AvatarSizes.SIZE_40,
        'aria-hidden': !0
      }),
      (0, i.jsxs)('div', {
        className: _.previewText,
        children: [
          (0, i.jsxs)('div', {
            className: _.userName,
            children: [
              (0, i.jsx)(l.NameWithRole, {
                className: _.userName,
                name: d.ZP.getName(g, null, Z),
                color: null !== (C = A.colorString) && void 0 !== C ? C : void 0
              }),
              I && (0, i.jsx)(h.aG, {
                guildId: g,
                clanBadge: v,
                clanTag: S,
                badgeSize: p.NC.SIZE_12,
                textVariant: 'text-xs/semibold'
              })
            ]
          }),
          (0, i.jsx)('div', {
            className: _.fakeMessage,
            style: {
              width: '80%'
            }
          }),
          (0, i.jsx)('div', {
            className: _.fakeMessage,
            style: {
              width: '50%'
            }
          })
        ]
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: _.divider
  }),
  (0, i.jsxs)('div', {
    className: _.settingSection,
    children: [
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-primary',
            children: m.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT
          }),
          (0, i.jsx)(l.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: m.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP
          })
        ]
      }),
      (0, i.jsx)(l.Switch, {
        onChange: x,
        checked: I
      })
    ]
  })
]
  });
});