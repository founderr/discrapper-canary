"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  r = s("481060"),
  n = s("37234"),
  o = s("727637"),
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
  _ = s("664794"),
  N = s("980768"),
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
    messageId: P,
    roleId: R,
    friendToken: C,
    initialSection: M,
    autoFocusNote: y,
    transitionState: O,
    sourceAnalyticsLocations: F = [],
    onClose: L
  } = e, D = s === h.ME ? void 0 : s, {
    analyticsLocations: b
  } = (0, d.default)([...F, u.default.SIMPLIFIED_PROFILE_MODAL]), B = (0, m.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: D,
    channelId: g,
    messageId: P,
    roleId: R
  }), [G, k] = a.useState(D), V = (0, E.default)(t.id), w = (0, E.default)(t.id, D), H = null == G ? V : w, {
    activity: Y,
    customStatusActivity: z
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
  })), W = a.createRef(), Z = (0, o.default)(W), K = () => {
    L(), (0, n.popLayer)()
  };
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: b,
    children: (0, l.jsx)(m.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: D,
      channelId: g,
      messageId: P,
      roleId: R,
      children: (0, l.jsxs)(r.ModalRoot, {
        transitionState: O,
        className: j.root,
        hideShadow: !0,
        "aria-label": p.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: W,
          children: (0, l.jsxs)(I.default, {
            user: t,
            displayProfile: H,
            profileType: U.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(N.default, {
              isFaded: (null == H ? void 0 : H.profileEffectId) != null && !Z,
              children: [(0, l.jsx)(x.default, {
                user: t,
                friendToken: C
              }), (0, l.jsx)(v.default, {
                type: "overlay",
                user: t,
                guildId: D,
                onClose: K
              }), (0, l.jsx)(_.default, {
                user: t,
                guildId: D,
                onClose: K,
                viewProfileItem: (null == w ? void 0 : w.guildId) == null ? null : (null == H ? void 0 : H.guildId) != null ? (0, l.jsx)(r.MenuItem, {
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
                }) : (0, l.jsx)(r.MenuItem, {
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
              displayProfile: H,
              guildId: D,
              channelId: g,
              activity: Y,
              customStatusActivity: z,
              onClose: L
            }), (0, l.jsx)(A.default, {
              user: t,
              displayProfile: H,
              initialSection: M,
              autoFocusNote: y,
              transitionState: O,
              onClose: L
            })]
          })
        }), (null == H ? void 0 : H.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == H ? void 0 : H.profileEffectId,
          bannerAdjustment: 0,
          isHovering: Z
        })]
      })
    })
  })
}