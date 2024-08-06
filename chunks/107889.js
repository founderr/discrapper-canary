i.d(s, {
  Z: function() {
return P;
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
  E = i(785717),
  m = i(481046),
  x = i(910128),
  v = i(318661),
  S = i(78675),
  Z = i(113557),
  h = i(169979),
  p = i(502762),
  T = i(544989),
  g = i(481932),
  N = i(195387),
  j = i(272510),
  C = i(171368),
  A = i(900687),
  R = i(806926),
  O = i(228168),
  L = i(981631),
  M = i(689938),
  U = i(505451);

function P(e) {
  let {
user: s,
currentUser: i,
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
  } = e, W = P === L.ME ? void 0 : P, {
analyticsLocations: H
  } = (0, c.ZP)([
...Y,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, E.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
guildId: W,
channelId: b,
messageId: y,
roleId: D,
showGuildProfile: V
  }), {
profileStatusEditEnabled: K
  } = (0, m.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: q,
activeInviteToCallCtaEnabled: J
  } = (0, x.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [Q, X] = l.useState(), $ = e => {
X(e);
  }, ee = (0, v.ZP)(s.id, V ? W : void 0), es = (0, v.ZP)(s.id, W), ei = (0, t.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), en = l.useMemo(() => null != W ? {
[W]: [s.id]
  } : {}, [
W,
s.id
  ]);
  (0, r.$)(en), (0, u.Z)(s);
  let el = l.createRef(),
et = (0, a.Z)(el),
eo = () => (null == es ? void 0 : es.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, n.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: M.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: H
    }), k(), (0, C.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !1,
      guildId: W,
      channelId: b,
      messageId: y,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: Y
    });
  }
}) : (0, n.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: M.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(W, b, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: H
    }), k(), (0, C.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !0,
      guildId: W,
      channelId: b,
      messageId: y,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: Y
    });
  }
});
  return (0, n.jsx)(c.Gt, {
value: H,
children: (0, n.jsx)(E.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: W,
  channelId: b,
  messageId: y,
  roleId: D,
  showGuildProfile: V,
  children: (0, n.jsxs)(o.ModalRoot, {
    transitionState: w,
    className: U.root,
    hideShadow: !0,
    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
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
                guildId: W,
                channelId: b,
                onClose: k
              }),
              (0, n.jsx)(g.Z, {
                profileType: O.y0.FULL_SIZE,
                user: s,
                friendToken: F
              }),
              (0, n.jsx)(j.Z, {
                user: s,
                guildId: W,
                viewProfileItem: eo()
              })
            ]
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(S.Z, {
                user: s,
                displayProfile: ee,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              null != Q && (0, n.jsx)('div', {
                className: U.backdrop
              }),
              (0, n.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, n.jsx)(Z.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: ee,
                    guildId: W,
                    channelId: b,
                    profileType: O.y0.FULL_SIZE,
                    isReplySource: Q === O.N9.AVATAR || Q === O.N9.STATUS,
                    onReply: $,
                    showReplyPopout: Q === O.N9.AVATAR
                  }),
                  (0, n.jsx)(A.Z, {
                    user: s,
                    isCurrentUser: s.id === i.id,
                    guildId: W,
                    relationshipType: ei,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: eo(),
                    onClose: k
                  }),
                  (0, n.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: W,
                    channelId: b,
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
            channelId: b,
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