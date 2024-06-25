i.d(n, {
  Z: function() {
    return A
  }
}), i(47120);
var t = i(735250),
  s = i(470079),
  o = i(442837),
  l = i(481060),
  a = i(727637),
  r = i(100527),
  d = i(906732),
  c = i(680295),
  u = i(158776),
  I = i(5192),
  f = i(877485),
  E = i(785717),
  _ = i(318661),
  S = i(502762),
  Z = i(544989),
  m = i(481932),
  v = i(195387),
  x = i(272510),
  h = i(171368),
  g = i(806926),
  N = i(740021),
  p = i(228168),
  T = i(981631),
  C = i(689938),
  R = i(327570);

function A(e) {
  let {
    user: n,
    currentUser: i,
    guildId: A,
    channelId: M,
    messageId: j,
    roleId: U,
    friendToken: P,
    initialSection: L,
    initialSubsection: O,
    transitionState: y,
    onClose: b,
    showGuildProfile: D = !0,
    sourceAnalyticsLocations: F = []
  } = e, B = A === T.ME ? void 0 : A, {
    analyticsLocations: G
  } = (0, d.ZP)([...F, r.Z.SIMPLIFIED_PROFILE_MODAL]), {
    originalFriendingEnabled: w
  } = (0, f.V)({
    location: "SimplifiedUserProfileModal"
  }), k = (0, E.Q1)({
    layout: "SIMPLIFIED_MODAL",
    userId: n.id,
    guildId: B,
    channelId: M,
    messageId: j,
    roleId: U,
    showGuildProfile: D
  }), Y = (0, _.ZP)(n.id, D ? B : void 0), V = (0, _.ZP)(n.id, B), {
    activity: H,
    customStatusActivity: W
  } = (0, o.cj)([u.Z], () => ({
    activity: u.Z.findActivity(n.id, e => {
      let {
        type: n
      } = e;
      return n !== T.IIU.CUSTOM_STATUS
    }),
    customStatusActivity: u.Z.findActivity(n.id, e => {
      let {
        type: n
      } = e;
      return n === T.IIU.CUSTOM_STATUS
    })
  })), z = s.createRef(), K = (0, a.Z)(z), Q = () => (null == V ? void 0 : V.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, t.jsx)(l.MenuItem, {
    id: "view-main-profile",
    label: C.Z.Messages.VIEW_MAIN_PROFILE,
    subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(void 0, void 0, n)
    }),
    action: () => {
      k({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: G
      }), b(), (0, h.openUserProfileModal)({
        userId: n.id,
        showGuildProfile: !1,
        guildId: B,
        channelId: M,
        messageId: j,
        roleId: U,
        friendToken: P,
        sourceAnalyticsLocations: F
      })
    }
  }) : (0, t.jsx)(l.MenuItem, {
    id: "view-server-profile",
    label: C.Z.Messages.VIEW_SERVER_PROFILE,
    subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(B, M, n)
    }),
    action: () => {
      k({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: G
      }), b(), (0, h.openUserProfileModal)({
        userId: n.id,
        showGuildProfile: !0,
        guildId: B,
        channelId: M,
        messageId: j,
        roleId: U,
        friendToken: P,
        sourceAnalyticsLocations: F
      })
    }
  });
  return (0, t.jsx)(d.Gt, {
    value: G,
    children: (0, t.jsx)(E.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: n.id,
      guildId: B,
      channelId: M,
      messageId: j,
      roleId: U,
      showGuildProfile: D,
      children: (0, t.jsxs)(l.ModalRoot, {
        transitionState: y,
        className: R.root,
        hideShadow: !0,
        "aria-label": C.Z.Messages.USER_PROFILE_MODAL,
        children: [(0, t.jsxs)(S.Z, {
          user: n,
          displayProfile: Y,
          profileType: p.y0.FULL_SIZE,
          ref: z,
          children: [w ? (0, t.jsx)(Z.Z, {
            profileType: p.y0.FULL_SIZE,
            children: (0, t.jsx)(v.Z, {
              user: n,
              guildId: B,
              channelId: M,
              onClose: b
            })
          }) : (0, t.jsxs)(Z.Z, {
            profileType: p.y0.FULL_SIZE,
            children: [(0, t.jsx)(v.Z, {
              user: n,
              guildId: B,
              channelId: M,
              onClose: b
            }), (0, t.jsx)(m.Z, {
              profileType: p.y0.FULL_SIZE,
              user: n,
              friendToken: P
            }), (0, t.jsx)(x.Z, {
              user: n,
              profileType: p.y0.FULL_SIZE,
              guildId: B,
              viewProfileItem: Q()
            })]
          }), (0, t.jsx)(N.Z, {
            user: n,
            displayProfile: Y,
            guildId: B,
            channelId: M,
            activity: H,
            customStatusActivity: W,
            transitionState: y,
            viewProfileItem: Q(),
            onClose: b
          }), (0, t.jsx)(g.Z, {
            user: n,
            currentUser: i,
            channelId: M,
            displayProfile: Y,
            initialSection: L,
            initialSubsection: O,
            friendToken: P,
            onClose: b
          })]
        }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, t.jsx)(c.Z, {
          profileEffectId: null == Y ? void 0 : Y.profileEffectId,
          isHovering: K
        })]
      })
    })
  })
}