i.d(n, {
  Z: function() {
return M;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(727637),
  r = i(100527),
  d = i(906732),
  c = i(564990),
  u = i(680295),
  I = i(699516),
  _ = i(5192),
  f = i(785717),
  m = i(481046),
  E = i(910128),
  x = i(27144),
  v = i(318661),
  Z = i(78675),
  h = i(113557),
  S = i(169979),
  p = i(502762),
  g = i(544989),
  j = i(481932),
  T = i(195387),
  N = i(272510),
  C = i(171368),
  A = i(900687),
  y = i(806926),
  R = i(228168),
  O = i(981631),
  L = i(689938),
  U = i(505451);

function M(e) {
  let {
user: n,
currentUser: i,
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
userId: n.id,
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
  }), [X, $] = l.useState(!1), ee = (0, v.ZP)(n.id, V ? H : void 0), en = (0, v.ZP)(n.id, H), ei = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(n.id));
  l.useEffect(() => {
Q && (0, c.JX)(n.id);
  }, [
n,
Q
  ]);
  let es = l.createRef(),
el = (0, a.Z)(es),
et = () => (null == en ? void 0 : en.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, s.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: L.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: L.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(void 0, void 0, n)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: n.id,
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
    displayName: _.ZP.getName(H, b, n)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: n.id,
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
  userId: n.id,
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
        user: n,
        displayProfile: ee,
        profileType: R.y0.FULL_SIZE,
        ref: es,
        children: [
          (0, s.jsxs)(g.Z, {
            profileType: R.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(T.Z, {
                user: n,
                guildId: H,
                channelId: b,
                onClose: k
              }),
              (0, s.jsx)(j.Z, {
                profileType: R.y0.FULL_SIZE,
                user: n,
                friendToken: F
              }),
              (0, s.jsx)(N.Z, {
                user: n,
                guildId: H,
                viewProfileItem: et()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(Z.Z, {
                user: n,
                displayProfile: ee,
                profileType: R.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, s.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: n,
                    displayProfile: ee,
                    guildId: H,
                    channelId: b,
                    profileType: R.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(A.Z, {
                    user: n,
                    isCurrentUser: n.id === i.id,
                    guildId: H,
                    relationshipType: ei,
                    persistentCallCtaEnabled: J,
                    activeInviteToCallCtaEnabled: q,
                    viewProfileItem: et(),
                    onClose: k
                  }),
                  (0, s.jsx)(S.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: n,
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
            user: n,
            currentUser: i,
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