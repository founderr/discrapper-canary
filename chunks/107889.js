"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  o = s("481060"),
  n = s("37234"),
  r = s("727637"),
  u = s("100527"),
  d = s("906732"),
  c = s("680295"),
  f = s("158776"),
  S = s("5192"),
  E = s("785717"),
  I = s("318661"),
  m = s("484404"),
  T = s("903843"),
  _ = s("502762"),
  A = s("705556"),
  p = s("664794"),
  v = s("806926"),
  N = s("740021"),
  x = s("228168"),
  U = s("981631"),
  h = s("689938"),
  C = s("420867");

function P(e) {
  let {
    user: t,
    guildId: s,
    channelId: P,
    messageId: R,
    roleId: M,
    friendToken: j,
    initialSection: g,
    autoFocusNote: y,
    transitionState: O,
    sourceAnalyticsLocations: D = [],
    onClose: F
  } = e, L = s === U.ME ? void 0 : s, {
    analyticsLocations: B
  } = (0, d.default)([...D, u.default.SIMPLIFIED_PROFILE_MODAL]), b = (0, E.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: L,
    channelId: P,
    messageId: R,
    roleId: M
  }), [G, k] = a.useState(L), w = (0, I.default)(t.id), V = (0, I.default)(t.id, L), z = null == G ? w : V, {
    activity: Y,
    customStatusActivity: H
  } = (0, i.useStateFromStoresObject)([f.default], () => ({
    activity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== U.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === U.ActivityTypes.CUSTOM_STATUS
    })
  })), Q = a.createRef(), W = (0, r.default)(Q), K = () => {
    F(), (0, n.popLayer)()
  };
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: L,
      channelId: P,
      messageId: R,
      roleId: M,
      children: (0, l.jsxs)(o.ModalRoot, {
        transitionState: O,
        className: C.root,
        hideShadow: !0,
        "aria-label": h.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: Q,
          children: (0, l.jsxs)(_.default, {
            user: t,
            displayProfile: z,
            profileType: x.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(T.default, {
              isFaded: (null == z ? void 0 : z.profileEffectId) != null && !W,
              children: [(0, l.jsx)(A.default, {
                user: t,
                guildId: L,
                onClose: K
              }), (0, l.jsx)(p.default, {
                user: t,
                guildId: L,
                onClose: K,
                viewProfileItem: (null == V ? void 0 : V.guildId) == null ? null : (null == z ? void 0 : z.guildId) != null ? (0, l.jsx)(o.MenuItem, {
                  id: "view-main-profile",
                  label: h.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: h.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    b({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: B
                    }), k(void 0)
                  }
                }) : (0, l.jsx)(o.MenuItem, {
                  id: "view-server-profile",
                  label: h.default.Messages.VIEW_SERVER_PROFILE,
                  subtext: h.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(L, P, t)
                  }),
                  action: () => {
                    b({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: B
                    }), k(L)
                  }
                })
              })]
            }), (0, l.jsx)(N.default, {
              className: C.header,
              user: t,
              displayProfile: z,
              activity: Y,
              customStatusActivity: H,
              friendToken: j,
              onClose: F
            }), (0, l.jsxs)(_.default.Overlay, {
              children: [O === o.ModalTransitionState.ENTERED && (0, l.jsx)(m.default, {
                onTooltipClose: F
              }), (0, l.jsx)("div", {
                className: C.body,
                children: (0, l.jsx)(v.default, {
                  user: t,
                  displayProfile: z,
                  initialSection: g,
                  autoFocusNote: y,
                  onClose: F
                })
              })]
            })]
          })
        }), (null == z ? void 0 : z.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == z ? void 0 : z.profileEffectId,
          bannerAdjustment: 0,
          isHovering: W
        })]
      })
    })
  })
}