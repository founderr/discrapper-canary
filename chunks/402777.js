n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250),
  a = n(470079),
  l = n(597312),
  s = n(727637),
  r = n(410030),
  o = n(100527),
  c = n(906732),
  u = n(680295),
  d = n(785717),
  h = n(318661),
  p = n(502762),
  m = n(544989),
  _ = n(481932),
  f = n(272510),
  E = n(171368),
  g = n(926150),
  C = n(308829),
  I = n(354810),
  x = n(940885),
  T = n(625015),
  N = n(228168),
  v = n(20256);

function S(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: S
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), Z = (0, h.ZP)(t.id), A = (0, r.ZP)(), M = a.useRef(null), b = (0, s.Z)(M), R = e => {
    (0, E.openUserProfileModal)({
      sourceAnalyticsLocations: S,
      userId: t.id,
      channelId: n.id,
      ...e
    })
  };
  return (0, i.jsx)(c.Gt, {
    value: S,
    children: (0, i.jsx)(d.Mt, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, i.jsxs)(p.Z, {
        ref: M,
        user: t,
        displayProfile: Z,
        profileType: N.y0.PANEL,
        themeOverride: A,
        className: v.container,
        children: [(0, i.jsxs)(l.u2, {
          children: [(0, i.jsxs)(m.Z, {
            profileType: N.y0.PANEL,
            children: [(0, i.jsx)(_.Z, {
              user: t,
              profileType: N.y0.PANEL
            }), (0, i.jsx)(f.Z, {
              user: t,
              profileType: N.y0.PANEL
            })]
          }), (0, i.jsx)(I.Z, {
            user: t,
            displayProfile: Z,
            channel: n,
            isHovering: b,
            onOpenProfile: R
          }), (0, i.jsx)(g.Z, {
            user: t,
            displayProfile: Z,
            channelId: n.id,
            isHovering: b,
            onOpenProfile: R
          }), (0, i.jsx)(x.Z, {
            user: t,
            channelId: n.id
          }), (0, i.jsx)(T.Z, {
            user: t,
            displayProfile: Z
          })]
        }), (0, i.jsx)(C.Z, {
          user: t,
          channelId: n.id
        }), (null == Z ? void 0 : Z.profileEffectId) != null && (0, i.jsx)(u.Z, {
          profileEffectId: null == Z ? void 0 : Z.profileEffectId,
          isHovering: b
        })]
      })
    })
  })
}