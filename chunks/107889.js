n.d(i, {
  Z: function() {
    return M
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  r = n(727637),
  a = n(100527),
  d = n(906732),
  u = n(680295),
  c = n(158776),
  I = n(5192),
  E = n(877485),
  Z = n(785717),
  _ = n(318661),
  f = n(502762),
  S = n(544989),
  v = n(481932),
  m = n(195387),
  x = n(272510),
  N = n(171368),
  h = n(806926),
  g = n(740021),
  T = n(228168),
  C = n(981631),
  A = n(689938),
  R = n(327570);

function M(e) {
  let {
    user: i,
    currentUser: n,
    guildId: M,
    channelId: U,
    messageId: j,
    roleId: p,
    friendToken: O,
    initialSection: P,
    initialSubsection: L,
    transitionState: y,
    onClose: D,
    showGuildProfile: F = !0,
    sourceAnalyticsLocations: b = []
  } = e, G = M === C.ME ? void 0 : M, {
    analyticsLocations: B
  } = (0, d.ZP)([...b, a.Z.SIMPLIFIED_PROFILE_MODAL]), {
    originalFriendingEnabled: w
  } = (0, E.V)({
    location: "SimplifiedUserProfileModal"
  }), k = (0, Z.Q1)({
    layout: "SIMPLIFIED_MODAL",
    userId: i.id,
    guildId: G,
    channelId: U,
    messageId: j,
    roleId: p,
    showGuildProfile: F
  }), Y = (0, _.ZP)(i.id, F ? G : void 0), V = (0, _.ZP)(i.id, G), {
    activity: W,
    customStatusActivity: H
  } = (0, t.cj)([c.Z], () => ({
    activity: c.Z.findActivity(i.id, e => {
      let {
        type: i
      } = e;
      return i !== C.IIU.CUSTOM_STATUS
    }),
    customStatusActivity: c.Z.findActivity(i.id, e => {
      let {
        type: i
      } = e;
      return i === C.IIU.CUSTOM_STATUS
    })
  })), z = l.createRef(), K = (0, r.Z)(z), Q = () => (null == V ? void 0 : V.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, s.jsx)(o.MenuItem, {
    id: "view-main-profile",
    label: A.Z.Messages.VIEW_MAIN_PROFILE,
    subtext: A.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(void 0, void 0, i)
    }),
    action: () => {
      k({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: B
      }), D(), (0, N.openUserProfileModal)({
        userId: i.id,
        showGuildProfile: !1,
        guildId: G,
        channelId: U,
        messageId: j,
        roleId: p,
        friendToken: O,
        sourceAnalyticsLocations: b
      })
    }
  }) : (0, s.jsx)(o.MenuItem, {
    id: "view-server-profile",
    label: A.Z.Messages.VIEW_SERVER_PROFILE,
    subtext: A.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(G, U, i)
    }),
    action: () => {
      k({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: B
      }), D(), (0, N.openUserProfileModal)({
        userId: i.id,
        showGuildProfile: !0,
        guildId: G,
        channelId: U,
        messageId: j,
        roleId: p,
        friendToken: O,
        sourceAnalyticsLocations: b
      })
    }
  });
  return (0, s.jsx)(d.Gt, {
    value: B,
    children: (0, s.jsx)(Z.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: i.id,
      guildId: G,
      channelId: U,
      messageId: j,
      roleId: p,
      showGuildProfile: F,
      children: (0, s.jsxs)(o.ModalRoot, {
        transitionState: y,
        className: R.root,
        hideShadow: !0,
        "aria-label": A.Z.Messages.USER_PROFILE_MODAL,
        children: [(0, s.jsxs)(f.Z, {
          user: i,
          displayProfile: Y,
          profileType: T.y0.FULL_SIZE,
          ref: z,
          children: [w ? (0, s.jsx)(S.Z, {
            profileType: T.y0.FULL_SIZE,
            children: (0, s.jsx)(m.Z, {
              user: i,
              guildId: G,
              channelId: U,
              onClose: D
            })
          }) : (0, s.jsxs)(S.Z, {
            profileType: T.y0.FULL_SIZE,
            children: [(0, s.jsx)(m.Z, {
              user: i,
              guildId: G,
              channelId: U,
              onClose: D
            }), (0, s.jsx)(v.Z, {
              profileType: T.y0.FULL_SIZE,
              user: i,
              friendToken: O
            }), (0, s.jsx)(x.Z, {
              user: i,
              profileType: T.y0.FULL_SIZE,
              guildId: G,
              viewProfileItem: Q()
            })]
          }), (0, s.jsx)(g.Z, {
            user: i,
            displayProfile: Y,
            guildId: G,
            channelId: U,
            activity: W,
            customStatusActivity: H,
            transitionState: y,
            viewProfileItem: Q(),
            onClose: D
          }), (0, s.jsx)(h.Z, {
            user: i,
            currentUser: n,
            channelId: U,
            displayProfile: Y,
            initialSection: P,
            initialSubsection: L,
            friendToken: O,
            onClose: D
          })]
        }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, s.jsx)(u.Z, {
          profileEffectId: null == Y ? void 0 : Y.profileEffectId,
          isHovering: K
        })]
      })
    })
  })
}