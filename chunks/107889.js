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
  u = i(564990),
  I = i(680295),
  f = i(699516),
  _ = i(5192),
  m = i(785717),
  E = i(481046),
  v = i(910128),
  x = i(27144),
  S = i(318661),
  Z = i(78675),
  h = i(113557),
  p = i(169979),
  g = i(502762),
  T = i(544989),
  N = i(481932),
  j = i(195387),
  C = i(272510),
  A = i(171368),
  M = i(900687),
  R = i(806926),
  U = i(228168),
  L = i(981631),
  O = i(689938),
  y = i(505451);

function b(e) {
  let {
user: s,
currentUser: i,
guildId: b,
channelId: P,
messageId: D,
roleId: F,
friendToken: B,
initialSection: G,
initialSubsection: w,
transitionState: k,
onClose: Y,
showGuildProfile: V = !0,
sourceAnalyticsLocations: H = []
  } = e, W = b === L.ME ? void 0 : b, {
analyticsLocations: z
  } = (0, c.ZP)([
...H,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), K = (0, m.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
guildId: W,
channelId: P,
messageId: D,
roleId: F,
showGuildProfile: V
  }), {
profileStatusEditEnabled: q
  } = (0, E.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: J,
activeInviteToCallCtaEnabled: Q
  } = (0, v.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
pastActivityEnabled: X
  } = (0, x.z)({
location: 'SimplifiedUserProfileModal'
  }), [$, ee] = l.useState(!1), es = (0, S.ZP)(s.id, V ? W : void 0), ei = (0, S.ZP)(s.id, W), en = (0, t.e7)([f.Z], () => f.Z.getRelationshipType(s.id)), el = l.useMemo(() => null != W ? {
[W]: [s.id]
  } : {}, [
W,
s.id
  ]);
  (0, r.$)(el), l.useEffect(() => {
X && (0, u.JX)(s.id);
  }, [
s,
X
  ]);
  let et = l.createRef(),
eo = (0, a.Z)(et),
ea = () => (null == ei ? void 0 : ei.guildId) == null ? null : (null == es ? void 0 : es.guildId) != null ? (0, n.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: O.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    K({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: z
    }), Y(), (0, A.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !1,
      guildId: W,
      channelId: P,
      messageId: D,
      roleId: F,
      friendToken: B,
      sourceAnalyticsLocations: H
    });
  }
}) : (0, n.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: O.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: _.ZP.getName(W, P, s)
  }),
  action: () => {
    K({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: z
    }), Y(), (0, A.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !0,
      guildId: W,
      channelId: P,
      messageId: D,
      roleId: F,
      friendToken: B,
      sourceAnalyticsLocations: H
    });
  }
});
  return (0, n.jsx)(c.Gt, {
value: z,
children: (0, n.jsx)(m.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: W,
  channelId: P,
  messageId: D,
  roleId: F,
  showGuildProfile: V,
  children: (0, n.jsxs)(o.ModalRoot, {
    transitionState: k,
    className: y.root,
    hideShadow: !0,
    'aria-label': O.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, n.jsxs)(g.Z, {
        user: s,
        displayProfile: es,
        profileType: U.y0.FULL_SIZE,
        ref: et,
        children: [
          (0, n.jsxs)(T.Z, {
            profileType: U.y0.FULL_SIZE,
            children: [
              (0, n.jsx)(j.Z, {
                user: s,
                guildId: W,
                channelId: P,
                onClose: Y
              }),
              (0, n.jsx)(N.Z, {
                profileType: U.y0.FULL_SIZE,
                user: s,
                friendToken: B
              }),
              (0, n.jsx)(C.Z, {
                user: s,
                guildId: W,
                viewProfileItem: ea()
              })
            ]
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(Z.Z, {
                user: s,
                displayProfile: es,
                profileType: U.y0.FULL_SIZE,
                hasProfileEffect: (null == es ? void 0 : es.profileEffectId) != null
              }),
              (0, n.jsxs)('div', {
                className: y.headerInner,
                children: [
                  (0, n.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: es,
                    guildId: W,
                    channelId: P,
                    profileType: U.y0.FULL_SIZE
                  }),
                  (0, n.jsx)(M.Z, {
                    user: s,
                    isCurrentUser: s.id === i.id,
                    guildId: W,
                    relationshipType: en,
                    persistentCallCtaEnabled: J,
                    activeInviteToCallCtaEnabled: Q,
                    viewProfileItem: ea(),
                    onClose: Y
                  }),
                  (0, n.jsx)(p.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: W,
                    channelId: P,
                    profileType: U.y0.FULL_SIZE,
                    editEnabled: q,
                    hasEntered: k === o.ModalTransitionState.ENTERED,
                    isReplying: $,
                    onReply: e => {
                      ee(e);
                    },
                    onClose: Y
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)(R.Z, {
            user: s,
            currentUser: i,
            channelId: P,
            displayProfile: es,
            initialSection: G,
            initialSubsection: w,
            friendToken: B,
            onClose: Y
          })
        ]
      }),
      (null == es ? void 0 : es.profileEffectId) != null && (0, n.jsx)(I.Z, {
        profileEffectId: null == es ? void 0 : es.profileEffectId,
        isHovering: eo
      })
    ]
  })
})
  });
}