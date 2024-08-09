n.d(s, {
  Z: function() {
return P;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(481060),
  r = n(727637),
  a = n(58540),
  d = n(100527),
  c = n(906732),
  u = n(680295),
  _ = n(699516),
  I = n(5192),
  E = n(785717),
  f = n(221292),
  m = n(481046),
  S = n(910128),
  Z = n(318661),
  x = n(78675),
  v = n(113557),
  h = n(169979),
  T = n(502762),
  p = n(544989),
  g = n(481932),
  N = n(195387),
  C = n(272510),
  j = n(171368),
  A = n(900687),
  O = n(806926),
  R = n(228168),
  L = n(981631),
  U = n(689938),
  M = n(505451);

function P(e) {
  let {
user: s,
currentUser: n,
guildId: P,
channelId: b,
messageId: y,
roleId: D,
sessionId: B,
friendToken: F,
initialSection: G,
initialSubsection: w,
transitionState: k,
onClose: V,
showGuildProfile: Y = !0,
sourceAnalyticsLocations: H = []
  } = e, W = P === L.ME ? void 0 : P, {
analyticsLocations: z
  } = (0, c.ZP)([
...H,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), K = (0, E.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: B,
guildId: W,
channelId: b,
messageId: y,
roleId: D,
showGuildProfile: Y
  }), {
profileStatusEditEnabled: Q
  } = (0, m.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: q,
activeInviteToCallCtaEnabled: J
  } = (0, S.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [X, $] = l.useState(), ee = e => {
$(e);
  }, es = (0, Z.ZP)(s.id, Y ? W : void 0), en = (0, Z.ZP)(s.id, W), ei = (0, o.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), el = l.useMemo(() => null != W ? {
[W]: [s.id]
  } : {}, [
W,
s.id
  ]);
  (0, a.$)(el);
  let eo = l.createRef(),
et = (0, r.Z)(eo),
er = () => (null == en ? void 0 : en.guildId) == null ? null : (null == es ? void 0 : es.guildId) != null ? (0, i.jsx)(t.MenuItem, {
  id: 'view-main-profile',
  label: U.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    V(), (0, j.openUserProfileModal)({
      ...K,
      showGuildProfile: !1,
      friendToken: F,
      sourceAnalyticsLocations: H
    }), (0, f.pQ)({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: z,
      ...K
    });
  }
}) : (0, i.jsx)(t.MenuItem, {
  id: 'view-server-profile',
  label: U.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(W, b, s)
  }),
  action: () => {
    V(), (0, j.openUserProfileModal)({
      ...K,
      showGuildProfile: !0,
      friendToken: F,
      sourceAnalyticsLocations: H
    }), (0, f.pQ)({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: z,
      ...K
    });
  }
});
  return (0, i.jsx)(c.Gt, {
value: z,
children: (0, i.jsx)(E.Mt, {
  value: K,
  children: (0, i.jsxs)(t.ModalRoot, {
    transitionState: k,
    className: M.root,
    hideShadow: !0,
    'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(T.Z, {
        user: s,
        displayProfile: es,
        profileType: R.y0.FULL_SIZE,
        ref: eo,
        children: [
          (0, i.jsxs)(p.Z, {
            profileType: R.y0.FULL_SIZE,
            children: [
              (0, i.jsx)(N.Z, {
                user: s,
                guildId: W,
                channelId: b,
                onClose: V
              }),
              (0, i.jsx)(g.Z, {
                profileType: R.y0.FULL_SIZE,
                user: s,
                friendToken: F
              }),
              (0, i.jsx)(C.Z, {
                user: s,
                guildId: W,
                viewProfileItem: er()
              })
            ]
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(x.Z, {
                user: s,
                displayProfile: es,
                profileType: R.y0.FULL_SIZE,
                hasProfileEffect: (null == es ? void 0 : es.profileEffectId) != null
              }),
              null != X && (0, i.jsx)('div', {
                className: M.backdrop
              }),
              (0, i.jsxs)('div', {
                className: M.headerInner,
                children: [
                  (0, i.jsx)(v.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: es,
                    guildId: W,
                    channelId: b,
                    profileType: R.y0.FULL_SIZE,
                    isReplySource: X === R.N9.AVATAR || X === R.N9.STATUS,
                    onReply: ee,
                    showReplyPopout: X === R.N9.AVATAR
                  }),
                  (0, i.jsx)(A.Z, {
                    user: s,
                    isCurrentUser: s.id === n.id,
                    guildId: W,
                    relationshipType: ei,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: er(),
                    onClose: V
                  }),
                  (0, i.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: W,
                    channelId: b,
                    profileType: R.y0.FULL_SIZE,
                    editEnabled: Q,
                    hasEntered: k === t.ModalTransitionState.ENTERED,
                    isReplySource: X === R.N9.STATUS,
                    onReply: ee,
                    showReplyPopout: X === R.N9.STATUS,
                    onClose: V
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(O.Z, {
            user: s,
            currentUser: n,
            channelId: b,
            displayProfile: es,
            initialSection: G,
            initialSubsection: w,
            friendToken: F,
            onClose: V
          })
        ]
      }),
      (null == es ? void 0 : es.profileEffectId) != null && (0, i.jsx)(u.Z, {
        profileEffectId: null == es ? void 0 : es.profileEffectId,
        isHovering: et
      })
    ]
  })
})
  });
}