i.d(n, {
  Z: function() {
return b;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  o = i(442837),
  t = i(481060),
  r = i(727637),
  a = i(100527),
  d = i(906732),
  c = i(564990),
  u = i(680295),
  I = i(699516),
  _ = i(5192),
  f = i(785717),
  E = i(481046),
  m = i(910128),
  S = i(718107),
  Z = i(27144),
  v = i(318661),
  x = i(78675),
  h = i(899007),
  p = i(438163),
  T = i(502762),
  g = i(544989),
  N = i(481932),
  C = i(195387),
  j = i(272510),
  A = i(171368),
  O = i(900687),
  L = i(806926),
  U = i(228168),
  M = i(981631),
  R = i(689938),
  P = i(392214);

function b(e) {
  let {
user: n,
currentUser: i,
guildId: b,
channelId: y,
messageId: D,
roleId: B,
friendToken: F,
initialSection: G,
initialSubsection: w,
transitionState: k,
onClose: V,
showGuildProfile: Y = !0,
sourceAnalyticsLocations: H = []
  } = e, W = b === M.ME ? void 0 : b, {
analyticsLocations: z
  } = (0, d.ZP)([
...H,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), K = (0, f.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: n.id,
guildId: W,
channelId: y,
messageId: D,
roleId: B,
showGuildProfile: Y
  }), {
profileStatusEditEnabled: q
  } = (0, E.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
statusReactReplyEnabled: J
  } = (0, S.t)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: Q,
activeInviteToCallCtaEnabled: X
  } = (0, m.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
pastActivityEnabled: $
  } = (0, Z.z)({
location: 'SimplifiedUserProfileModal'
  }), ee = (0, v.ZP)(n.id, Y ? W : void 0), en = (0, v.ZP)(n.id, W), ei = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id));
  l.useEffect(() => {
$ && (0, c.JX)(n.id);
  }, [
n,
$
  ]);
  let es = l.createRef(),
el = (0, r.Z)(es),
eo = () => (null == en ? void 0 : en.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, s.jsx)(t.MenuItem, {
  id: 'view-main-profile',
  label: R.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(void 0, void 0, n)
  }),
  action: () => {
    K({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: z
    }), V(), (0, A.openUserProfileModal)({
      userId: n.id,
      showGuildProfile: !1,
      guildId: W,
      channelId: y,
      messageId: D,
      roleId: B,
      friendToken: F,
      sourceAnalyticsLocations: H
    });
  }
}) : (0, s.jsx)(t.MenuItem, {
  id: 'view-server-profile',
  label: R.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(W, y, n)
  }),
  action: () => {
    K({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: z
    }), V(), (0, A.openUserProfileModal)({
      userId: n.id,
      showGuildProfile: !0,
      guildId: W,
      channelId: y,
      messageId: D,
      roleId: B,
      friendToken: F,
      sourceAnalyticsLocations: H
    });
  }
});
  return (0, s.jsx)(d.Gt, {
value: z,
children: (0, s.jsx)(f.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: W,
  channelId: y,
  messageId: D,
  roleId: B,
  showGuildProfile: Y,
  children: (0, s.jsxs)(t.ModalRoot, {
    transitionState: k,
    className: P.root,
    hideShadow: !0,
    'aria-label': R.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(T.Z, {
        user: n,
        displayProfile: ee,
        profileType: U.y0.FULL_SIZE,
        ref: es,
        children: [
          (0, s.jsxs)(g.Z, {
            profileType: U.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(C.Z, {
                user: n,
                guildId: W,
                channelId: y,
                onClose: V
              }),
              (0, s.jsx)(N.Z, {
                profileType: U.y0.FULL_SIZE,
                user: n,
                friendToken: F
              }),
              (0, s.jsx)(j.Z, {
                user: n,
                guildId: W,
                viewProfileItem: eo()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(x.Z, {
                user: n,
                displayProfile: ee,
                profileType: U.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: P.headerInner,
                children: [
                  (0, s.jsx)(h.Z, {
                    user: n,
                    displayProfile: ee,
                    guildId: W,
                    channelId: y,
                    profileType: U.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(O.Z, {
                    user: n,
                    isCurrentUser: n.id === i.id,
                    guildId: W,
                    relationshipType: ei,
                    persistentCallCtaEnabled: Q,
                    activeInviteToCallCtaEnabled: X,
                    viewProfileItem: eo(),
                    onClose: V
                  }),
                  (0, s.jsx)(p.Z, {
                    user: n,
                    profileType: U.y0.FULL_SIZE,
                    editEnabled: q,
                    reactReplyEnabled: J,
                    hasEntered: k === t.ModalTransitionState.ENTERED,
                    onClose: V
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)(L.Z, {
            user: n,
            currentUser: i,
            channelId: y,
            displayProfile: ee,
            initialSection: G,
            initialSubsection: w,
            friendToken: F,
            onClose: V
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