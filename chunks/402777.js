n.d(t, {
  Z: function() {
return b;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(597312),
  l = n(727637),
  r = n(410030),
  o = n(100527),
  c = n(906732),
  u = n(680295),
  d = n(785717),
  h = n(318661),
  p = n(78675),
  m = n(113557),
  _ = n(169979),
  f = n(502762),
  E = n(256059),
  C = n(437758),
  g = n(544989),
  I = n(481932),
  x = n(272510),
  T = n(171368),
  N = n(926150),
  v = n(308829),
  S = n(940885),
  Z = n(625015),
  A = n(228168),
  M = n(642402);

function b(e) {
  let {
user: t,
channel: n
  } = e, b = __OVERLAY__, {
analyticsLocations: R
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), j = (0, h.ZP)(t.id), L = (0, r.ZP)(), P = a.useRef(null), O = (0, l.Z)(P), y = e => {
(0, T.openUserProfileModal)({
  sourceAnalyticsLocations: R,
  userId: t.id,
  channelId: n.id,
  ...e
});
  };
  return (0, i.jsx)(c.Gt, {
value: R,
children: (0, i.jsx)(d.Mt, {
  layout: 'SIMPLIFIED_DM_PANEL',
  userId: t.id,
  channelId: n.id,
  children: (0, i.jsxs)(f.Z, {
    ref: P,
    user: t,
    displayProfile: j,
    profileType: A.y0.PANEL,
    themeOverride: L,
    className: M.container,
    children: [
      (0, i.jsxs)(s.u2, {
        children: [
          (0, i.jsxs)(g.Z, {
            profileType: A.y0.PANEL,
            children: [
              (0, i.jsx)(I.Z, {
                user: t,
                profileType: A.y0.PANEL
              }),
              t.bot ? (0, i.jsx)(C.Z, {
                user: t
              }) : (0, i.jsx)(x.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsxs)('header', {
            className: M.header,
            children: [
              (0, i.jsx)(p.Z, {
                user: t,
                displayProfile: j,
                profileType: A.y0.PANEL,
                animateOnHover: !O
              }),
              (0, i.jsx)(m.Z, {
                location: 'SimplifiedProfilePanel',
                user: t,
                displayProfile: j,
                channelId: n.id,
                profileType: A.y0.PANEL,
                onOpenProfile: b ? void 0 : y
              }),
              (0, i.jsx)(_.Z, {
                location: 'SimplifiedProfilePanel',
                user: t,
                profileType: A.y0.PANEL
              }),
              (0, i.jsx)(E.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsx)(N.Z, {
            user: t,
            displayProfile: j,
            channel: n,
            isHovering: O,
            onOpenProfile: b ? void 0 : y
          }),
          (0, i.jsx)(S.Z, {
            user: t,
            channelId: n.id
          }),
          (0, i.jsx)(Z.Z, {
            user: t,
            displayProfile: j
          })
        ]
      }),
      (0, i.jsx)(v.Z, {
        user: t,
        channelId: n.id
      }),
      (null == j ? void 0 : j.profileEffectId) != null && (0, i.jsx)(u.Z, {
        profileEffectId: null == j ? void 0 : j.profileEffectId,
        isHovering: O
      })
    ]
  })
})
  });
}