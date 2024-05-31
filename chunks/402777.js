"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  g = n("354810"),
  S = n("940885"),
  _ = n("228168"),
  T = n("828592");

function I(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: I
  } = (0, u.default)(o.default.PROFILE_PANEL), A = (0, f.default)(t.id), v = (0, r.default)(), N = l.useRef(null), x = (0, i.default)(N);
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: I,
    children: (0, a.jsx)(c.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, a.jsxs)(h.default, {
        ref: N,
        user: t,
        displayProfile: A,
        profileType: _.UserProfileTypes.PANEL,
        themeOverride: v,
        className: T.container,
        children: [(0, a.jsxs)(s.ScrollerNone, {
          children: [(0, a.jsxs)(m.default, {
            profileType: _.UserProfileTypes.PANEL,
            children: [(0, a.jsx)(p.default, {
              user: t
            }), (0, a.jsx)(E.default, {
              user: t,
              profileType: _.UserProfileTypes.PANEL
            })]
          }), (0, a.jsx)(g.default, {
            user: t,
            displayProfile: A,
            channel: n,
            isHovering: x
          }), (0, a.jsx)(C.default, {
            user: t,
            displayProfile: A,
            channelId: n.id,
            isHovering: x
          }), (0, a.jsx)(S.default, {
            user: t,
            channelId: n.id
          })]
        }), (null == A ? void 0 : A.profileEffectId) != null && (0, a.jsx)(d.default, {
          profileEffectId: null == A ? void 0 : A.profileEffectId,
          isHovering: x
        })]
      })
    })
  })
}