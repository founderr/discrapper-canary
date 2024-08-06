i.d(s, {
  Z: function() {
return b;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(727637),
  r = i(58540),
  d = i(100527),
  c = i(906732),
  u = i(54994),
  I = i(680295),
  _ = i(699516),
  f = i(5192),
  m = i(785717),
  E = i(481046),
  S = i(910128),
  x = i(318661),
  v = i(78675),
  Z = i(113557),
  h = i(169979),
  p = i(502762),
  T = i(544989),
  g = i(481932),
  N = i(195387),
  j = i(272510),
  A = i(171368),
  C = i(900687),
  R = i(806926),
  O = i(228168),
  M = i(981631),
  U = i(689938),
  L = i(505451);

function b(e) {
  let {
user: s,
currentUser: i,
guildId: b,
channelId: P,
messageId: y,
roleId: D,
friendToken: F,
initialSection: B,
initialSubsection: G,
transitionState: w,
onClose: k,
showGuildProfile: V = !0,
sourceAnalyticsLocations: Y = []
  } = e, H = b === M.ME ? void 0 : b, {
analyticsLocations: W
  } = (0, c.ZP)([
...Y,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, m.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
guildId: H,
channelId: P,
messageId: y,
roleId: D,
showGuildProfile: V
  }), {
profileStatusEditEnabled: K
  } = (0, E.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: q,
activeInviteToCallCtaEnabled: J
  } = (0, S.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [Q, X] = l.useState(), $ = e => {
X(e);
  }, ee = (0, x.ZP)(s.id, V ? H : void 0), es = (0, x.ZP)(s.id, H), ei = (0, t.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), en = l.useMemo(() => null != H ? {
[H]: [s.id]
  } : {}, [
H,
s.id
  ]);
  (0, r.$)(en), (0, u.Z)(s);
  let el = l.createRef(),
et = (0, a.Z)(el),
eo = () => (null == es ? void 0 : es.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, n.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: U.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: W
    }), k(), (0, A.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !1,
      guildId: H,
      channelId: P,
      messageId: y,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: Y
    });
  }
}) : (0, n.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: U.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(H, P, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: W
    }), k(), (0, A.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !0,
      guildId: H,
      channelId: P,
      messageId: y,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: Y
    });
  }
});
  return (0, n.jsx)(c.Gt, {
value: W,
children: (0, n.jsx)(m.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: H,
  channelId: P,
  messageId: y,
  roleId: D,
  showGuildProfile: V,
  children: (0, n.jsxs)(o.ModalRoot, {
    transitionState: w,
    className: L.root,
    hideShadow: !0,
    'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, n.jsxs)(p.Z, {
        user: s,
        displayProfile: ee,
        profileType: O.y0.FULL_SIZE,
        ref: el,
        children: [
          (0, n.jsxs)(T.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, n.jsx)(N.Z, {
                user: s,
                guildId: H,
                channelId: P,
                onClose: k
              }),
              (0, n.jsx)(g.Z, {
                profileType: O.y0.FULL_SIZE,
                user: s,
                friendToken: F
              }),
              (0, n.jsx)(j.Z, {
                user: s,
                guildId: H,
                viewProfileItem: eo()
              })
            ]
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(v.Z, {
                user: s,
                displayProfile: ee,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              null != Q && (0, n.jsx)('div', {
                className: L.backdrop
              }),
              (0, n.jsxs)('div', {
                className: L.headerInner,
                children: [
                  (0, n.jsx)(Z.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: ee,
                    guildId: H,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE,
                    isReplySource: Q === O.N9.AVATAR || Q === O.N9.STATUS,
                    onReply: $,
                    showReplyPopout: Q === O.N9.AVATAR
                  }),
                  (0, n.jsx)(C.Z, {
                    user: s,
                    isCurrentUser: s.id === i.id,
                    guildId: H,
                    relationshipType: ei,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: eo(),
                    onClose: k
                  }),
                  (0, n.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: H,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE,
                    editEnabled: K,
                    hasEntered: w === o.ModalTransitionState.ENTERED,
                    isReplySource: Q === O.N9.STATUS,
                    onReply: $,
                    showReplyPopout: Q === O.N9.STATUS,
                    onClose: k
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)(R.Z, {
            user: s,
            currentUser: i,
            channelId: P,
            displayProfile: ee,
            initialSection: B,
            initialSubsection: G,
            friendToken: F,
            onClose: k
          })
        ]
      }),
      (null == ee ? void 0 : ee.profileEffectId) != null && (0, n.jsx)(I.Z, {
        profileEffectId: null == ee ? void 0 : ee.profileEffectId,
        isHovering: et
      })
    ]
  })
})
  });
}