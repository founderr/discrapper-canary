i.d(s, {
  Z: function() {
return U;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(410575),
  r = i(727637),
  d = i(58540),
  c = i(420660),
  u = i(100527),
  I = i(906732),
  _ = i(580552),
  f = i(680295),
  E = i(199902),
  m = i(314897),
  x = i(158776),
  v = i(594174),
  S = i(785717),
  Z = i(621853),
  h = i(318661),
  p = i(726059),
  T = i(162267),
  g = i(502762),
  N = i(62154),
  j = i(293259),
  C = i(725954),
  A = i(228168),
  R = i(981631),
  O = i(689938),
  L = i(376234);

function M(e) {
  var s, i;
  let {
user: l,
isCurrentUser: a,
section: r,
setSection: d,
hasActivity: c
  } = e, u = (0, t.e7)([Z.Z], () => {
var e, s;
return (null === (s = Z.Z.getUserProfile(l.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (s = (0, p.Z)(l.id, !l.bot && !a).mutualFriends) || void 0 === s ? void 0 : s.length, f = null === (i = (0, T.Z)(l.id, !l.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
  return (0, n.jsx)('div', {
className: L.tabBarContainer,
children: (0, n.jsxs)(o.TabBar, {
  selectedItem: r,
  type: 'top',
  onItemSelect: d,
  className: L.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, _.Z)(l.id) ? (0, n.jsx)(o.TabBar.Item, {
      className: L.tabBarItem,
      id: A.oh.USER_INFO,
      children: O.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, n.jsx)(o.TabBar.Item, {
      className: L.tabBarItem,
      id: A.oh.ACTIVITY,
      children: O.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || a ? null : (0, n.jsx)(o.TabBar.Item, {
      className: L.tabBarItem,
      id: A.oh.MUTUAL_FRIENDS,
      children: null == I ? O.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : O.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    a || l.isClyde() || (0, _.Z)(l.id) ? null : (0, n.jsx)(o.TabBar.Item, {
      className: L.tabBarItem,
      id: A.oh.MUTUAL_GUILDS,
      children: null == f ? O.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : O.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, n.jsx)(o.TabBar.Item, {
      className: L.tabBarItem,
      id: A.oh.BOT_DATA_ACCESS,
      children: O.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function U(e) {
  var s, i;
  let {
user: Z,
guildId: p,
channelId: T,
messageId: U,
roleId: P,
friendToken: b,
initialSection: y = A.oh.USER_INFO,
initialSubsection: D,
transitionState: F,
sourceAnalyticsLocations: B = [],
onClose: G
  } = e, w = null !== (s = (0, t.e7)([v.default], () => v.default.getUser(Z.id))) && void 0 !== s ? s : Z, k = (0, h.ZP)(null !== (i = w.id) && void 0 !== i ? i : ''), {
analyticsLocations: V
  } = (0, I.ZP)([
...B,
u.Z.PROFILE_MODAL
  ]), Y = (0, S.Q1)({
layout: 'MODAL',
userId: w.id,
showGuildProfile: !1,
guildId: p,
channelId: T,
messageId: U,
roleId: P
  });
  (0, d.$)({
[p]: [w.id]
  });
  let W = (0, t.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(w.id)),
H = (0, t.e7)([x.Z], () => x.Z.findActivity(w.id, e => e.type !== R.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[q, J] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, _.Z)(w.id) ? y : A.oh.MUTUAL_GUILDS),
Q = (0, t.e7)([m.default], () => m.default.getId() === w.id),
X = null != H || W,
$ = !Q || X,
ee = l.createRef(),
es = (0, r.Z)(ee);
  !X && q === A.oh.ACTIVITY && J(A.oh.USER_INFO);
  let ei = l.useCallback(e => {
  Y({
    action: 'PRESS_SECTION',
    analyticsLocations: V
  }), K(!0), J(e);
}, [
  Y,
  V
]),
en = null == k ? void 0 : k.profileEffectId;
  return (0, n.jsx)(I.Gt, {
value: V,
children: (0, n.jsx)(S.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: T,
  messageId: U,
  roleId: P,
  showGuildProfile: !1,
  children: (0, n.jsx)(a.Z, {
    section: R.jXE.PROFILE_MODAL,
    children: (0, n.jsxs)(o.ModalRoot, {
      transitionState: F,
      className: L.root,
      hideShadow: !0,
      'aria-label': O.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, n.jsxs)(g.Z, {
          user: w,
          displayProfile: k,
          profileType: A.y0.MODAL,
          ref: ee,
          children: [
            (0, n.jsx)(j.Z, {
              className: L.topSection,
              displayProfile: k,
              user: w,
              friendToken: b,
              onClose: G,
              isStreaming: (0, c.Z)(H),
              guildId: p,
              channelId: T,
              hasProfileEffect: null != en
            }),
            (0, n.jsx)(g.Z.Overlay, {
              className: L.overlay,
              children: (0, n.jsxs)('div', {
                className: L.body,
                children: [
                  (0, n.jsx)(C.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, n.jsx)(M, {
                    user: w,
                    section: q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : q,
                    setSection: ei,
                    hasActivity: X,
                    isCurrentUser: Q
                  }) : (0, n.jsx)('div', {
                    className: L.divider
                  }),
                  (0, n.jsx)(N.Z, {
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
        null != en && (0, n.jsx)(f.Z, {
          profileEffectId: en,
          bannerAdjustment: 0,
          isHovering: es
        })
      ]
    })
  })
})
  });
}