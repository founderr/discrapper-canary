s.d(n, {
  Z: function() {
return b;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(442837),
  t = s(481060),
  r = s(727637),
  a = s(58540),
  d = s(100527),
  c = s(906732),
  u = s(54994),
  I = s(680295),
  _ = s(699516),
  f = s(5192),
  E = s(785717),
  m = s(221292),
  S = s(481046),
  Z = s(910128),
  v = s(318661),
  x = s(78675),
  h = s(113557),
  T = s(169979),
  p = s(502762),
  g = s(544989),
  N = s(481932),
  C = s(195387),
  j = s(272510),
  A = s(171368),
  O = s(900687),
  R = s(806926),
  L = s(228168),
  U = s(981631),
  M = s(689938),
  P = s(505451);

function b(e) {
  let {
user: n,
currentUser: s,
guildId: b,
channelId: y,
messageId: D,
roleId: F,
sessionId: B,
friendToken: G,
initialSection: w,
initialSubsection: V,
transitionState: k,
onClose: Y,
showGuildProfile: H = !0,
sourceAnalyticsLocations: W = []
  } = e, z = b === U.ME ? void 0 : b, {
analyticsLocations: K
  } = (0, c.ZP)([
...W,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), Q = (0, E.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: n.id,
sourceSessionId: B,
guildId: z,
channelId: y,
messageId: D,
roleId: F,
showGuildProfile: H
  }), {
profileStatusEditEnabled: q
  } = (0, S.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: J,
activeInviteToCallCtaEnabled: X
  } = (0, Z.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [$, ee] = l.useState(), en = e => {
ee(e);
  }, es = (0, v.ZP)(n.id, H ? z : void 0), ei = (0, v.ZP)(n.id, z), el = (0, o.e7)([_.Z], () => _.Z.getRelationshipType(n.id)), eo = l.useMemo(() => null != z ? {
[z]: [n.id]
  } : {}, [
z,
n.id
  ]);
  (0, a.$)(eo), (0, u.Z)(n);
  let et = l.createRef(),
er = (0, r.Z)(et),
ea = () => (null == ei ? void 0 : ei.guildId) == null ? null : (null == es ? void 0 : es.guildId) != null ? (0, i.jsx)(t.MenuItem, {
  id: 'view-main-profile',
  label: M.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(void 0, void 0, n)
  }),
  action: () => {
    Y(), (0, A.openUserProfileModal)({
      ...Q,
      showGuildProfile: !1,
      friendToken: G,
      sourceAnalyticsLocations: W
    }), (0, m.pQ)({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: K,
      ...Q
    });
  }
}) : (0, i.jsx)(t.MenuItem, {
  id: 'view-server-profile',
  label: M.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(z, y, n)
  }),
  action: () => {
    Y(), (0, A.openUserProfileModal)({
      ...Q,
      showGuildProfile: !0,
      friendToken: G,
      sourceAnalyticsLocations: W
    }), (0, m.pQ)({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: K,
      ...Q
    });
  }
});
  return (0, i.jsx)(c.Gt, {
value: K,
children: (0, i.jsx)(E.Mt, {
  value: Q,
  children: (0, i.jsxs)(t.ModalRoot, {
    transitionState: k,
    className: P.root,
    hideShadow: !0,
    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(p.Z, {
        user: n,
        displayProfile: es,
        profileType: L.y0.FULL_SIZE,
        ref: et,
        children: [
          (0, i.jsxs)(g.Z, {
            profileType: L.y0.FULL_SIZE,
            children: [
              (0, i.jsx)(C.Z, {
                user: n,
                guildId: z,
                channelId: y,
                onClose: Y
              }),
              (0, i.jsx)(N.Z, {
                profileType: L.y0.FULL_SIZE,
                user: n,
                friendToken: G
              }),
              (0, i.jsx)(j.Z, {
                user: n,
                guildId: z,
                viewProfileItem: ea()
              })
            ]
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(x.Z, {
                user: n,
                displayProfile: es,
                profileType: L.y0.FULL_SIZE,
                hasProfileEffect: (null == es ? void 0 : es.profileEffectId) != null
              }),
              null != $ && (0, i.jsx)('div', {
                className: P.backdrop
              }),
              (0, i.jsxs)('div', {
                className: P.headerInner,
                children: [
                  (0, i.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: n,
                    displayProfile: es,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    isReplySource: $ === L.N9.AVATAR || $ === L.N9.STATUS,
                    onReply: en,
                    showReplyPopout: $ === L.N9.AVATAR
                  }),
                  (0, i.jsx)(O.Z, {
                    user: n,
                    isCurrentUser: n.id === s.id,
                    guildId: z,
                    relationshipType: el,
                    persistentCallCtaEnabled: J,
                    activeInviteToCallCtaEnabled: X,
                    viewProfileItem: ea(),
                    onClose: Y
                  }),
                  (0, i.jsx)(T.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: n,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    editEnabled: q,
                    hasEntered: k === t.ModalTransitionState.ENTERED,
                    isReplySource: $ === L.N9.STATUS,
                    onReply: en,
                    showReplyPopout: $ === L.N9.STATUS,
                    onClose: Y
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(R.Z, {
            user: n,
            currentUser: s,
            channelId: y,
            displayProfile: es,
            initialSection: w,
            initialSubsection: V,
            friendToken: G,
            onClose: Y
          })
        ]
      }),
      (null == es ? void 0 : es.profileEffectId) != null && (0, i.jsx)(I.Z, {
        profileEffectId: null == es ? void 0 : es.profileEffectId,
        isHovering: er
      })
    ]
  })
})
  });
}