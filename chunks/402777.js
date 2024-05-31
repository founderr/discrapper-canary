"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("597312"),
  i = n("727637"),
  r = n("410030"),
  o = n("100527"),
  u = n("906732"),
  d = n("680295"),
  c = n("785717"),
  f = n("318661"),
  h = n("502762"),
  m = n("544989"),
  p = n("301984"),
  E = n("664794"),
  C = n("926150"),
  g = n("308829"),
  S = n("354810"),
  _ = n("940885"),
  T = n("228168"),
  I = n("828592");

function A(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: A
  } = (0, u.default)(o.default.PROFILE_PANEL), v = (0, f.default)(t.id), N = (0, r.default)(), x = l.useRef(null), M = (0, i.default)(x);
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: A,
    children: (0, a.jsx)(c.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, a.jsxs)(h.default, {
        ref: x,
        user: t,
        displayProfile: v,
        profileType: T.UserProfileTypes.PANEL,
        themeOverride: N,
        className: I.container,
        children: [(0, a.jsxs)(s.ScrollerNone, {
          children: [(0, a.jsxs)(m.default, {
            profileType: T.UserProfileTypes.PANEL,
            children: [(0, a.jsx)(p.default, {
              user: t
            }), (0, a.jsx)(E.default, {
              user: t,
              profileType: T.UserProfileTypes.PANEL
            })]
          }), (0, a.jsx)(S.default, {
            user: t,
            displayProfile: v,
            channel: n,
            isHovering: M
          }), (0, a.jsx)(C.default, {
            user: t,
            displayProfile: v,
            channelId: n.id,
            isHovering: M
          }), (0, a.jsx)(_.default, {
            user: t,
            channelId: n.id
          })]
        }), (0, a.jsx)(g.default, {
          user: t,
          channelId: n.id
        }), (null == v ? void 0 : v.profileEffectId) != null && (0, a.jsx)(d.default, {
          profileEffectId: null == v ? void 0 : v.profileEffectId,
          isHovering: M
        })]
      })
    })
  })
}