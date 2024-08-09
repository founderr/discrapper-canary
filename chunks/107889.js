n.d(s, {
  Z: function() {
return b;
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
  u = n(54994),
  _ = n(680295),
  I = n(699516),
  E = n(5192),
  f = n(785717),
  m = n(221292),
  S = n(481046),
  Z = n(910128),
  x = n(318661),
  v = n(78675),
  h = n(113557),
  T = n(169979),
  p = n(502762),
  g = n(544989),
  N = n(481932),
  C = n(195387),
  j = n(272510),
  A = n(171368),
  O = n(900687),
  R = n(806926),
  L = n(228168),
  U = n(981631),
  M = n(689938),
  P = n(505451);

function b(e) {
  let {
user: s,
currentUser: n,
guildId: b,
channelId: y,
messageId: D,
roleId: B,
sessionId: F,
friendToken: G,
initialSection: w,
initialSubsection: k,
transitionState: V,
onClose: Y,
showGuildProfile: H = !0,
sourceAnalyticsLocations: W = []
  } = e, z = b === U.ME ? void 0 : b, {
analyticsLocations: K
  } = (0, c.ZP)([
...W,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), Q = (0, f.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: F,
guildId: z,
channelId: y,
messageId: D,
roleId: B,
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
  }), [$, ee] = l.useState(), es = e => {
ee(e);
  }, en = (0, x.ZP)(s.id, H ? z : void 0), ei = (0, x.ZP)(s.id, z), el = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(s.id)), eo = l.useMemo(() => null != z ? {
[z]: [s.id]
  } : {}, [
z,
s.id
  ]);
  (0, a.$)(eo), (0, u.Z)(s);
  let et = l.createRef(),
er = (0, r.Z)(et),
ea = () => (null == ei ? void 0 : ei.guildId) == null ? null : (null == en ? void 0 : en.guildId) != null ? (0, i.jsx)(t.MenuItem, {
  id: 'view-main-profile',
  label: M.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: E.ZP.getName(void 0, void 0, s)
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
    displayName: E.ZP.getName(z, y, s)
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
children: (0, i.jsx)(f.Mt, {
  value: Q,
  children: (0, i.jsxs)(t.ModalRoot, {
    transitionState: V,
    className: P.root,
    hideShadow: !0,
    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(p.Z, {
        user: s,
        displayProfile: en,
        profileType: L.y0.FULL_SIZE,
        ref: et,
        children: [
          (0, i.jsxs)(g.Z, {
            profileType: L.y0.FULL_SIZE,
            children: [
              (0, i.jsx)(C.Z, {
                user: s,
                guildId: z,
                channelId: y,
                onClose: Y
              }),
              (0, i.jsx)(N.Z, {
                profileType: L.y0.FULL_SIZE,
                user: s,
                friendToken: G
              }),
              (0, i.jsx)(j.Z, {
                user: s,
                guildId: z,
                viewProfileItem: ea()
              })
            ]
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(v.Z, {
                user: s,
                displayProfile: en,
                profileType: L.y0.FULL_SIZE,
                hasProfileEffect: (null == en ? void 0 : en.profileEffectId) != null
              }),
              null != $ && (0, i.jsx)('div', {
                className: P.backdrop
              }),
              (0, i.jsxs)('div', {
                className: P.headerInner,
                children: [
                  (0, i.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: en,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    isReplySource: $ === L.N9.AVATAR || $ === L.N9.STATUS,
                    onReply: es,
                    showReplyPopout: $ === L.N9.AVATAR
                  }),
                  (0, i.jsx)(O.Z, {
                    user: s,
                    isCurrentUser: s.id === n.id,
                    guildId: z,
                    relationshipType: el,
                    persistentCallCtaEnabled: J,
                    activeInviteToCallCtaEnabled: X,
                    viewProfileItem: ea(),
                    onClose: Y
                  }),
                  (0, i.jsx)(T.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    editEnabled: q,
                    hasEntered: V === t.ModalTransitionState.ENTERED,
                    isReplySource: $ === L.N9.STATUS,
                    onReply: es,
                    showReplyPopout: $ === L.N9.STATUS,
                    onClose: Y
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(R.Z, {
            user: s,
            currentUser: n,
            channelId: y,
            displayProfile: en,
            initialSection: w,
            initialSubsection: k,
            friendToken: G,
            onClose: Y
          })
        ]
      }),
      (null == en ? void 0 : en.profileEffectId) != null && (0, i.jsx)(_.Z, {
        profileEffectId: null == en ? void 0 : en.profileEffectId,
        isHovering: er
      })
    ]
  })
})
  });
}