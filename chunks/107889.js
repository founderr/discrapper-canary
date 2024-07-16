n.d(i, {
  Z: function() {
return P;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(481060),
  r = n(727637),
  a = n(100527),
  d = n(906732),
  c = n(680295),
  u = n(699516),
  I = n(5192),
  f = n(785717),
  _ = n(481046),
  E = n(910128),
  m = n(642113),
  S = n(718107),
  Z = n(318661),
  x = n(78675),
  v = n(899007),
  h = n(438163),
  p = n(502762),
  T = n(544989),
  g = n(481932),
  N = n(195387),
  C = n(272510),
  j = n(171368),
  A = n(900687),
  U = n(806926),
  R = n(228168),
  O = n(981631),
  M = n(689938),
  L = n(505451);

function P(e) {
  let {
user: i,
currentUser: n,
guildId: P,
channelId: b,
messageId: y,
roleId: D,
friendToken: F,
initialSection: B,
initialSubsection: G,
transitionState: w,
onClose: k,
showGuildProfile: V = !0,
sourceAnalyticsLocations: Y = []
  } = e, H = P === O.ME ? void 0 : P, {
analyticsLocations: W
  } = (0, d.ZP)([
...Y,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, f.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: i.id,
guildId: H,
channelId: b,
messageId: y,
roleId: D,
showGuildProfile: V
  }), {
originalFriendingEnabled: K,
improvedFriendingEnabled: q
  } = (0, m.V)({
location: 'SimplifiedUserProfileModal'
  }), {
profileStatusEditEnabled: Q
  } = (0, _.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
statusReactReplyEnabled: J
  } = (0, S.t)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: X,
activeInviteToCallCtaEnabled: $
  } = (0, E.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), ee = (0, Z.ZP)(i.id, V ? H : void 0), ei = (0, Z.ZP)(i.id, H), en = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(i.id)), es = l.createRef(), el = (0, r.Z)(es), eo = () => (null == ei ? void 0 : ei.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, s.jsx)(t.MenuItem, {
id: 'view-main-profile',
label: M.Z.Messages.VIEW_MAIN_PROFILE,
subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
  displayName: I.ZP.getName(void 0, void 0, i)
}),
action: () => {
  z({
    action: 'PRESS_VIEW_MAIN_PROFILE',
    analyticsLocations: W
  }), k(), (0, j.openUserProfileModal)({
    userId: i.id,
    showGuildProfile: !1,
    guildId: H,
    channelId: b,
    messageId: y,
    roleId: D,
    friendToken: F,
    sourceAnalyticsLocations: Y
  });
}
  }) : (0, s.jsx)(t.MenuItem, {
id: 'view-server-profile',
label: M.Z.Messages.VIEW_SERVER_PROFILE,
subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
  displayName: I.ZP.getName(H, b, i)
}),
action: () => {
  z({
    action: 'PRESS_VIEW_SERVER_PROFILE',
    analyticsLocations: W
  }), k(), (0, j.openUserProfileModal)({
    userId: i.id,
    showGuildProfile: !0,
    guildId: H,
    channelId: b,
    messageId: y,
    roleId: D,
    friendToken: F,
    sourceAnalyticsLocations: Y
  });
}
  });
  return (0, s.jsx)(d.Gt, {
value: W,
children: (0, s.jsx)(f.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: H,
  channelId: b,
  messageId: y,
  roleId: D,
  showGuildProfile: V,
  children: (0, s.jsxs)(t.ModalRoot, {
    transitionState: w,
    className: L.root,
    hideShadow: !0,
    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(p.Z, {
        user: i,
        displayProfile: ee,
        profileType: R.y0.FULL_SIZE,
        ref: es,
        children: [
          K ? (0, s.jsx)(T.Z, {
            profileType: R.y0.FULL_SIZE,
            children: (0, s.jsx)(N.Z, {
              user: i,
              guildId: H,
              channelId: b,
              onClose: k
            })
          }) : (0, s.jsxs)(T.Z, {
            profileType: R.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(N.Z, {
                user: i,
                guildId: H,
                channelId: b,
                onClose: k
              }),
              (0, s.jsx)(g.Z, {
                profileType: R.y0.FULL_SIZE,
                user: i,
                friendToken: F
              }),
              (0, s.jsx)(C.Z, {
                user: i,
                guildId: H,
                viewProfileItem: eo()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(x.Z, {
                user: i,
                displayProfile: ee,
                profileType: R.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: L.headerInner,
                children: [
                  (0, s.jsx)(v.Z, {
                    user: i,
                    displayProfile: ee,
                    guildId: H,
                    channelId: b,
                    profileType: R.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(A.Z, {
                    user: i,
                    isCurrentUser: i.id === n.id,
                    guildId: H,
                    relationshipType: en,
                    originalFriendingEnabled: K,
                    improvedFriendingEnabled: q,
                    persistentCallCtaEnabled: X,
                    activeInviteToCallCtaEnabled: $,
                    viewProfileItem: eo(),
                    onClose: k
                  }),
                  (0, s.jsx)(h.Z, {
                    user: i,
                    profileType: R.y0.FULL_SIZE,
                    editEnabled: Q,
                    reactReplyEnabled: J,
                    hasEntered: w === t.ModalTransitionState.ENTERED,
                    onClose: k
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)(U.Z, {
            user: i,
            currentUser: n,
            channelId: b,
            displayProfile: ee,
            initialSection: B,
            initialSubsection: G,
            friendToken: F,
            onClose: k
          })
        ]
      }),
      (null == ee ? void 0 : ee.profileEffectId) != null && (0, s.jsx)(c.Z, {
        profileEffectId: null == ee ? void 0 : ee.profileEffectId,
        isHovering: el
      })
    ]
  })
})
  });
}