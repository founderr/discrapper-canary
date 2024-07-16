n.d(i, {
  Z: function() {
return O;
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
  _ = n(785717),
  f = n(481046),
  E = n(910128),
  m = n(718107),
  S = n(318661),
  Z = n(78675),
  v = n(899007),
  x = n(438163),
  h = n(502762),
  p = n(544989),
  T = n(481932),
  g = n(195387),
  N = n(272510),
  C = n(171368),
  j = n(900687),
  A = n(806926),
  M = n(228168),
  L = n(981631),
  R = n(689938),
  U = n(505451);

function O(e) {
  let {
user: i,
currentUser: n,
guildId: O,
channelId: P,
messageId: b,
roleId: y,
friendToken: D,
initialSection: F,
initialSubsection: B,
transitionState: G,
onClose: w,
showGuildProfile: k = !0,
sourceAnalyticsLocations: V = []
  } = e, Y = O === L.ME ? void 0 : O, {
analyticsLocations: H
  } = (0, d.ZP)([
...V,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), W = (0, _.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: i.id,
guildId: Y,
channelId: P,
messageId: b,
roleId: y,
showGuildProfile: k
  }), {
profileStatusEditEnabled: z
  } = (0, f.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
statusReactReplyEnabled: K
  } = (0, m.t)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: q,
activeInviteToCallCtaEnabled: Q
  } = (0, E.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), J = (0, S.ZP)(i.id, k ? Y : void 0), X = (0, S.ZP)(i.id, Y), $ = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(i.id)), ee = l.createRef(), ei = (0, r.Z)(ee), en = () => (null == X ? void 0 : X.guildId) == null ? null : (null == J ? void 0 : J.guildId) != null ? (0, s.jsx)(t.MenuItem, {
id: 'view-main-profile',
label: R.Z.Messages.VIEW_MAIN_PROFILE,
subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
  displayName: I.ZP.getName(void 0, void 0, i)
}),
action: () => {
  W({
    action: 'PRESS_VIEW_MAIN_PROFILE',
    analyticsLocations: H
  }), w(), (0, C.openUserProfileModal)({
    userId: i.id,
    showGuildProfile: !1,
    guildId: Y,
    channelId: P,
    messageId: b,
    roleId: y,
    friendToken: D,
    sourceAnalyticsLocations: V
  });
}
  }) : (0, s.jsx)(t.MenuItem, {
id: 'view-server-profile',
label: R.Z.Messages.VIEW_SERVER_PROFILE,
subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
  displayName: I.ZP.getName(Y, P, i)
}),
action: () => {
  W({
    action: 'PRESS_VIEW_SERVER_PROFILE',
    analyticsLocations: H
  }), w(), (0, C.openUserProfileModal)({
    userId: i.id,
    showGuildProfile: !0,
    guildId: Y,
    channelId: P,
    messageId: b,
    roleId: y,
    friendToken: D,
    sourceAnalyticsLocations: V
  });
}
  });
  return (0, s.jsx)(d.Gt, {
value: H,
children: (0, s.jsx)(_.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: Y,
  channelId: P,
  messageId: b,
  roleId: y,
  showGuildProfile: k,
  children: (0, s.jsxs)(t.ModalRoot, {
    transitionState: G,
    className: U.root,
    hideShadow: !0,
    'aria-label': R.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(h.Z, {
        user: i,
        displayProfile: J,
        profileType: M.y0.FULL_SIZE,
        ref: ee,
        children: [
          (0, s.jsxs)(p.Z, {
            profileType: M.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(g.Z, {
                user: i,
                guildId: Y,
                channelId: P,
                onClose: w
              }),
              (0, s.jsx)(T.Z, {
                profileType: M.y0.FULL_SIZE,
                user: i,
                friendToken: D
              }),
              (0, s.jsx)(N.Z, {
                user: i,
                guildId: Y,
                viewProfileItem: en()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(Z.Z, {
                user: i,
                displayProfile: J,
                profileType: M.y0.FULL_SIZE,
                hasProfileEffect: (null == J ? void 0 : J.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, s.jsx)(v.Z, {
                    user: i,
                    displayProfile: J,
                    guildId: Y,
                    channelId: P,
                    profileType: M.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(j.Z, {
                    user: i,
                    isCurrentUser: i.id === n.id,
                    guildId: Y,
                    relationshipType: $,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: Q,
                    viewProfileItem: en(),
                    onClose: w
                  }),
                  (0, s.jsx)(x.Z, {
                    user: i,
                    profileType: M.y0.FULL_SIZE,
                    editEnabled: z,
                    reactReplyEnabled: K,
                    hasEntered: G === t.ModalTransitionState.ENTERED,
                    onClose: w
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)(A.Z, {
            user: i,
            currentUser: n,
            channelId: P,
            displayProfile: J,
            initialSection: F,
            initialSubsection: B,
            friendToken: D,
            onClose: w
          })
        ]
      }),
      (null == J ? void 0 : J.profileEffectId) != null && (0, s.jsx)(c.Z, {
        profileEffectId: null == J ? void 0 : J.profileEffectId,
        isHovering: ei
      })
    ]
  })
})
  });
}