i.d(n, {
  Z: function() {
return R;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  o = i(442837),
  t = i(481060),
  r = i(410575),
  a = i(727637),
  d = i(58540),
  c = i(420660),
  u = i(100527),
  I = i(906732),
  f = i(580552),
  _ = i(680295),
  E = i(199902),
  m = i(314897),
  S = i(158776),
  Z = i(594174),
  v = i(785717),
  x = i(621853),
  h = i(318661),
  p = i(726059),
  T = i(162267),
  g = i(502762),
  N = i(62154),
  C = i(293259),
  j = i(725954),
  A = i(228168),
  O = i(981631),
  L = i(689938),
  U = i(419758);

function M(e) {
  var n, i;
  let {
user: l,
isCurrentUser: r,
section: a,
setSection: d,
hasActivity: c
  } = e, u = (0, o.e7)([x.Z], () => {
var e, n;
return (null === (n = x.Z.getUserProfile(l.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (n = (0, p.Z)(l.id, !l.bot && !r).mutualFriends) || void 0 === n ? void 0 : n.length, _ = null === (i = (0, T.Z)(l.id, !l.bot && !r).mutualGuilds) || void 0 === i ? void 0 : i.length;
  return (0, s.jsx)('div', {
className: U.tabBarContainer,
children: (0, s.jsxs)(t.TabBar, {
  selectedItem: a,
  type: 'top',
  onItemSelect: d,
  className: U.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, f.Z)(l.id) ? (0, s.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.USER_INFO,
      children: L.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, s.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.ACTIVITY,
      children: L.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || r ? null : (0, s.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.MUTUAL_FRIENDS,
      children: null == I ? L.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : L.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    r || l.isClyde() || (0, f.Z)(l.id) ? null : (0, s.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.MUTUAL_GUILDS,
      children: null == _ ? L.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : L.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(_)
      })
    }),
    l.bot && u ? (0, s.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.BOT_DATA_ACCESS,
      children: L.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function R(e) {
  var n, i;
  let {
user: x,
guildId: p,
channelId: T,
messageId: R,
roleId: P,
friendToken: b,
initialSection: y = A.oh.USER_INFO,
initialSubsection: D,
transitionState: B,
sourceAnalyticsLocations: F = [],
onClose: G
  } = e, w = null !== (n = (0, o.e7)([Z.default], () => Z.default.getUser(x.id))) && void 0 !== n ? n : x, k = (0, h.ZP)(null !== (i = w.id) && void 0 !== i ? i : ''), {
analyticsLocations: V
  } = (0, I.ZP)([
...F,
u.Z.PROFILE_MODAL
  ]), Y = (0, v.Q1)({
layout: 'MODAL',
userId: w.id,
showGuildProfile: !1,
guildId: p,
channelId: T,
messageId: R,
roleId: P
  });
  (0, d.$)({
[p]: [w.id]
  });
  let H = (0, o.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(w.id)),
W = (0, o.e7)([S.Z], () => S.Z.findActivity(w.id, e => e.type !== O.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[q, J] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, f.Z)(w.id) ? y : A.oh.MUTUAL_GUILDS),
Q = (0, o.e7)([m.default], () => m.default.getId() === w.id),
X = null != W || H,
$ = !Q || X,
ee = l.createRef(),
en = (0, a.Z)(ee);
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
es = null == k ? void 0 : k.profileEffectId;
  return (0, s.jsx)(I.Gt, {
value: V,
children: (0, s.jsx)(v.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: T,
  messageId: R,
  roleId: P,
  showGuildProfile: !1,
  children: (0, s.jsx)(r.Z, {
    section: O.jXE.PROFILE_MODAL,
    children: (0, s.jsxs)(t.ModalRoot, {
      transitionState: B,
      className: U.root,
      hideShadow: !0,
      'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, s.jsxs)(g.Z, {
          user: w,
          displayProfile: k,
          profileType: A.y0.MODAL,
          ref: ee,
          children: [
            (0, s.jsx)(C.Z, {
              className: U.topSection,
              displayProfile: k,
              user: w,
              friendToken: b,
              onClose: G,
              isStreaming: (0, c.Z)(W),
              guildId: p,
              channelId: T,
              hasProfileEffect: null != es
            }),
            (0, s.jsx)(g.Z.Overlay, {
              className: U.overlay,
              children: (0, s.jsxs)('div', {
                className: U.body,
                children: [
                  (0, s.jsx)(j.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, s.jsx)(M, {
                    user: w,
                    section: q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : q,
                    setSection: ei,
                    hasActivity: X,
                    isCurrentUser: Q
                  }) : (0, s.jsx)('div', {
                    className: U.divider
                  }),
                  (0, s.jsx)(N.Z, {
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
        null != es && (0, s.jsx)(_.Z, {
          profileEffectId: es,
          bannerAdjustment: 0,
          isHovering: en
        })
      ]
    })
  })
})
  });
}