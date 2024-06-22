s.d(i, {
  Z: function() {
    return M
  }
}), s(47120);
var n = s(735250),
  l = s(470079),
  t = s(442837),
  o = s(481060),
  r = s(727637),
  a = s(100527),
  d = s(906732),
  c = s(680295),
  u = s(158776),
  I = s(5192),
  E = s(877485),
  Z = s(785717),
  f = s(318661),
  _ = s(502762),
  S = s(544989),
  v = s(481932),
  m = s(195387),
  x = s(272510),
  h = s(171368),
  N = s(806926),
  g = s(740021),
  T = s(228168),
  C = s(981631),
  R = s(689938),
  A = s(327570);

function M(e) {
  let {
    user: i,
    currentUser: s,
    guildId: M,
    channelId: p,
    messageId: j,
    roleId: U,
    friendToken: L,
    initialSection: O,
    initialSubsection: P,
    transitionState: y,
    onClose: D,
    showGuildProfile: F = !0,
    sourceAnalyticsLocations: b = []
  } = e, B = M === C.ME ? void 0 : M, {
    analyticsLocations: G
  } = (0, d.ZP)([...b, a.Z.SIMPLIFIED_PROFILE_MODAL]), {
    originalFriendingEnabled: k
  } = (0, E.V)({
    location: "SimplifiedUserProfileModal"
  }), w = (0, Z.Q1)({
    layout: "SIMPLIFIED_MODAL",
    userId: i.id,
    guildId: B,
    channelId: p,
    messageId: j,
    roleId: U,
    showGuildProfile: F
  }), Y = (0, f.ZP)(i.id, F ? B : void 0), V = (0, f.ZP)(i.id, B), {
    activity: W,
    customStatusActivity: H
  } = (0, t.cj)([u.Z], () => ({
    activity: u.Z.findActivity(i.id, e => {
      let {
        type: i
      } = e;
      return i !== C.IIU.CUSTOM_STATUS
    }),
    customStatusActivity: u.Z.findActivity(i.id, e => {
      let {
        type: i
      } = e;
      return i === C.IIU.CUSTOM_STATUS
    })
  })), z = l.createRef(), K = (0, r.Z)(z), Q = () => (null == V ? void 0 : V.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, n.jsx)(o.MenuItem, {
    id: "view-main-profile",
    label: R.Z.Messages.VIEW_MAIN_PROFILE,
    subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(void 0, void 0, i)
    }),
    action: () => {
      w({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: G
      }), D(), (0, h.openUserProfileModal)({
        userId: i.id,
        showGuildProfile: !1,
        guildId: B,
        channelId: p,
        messageId: j,
        roleId: U,
        friendToken: L,
        sourceAnalyticsLocations: b
      })
    }
  }) : (0, n.jsx)(o.MenuItem, {
    id: "view-server-profile",
    label: R.Z.Messages.VIEW_SERVER_PROFILE,
    subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(B, p, i)
    }),
    action: () => {
      w({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: G
      }), D(), (0, h.openUserProfileModal)({
        userId: i.id,
        showGuildProfile: !0,
        guildId: B,
        channelId: p,
        messageId: j,
        roleId: U,
        friendToken: L,
        sourceAnalyticsLocations: b
      })
    }
  });
  return (0, n.jsx)(d.Gt, {
    value: G,
    children: (0, n.jsx)(Z.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: i.id,
      guildId: B,
      channelId: p,
      messageId: j,
      roleId: U,
      showGuildProfile: F,
      children: (0, n.jsxs)(o.ModalRoot, {
        transitionState: y,
        className: A.root,
        hideShadow: !0,
        "aria-label": R.Z.Messages.USER_PROFILE_MODAL,
        children: [(0, n.jsxs)(_.Z, {
          user: i,
          displayProfile: Y,
          profileType: T.y0.FULL_SIZE,
          ref: z,
          children: [k ? (0, n.jsx)(S.Z, {
            profileType: T.y0.FULL_SIZE,
            children: (0, n.jsx)(m.Z, {
              user: i,
              guildId: B,
              channelId: p,
              onClose: D
            })
          }) : (0, n.jsxs)(S.Z, {
            profileType: T.y0.FULL_SIZE,
            children: [(0, n.jsx)(m.Z, {
              user: i,
              guildId: B,
              channelId: p,
              onClose: D
            }), (0, n.jsx)(v.Z, {
              profileType: T.y0.FULL_SIZE,
              user: i,
              friendToken: L
            }), (0, n.jsx)(x.Z, {
              user: i,
              profileType: T.y0.FULL_SIZE,
              guildId: B,
              viewProfileItem: Q()
            })]
          }), (0, n.jsx)(g.Z, {
            user: i,
            displayProfile: Y,
            guildId: B,
            channelId: p,
            activity: W,
            customStatusActivity: H,
            transitionState: y,
            viewProfileItem: Q(),
            onClose: D
          }), (0, n.jsx)(N.Z, {
            user: i,
            currentUser: s,
            channelId: p,
            displayProfile: Y,
            initialSection: O,
            initialSubsection: P,
            friendToken: L,
            onClose: D
          })]
        }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, n.jsx)(c.Z, {
          profileEffectId: null == Y ? void 0 : Y.profileEffectId,
          isHovering: K
        })]
      })
    })
  })
}