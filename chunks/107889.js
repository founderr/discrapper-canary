n.d(s, {
  Z: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  r = n(727637),
  a = n(58540),
  d = n(100527),
  c = n(906732),
  u = n(680295),
  _ = n(699516),
  I = n(5192),
  f = n(785717),
  E = n(221292),
  m = n(481046),
  x = n(910128),
  S = n(318661),
  v = n(78675),
  Z = n(113557),
  p = n(169979),
  h = n(502762),
  T = n(544989),
  g = n(481932),
  N = n(195387),
  j = n(272510),
  C = n(171368),
  A = n(900687),
  R = n(806926),
  O = n(228168),
  L = n(981631),
  M = n(689938),
  U = n(392214);

function b(e) {
  let {
user: s,
currentUser: n,
guildId: b,
channelId: P,
messageId: y,
roleId: D,
sessionId: F,
friendToken: B,
initialSection: G,
initialSubsection: w,
transitionState: k,
onClose: V,
showGuildProfile: Y = !0,
sourceAnalyticsLocations: H = []
  } = e, W = b === L.ME ? void 0 : b, {
analyticsLocations: z
  } = (0, c.ZP)([
...H,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), K = (0, f.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: F,
guildId: W,
channelId: P,
messageId: y,
roleId: D,
showGuildProfile: Y
  }), {
profileStatusEditEnabled: q
  } = (0, m.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: Q,
activeInviteToCallCtaEnabled: J
  } = (0, x.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [X, $] = l.useState(), [ee, es] = l.useState(), en = e => {
$(e.interactionType), es(e.interactionSourceType);
  }, ei = (0, S.ZP)(s.id, Y ? W : void 0), el = (0, S.ZP)(s.id, W), et = (0, t.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), eo = l.useMemo(() => null != W ? {
[W]: [s.id]
  } : {}, [
W,
s.id
  ]);
  (0, a.$)(eo);
  let er = l.createRef(),
ea = (0, r.Z)(er),
ed = () => (null == el ? void 0 : el.guildId) == null ? null : (null == ei ? void 0 : ei.guildId) != null ? (0, i.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: M.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    V(), (0, C.openUserProfileModal)({
      ...K,
      showGuildProfile: !1,
      friendToken: B,
      sourceAnalyticsLocations: H
    }), (0, E.pQ)({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: z,
      ...K
    });
  }
}) : (0, i.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: M.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(W, P, s)
  }),
  action: () => {
    V(), (0, C.openUserProfileModal)({
      ...K,
      showGuildProfile: !0,
      friendToken: B,
      sourceAnalyticsLocations: H
    }), (0, E.pQ)({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: z,
      ...K
    });
  }
});
  return (0, i.jsx)(c.Gt, {
value: z,
children: (0, i.jsx)(f.Mt, {
  value: K,
  children: (0, i.jsxs)(o.ModalRoot, {
    transitionState: k,
    className: U.root,
    hideShadow: !0,
    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(h.Z, {
        user: s,
        displayProfile: ei,
        profileType: O.y0.FULL_SIZE,
        ref: er,
        children: [
          (0, i.jsxs)(T.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, i.jsx)(N.Z, {
                user: s,
                guildId: W,
                channelId: P,
                onClose: V
              }),
              (0, i.jsx)(g.Z, {
                profileType: O.y0.FULL_SIZE,
                user: s,
                friendToken: B
              }),
              (0, i.jsx)(j.Z, {
                user: s,
                guildId: W,
                viewProfileItem: ed()
              })
            ]
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(v.Z, {
                user: s,
                displayProfile: ei,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == ei ? void 0 : ei.profileEffectId) != null
              }),
              null != X && (0, i.jsx)('div', {
                className: U.backdrop
              }),
              (0, i.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, i.jsx)(Z.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: ei,
                    guildId: W,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE,
                    isInteractionSource: ee === O.n_.AVATAR || ee === O.n_.STATUS,
                    onInteraction: en,
                    showReplyPopout: X === O.P.REPLY && ee === O.n_.AVATAR
                  }),
                  (0, i.jsx)(A.Z, {
                    user: s,
                    isCurrentUser: s.id === n.id,
                    guildId: W,
                    relationshipType: et,
                    persistentCallCtaEnabled: Q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: ed(),
                    onClose: V
                  }),
                  (0, i.jsx)(p.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: ei,
                    guildId: W,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE,
                    editEnabled: q,
                    hasEntered: k === o.ModalTransitionState.ENTERED,
                    isInteractionSource: ee === O.n_.STATUS,
                    onInteraction: en,
                    showReplyPopout: X === O.P.REPLY && ee === O.n_.STATUS,
                    onClose: V
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(R.Z, {
            user: s,
            currentUser: n,
            channelId: P,
            displayProfile: ei,
            initialSection: G,
            initialSubsection: w,
            friendToken: B,
            onClose: V
          })
        ]
      }),
      (null == ei ? void 0 : ei.profileEffectId) != null && (0, i.jsx)(u.Z, {
        profileEffectId: null == ei ? void 0 : ei.profileEffectId,
        isHovering: ea
      })
    ]
  })
})
  });
}