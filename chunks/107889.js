i.d(s, {
  Z: function() {
return y;
  }
}), i(47120);
var n = i(735250),
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
  S = i(113557),
  h = i(169979),
  p = i(502762),
  j = i(544989),
  T = i(481932),
  g = i(195387),
  N = i(272510),
  C = i(171368),
  A = i(900687),
  L = i(806926),
  O = i(228168),
  R = i(981631),
  U = i(689938),
  M = i(392214);

function y(e) {
  let {
user: s,
currentUser: i,
guildId: y,
channelId: P,
messageId: b,
roleId: D,
friendToken: F,
initialSection: B,
initialSubsection: G,
transitionState: w,
onClose: k,
showGuildProfile: Y = !0,
sourceAnalyticsLocations: V = []
  } = e, H = y === R.ME ? void 0 : y, {
analyticsLocations: W
  } = (0, d.ZP)([
...V,
r.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, f.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
guildId: H,
channelId: P,
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
  }), X = (0, v.ZP)(s.id, Y ? H : void 0), $ = (0, v.ZP)(s.id, H), ee = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(s.id));
  l.useEffect(() => {
Q && (0, c.JX)(s.id);
  }, [
s,
Q
  ]);
  let es = l.createRef(),
ei = (0, a.Z)(es),
en = () => (null == $ ? void 0 : $.guildId) == null ? null : (null == X ? void 0 : X.guildId) != null ? (0, n.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: U.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !1,
      guildId: H,
      channelId: P,
      messageId: b,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: V
    });
  }
}) : (0, n.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: U.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(H, P, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !0,
      guildId: H,
      channelId: P,
      messageId: b,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: V
    });
  }
});
  return (0, n.jsx)(d.Gt, {
value: W,
children: (0, n.jsx)(f.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: H,
  channelId: P,
  messageId: b,
  roleId: D,
  showGuildProfile: Y,
  children: (0, n.jsxs)(o.ModalRoot, {
    transitionState: w,
    className: M.root,
    hideShadow: !0,
    'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, n.jsxs)(p.Z, {
        user: s,
        displayProfile: X,
        profileType: O.y0.FULL_SIZE,
        ref: es,
        children: [
          (0, n.jsxs)(j.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, n.jsx)(g.Z, {
                user: s,
                guildId: H,
                channelId: P,
                onClose: k
              }),
              (0, n.jsx)(T.Z, {
                profileType: O.y0.FULL_SIZE,
                user: s,
                friendToken: F
              }),
              (0, n.jsx)(N.Z, {
                user: s,
                guildId: H,
                viewProfileItem: en()
              })
            ]
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(Z.Z, {
                user: s,
                displayProfile: X,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == X ? void 0 : X.profileEffectId) != null
              }),
              (0, n.jsxs)('div', {
                className: M.headerInner,
                children: [
                  (0, n.jsx)(S.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: X,
                    guildId: H,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE
                  }),
                  (0, n.jsx)(A.Z, {
                    user: s,
                    isCurrentUser: s.id === i.id,
                    guildId: H,
                    relationshipType: ee,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: en(),
                    onClose: k
                  }),
                  (0, n.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    profileType: O.y0.FULL_SIZE,
                    editEnabled: K,
                    hasEntered: w === o.ModalTransitionState.ENTERED,
                    onClose: k
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)(L.Z, {
            user: s,
            currentUser: i,
            channelId: P,
            displayProfile: X,
            initialSection: B,
            initialSubsection: G,
            friendToken: F,
            onClose: k
          })
        ]
      }),
      (null == X ? void 0 : X.profileEffectId) != null && (0, n.jsx)(u.Z, {
        profileEffectId: null == X ? void 0 : X.profileEffectId,
        isHovering: ei
      })
    ]
  })
})
  });
}