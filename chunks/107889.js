n.d(i, {
  Z: function() {
return b;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  a = n(727637),
  r = n(58540),
  d = n(100527),
  c = n(906732),
  u = n(564990),
  I = n(680295),
  _ = n(699516),
  f = n(5192),
  m = n(785717),
  E = n(481046),
  x = n(910128),
  v = n(27144),
  Z = n(318661),
  h = n(78675),
  S = n(113557),
  p = n(169979),
  g = n(502762),
  j = n(544989),
  T = n(481932),
  N = n(195387),
  C = n(272510),
  A = n(171368),
  y = n(900687),
  R = n(806926),
  O = n(228168),
  L = n(981631),
  U = n(689938),
  M = n(505451);

function b(e) {
  let {
user: i,
currentUser: n,
guildId: b,
channelId: P,
messageId: D,
roleId: F,
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
  ]), K = (0, m.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: i.id,
guildId: W,
channelId: P,
messageId: D,
roleId: F,
showGuildProfile: Y
  }), {
profileStatusEditEnabled: J
  } = (0, E.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: q,
activeInviteToCallCtaEnabled: Q
  } = (0, x.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
pastActivityEnabled: X
  } = (0, v.z)({
location: 'SimplifiedUserProfileModal'
  }), [$, ee] = l.useState(!1), ei = (0, Z.ZP)(i.id, Y ? W : void 0), en = (0, Z.ZP)(i.id, W), es = (0, t.e7)([_.Z], () => _.Z.getRelationshipType(i.id)), el = l.useMemo(() => null != W ? {
[W]: [i.id]
  } : {}, [
W,
i.id
  ]);
  (0, r.$)(el), l.useEffect(() => {
X && (0, u.JX)(i.id);
  }, [
i,
X
  ]);
  let et = l.createRef(),
eo = (0, a.Z)(et),
ea = () => (null == en ? void 0 : en.guildId) == null ? null : (null == ei ? void 0 : ei.guildId) != null ? (0, s.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: U.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(void 0, void 0, i)
  }),
  action: () => {
    K({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: z
    }), V(), (0, A.openUserProfileModal)({
      userId: i.id,
      showGuildProfile: !1,
      guildId: W,
      channelId: P,
      messageId: D,
      roleId: F,
      friendToken: B,
      sourceAnalyticsLocations: H
    });
  }
}) : (0, s.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: U.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(W, P, i)
  }),
  action: () => {
    K({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: z
    }), V(), (0, A.openUserProfileModal)({
      userId: i.id,
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
  return (0, s.jsx)(c.Gt, {
value: z,
children: (0, s.jsx)(m.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: W,
  channelId: P,
  messageId: D,
  roleId: F,
  showGuildProfile: Y,
  children: (0, s.jsxs)(o.ModalRoot, {
    transitionState: k,
    className: M.root,
    hideShadow: !0,
    'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(g.Z, {
        user: i,
        displayProfile: ei,
        profileType: O.y0.FULL_SIZE,
        ref: et,
        children: [
          (0, s.jsxs)(j.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(N.Z, {
                user: i,
                guildId: W,
                channelId: P,
                onClose: V
              }),
              (0, s.jsx)(T.Z, {
                profileType: O.y0.FULL_SIZE,
                user: i,
                friendToken: B
              }),
              (0, s.jsx)(C.Z, {
                user: i,
                guildId: W,
                viewProfileItem: ea()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(h.Z, {
                user: i,
                displayProfile: ei,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == ei ? void 0 : ei.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: M.headerInner,
                children: [
                  (0, s.jsx)(S.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: i,
                    displayProfile: ei,
                    guildId: W,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(y.Z, {
                    user: i,
                    isCurrentUser: i.id === n.id,
                    guildId: W,
                    relationshipType: es,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: Q,
                    viewProfileItem: ea(),
                    onClose: V
                  }),
                  (0, s.jsx)(p.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: i,
                    guildId: W,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE,
                    editEnabled: J,
                    hasEntered: k === o.ModalTransitionState.ENTERED,
                    isReplying: $,
                    onReply: e => {
                      ee(e);
                    },
                    onClose: V
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)(R.Z, {
            user: i,
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
      (null == ei ? void 0 : ei.profileEffectId) != null && (0, s.jsx)(I.Z, {
        profileEffectId: null == ei ? void 0 : ei.profileEffectId,
        isHovering: eo
      })
    ]
  })
})
  });
}