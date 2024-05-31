"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  i = l("442837"),
  n = l("481060"),
  r = l("727637"),
  o = l("100527"),
  u = l("906732"),
  d = l("680295"),
  c = l("158776"),
  f = l("5192"),
  S = l("877485"),
  E = l("785717"),
  m = l("318661"),
  I = l("502762"),
  _ = l("544989"),
  v = l("301984"),
  g = l("94918"),
  T = l("664794"),
  A = l("806926"),
  U = l("740021"),
  p = l("228168"),
  x = l("981631"),
  N = l("689938"),
  C = l("61007");

function h(e) {
  let {
    user: t,
    guildId: l,
    channelId: h,
    messageId: R,
    roleId: P,
    friendToken: M,
    initialSection: j,
    autoFocusNote: y,
    transitionState: L,
    sourceAnalyticsLocations: O = [],
    onClose: F
  } = e, D = l === x.ME ? void 0 : l, {
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
      return t !== x.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === x.ActivityTypes.CUSTOM_STATUS
    })
  })), Z = a.createRef(), K = (0, r.default)(Z);
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: b,
    children: (0, s.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: D,
      channelId: h,
      messageId: R,
      roleId: P,
      children: (0, s.jsxs)(n.ModalRoot, {
        transitionState: L,
        className: C.root,
        hideShadow: !0,
        "aria-label": N.default.Messages.USER_PROFILE_MODAL,
        children: [(0, s.jsxs)(I.default, {
          user: t,
          displayProfile: V,
          profileType: p.UserProfileTypes.FULL_SIZE,
          ref: Z,
          children: [(0, s.jsxs)(_.default, {
            profileType: p.UserProfileTypes.FULL_SIZE,
            children: [(0, s.jsx)(g.default, {
              user: t,
              guildId: D,
              channelId: h,
              onClose: F
            }), !B && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(v.default, {
                user: t,
                friendToken: M
              }), (0, s.jsx)(T.default, {
                user: t,
                profileType: p.UserProfileTypes.FULL_SIZE,
                guildId: D,
                viewProfileItem: (null == H ? void 0 : H.guildId) == null ? null : (null == V ? void 0 : V.guildId) != null ? (0, s.jsx)(n.MenuItem, {
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
                }) : (0, s.jsx)(n.MenuItem, {
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
          }), (0, s.jsx)(U.default, {
            user: t,
            displayProfile: V,
            guildId: D,
            channelId: h,
            activity: z,
            customStatusActivity: W,
            originalFriendingEnabled: B,
            transitionState: L,
            onClose: F
          }), (0, s.jsx)(A.default, {
            user: t,
            displayProfile: V,
            initialSection: j,
            autoFocusNote: y,
            transitionState: L,
            onClose: F
          })]
        }), (null == V ? void 0 : V.profileEffectId) != null && (0, s.jsx)(d.default, {
          profileEffectId: null == V ? void 0 : V.profileEffectId,
          isHovering: K
        })]
      })
    })
  })
}