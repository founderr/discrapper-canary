i.d(n, {
  Z: function() {
return M;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  o = i(442837),
  t = i(481060),
  r = i(727637),
  a = i(100527),
  d = i(906732),
  c = i(680295),
  u = i(699516),
  I = i(5192),
  _ = i(785717),
  f = i(481046),
  E = i(910128),
  m = i(718107),
  S = i(318661),
  Z = i(78675),
  v = i(899007),
  x = i(438163),
  h = i(502762),
  p = i(544989),
  T = i(481932),
  g = i(195387),
  N = i(272510),
  C = i(171368),
  j = i(900687),
  A = i(806926),
  O = i(228168),
  L = i(981631),
  R = i(689938),
  U = i(505451);

function M(e) {
  let {
user: n,
currentUser: i,
guildId: M,
channelId: P,
messageId: b,
roleId: y,
friendToken: D,
initialSection: B,
initialSubsection: F,
transitionState: G,
onClose: w,
showGuildProfile: k = !0,
sourceAnalyticsLocations: V = []
  } = e, Y = M === L.ME ? void 0 : M, {
analyticsLocations: H
  } = (0, d.ZP)([
...V,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), W = (0, _.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: n.id,
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
  }), J = (0, S.ZP)(n.id, k ? Y : void 0), X = (0, S.ZP)(n.id, Y), $ = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), ee = l.createRef(), en = (0, r.Z)(ee), ei = () => (null == X ? void 0 : X.guildId) == null ? null : (null == J ? void 0 : J.guildId) != null ? (0, s.jsx)(t.MenuItem, {
id: 'view-main-profile',
label: R.Z.Messages.VIEW_MAIN_PROFILE,
subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
  displayName: I.ZP.getName(void 0, void 0, n)
}),
action: () => {
  W({
    action: 'PRESS_VIEW_MAIN_PROFILE',
    analyticsLocations: H
  }), w(), (0, C.openUserProfileModal)({
    userId: n.id,
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
  displayName: I.ZP.getName(Y, P, n)
}),
action: () => {
  W({
    action: 'PRESS_VIEW_SERVER_PROFILE',
    analyticsLocations: H
  }), w(), (0, C.openUserProfileModal)({
    userId: n.id,
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
  userId: n.id,
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
        user: n,
        displayProfile: J,
        profileType: O.y0.FULL_SIZE,
        ref: ee,
        children: [
          (0, s.jsxs)(p.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(g.Z, {
                user: n,
                guildId: Y,
                channelId: P,
                onClose: w
              }),
              (0, s.jsx)(T.Z, {
                profileType: O.y0.FULL_SIZE,
                user: n,
                friendToken: D
              }),
              (0, s.jsx)(N.Z, {
                user: n,
                guildId: Y,
                viewProfileItem: ei()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(Z.Z, {
                user: n,
                displayProfile: J,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == J ? void 0 : J.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, s.jsx)(v.Z, {
                    user: n,
                    displayProfile: J,
                    guildId: Y,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(j.Z, {
                    user: n,
                    isCurrentUser: n.id === i.id,
                    guildId: Y,
                    relationshipType: $,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: Q,
                    viewProfileItem: ei(),
                    onClose: w
                  }),
                  (0, s.jsx)(x.Z, {
                    user: n,
                    profileType: O.y0.FULL_SIZE,
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
            user: n,
            currentUser: i,
            channelId: P,
            displayProfile: J,
            initialSection: B,
            initialSubsection: F,
            friendToken: D,
            onClose: w
          })
        ]
      }),
      (null == J ? void 0 : J.profileEffectId) != null && (0, s.jsx)(c.Z, {
        profileEffectId: null == J ? void 0 : J.profileEffectId,
        isHovering: en
      })
    ]
  })
})
  });
}