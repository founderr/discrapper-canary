n.d(i, {
  Z: function() {
return U;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  a = n(410575),
  r = n(727637),
  d = n(58540),
  c = n(420660),
  u = n(100527),
  I = n(906732),
  _ = n(580552),
  f = n(680295),
  m = n(199902),
  E = n(314897),
  x = n(158776),
  v = n(594174),
  h = n(785717),
  S = n(621853),
  Z = n(318661),
  p = n(726059),
  g = n(162267),
  j = n(502762),
  T = n(62154),
  N = n(293259),
  C = n(725954),
  A = n(228168),
  R = n(981631),
  L = n(689938),
  y = n(376234);

function O(e) {
  var i, n;
  let {
user: l,
isCurrentUser: a,
section: r,
setSection: d,
hasActivity: c
  } = e, u = (0, t.e7)([S.Z], () => {
var e, i;
return (null === (i = S.Z.getUserProfile(l.id)) || void 0 === i ? void 0 : null === (e = i.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (i = (0, p.Z)(l.id, !l.bot && !a).mutualFriends) || void 0 === i ? void 0 : i.length, f = null === (n = (0, g.Z)(l.id, !l.bot && !a).mutualGuilds) || void 0 === n ? void 0 : n.length;
  return (0, s.jsx)('div', {
className: y.tabBarContainer,
children: (0, s.jsxs)(o.TabBar, {
  selectedItem: r,
  type: 'top',
  onItemSelect: d,
  className: y.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, _.Z)(l.id) ? (0, s.jsx)(o.TabBar.Item, {
      className: y.tabBarItem,
      id: A.oh.USER_INFO,
      children: L.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, s.jsx)(o.TabBar.Item, {
      className: y.tabBarItem,
      id: A.oh.ACTIVITY,
      children: L.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || a ? null : (0, s.jsx)(o.TabBar.Item, {
      className: y.tabBarItem,
      id: A.oh.MUTUAL_FRIENDS,
      children: null == I ? L.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : L.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    a || l.isClyde() || (0, _.Z)(l.id) ? null : (0, s.jsx)(o.TabBar.Item, {
      className: y.tabBarItem,
      id: A.oh.MUTUAL_GUILDS,
      children: null == f ? L.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : L.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, s.jsx)(o.TabBar.Item, {
      className: y.tabBarItem,
      id: A.oh.BOT_DATA_ACCESS,
      children: L.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function U(e) {
  var i, n;
  let {
user: S,
guildId: p,
channelId: g,
messageId: U,
roleId: P,
friendToken: M,
initialSection: b = A.oh.USER_INFO,
initialSubsection: D,
transitionState: F,
sourceAnalyticsLocations: B = [],
onClose: G
  } = e, w = null !== (i = (0, t.e7)([v.default], () => v.default.getUser(S.id))) && void 0 !== i ? i : S, k = (0, Z.ZP)(null !== (n = w.id) && void 0 !== n ? n : ''), {
analyticsLocations: Y
  } = (0, I.ZP)([
...B,
u.Z.PROFILE_MODAL
  ]), V = (0, h.Q1)({
layout: 'MODAL',
userId: w.id,
showGuildProfile: !1,
guildId: p,
channelId: g,
messageId: U,
roleId: P
  });
  (0, d.$)({
[p]: [w.id]
  });
  let H = (0, t.e7)([m.Z], () => null != m.Z.getAnyStreamForUser(w.id)),
W = (0, t.e7)([x.Z], () => x.Z.findActivity(w.id, e => e.type !== R.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[q, J] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, _.Z)(w.id) ? b : A.oh.MUTUAL_GUILDS),
Q = (0, t.e7)([E.default], () => E.default.getId() === w.id),
X = null != W || H,
$ = !Q || X,
ee = l.createRef(),
ei = (0, r.Z)(ee);
  !X && q === A.oh.ACTIVITY && J(A.oh.USER_INFO);
  let en = l.useCallback(e => {
  V({
    action: 'PRESS_SECTION',
    analyticsLocations: Y
  }), K(!0), J(e);
}, [
  V,
  Y
]),
es = null == k ? void 0 : k.profileEffectId;
  return (0, s.jsx)(I.Gt, {
value: Y,
children: (0, s.jsx)(h.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: g,
  messageId: U,
  roleId: P,
  showGuildProfile: !1,
  children: (0, s.jsx)(a.Z, {
    section: R.jXE.PROFILE_MODAL,
    children: (0, s.jsxs)(o.ModalRoot, {
      transitionState: F,
      className: y.root,
      hideShadow: !0,
      'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, s.jsxs)(j.Z, {
          user: w,
          displayProfile: k,
          profileType: A.y0.MODAL,
          ref: ee,
          children: [
            (0, s.jsx)(N.Z, {
              className: y.topSection,
              displayProfile: k,
              user: w,
              friendToken: M,
              onClose: G,
              isStreaming: (0, c.Z)(W),
              guildId: p,
              channelId: g,
              hasProfileEffect: null != es
            }),
            (0, s.jsx)(j.Z.Overlay, {
              className: y.overlay,
              children: (0, s.jsxs)('div', {
                className: y.body,
                children: [
                  (0, s.jsx)(C.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, s.jsx)(O, {
                    user: w,
                    section: q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : q,
                    setSection: en,
                    hasActivity: X,
                    isCurrentUser: Q
                  }) : (0, s.jsx)('div', {
                    className: y.divider
                  }),
                  (0, s.jsx)(T.Z, {
                    displayProfile: k,
                    user: w,
                    autoFocusNote: D === A.Tb.NOTE && !z,
                    selectedSection: q,
                    onClose: G
                  })
                ]
              })
            })
          ]
        }),
        null != es && (0, s.jsx)(f.Z, {
          profileEffectId: es,
          bannerAdjustment: 0,
          isHovering: ei
        })
      ]
    })
  })
})
  });
}