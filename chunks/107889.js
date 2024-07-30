n.d(i, {
  Z: function() {
return M;
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
  Z = n(78675),
  h = n(113557),
  S = n(169979),
  p = n(502762),
  g = n(544989),
  j = n(481932),
  T = n(195387),
  N = n(272510),
  C = n(171368),
  A = n(900687),
  y = n(806926),
  R = n(228168),
  O = n(981631),
  L = n(689938),
  U = n(505451);

function M(e) {
  let {
user: i,
currentUser: n,
guildId: M,
channelId: b,
messageId: P,
roleId: D,
friendToken: F,
initialSection: B,
initialSubsection: G,
transitionState: w,
onClose: k,
showGuildProfile: V = !0,
sourceAnalyticsLocations: Y = []
  } = e, H = M === O.ME ? void 0 : M, {
analyticsLocations: W
  } = (0, d.ZP)([
...Y,
r.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, f.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: i.id,
guildId: H,
channelId: b,
messageId: P,
roleId: D,
showGuildProfile: V
  }), {
profileStatusEditEnabled: K
  } = (0, m.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: J,
activeInviteToCallCtaEnabled: q
  } = (0, E.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
pastActivityEnabled: Q
  } = (0, x.z)({
location: 'SimplifiedUserProfileModal'
  }), [X, $] = l.useState(!1), ee = (0, v.ZP)(i.id, V ? H : void 0), ei = (0, v.ZP)(i.id, H), en = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(i.id));
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
  label: L.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: L.Z.Messages.AKA_DISPLAY_NAME.format({
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
      channelId: b,
      messageId: P,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: Y
    });
  }
}) : (0, s.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: L.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: L.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(H, b, i)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: i.id,
      showGuildProfile: !0,
      guildId: H,
      channelId: b,
      messageId: P,
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
  messageId: P,
  roleId: D,
  showGuildProfile: V,
  children: (0, s.jsxs)(o.ModalRoot, {
    transitionState: w,
    className: U.root,
    hideShadow: !0,
    'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(p.Z, {
        user: i,
        displayProfile: ee,
        profileType: R.y0.FULL_SIZE,
        ref: es,
        children: [
          (0, s.jsxs)(g.Z, {
            profileType: R.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(T.Z, {
                user: i,
                guildId: H,
                channelId: b,
                onClose: k
              }),
              (0, s.jsx)(j.Z, {
                profileType: R.y0.FULL_SIZE,
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
              (0, s.jsx)(Z.Z, {
                user: i,
                displayProfile: ee,
                profileType: R.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, s.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
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
                    persistentCallCtaEnabled: J,
                    activeInviteToCallCtaEnabled: q,
                    viewProfileItem: et(),
                    onClose: k
                  }),
                  (0, s.jsx)(S.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: i,
                    guildId: H,
                    channelId: b,
                    profileType: R.y0.FULL_SIZE,
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
          (0, s.jsx)(y.Z, {
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
      (null == ee ? void 0 : ee.profileEffectId) != null && (0, s.jsx)(u.Z, {
        profileEffectId: null == ee ? void 0 : ee.profileEffectId,
        isHovering: el
      })
    ]
  })
})
  });
}