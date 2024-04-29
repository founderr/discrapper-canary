"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("37234"),
  o = s("727637"),
  u = s("100527"),
  d = s("906732"),
  c = s("680295"),
  f = s("158776"),
  S = s("5192"),
  m = s("785717"),
  I = s("318661"),
  v = s("502762"),
  E = s("705556"),
  x = s("301984"),
  _ = s("94918"),
  T = s("664794"),
  A = s("980768"),
  N = s("806926"),
  C = s("740021"),
  g = s("228168"),
  U = s("981631"),
  h = s("689938"),
  p = s("750721");

function j(e) {
  let {
    user: t,
    guildId: s,
    channelId: j,
    messageId: R,
    roleId: M,
    friendToken: P,
    initialSection: y,
    autoFocusNote: O,
    transitionState: L,
    sourceAnalyticsLocations: F = [],
    onClose: D
  } = e, b = s === U.ME ? void 0 : s, {
    analyticsLocations: B
  } = (0, d.default)([...F, u.default.SIMPLIFIED_PROFILE_MODAL]), G = (0, m.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: b,
    channelId: j,
    messageId: R,
    roleId: M
  }), [w, k] = a.useState(b), V = (0, I.default)(t.id), Y = (0, I.default)(t.id, b), z = null == w ? V : Y, {
    activity: H,
    customStatusActivity: Z
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
  })), W = a.createRef(), K = (0, o.default)(W);
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(m.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: b,
      channelId: j,
      messageId: R,
      roleId: M,
      children: (0, l.jsxs)(n.ModalRoot, {
        transitionState: L,
        className: p.root,
        hideShadow: !0,
        "aria-label": h.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: W,
          children: (0, l.jsxs)(v.default, {
            user: t,
            displayProfile: z,
            profileType: g.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(A.default, {
              profileType: g.UserProfileTypes.FULL_SIZE,
              isFaded: (null == z ? void 0 : z.profileEffectId) != null && !K,
              children: [(0, l.jsx)(_.default, {
                user: t,
                guildId: b,
                channelId: j,
                onClose: D
              }), (0, l.jsx)(x.default, {
                user: t,
                friendToken: P
              }), (0, l.jsx)(E.default, {
                type: "overlay",
                user: t,
                guildId: b,
                onClose: () => {
                  D(), (0, r.popLayer)()
                }
              }), (0, l.jsx)(T.default, {
                user: t,
                guildId: b,
                viewProfileItem: (null == Y ? void 0 : Y.guildId) == null ? null : (null == z ? void 0 : z.guildId) != null ? (0, l.jsx)(n.MenuItem, {
                  id: "view-main-profile",
                  label: h.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: h.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: B
                    }), k(void 0)
                  }
                }) : (0, l.jsx)(n.MenuItem, {
                  id: "view-server-profile",
                  label: h.default.Messages.VIEW_SERVER_PROFILE,
                  subtext: h.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(b, j, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: B
                    }), k(b)
                  }
                })
              })]
            }), (0, l.jsx)(C.default, {
              user: t,
              displayProfile: z,
              guildId: b,
              channelId: j,
              activity: H,
              customStatusActivity: Z,
              onClose: D
            }), (0, l.jsx)(N.default, {
              user: t,
              displayProfile: z,
              initialSection: y,
              autoFocusNote: O,
              transitionState: L,
              onClose: D
            })]
          })
        }), (null == z ? void 0 : z.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == z ? void 0 : z.profileEffectId,
          bannerAdjustment: 0,
          isHovering: K
        })]
      })
    })
  })
}