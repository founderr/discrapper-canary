n.d(t, {
  Z: function() {
    return Z
  }
});
var l = n(735250),
  i = n(470079),
  s = n(597312),
  a = n(727637),
  r = n(410030),
  o = n(100527),
  c = n(906732),
  u = n(680295),
  d = n(785717),
  h = n(318661),
  m = n(502762),
  p = n(544989),
  E = n(481932),
  g = n(272510),
  f = n(171368),
  C = n(926150),
  _ = n(308829),
  I = n(354810),
  x = n(940885),
  T = n(228168),
  N = n(20256);

function Z(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: Z
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), S = (0, h.ZP)(t.id), v = (0, r.ZP)(), A = i.useRef(null), M = (0, a.Z)(A), R = e => {
    (0, f.openUserProfileModal)({
      sourceAnalyticsLocations: Z,
      userId: t.id,
      channelId: n.id,
      ...e
    })
  };
  return (0, l.jsx)(c.Gt, {
    value: Z,
    children: (0, l.jsx)(d.Mt, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, l.jsxs)(m.Z, {
        ref: A,
        user: t,
        displayProfile: S,
        profileType: T.y0.PANEL,
        themeOverride: v,
        className: N.container,
        children: [(0, l.jsxs)(s.u2, {
          children: [(0, l.jsxs)(p.Z, {
            profileType: T.y0.PANEL,
            children: [(0, l.jsx)(E.Z, {
              user: t,
              profileType: T.y0.PANEL
            }), (0, l.jsx)(g.Z, {
              user: t,
              profileType: T.y0.PANEL
            })]
          }), (0, l.jsx)(I.Z, {
            user: t,
            displayProfile: S,
            channel: n,
            isHovering: M,
            onOpenProfile: R
          }), (0, l.jsx)(C.Z, {
            user: t,
            displayProfile: S,
            channelId: n.id,
            isHovering: M,
            onOpenProfile: R
          }), (0, l.jsx)(x.Z, {
            user: t,
            channelId: n.id
          })]
        }), (0, l.jsx)(_.Z, {
          user: t,
          channelId: n.id
        }), (null == S ? void 0 : S.profileEffectId) != null && (0, l.jsx)(u.Z, {
          profileEffectId: null == S ? void 0 : S.profileEffectId,
          isHovering: M
        })]
      })
    })
  })
}