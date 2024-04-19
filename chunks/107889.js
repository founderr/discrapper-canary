"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  o = s("481060"),
  r = s("37234"),
  n = s("727637"),
  u = s("100527"),
  d = s("906732"),
  c = s("680295"),
  f = s("158776"),
  S = s("5192"),
  m = s("785717"),
  E = s("318661"),
  I = s("502762"),
  v = s("705556"),
  x = s("301984"),
  N = s("664794"),
  _ = s("980768"),
  A = s("806926"),
  T = s("740021"),
  U = s("228168"),
  h = s("981631"),
  p = s("689938"),
  j = s("420867");

function g(e) {
  let {
    user: t,
    guildId: s,
    channelId: g,
    messageId: R,
    roleId: P,
    friendToken: C,
    initialSection: M,
    autoFocusNote: y,
    transitionState: O,
    sourceAnalyticsLocations: L = [],
    onClose: F
  } = e, D = s === h.ME ? void 0 : s, {
    analyticsLocations: b
  } = (0, d.default)([...L, u.default.SIMPLIFIED_PROFILE_MODAL]), B = (0, m.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: D,
    channelId: g,
    messageId: R,
    roleId: P
  }), [G, k] = a.useState(D), V = (0, E.default)(t.id), w = (0, E.default)(t.id, D), z = null == G ? V : w, {
    activity: H,
    customStatusActivity: Y
  } = (0, i.useStateFromStoresObject)([f.default], () => ({
    activity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== h.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === h.ActivityTypes.CUSTOM_STATUS
    })
  })), W = a.createRef(), Z = (0, n.default)(W), K = () => {
    F(), (0, r.popLayer)()
  };
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: b,
    children: (0, l.jsx)(m.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: D,
      channelId: g,
      messageId: R,
      roleId: P,
      children: (0, l.jsxs)(o.ModalRoot, {
        transitionState: O,
        className: j.root,
        hideShadow: !0,
        "aria-label": p.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: W,
          children: (0, l.jsxs)(I.default, {
            user: t,
            displayProfile: z,
            profileType: U.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(_.default, {
              isFaded: (null == z ? void 0 : z.profileEffectId) != null && !Z,
              children: [(0, l.jsx)(x.default, {
                user: t,
                friendToken: C
              }), (0, l.jsx)(v.default, {
                user: t,
                guildId: D,
                onClose: K
              }), (0, l.jsx)(N.default, {
                user: t,
                guildId: D,
                onClose: K,
                viewProfileItem: (null == w ? void 0 : w.guildId) == null ? null : (null == z ? void 0 : z.guildId) != null ? (0, l.jsx)(o.MenuItem, {
                  id: "view-main-profile",
                  label: p.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: p.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    B({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: b
                    }), k(void 0)
                  }
                }) : (0, l.jsx)(o.MenuItem, {
                  id: "view-server-profile",
                  label: p.default.Messages.VIEW_SERVER_PROFILE,
                  subtext: p.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(D, g, t)
                  }),
                  action: () => {
                    B({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: b
                    }), k(D)
                  }
                })
              })]
            }), (0, l.jsx)(T.default, {
              user: t,
              displayProfile: z,
              guildId: D,
              channelId: g,
              activity: H,
              customStatusActivity: Y,
              onClose: F
            }), (0, l.jsx)(A.default, {
              user: t,
              displayProfile: z,
              initialSection: M,
              autoFocusNote: y,
              transitionState: O,
              onClose: F
            })]
          })
        }), (null == z ? void 0 : z.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == z ? void 0 : z.profileEffectId,
          bannerAdjustment: 0,
          isHovering: Z
        })]
      })
    })
  })
}