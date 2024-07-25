n.d(i, {
  Z: function() {
return P;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  a = n(727637),
  r = n(100527),
  d = n(906732),
  c = n(564990),
  u = n(680295),
  I = n(699516),
  _ = n(5192),
  f = n(785717),
  m = n(481046),
  E = n(910128),
  x = n(27144),
  v = n(318661),
  h = n(78675),
  S = n(113557),
  Z = n(169979),
  p = n(502762),
  g = n(544989),
  j = n(481932),
  T = n(195387),
  N = n(272510),
  C = n(171368),
  A = n(900687),
  R = n(806926),
  L = n(228168),
  y = n(981631),
  O = n(689938),
  U = n(505451);

function P(e) {
  let {
user: i,
currentUser: n,
guildId: P,
channelId: M,
messageId: b,
roleId: D,
friendToken: F,
initialSection: B,
initialSubsection: G,
transitionState: w,
onClose: k,
showGuildProfile: Y = !0,
sourceAnalyticsLocations: V = []
  } = e, H = P === y.ME ? void 0 : P, {
analyticsLocations: W
  } = (0, d.ZP)([
...V,
r.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, f.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: i.id,
guildId: H,
channelId: M,
messageId: b,
roleId: D,
showGuildProfile: Y
  }), {
profileStatusEditEnabled: K
  } = (0, m.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: q,
activeInviteToCallCtaEnabled: J
  } = (0, E.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
pastActivityEnabled: Q
  } = (0, x.z)({
location: 'SimplifiedUserProfileModal'
  }), [X, $] = l.useState(!1), ee = (0, v.ZP)(i.id, Y ? H : void 0), ei = (0, v.ZP)(i.id, H), en = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(i.id));
  l.useEffect(() => {
Q && (0, c.JX)(i.id);
  }, [
i,
Q
  ]);
  let es = l.createRef(),
el = (0, a.Z)(es),
et = () => (null == ei ? void 0 : ei.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, s.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: O.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(void 0, void 0, i)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: i.id,
      showGuildProfile: !1,
      guildId: H,
      channelId: M,
      messageId: b,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: V
    });
  }
}) : (0, s.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: O.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(H, M, i)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: i.id,
      showGuildProfile: !0,
      guildId: H,
      channelId: M,
      messageId: b,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: V
    });
  }
});
  return (0, s.jsx)(d.Gt, {
value: W,
children: (0, s.jsx)(f.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: H,
  channelId: M,
  messageId: b,
  roleId: D,
  showGuildProfile: Y,
  children: (0, s.jsxs)(o.ModalRoot, {
    transitionState: w,
    className: U.root,
    hideShadow: !0,
    'aria-label': O.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(p.Z, {
        user: i,
        displayProfile: ee,
        profileType: L.y0.FULL_SIZE,
        ref: es,
        children: [
          (0, s.jsxs)(g.Z, {
            profileType: L.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(T.Z, {
                user: i,
                guildId: H,
                channelId: M,
                onClose: k
              }),
              (0, s.jsx)(j.Z, {
                profileType: L.y0.FULL_SIZE,
                user: i,
                friendToken: F
              }),
              (0, s.jsx)(N.Z, {
                user: i,
                guildId: H,
                viewProfileItem: et()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(h.Z, {
                user: i,
                displayProfile: ee,
                profileType: L.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, s.jsx)(S.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: i,
                    displayProfile: ee,
                    guildId: H,
                    channelId: M,
                    profileType: L.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(A.Z, {
                    user: i,
                    isCurrentUser: i.id === n.id,
                    guildId: H,
                    relationshipType: en,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: et(),
                    onClose: k
                  }),
                  (0, s.jsx)(Z.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: i,
                    guildId: H,
                    channelId: M,
                    profileType: L.y0.FULL_SIZE,
                    editEnabled: K,
                    hasEntered: w === o.ModalTransitionState.ENTERED,
                    isReplying: X,
                    onReply: e => {
                      $(e);
                    },
                    onClose: k
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)(R.Z, {
            user: i,
            currentUser: n,
            channelId: M,
            displayProfile: ee,
            initialSection: B,
            initialSubsection: G,
            friendToken: F,
            onClose: k
          })
        ]
      }),
      (null == ee ? void 0 : ee.profileEffectId) != null && (0, s.jsx)(u.Z, {
        profileEffectId: null == ee ? void 0 : ee.profileEffectId,
        isHovering: el
      })
    ]
  })
})
  });
}