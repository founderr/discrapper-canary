n.d(t, {
  Z: function() {
return b;
  }
}), n(47120);
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
currentUser: n,
channel: b
  } = e, R = __OVERLAY__, {
analyticsLocations: j
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), L = (0, h.ZP)(t.id), P = (0, r.ZP)(), O = a.useRef(null), y = (0, l.Z)(O), [D, k] = a.useState(!1), U = e => {
(0, T.openUserProfileModal)({
  sourceAnalyticsLocations: j,
  userId: t.id,
  channelId: b.id,
  ...e
});
  };
  return (0, i.jsx)(c.Gt, {
value: j,
children: (0, i.jsx)(d.Mt, {
  layout: 'SIMPLIFIED_DM_PANEL',
  userId: t.id,
  channelId: b.id,
  children: (0, i.jsxs)(f.Z, {
    ref: O,
    user: t,
    displayProfile: L,
    profileType: A.y0.PANEL,
    themeOverride: P,
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
                displayProfile: L,
                profileType: A.y0.PANEL,
                animateOnHover: !y
              }),
              (0, i.jsx)(m.Z, {
                location: 'SimplifiedProfilePanel',
                user: t,
                displayProfile: L,
                channelId: b.id,
                profileType: A.y0.PANEL,
                onOpenProfile: R ? void 0 : U
              }),
              (0, i.jsx)(_.Z, {
                location: 'SimplifiedProfilePanel',
                user: t,
                channelId: b.id,
                profileType: A.y0.PANEL,
                isReplying: D,
                onReply: e => {
                  k(e);
                }
              }),
              (0, i.jsx)(E.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsx)(N.Z, {
            user: t,
            currentUser: n,
            displayProfile: L,
            channel: b,
            isHovering: y,
            onOpenProfile: R ? void 0 : U
          }),
          (0, i.jsx)(S.Z, {
            user: t,
            channelId: b.id
          }),
          (0, i.jsx)(Z.Z, {
            user: t,
            displayProfile: L
          })
        ]
      }),
      (0, i.jsx)(v.Z, {
        user: t,
        channelId: b.id
      }),
      (null == L ? void 0 : L.profileEffectId) != null && (0, i.jsx)(u.Z, {
        profileEffectId: null == L ? void 0 : L.profileEffectId,
        isHovering: y
      })
    ]
  })
})
  });
}