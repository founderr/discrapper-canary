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
  S = s("785717"),
  m = s("318661"),
  I = s("502762"),
  E = s("544989"),
  v = s("301984"),
  _ = s("94918"),
  T = s("664794"),
  x = s("806926"),
  N = s("740021"),
  g = s("228168"),
  U = s("981631"),
  A = s("689938"),
  C = s("750721");

function h(e) {
  let {
    user: t,
    guildId: s,
    channelId: h,
    messageId: p,
    roleId: R,
    friendToken: M,
    initialSection: P,
    autoFocusNote: j,
    transitionState: y,
    sourceAnalyticsLocations: O = [],
    onClose: L
  } = e, F = s === U.ME ? void 0 : s, {
    analyticsLocations: D
  } = (0, u.default)([...O, o.default.SIMPLIFIED_PROFILE_MODAL]), b = (0, S.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: F,
    channelId: h,
    messageId: p,
    roleId: R
  }), [B, G] = a.useState(F), k = (0, m.default)(t.id), w = (0, m.default)(t.id, F), H = null == B ? k : w, {
    activity: V,
    customStatusActivity: Y
  } = (0, i.useStateFromStoresObject)([c.default], () => ({
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
  })), z = a.createRef(), W = (0, r.default)(z);
  return (0, l.jsx)(u.AnalyticsLocationProvider, {
    value: D,
    children: (0, l.jsx)(S.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: F,
      channelId: h,
      messageId: p,
      roleId: R,
      children: (0, l.jsxs)(n.ModalRoot, {
        transitionState: y,
        className: C.root,
        hideShadow: !0,
        "aria-label": A.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsxs)(I.default, {
          user: t,
          displayProfile: H,
          profileType: g.UserProfileTypes.FULL_SIZE,
          ref: z,
          children: [(0, l.jsxs)(E.default, {
            profileType: g.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsx)(_.default, {
              user: t,
              guildId: F,
              channelId: h,
              onClose: L
            }), (0, l.jsx)(v.default, {
              user: t,
              friendToken: M
            }), (0, l.jsx)(T.default, {
              user: t,
              guildId: F,
              viewProfileItem: (null == w ? void 0 : w.guildId) == null ? null : (null == H ? void 0 : H.guildId) != null ? (0, l.jsx)(n.MenuItem, {
                id: "view-main-profile",
                label: A.default.Messages.VIEW_MAIN_PROFILE,
                subtext: A.default.Messages.AKA_DISPLAY_NAME.format({
                  displayName: f.default.getName(void 0, void 0, t)
                }),
                action: () => {
                  b({
                    action: "PRESS_VIEW_MAIN_PROFILE",
                    analyticsLocations: D
                  }), G(void 0)
                }
              }) : (0, l.jsx)(n.MenuItem, {
                id: "view-server-profile",
                label: A.default.Messages.VIEW_SERVER_PROFILE,
                subtext: A.default.Messages.AKA_DISPLAY_NAME.format({
                  displayName: f.default.getName(F, h, t)
                }),
                action: () => {
                  b({
                    action: "PRESS_VIEW_SERVER_PROFILE",
                    analyticsLocations: D
                  }), G(F)
                }
              })
            })]
          }), (0, l.jsx)(N.default, {
            user: t,
            displayProfile: H,
            guildId: F,
            channelId: h,
            activity: V,
            customStatusActivity: Y,
            onClose: L
          }), (0, l.jsx)(x.default, {
            user: t,
            displayProfile: H,
            initialSection: P,
            autoFocusNote: j,
            transitionState: y,
            onClose: L
          })]
        }), (null == H ? void 0 : H.profileEffectId) != null && (0, l.jsx)(d.default, {
          profileEffectId: null == H ? void 0 : H.profileEffectId,
          isHovering: W
        })]
      })
    })
  })
}