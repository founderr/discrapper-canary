i.d(n, {
  Z: function() {
    return M
  }
}), i(47120);
var l = i(735250),
  s = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(727637),
  r = i(100527),
  d = i(906732),
  u = i(680295),
  c = i(158776),
  I = i(5192),
  E = i(877485),
  f = i(785717),
  Z = i(318661),
  _ = i(502762),
  S = i(544989),
  m = i(481932),
  v = i(195387),
  N = i(272510),
  x = i(171368),
  h = i(806926),
  g = i(740021),
  C = i(228168),
  T = i(981631),
  R = i(689938),
  A = i(327570);

function M(e) {
  let {
    user: n,
    guildId: i,
    channelId: M,
    messageId: j,
    roleId: p,
    friendToken: U,
    initialSection: O,
    initialSubsection: P,
    transitionState: L,
    onClose: D,
    showGuildProfile: y = !0,
    sourceAnalyticsLocations: F = []
  } = e, b = i === T.ME ? void 0 : i, {
    analyticsLocations: G
  } = (0, d.ZP)([...F, r.Z.SIMPLIFIED_PROFILE_MODAL]), {
    originalFriendingEnabled: B
  } = (0, E.V)({
    location: "SimplifiedUserProfileModal"
  }), k = (0, f.Q1)({
    layout: "SIMPLIFIED_MODAL",
    userId: n.id,
    guildId: b,
    channelId: M,
    messageId: j,
    roleId: p,
    showGuildProfile: y
  }), w = (0, Z.ZP)(n.id, y ? b : void 0), Y = (0, Z.ZP)(n.id, b), {
    activity: V,
    customStatusActivity: W
  } = (0, t.cj)([c.Z], () => ({
    activity: c.Z.findActivity(n.id, e => {
      let {
        type: n
      } = e;
      return n !== T.IIU.CUSTOM_STATUS
    }),
    customStatusActivity: c.Z.findActivity(n.id, e => {
      let {
        type: n
      } = e;
      return n === T.IIU.CUSTOM_STATUS
    })
  })), H = s.createRef(), z = (0, a.Z)(H), K = () => (null == Y ? void 0 : Y.guildId) == null ? null : (null == w ? void 0 : w.guildId) != null ? (0, l.jsx)(o.MenuItem, {
    id: "view-main-profile",
    label: R.Z.Messages.VIEW_MAIN_PROFILE,
    subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(void 0, void 0, n)
    }),
    action: () => {
      k({
        action: "PRESS_VIEW_MAIN_PROFILE",
        analyticsLocations: G
      }), D(), (0, x.openUserProfileModal)({
        userId: n.id,
        showGuildProfile: !1,
        guildId: b,
        channelId: M,
        messageId: j,
        roleId: p,
        friendToken: U,
        sourceAnalyticsLocations: F
      })
    }
  }) : (0, l.jsx)(o.MenuItem, {
    id: "view-server-profile",
    label: R.Z.Messages.VIEW_SERVER_PROFILE,
    subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
      displayName: I.ZP.getName(b, M, n)
    }),
    action: () => {
      k({
        action: "PRESS_VIEW_SERVER_PROFILE",
        analyticsLocations: G
      }), D(), (0, x.openUserProfileModal)({
        userId: n.id,
        showGuildProfile: !0,
        guildId: b,
        channelId: M,
        messageId: j,
        roleId: p,
        friendToken: U,
        sourceAnalyticsLocations: F
      })
    }
  });
  return (0, l.jsx)(d.Gt, {
    value: G,
    children: (0, l.jsx)(f.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: n.id,
      guildId: b,
      channelId: M,
      messageId: j,
      roleId: p,
      showGuildProfile: y,
      children: (0, l.jsxs)(o.ModalRoot, {
        transitionState: L,
        className: A.root,
        hideShadow: !0,
        "aria-label": R.Z.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsxs)(_.Z, {
          user: n,
          displayProfile: w,
          profileType: C.y0.FULL_SIZE,
          ref: H,
          children: [B ? (0, l.jsx)(S.Z, {
            profileType: C.y0.FULL_SIZE,
            children: (0, l.jsx)(v.Z, {
              user: n,
              guildId: b,
              channelId: M,
              onClose: D
            })
          }) : (0, l.jsxs)(S.Z, {
            profileType: C.y0.FULL_SIZE,
            children: [(0, l.jsx)(v.Z, {
              user: n,
              guildId: b,
              channelId: M,
              onClose: D
            }), (0, l.jsx)(m.Z, {
              profileType: C.y0.FULL_SIZE,
              user: n,
              friendToken: U
            }), (0, l.jsx)(N.Z, {
              user: n,
              profileType: C.y0.FULL_SIZE,
              guildId: b,
              viewProfileItem: K()
            })]
          }), (0, l.jsx)(g.Z, {
            user: n,
            displayProfile: w,
            guildId: b,
            channelId: M,
            activity: V,
            customStatusActivity: W,
            transitionState: L,
            viewProfileItem: K(),
            onClose: D
          }), (0, l.jsx)(h.Z, {
            user: n,
            channelId: M,
            displayProfile: w,
            initialSection: O,
            initialSubsection: P,
            friendToken: U,
            onClose: D
          })]
        }), (null == w ? void 0 : w.profileEffectId) != null && (0, l.jsx)(u.Z, {
          profileEffectId: null == w ? void 0 : w.profileEffectId,
          isHovering: z
        })]
      })
    })
  })
}