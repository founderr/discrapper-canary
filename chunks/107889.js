"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
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
  E = s("785717"),
  m = s("318661"),
  I = s("484404"),
  v = s("502762"),
  _ = s("705556"),
  A = s("301984"),
  T = s("664794"),
  x = s("980768"),
  N = s("806926"),
  U = s("740021"),
  p = s("228168"),
  h = s("981631"),
  C = s("689938"),
  P = s("420867");

function j(e) {
  let {
    user: t,
    guildId: s,
    channelId: j,
    messageId: M,
    roleId: y,
    friendToken: R,
    initialSection: g,
    autoFocusNote: O,
    transitionState: F,
    sourceAnalyticsLocations: L = [],
    onClose: D
  } = e, B = s === h.ME ? void 0 : s, {
    analyticsLocations: b
  } = (0, d.default)([...L, u.default.SIMPLIFIED_PROFILE_MODAL]), G = (0, E.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: B,
    channelId: j,
    messageId: M,
    roleId: y
  }), [k, w] = a.useState(B), V = (0, m.default)(t.id), z = (0, m.default)(t.id, B), Y = null == k ? V : z, {
    activity: H,
    customStatusActivity: W
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
  })), Z = a.createRef(), K = (0, n.default)(Z), J = () => {
    D(), (0, r.popLayer)()
  };
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: b,
    children: (0, l.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: B,
      channelId: j,
      messageId: M,
      roleId: y,
      children: (0, l.jsxs)(o.ModalRoot, {
        transitionState: F,
        className: P.root,
        hideShadow: !0,
        "aria-label": C.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: Z,
          children: (0, l.jsxs)(v.default, {
            user: t,
            displayProfile: Y,
            profileType: p.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(x.default, {
              isFaded: (null == Y ? void 0 : Y.profileEffectId) != null && !K,
              children: [(0, l.jsx)(A.default, {
                user: t,
                friendToken: R
              }), (0, l.jsx)(_.default, {
                user: t,
                guildId: B,
                onClose: J
              }), (0, l.jsx)(T.default, {
                user: t,
                guildId: B,
                onClose: J,
                viewProfileItem: (null == z ? void 0 : z.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, l.jsx)(o.MenuItem, {
                  id: "view-main-profile",
                  label: C.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: C.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: b
                    }), w(void 0)
                  }
                }) : (0, l.jsx)(o.MenuItem, {
                  id: "view-server-profile",
                  label: C.default.Messages.VIEW_SERVER_PROFILE,
                  subtext: C.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(B, j, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: b
                    }), w(B)
                  }
                })
              })]
            }), (0, l.jsx)(U.default, {
              className: P.header,
              user: t,
              displayProfile: Y,
              guildId: B,
              channelId: j,
              activity: H,
              customStatusActivity: W,
              onClose: D
            }), (0, l.jsxs)(v.default.Overlay, {
              children: [F === o.ModalTransitionState.ENTERED && (0, l.jsx)(I.default, {
                onTooltipClose: D
              }), (0, l.jsx)("div", {
                className: P.body,
                children: (0, l.jsx)(N.default, {
                  user: t,
                  displayProfile: Y,
                  initialSection: g,
                  autoFocusNote: O,
                  onClose: D
                })
              })]
            })]
          })
        }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == Y ? void 0 : Y.profileEffectId,
          bannerAdjustment: 0,
          isHovering: K
        })]
      })
    })
  })
}