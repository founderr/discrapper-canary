"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("727637"),
  o = s("100527"),
  u = s("906732"),
  d = s("680295"),
  c = s("158776"),
  f = s("5192"),
  S = s("877485"),
  E = s("785717"),
  m = s("318661"),
  I = s("502762"),
  _ = s("544989"),
  v = s("301984"),
  g = s("94918"),
  T = s("664794"),
  A = s("806926"),
  x = s("740021"),
  U = s("228168"),
  p = s("981631"),
  N = s("689938"),
  C = s("61007");

function h(e) {
  let {
    user: t,
    guildId: s,
    channelId: h,
    messageId: R,
    roleId: P,
    friendToken: M,
    initialSection: j,
    autoFocusNote: y,
    transitionState: L,
    sourceAnalyticsLocations: O = [],
    onClose: F
  } = e, D = s === p.ME ? void 0 : s, {
    analyticsLocations: b
  } = (0, u.default)([...O, o.default.SIMPLIFIED_PROFILE_MODAL]), {
    originalFriendingEnabled: B
  } = (0, S.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModal"
  }), G = (0, E.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: D,
    channelId: h,
    messageId: R,
    roleId: P
  }), [k, w] = a.useState(D), Y = (0, m.default)(t.id), H = (0, m.default)(t.id, D), V = null == k ? Y : H, {
    activity: z,
    customStatusActivity: W
  } = (0, i.useStateFromStoresObject)([c.default], () => ({
    activity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== p.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === p.ActivityTypes.CUSTOM_STATUS
    })
  })), Z = a.createRef(), K = (0, r.default)(Z);
  return (0, l.jsx)(u.AnalyticsLocationProvider, {
    value: b,
    children: (0, l.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: D,
      channelId: h,
      messageId: R,
      roleId: P,
      children: (0, l.jsxs)(n.ModalRoot, {
        transitionState: L,
        className: C.root,
        hideShadow: !0,
        "aria-label": N.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsxs)(I.default, {
          user: t,
          displayProfile: V,
          profileType: U.UserProfileTypes.FULL_SIZE,
          ref: Z,
          children: [(0, l.jsxs)(_.default, {
            profileType: U.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsx)(g.default, {
              user: t,
              guildId: D,
              channelId: h,
              onClose: F
            }), !B && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(v.default, {
                user: t,
                friendToken: M
              }), (0, l.jsx)(T.default, {
                user: t,
                profileType: U.UserProfileTypes.FULL_SIZE,
                guildId: D,
                viewProfileItem: (null == H ? void 0 : H.guildId) == null ? null : (null == V ? void 0 : V.guildId) != null ? (0, l.jsx)(n.MenuItem, {
                  id: "view-main-profile",
                  label: N.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: N.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: f.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: b
                    }), w(void 0)
                  }
                }) : (0, l.jsx)(n.MenuItem, {
                  id: "view-server-profile",
                  label: N.default.Messages.VIEW_SERVER_PROFILE,
                  subtext: N.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: f.default.getName(D, h, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: b
                    }), w(D)
                  }
                })
              })]
            })]
          }), (0, l.jsx)(x.default, {
            user: t,
            displayProfile: V,
            guildId: D,
            channelId: h,
            activity: z,
            customStatusActivity: W,
            originalFriendingEnabled: B,
            transitionState: L,
            onClose: F
          }), (0, l.jsx)(A.default, {
            user: t,
            displayProfile: V,
            initialSection: j,
            autoFocusNote: y,
            transitionState: L,
            onClose: F
          })]
        }), (null == V ? void 0 : V.profileEffectId) != null && (0, l.jsx)(d.default, {
          profileEffectId: null == V ? void 0 : V.profileEffectId,
          isHovering: K
        })]
      })
    })
  })
}