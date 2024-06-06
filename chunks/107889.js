"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("47120");
var s = l("735250"),
  i = l("470079"),
  a = l("442837"),
  n = l("481060"),
  o = l("727637"),
  r = l("100527"),
  u = l("906732"),
  d = l("680295"),
  c = l("158776"),
  f = l("5192"),
  S = l("877485"),
  E = l("785717"),
  I = l("318661"),
  m = l("502762"),
  _ = l("564440"),
  v = l("329831"),
  p = l("441580"),
  T = l("146331"),
  g = l("806926"),
  x = l("740021"),
  A = l("228168"),
  U = l("981631"),
  N = l("689938"),
  C = l("61007");

function R(e) {
  let {
    user: t,
    guildId: l,
    channelId: R,
    messageId: h,
    roleId: P,
    friendToken: M,
    initialSection: y,
    autoFocusNote: j,
    transitionState: F,
    sourceAnalyticsLocations: L = [],
    onClose: O
  } = e, D = l === U.ME ? void 0 : l, {
    analyticsLocations: b
  } = (0, u.default)([...L, r.default.SIMPLIFIED_PROFILE_MODAL]), {
    originalFriendingEnabled: B
  } = (0, S.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModal"
  }), G = (0, E.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: D,
    channelId: R,
    messageId: h,
    roleId: P
  }), [k, w] = i.useState(D), Y = (0, I.default)(t.id), H = (0, I.default)(t.id, D), V = null == k ? Y : H, {
    activity: W,
    customStatusActivity: z
  } = (0, a.useStateFromStoresObject)([c.default], () => ({
    activity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== U.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === U.ActivityTypes.CUSTOM_STATUS
    })
  })), Z = i.createRef(), K = (0, o.default)(Z), Q = () => (null == H ? void 0 : H.guildId) == null ? null : (null == V ? void 0 : V.guildId) != null ? (0, s.jsx)(n.MenuItem, {
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
      displayName: f.default.getName(D, R, t)
    }),
    action: () => {
      G({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: b
      }), w(D)
    }
  });
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: b,
    children: (0, s.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: D,
      channelId: R,
      messageId: h,
      roleId: P,
      children: (0, s.jsxs)(n.ModalRoot, {
        transitionState: F,
        className: C.root,
        hideShadow: !0,
        "aria-label": N.default.Messages.USER_PROFILE_MODAL,
        children: [(0, s.jsxs)(m.default, {
          user: t,
          displayProfile: V,
          profileType: A.UserProfileTypes.FULL_SIZE,
          ref: Z,
          children: [B ? (0, s.jsx)(_.default, {
            profileType: A.UserProfileTypes.FULL_SIZE,
            children: (0, s.jsx)(p.default, {
              user: t,
              guildId: D,
              channelId: R,
              onClose: O
            })
          }) : (0, s.jsxs)(_.default, {
            profileType: A.UserProfileTypes.FULL_SIZE,
            children: [(0, s.jsx)(p.default, {
              user: t,
              guildId: D,
              channelId: R,
              onClose: O
            }), (0, s.jsx)(v.default, {
              profileType: A.UserProfileTypes.FULL_SIZE,
              user: t,
              friendToken: M
            }), (0, s.jsx)(T.default, {
              user: t,
              profileType: A.UserProfileTypes.FULL_SIZE,
              guildId: D,
              viewProfileItem: Q()
            })]
          }), (0, s.jsx)(x.default, {
            user: t,
            displayProfile: V,
            guildId: D,
            channelId: R,
            activity: W,
            customStatusActivity: z,
            transitionState: F,
            viewProfileItem: Q(),
            onClose: O
          }), (0, s.jsx)(g.default, {
            user: t,
            guildId: D,
            channelId: R,
            displayProfile: V,
            initialSection: y,
            autoFocusNote: j,
            friendToken: M,
            transitionState: F,
            onClose: O
          })]
        }), (null == V ? void 0 : V.profileEffectId) != null && (0, s.jsx)(d.default, {
          profileEffectId: null == V ? void 0 : V.profileEffectId,
          isHovering: K
        })]
      })
    })
  })
}