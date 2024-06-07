"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  m = n("564440"),
  p = n("329831"),
  E = n("146331"),
  C = n("171368"),
  g = n("926150"),
  S = n("308829"),
  _ = n("354810"),
  T = n("940885"),
  I = n("228168"),
  A = n("828592");

function v(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: v
  } = (0, u.default)(o.default.PROFILE_PANEL), N = (0, f.default)(t.id), x = (0, r.default)(), M = l.useRef(null), R = (0, i.default)(M), y = () => {
    (0, C.openUserProfileModal)({
      sourceAnalyticsLocations: v,
      userId: t.id,
      channelId: n.id
    })
  };
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: v,
    children: (0, a.jsx)(c.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, a.jsxs)(h.default, {
        ref: M,
        user: t,
        displayProfile: N,
        profileType: I.UserProfileTypes.PANEL,
        themeOverride: x,
        className: A.container,
        children: [(0, a.jsxs)(s.ScrollerNone, {
          children: [(0, a.jsxs)(m.default, {
            profileType: I.UserProfileTypes.PANEL,
            children: [(0, a.jsx)(p.default, {
              user: t,
              profileType: I.UserProfileTypes.PANEL
            }), (0, a.jsx)(E.default, {
              user: t,
              profileType: I.UserProfileTypes.PANEL
            })]
          }), (0, a.jsx)(_.default, {
            user: t,
            displayProfile: N,
            channel: n,
            isHovering: R,
            onOpenProfile: y
          }), (0, a.jsx)(g.default, {
            user: t,
            displayProfile: N,
            channelId: n.id,
            isHovering: R,
            onOpenProfile: y
          }), (0, a.jsx)(T.default, {
            user: t,
            channelId: n.id
          })]
        }), (0, a.jsx)(S.default, {
          user: t,
          channelId: n.id
        }), (null == N ? void 0 : N.profileEffectId) != null && (0, a.jsx)(d.default, {
          profileEffectId: null == N ? void 0 : N.profileEffectId,
          isHovering: R
        })]
      })
    })
  })
}