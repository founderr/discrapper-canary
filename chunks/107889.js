"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  o = s("37234"),
  r = s("727637"),
  u = s("100527"),
  d = s("906732"),
  c = s("680295"),
  f = s("158776"),
  S = s("5192"),
  E = s("785717"),
  I = s("318661"),
  m = s("484404"),
  _ = s("903843"),
  T = s("502762"),
  p = s("664794"),
  A = s("806926"),
  N = s("740021"),
  v = s("228168"),
  x = s("981631"),
  U = s("689938"),
  h = s("420867");

function C(e) {
  let {
    user: t,
    guildId: s,
    channelId: C,
    messageId: R,
    roleId: P,
    friendToken: M,
    initialSection: g,
    autoFocusNote: j,
    transitionState: y,
    sourceAnalyticsLocations: O = [],
    onClose: D
  } = e, F = s === x.ME ? void 0 : s, {
    analyticsLocations: L
  } = (0, d.default)([...O, u.default.SIMPLIFIED_PROFILE_MODAL]), B = (0, E.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: F,
    channelId: C,
    messageId: R,
    roleId: P
  }), [b, G] = a.useState(F), k = (0, I.default)(t.id), w = (0, I.default)(t.id, F), V = null == b ? k : w, z = (0, i.useStateFromStores)([f.default], () => f.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== x.ActivityTypes.CUSTOM_STATUS
  })), Y = a.createRef(), H = (0, r.default)(Y);
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: L,
    children: (0, l.jsx)(E.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: F,
      channelId: C,
      messageId: R,
      roleId: P,
      children: (0, l.jsxs)(n.ModalRoot, {
        transitionState: y,
        className: h.root,
        hideShadow: !0,
        "aria-label": U.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: Y,
          children: (0, l.jsxs)(T.default, {
            user: t,
            displayProfile: V,
            profileType: v.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsx)(_.default, {
              isFaded: (null == V ? void 0 : V.profileEffectId) != null && !H,
              children: (0, l.jsx)(p.default, {
                user: t,
                guildId: F,
                onClose: () => {
                  D(), (0, o.popLayer)()
                },
                viewProfileItem: (null == w ? void 0 : w.guildId) == null ? null : (null == V ? void 0 : V.guildId) != null ? (0, l.jsx)(n.MenuItem, {
                  id: "view-main-profile",
                  label: U.default.Messages.VIEW_MAIN_PROFILE,
                  subtext: U.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(void 0, void 0, t)
                  }),
                  action: () => {
                    B({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: L
                    }), G(void 0)
                  }
                }) : (0, l.jsx)(n.MenuItem, {
                  id: "view-server-profile",
                  label: U.default.Messages.VIEW_SERVER_PROFILE,
                  subtext: U.default.Messages.AKA_DISPLAY_NAME.format({
                    displayName: S.default.getName(F, C, t)
                  }),
                  action: () => {
                    B({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: L
                    }), G(F)
                  }
                })
              })
            }), (0, l.jsx)(N.default, {
              className: h.header,
              user: t,
              displayProfile: V,
              activity: z,
              friendToken: M,
              onClose: D
            }), (0, l.jsxs)(T.default.Overlay, {
              children: [y === n.ModalTransitionState.ENTERED && (0, l.jsx)(m.default, {
                onTooltipClose: D
              }), (0, l.jsx)("div", {
                className: h.body,
                children: (0, l.jsx)(A.default, {
                  user: t,
                  displayProfile: V,
                  initialSection: g,
                  autoFocusNote: j,
                  onClose: D
                })
              })]
            })]
          })
        }), (null == V ? void 0 : V.profileEffectId) != null && (0, l.jsx)(c.default, {
          profileEffectId: null == V ? void 0 : V.profileEffectId,
          bannerAdjustment: 0,
          isHovering: H
        })]
      })
    })
  })
}