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
  r = s("37234"),
  n = s("727637"),
  u = s("100527"),
  d = s("906732"),
  c = s("680295"),
  f = s("158776"),
  S = s("5192"),
  E = s("785717"),
  m = s("318661"),
  I = s("502762"),
  v = s("705556"),
  A = s("301984"),
  _ = s("664794"),
  T = s("980768"),
  x = s("806926"),
  N = s("740021"),
  U = s("228168"),
  p = s("981631"),
  h = s("689938"),
  C = s("420867");

function P(e) {
  let {
    user: t,
    guildId: s,
    channelId: P,
    messageId: j,
    roleId: y,
    friendToken: M,
    initialSection: R,
    autoFocusNote: g,
    transitionState: O,
    sourceAnalyticsLocations: F = [],
    onClose: L
  } = e, D = s === p.ME ? void 0 : s, {
    analyticsLocations: B
  } = (0, d.default)([...F, u.default.SIMPLIFIED_PROFILE_MODAL]), b = (0, E.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: D,
    channelId: P,
    messageId: j,
    roleId: y
  }), [G, k] = a.useState(D), w = (0, m.default)(t.id), V = (0, m.default)(t.id, D), z = null == G ? w : V, {
    activity: Y,
    customStatusActivity: H
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
  })), W = a.createRef(), Z = (0, n.default)(W), K = () => {
    L(), (0, r.popLayer)()
  };
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: D,
      channelId: P,
      messageId: j,
      roleId: y,
      children: (0, l.jsxs)(o.ModalRoot, {
        transitionState: O,
        className: C.root,
        hideShadow: !0,
        "aria-label": h.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: W,
          children: (0, l.jsxs)(I.default, {
            user: t,
            displayProfile: z,
            profileType: U.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsxs)(T.default, {
              isFaded: (null == z ? void 0 : z.profileEffectId) != null && !Z,
              children: [(0, l.jsx)(A.default, {
                user: t,
                friendToken: M
              }), (0, l.jsx)(v.default, {
                user: t,
                guildId: D,
                onClose: K
              }), (0, l.jsx)(_.default, {
                user: t,
                guildId: D,
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
                    displayName: S.default.getName(D, P, t)
                  }),
                  action: () => {
                    b({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: B
                    }), k(D)
                  }
                })
              })]
            }), (0, l.jsx)(N.default, {
              user: t,
              displayProfile: z,
              guildId: D,
              channelId: P,
              activity: Y,
              customStatusActivity: H,
              onClose: L
            }), (0, l.jsx)(x.default, {
              user: t,
              displayProfile: z,
              initialSection: R,
              autoFocusNote: g,
              transitionState: O,
              onClose: L
            })]
          })
        }), (null == z ? void 0 : z.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == z ? void 0 : z.profileEffectId,
          bannerAdjustment: 0,
          isHovering: Z
        })]
      })
    })
  })
}