"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
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
  g = l("171368"),
  A = l("806926"),
  C = l("740021"),
  x = l("228168"),
  N = l("981631"),
  U = l("689938"),
  P = l("61007");

function h(e) {
  let {
    user: t,
    guildId: l,
    channelId: h,
    messageId: R,
    roleId: M,
    friendToken: j,
    initialSection: y,
    initialSubsection: O,
    transitionState: L,
    onClose: F,
    showGuildProfile: D = !0,
    sourceAnalyticsLocations: b = []
  } = e, B = l === N.ME ? void 0 : l, {
    analyticsLocations: G
  } = (0, u.default)([...b, r.default.SIMPLIFIED_PROFILE_MODAL]), {
    originalFriendingEnabled: k
  } = (0, S.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModal"
  }), w = (0, E.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: B,
    channelId: h,
    messageId: R,
    roleId: M,
    showGuildProfile: D
  }), Y = (0, I.default)(t.id, D ? B : void 0), V = (0, I.default)(t.id, B), {
    activity: H,
    customStatusActivity: W
  } = (0, a.useStateFromStoresObject)([c.default], () => ({
    activity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== N.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === N.ActivityTypes.CUSTOM_STATUS
    })
  })), z = i.createRef(), Z = (0, o.default)(z), Q = () => (null == V ? void 0 : V.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, s.jsx)(n.MenuItem, {
    id: "view-main-profile",
    label: U.default.Messages.VIEW_MAIN_PROFILE,
    subtext: U.default.Messages.AKA_DISPLAY_NAME.format({
      displayName: f.default.getName(void 0, void 0, t)
    }),
    action: () => {
      w({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: G
      }), F(), (0, g.openUserProfileModal)({
        userId: t.id,
        showGuildProfile: !1,
        guildId: B,
        channelId: h,
        messageId: R,
        roleId: M,
        friendToken: j,
        sourceAnalyticsLocations: b
      })
    }
  }) : (0, s.jsx)(n.MenuItem, {
    id: "view-server-profile",
    label: U.default.Messages.VIEW_SERVER_PROFILE,
    subtext: U.default.Messages.AKA_DISPLAY_NAME.format({
      displayName: f.default.getName(B, h, t)
    }),
    action: () => {
      w({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: G
      }), F(), (0, g.openUserProfileModal)({
        userId: t.id,
        showGuildProfile: !0,
        guildId: B,
        channelId: h,
        messageId: R,
        roleId: M,
        friendToken: j,
        sourceAnalyticsLocations: b
      })
    }
  });
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: G,
    children: (0, s.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: B,
      channelId: h,
      messageId: R,
      roleId: M,
      showGuildProfile: D,
      children: (0, s.jsxs)(n.ModalRoot, {
        transitionState: L,
        className: P.root,
        hideShadow: !0,
        "aria-label": U.default.Messages.USER_PROFILE_MODAL,
        children: [(0, s.jsxs)(m.default, {
          user: t,
          displayProfile: Y,
          profileType: x.UserProfileTypes.FULL_SIZE,
          ref: z,
          children: [k ? (0, s.jsx)(_.default, {
            profileType: x.UserProfileTypes.FULL_SIZE,
            children: (0, s.jsx)(p.default, {
              user: t,
              guildId: B,
              channelId: h,
              onClose: F
            })
          }) : (0, s.jsxs)(_.default, {
            profileType: x.UserProfileTypes.FULL_SIZE,
            children: [(0, s.jsx)(p.default, {
              user: t,
              guildId: B,
              channelId: h,
              onClose: F
            }), (0, s.jsx)(v.default, {
              profileType: x.UserProfileTypes.FULL_SIZE,
              user: t,
              friendToken: j
            }), (0, s.jsx)(T.default, {
              user: t,
              profileType: x.UserProfileTypes.FULL_SIZE,
              guildId: B,
              viewProfileItem: Q()
            })]
          }), (0, s.jsx)(C.default, {
            user: t,
            displayProfile: Y,
            guildId: B,
            channelId: h,
            activity: H,
            customStatusActivity: W,
            transitionState: L,
            viewProfileItem: Q(),
            onClose: F
          }), (0, s.jsx)(A.default, {
            user: t,
            channelId: h,
            displayProfile: Y,
            initialSection: y,
            initialSubsection: O,
            friendToken: j,
            transitionState: L,
            onClose: F
          })]
        }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, s.jsx)(d.default, {
          profileEffectId: null == Y ? void 0 : Y.profileEffectId,
          isHovering: Z
        })]
      })
    })
  })
}