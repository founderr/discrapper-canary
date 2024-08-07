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
  m = i(221292),
  v = i(481046),
  S = i(910128),
  x = i(318661),
  Z = i(78675),
  p = i(113557),
  h = i(169979),
  T = i(502762),
  g = i(544989),
  N = i(481932),
  j = i(195387),
  C = i(272510),
  A = i(171368),
  R = i(900687),
  O = i(806926),
  L = i(228168),
  M = i(981631),
  U = i(689938),
  b = i(505451);

function P(e) {
  let {
user: s,
currentUser: i,
guildId: P,
channelId: y,
messageId: D,
roleId: F,
sessionId: B,
friendToken: G,
initialSection: w,
initialSubsection: k,
transitionState: V,
onClose: Y,
showGuildProfile: W = !0,
sourceAnalyticsLocations: H = []
  } = e, z = P === M.ME ? void 0 : P, {
analyticsLocations: K
  } = (0, c.ZP)([
...H,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), q = (0, E.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: B,
guildId: z,
channelId: y,
messageId: D,
roleId: F,
showGuildProfile: W
  }), {
profileStatusEditEnabled: Q
  } = (0, v.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: J,
activeInviteToCallCtaEnabled: X
  } = (0, S.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [$, ee] = l.useState(), es = e => {
ee(e);
  }, ei = (0, x.ZP)(s.id, W ? z : void 0), en = (0, x.ZP)(s.id, z), el = (0, t.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), et = l.useMemo(() => null != z ? {
[z]: [s.id]
  } : {}, [
z,
s.id
  ]);
  (0, r.$)(et), (0, u.Z)(s);
  let eo = l.createRef(),
ea = (0, a.Z)(eo),
er = () => (null == en ? void 0 : en.guildId) == null ? null : (null == ei ? void 0 : ei.guildId) != null ? (0, n.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: U.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    Y(), (0, A.openUserProfileModal)({
      ...q,
      showGuildProfile: !1,
      friendToken: G,
      sourceAnalyticsLocations: H
    }), (0, m.pQ)({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: K,
      ...q
    });
  }
}) : (0, n.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: U.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(z, y, s)
  }),
  action: () => {
    Y(), (0, A.openUserProfileModal)({
      ...q,
      showGuildProfile: !0,
      friendToken: G,
      sourceAnalyticsLocations: H
    }), (0, m.pQ)({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: K,
      ...q
    });
  }
});
  return (0, n.jsx)(c.Gt, {
value: K,
children: (0, n.jsx)(E.Mt, {
  value: q,
  children: (0, n.jsxs)(o.ModalRoot, {
    transitionState: V,
    className: b.root,
    hideShadow: !0,
    'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, n.jsxs)(T.Z, {
        user: s,
        displayProfile: ei,
        profileType: L.y0.FULL_SIZE,
        ref: eo,
        children: [
          (0, n.jsxs)(g.Z, {
            profileType: L.y0.FULL_SIZE,
            children: [
              (0, n.jsx)(j.Z, {
                user: s,
                guildId: z,
                channelId: y,
                onClose: Y
              }),
              (0, n.jsx)(N.Z, {
                profileType: L.y0.FULL_SIZE,
                user: s,
                friendToken: G
              }),
              (0, n.jsx)(C.Z, {
                user: s,
                guildId: z,
                viewProfileItem: er()
              })
            ]
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(Z.Z, {
                user: s,
                displayProfile: ei,
                profileType: L.y0.FULL_SIZE,
                hasProfileEffect: (null == ei ? void 0 : ei.profileEffectId) != null
              }),
              null != $ && (0, n.jsx)('div', {
                className: b.backdrop
              }),
              (0, n.jsxs)('div', {
                className: b.headerInner,
                children: [
                  (0, n.jsx)(p.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: ei,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    isReplySource: $ === L.N9.AVATAR || $ === L.N9.STATUS,
                    onReply: es,
                    showReplyPopout: $ === L.N9.AVATAR
                  }),
                  (0, n.jsx)(R.Z, {
                    user: s,
                    isCurrentUser: s.id === i.id,
                    guildId: z,
                    relationshipType: el,
                    persistentCallCtaEnabled: J,
                    activeInviteToCallCtaEnabled: X,
                    viewProfileItem: er(),
                    onClose: Y
                  }),
                  (0, n.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    editEnabled: Q,
                    hasEntered: V === o.ModalTransitionState.ENTERED,
                    isReplySource: $ === L.N9.STATUS,
                    onReply: es,
                    showReplyPopout: $ === L.N9.STATUS,
                    onClose: Y
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)(O.Z, {
            user: s,
            currentUser: i,
            channelId: y,
            displayProfile: ei,
            initialSection: w,
            initialSubsection: k,
            friendToken: G,
            onClose: Y
          })
        ]
      }),
      (null == ei ? void 0 : ei.profileEffectId) != null && (0, n.jsx)(I.Z, {
        profileEffectId: null == ei ? void 0 : ei.profileEffectId,
        isHovering: ea
      })
    ]
  })
})
  });
}