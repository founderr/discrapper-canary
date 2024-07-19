s.d(n, {
  Z: function() {
return M;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(442837),
  t = s(481060),
  r = s(727637),
  a = s(100527),
  d = s(906732),
  c = s(680295),
  u = s(699516),
  I = s(5192),
  _ = s(785717),
  f = s(481046),
  E = s(910128),
  m = s(718107),
  S = s(318661),
  Z = s(78675),
  v = s(899007),
  x = s(438163),
  h = s(502762),
  p = s(544989),
  T = s(481932),
  g = s(195387),
  N = s(272510),
  C = s(171368),
  j = s(900687),
  A = s(806926),
  O = s(228168),
  L = s(981631),
  R = s(689938),
  U = s(505451);

function M(e) {
  let {
user: n,
currentUser: s,
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
  }), J = (0, S.ZP)(n.id, k ? Y : void 0), X = (0, S.ZP)(n.id, Y), $ = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), ee = l.createRef(), en = (0, r.Z)(ee), es = () => (null == X ? void 0 : X.guildId) == null ? null : (null == J ? void 0 : J.guildId) != null ? (0, i.jsx)(t.MenuItem, {
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
  }) : (0, i.jsx)(t.MenuItem, {
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
  return (0, i.jsx)(d.Gt, {
value: H,
children: (0, i.jsx)(_.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: Y,
  channelId: P,
  messageId: b,
  roleId: y,
  showGuildProfile: k,
  children: (0, i.jsxs)(t.ModalRoot, {
    transitionState: G,
    className: U.root,
    hideShadow: !0,
    'aria-label': R.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(h.Z, {
        user: n,
        displayProfile: J,
        profileType: O.y0.FULL_SIZE,
        ref: ee,
        children: [
          (0, i.jsxs)(p.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, i.jsx)(g.Z, {
                user: n,
                guildId: Y,
                channelId: P,
                onClose: w
              }),
              (0, i.jsx)(T.Z, {
                profileType: O.y0.FULL_SIZE,
                user: n,
                friendToken: D
              }),
              (0, i.jsx)(N.Z, {
                user: n,
                guildId: Y,
                viewProfileItem: es()
              })
            ]
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(Z.Z, {
                user: n,
                displayProfile: J,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == J ? void 0 : J.profileEffectId) != null
              }),
              (0, i.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, i.jsx)(v.Z, {
                    user: n,
                    displayProfile: J,
                    guildId: Y,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE
                  }),
                  (0, i.jsx)(j.Z, {
                    user: n,
                    isCurrentUser: n.id === s.id,
                    guildId: Y,
                    relationshipType: $,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: Q,
                    viewProfileItem: es(),
                    onClose: w
                  }),
                  (0, i.jsx)(x.Z, {
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
          (0, i.jsx)(A.Z, {
            user: n,
            currentUser: s,
            channelId: P,
            displayProfile: J,
            initialSection: B,
            initialSubsection: F,
            friendToken: D,
            onClose: w
          })
        ]
      }),
      (null == J ? void 0 : J.profileEffectId) != null && (0, i.jsx)(c.Z, {
        profileEffectId: null == J ? void 0 : J.profileEffectId,
        isHovering: en
      })
    ]
  })
})
  });
}