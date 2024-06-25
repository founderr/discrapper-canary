n.d(t, {
  Z: function() {
    return S
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
  E = n(544989),
  p = n(481932),
  g = n(272510),
  f = n(171368),
  C = n(926150),
  _ = n(308829),
  I = n(354810),
  x = n(940885),
  T = n(625015),
  N = n(228168),
  Z = n(20256);

function S(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: S
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), v = (0, h.ZP)(t.id), A = (0, r.ZP)(), M = i.useRef(null), R = (0, a.Z)(M), j = e => {
    (0, f.openUserProfileModal)({
      sourceAnalyticsLocations: S,
      userId: t.id,
      channelId: n.id,
      ...e
    })
  };
  return (0, l.jsx)(c.Gt, {
    value: S,
    children: (0, l.jsx)(d.Mt, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, l.jsxs)(m.Z, {
        ref: M,
        user: t,
        displayProfile: v,
        profileType: N.y0.PANEL,
        themeOverride: A,
        className: Z.container,
        children: [(0, l.jsxs)(s.u2, {
          children: [(0, l.jsxs)(E.Z, {
            profileType: N.y0.PANEL,
            children: [(0, l.jsx)(p.Z, {
              user: t,
              profileType: N.y0.PANEL
            }), (0, l.jsx)(g.Z, {
              user: t,
              profileType: N.y0.PANEL
            })]
          }), (0, l.jsx)(I.Z, {
            user: t,
            displayProfile: v,
            channel: n,
            isHovering: R,
            onOpenProfile: j
          }), (0, l.jsx)(C.Z, {
            user: t,
            displayProfile: v,
            channelId: n.id,
            isHovering: R,
            onOpenProfile: j
          }), (0, l.jsx)(x.Z, {
            user: t,
            channelId: n.id
          }), (0, l.jsx)(T.Z, {
            user: t,
            displayProfile: v
          })]
        }), (0, l.jsx)(_.Z, {
          user: t,
          channelId: n.id
        }), (null == v ? void 0 : v.profileEffectId) != null && (0, l.jsx)(u.Z, {
          profileEffectId: null == v ? void 0 : v.profileEffectId,
          isHovering: R
        })]
      })
    })
  })
}