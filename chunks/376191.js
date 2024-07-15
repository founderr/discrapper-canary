n.d(t, {
  Z: function() {
return A;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(129861),
  l = n(607070),
  o = n(388905),
  c = n(1585),
  d = n(125988),
  u = n(43267),
  _ = n(522289),
  E = n(699516),
  h = n(546591),
  I = n(51144),
  m = n(998502),
  g = n(620924),
  p = n(332712),
  T = n(81471),
  f = n(689938),
  S = n(603174);
let C = e => {
let {
  userId: t
} = e, n = (0, p.O)(t);
return null == n || 0 === n.length ? (0, i.jsx)(s.Text, {
  className: S.mutualGuilds,
  variant: 'text-sm/normal',
  color: 'text-muted',
  children: f.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
}) : (0, i.jsxs)('div', {
  className: S.mutualGuildsContainer,
  children: [
    (0, i.jsx)(_.Z, {
      guilds: n,
      maxGuilds: 3,
      size: o.Vj.Sizes.SMOL,
      hideOverflowCount: !0
    }),
    (0, i.jsx)(s.Text, {
      className: S.mutualGuilds,
      variant: 'text-sm/normal',
      color: 'text-muted',
      children: f.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
        count: n.length
      })
    })
  ]
});
  },
  N = m.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function A(e) {
  var t;
  let {
channel: n,
otherUser: o,
active: _
  } = e, m = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), p = (0, a.e7)([E.Z], () => null == o ? null : E.Z.getNickname(o.id)), A = !m && _, v = (0, g.c)(n), {
avatarDecorationSrc: Z
  } = (0, d.Z)({
user: o,
size: (0, c.y9)(s.AvatarSizes.SIZE_40),
onlyAnimateOnHover: !0
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(N, {
    className: S.avatar,
    src: (0, u.x)(n, 40, A),
    avatarDecoration: Z,
    size: s.AvatarSizes.SIZE_40,
    'aria-label': null !== (t = null == o ? void 0 : o.username) && void 0 !== t ? t : f.Z.Messages.UNKNOWN_USER
  }),
  (0, i.jsxs)('div', {
    className: S.userPreview,
    children: [
      (0, i.jsxs)('div', {
        className: S.userContainerWithPreview,
        children: [
          (0, i.jsx)(r.Z, {
            nick: p,
            user: o,
            showAccountIdentifier: !0,
            className: S.tagContainer,
            usernameClass: S.username,
            discriminatorClass: null != I.ZP.getGlobalName(o) ? S.globalName : S.discriminator
          }),
          (0, i.jsx)(s.Text, {
            className: S.timestampWithPreview,
            color: 'text-muted',
            variant: 'text-xs/normal',
            children: v
          })
        ]
      }),
      (0, i.jsx)(h.Z, {
        hoverText: (0, i.jsx)(T.Z, {
          channel: n
        }),
        forceHover: _,
        children: (0, i.jsx)(C, {
          userId: o.id
        })
      })
    ]
  })
]
  });
}