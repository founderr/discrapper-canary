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
  v = s("318661"),
  I = s("502762"),
  E = s("705556"),
  x = s("301984"),
  A = s("94918"),
  _ = s("664794"),
  T = s("980768"),
  N = s("806926"),
  U = s("740021"),
  C = s("228168"),
  g = s("981631"),
  h = s("689938"),
  p = s("750721");

function j(e) {
  let {
    user: t,
    guildId: s,
    channelId: j,
    messageId: R,
    roleId: P,
    friendToken: M,
    initialSection: y,
    autoFocusNote: O,
    transitionState: L,
    sourceAnalyticsLocations: F = [],
    onClose: D
  } = e, b = s === g.ME ? void 0 : s, {
    analyticsLocations: B
  } = (0, d.default)([...F, u.default.SIMPLIFIED_PROFILE_MODAL]), G = (0, m.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: b,
    channelId: j,
    messageId: R,
    roleId: P
  }), [k, w] = a.useState(b), V = (0, v.default)(t.id), Y = (0, v.default)(t.id, b), H = null == k ? V : Y, {
    activity: z,
    customStatusActivity: W
  } = (0, i.useStateFromStoresObject)([f.default], () => ({
    activity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== g.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === g.ActivityTypes.CUSTOM_STATUS
    })
  })), Z = a.createRef(), J = (0, o.default)(Z);
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(m.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: b,
      channelId: j,
      messageId: R,
      roleId: P,
      children: (0, l.jsxs)(n.ModalRoot, {
        transitionState: L,
        className: p.root,
        hideShadow: !0,
        "aria-label": h.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: Z,
          children: (0, l.jsxs)(I.default, {
            user: t,
            displayProfile: H,
            profileType: C.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(T.default, {
              profileType: C.UserProfileTypes.FULL_SIZE,
              isFaded: (null == H ? void 0 : H.profileEffectId) != null && !J,
              children: [(0, l.jsx)(A.default, {
                user: t,
                guildId: b,
                channelId: j,
                onClose: D
              }), (0, l.jsx)(x.default, {
                user: t,
                friendToken: M
              }), (0, l.jsx)(E.default, {
                type: "overlay",
                user: t,
                guildId: b,
                onClose: () => {
                  D(), (0, r.popLayer)()
                }
              }), (0, l.jsx)(_.default, {
                user: t,
                guildId: b,
                viewProfileItem: (null == Y ? void 0 : Y.guildId) == null ? null : (null == H ? void 0 : H.guildId) != null ? (0, l.jsx)(n.MenuItem, {
                  id: "view-main-profile",
                  label: h.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: h.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    G({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: B
                    }), w(void 0)
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
                    }), w(b)
                  }
                })
              })]
            }), (0, l.jsx)(U.default, {
              user: t,
              displayProfile: H,
              guildId: b,
              channelId: j,
              activity: z,
              customStatusActivity: W,
              onClose: D
            }), (0, l.jsx)(N.default, {
              user: t,
              displayProfile: H,
              initialSection: y,
              autoFocusNote: O,
              transitionState: L,
              onClose: D
            })]
          })
        }), (null == H ? void 0 : H.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == H ? void 0 : H.profileEffectId,
          bannerAdjustment: 0,
          isHovering: J
        })]
      })
    })
  })
}