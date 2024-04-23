"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
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
  _ = s("94918"),
  A = s("664794"),
  N = s("980768"),
  T = s("806926"),
  U = s("740021"),
  h = s("228168"),
  p = s("981631"),
  g = s("689938"),
  j = s("420867");

function R(e) {
  let {
    user: t,
    guildId: s,
    channelId: R,
    messageId: P,
    roleId: M,
    friendToken: C,
    initialSection: y,
    autoFocusNote: O,
    transitionState: F,
    sourceAnalyticsLocations: L = [],
    onClose: D
  } = e, b = s === p.ME ? void 0 : s, {
    analyticsLocations: B
  } = (0, d.default)([...L, u.default.SIMPLIFIED_PROFILE_MODAL]), G = (0, m.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: b,
    channelId: R,
    messageId: P,
    roleId: M
  }), [k, V] = a.useState(b), w = (0, E.default)(t.id), H = (0, E.default)(t.id, b), Y = null == k ? w : H, {
    activity: z,
    customStatusActivity: W
  } = (0, i.useStateFromStoresObject)([f.default], () => ({
    activity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== p.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === p.ActivityTypes.CUSTOM_STATUS
    })
  })), Z = a.createRef(), K = (0, o.default)(Z);
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(m.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: b,
      channelId: R,
      messageId: P,
      roleId: M,
      children: (0, l.jsxs)(r.ModalRoot, {
        transitionState: F,
        className: j.root,
        hideShadow: !0,
        "aria-label": g.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: Z,
          children: (0, l.jsxs)(I.default, {
            user: t,
            displayProfile: Y,
            profileType: h.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(N.default, {
              isFaded: (null == Y ? void 0 : Y.profileEffectId) != null && !K,
              children: [(0, l.jsx)(_.default, {
                user: t,
                guildId: b,
                channelId: R,
                onClose: D
              }), (0, l.jsx)(x.default, {
                user: t,
                friendToken: C
              }), (0, l.jsx)(v.default, {
                type: "overlay",
                user: t,
                guildId: b,
                onClose: () => {
                  D(), (0, n.popLayer)()
                }
              }), (0, l.jsx)(A.default, {
                user: t,
                guildId: b,
                viewProfileItem: (null == H ? void 0 : H.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, l.jsx)(r.MenuItem, {
                  id: "view-main-profile",
                  label: g.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: g.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: B
                    }), V(void 0)
                  }
                }) : (0, l.jsx)(r.MenuItem, {
                  id: "view-server-profile",
                  label: g.default.Messages.VIEW_SERVER_PROFILE,
                  subtext: g.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(b, R, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: B
                    }), V(b)
                  }
                })
              })]
            }), (0, l.jsx)(U.default, {
              user: t,
              displayProfile: Y,
              guildId: b,
              channelId: R,
              activity: z,
              customStatusActivity: W,
              onClose: D
            }), (0, l.jsx)(T.default, {
              user: t,
              displayProfile: Y,
              initialSection: y,
              autoFocusNote: O,
              transitionState: F,
              onClose: D
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