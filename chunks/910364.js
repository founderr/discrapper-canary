s.d(n, {
  Z: function() {
return M;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(442837),
  t = s(481060),
  r = s(410575),
  a = s(727637),
  d = s(58540),
  c = s(420660),
  u = s(100527),
  I = s(906732),
  _ = s(580552),
  f = s(680295),
  E = s(199902),
  m = s(314897),
  S = s(158776),
  Z = s(594174),
  v = s(785717),
  x = s(621853),
  h = s(318661),
  p = s(726059),
  T = s(162267),
  g = s(502762),
  N = s(62154),
  C = s(293259),
  j = s(725954),
  A = s(228168),
  O = s(981631),
  L = s(689938),
  R = s(419758);

function U(e) {
  var n, s;
  let {
user: l,
isCurrentUser: r,
section: a,
setSection: d,
hasActivity: c
  } = e, u = (0, o.e7)([x.Z], () => {
var e, n;
return (null === (n = x.Z.getUserProfile(l.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (n = (0, p.Z)(l.id, !l.bot && !r).mutualFriends) || void 0 === n ? void 0 : n.length, f = null === (s = (0, T.Z)(l.id, !l.bot && !r).mutualGuilds) || void 0 === s ? void 0 : s.length;
  return (0, i.jsx)('div', {
className: R.tabBarContainer,
children: (0, i.jsxs)(t.TabBar, {
  selectedItem: a,
  type: 'top',
  onItemSelect: d,
  className: R.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, _.Z)(l.id) ? (0, i.jsx)(t.TabBar.Item, {
      className: R.tabBarItem,
      id: A.oh.USER_INFO,
      children: L.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, i.jsx)(t.TabBar.Item, {
      className: R.tabBarItem,
      id: A.oh.ACTIVITY,
      children: L.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || r ? null : (0, i.jsx)(t.TabBar.Item, {
      className: R.tabBarItem,
      id: A.oh.MUTUAL_FRIENDS,
      children: null == I ? L.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : L.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    r || l.isClyde() || (0, _.Z)(l.id) ? null : (0, i.jsx)(t.TabBar.Item, {
      className: R.tabBarItem,
      id: A.oh.MUTUAL_GUILDS,
      children: null == f ? L.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : L.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, i.jsx)(t.TabBar.Item, {
      className: R.tabBarItem,
      id: A.oh.BOT_DATA_ACCESS,
      children: L.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function M(e) {
  var n, s;
  let {
user: x,
guildId: p,
channelId: T,
messageId: M,
roleId: P,
friendToken: b,
initialSection: y = A.oh.USER_INFO,
initialSubsection: D,
transitionState: B,
sourceAnalyticsLocations: F = [],
onClose: G
  } = e, w = null !== (n = (0, o.e7)([Z.default], () => Z.default.getUser(x.id))) && void 0 !== n ? n : x, k = (0, h.ZP)(null !== (s = w.id) && void 0 !== s ? s : ''), {
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
messageId: M,
roleId: P
  });
  (0, d.$)({
[p]: [w.id]
  });
  let H = (0, o.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(w.id)),
W = (0, o.e7)([S.Z], () => S.Z.findActivity(w.id, e => e.type !== O.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[q, Q] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, _.Z)(w.id) ? y : A.oh.MUTUAL_GUILDS),
J = (0, o.e7)([m.default], () => m.default.getId() === w.id),
X = null != W || H,
$ = !J || X,
ee = l.createRef(),
en = (0, a.Z)(ee);
  !X && q === A.oh.ACTIVITY && Q(A.oh.USER_INFO);
  let es = l.useCallback(e => {
  Y({
    action: 'PRESS_SECTION',
    analyticsLocations: V
  }), K(!0), Q(e);
}, [
  Y,
  V
]),
ei = null == k ? void 0 : k.profileEffectId;
  return (0, i.jsx)(I.Gt, {
value: V,
children: (0, i.jsx)(v.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: T,
  messageId: M,
  roleId: P,
  showGuildProfile: !1,
  children: (0, i.jsx)(r.Z, {
    section: O.jXE.PROFILE_MODAL,
    children: (0, i.jsxs)(t.ModalRoot, {
      transitionState: B,
      className: R.root,
      hideShadow: !0,
      'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, i.jsxs)(g.Z, {
          user: w,
          displayProfile: k,
          profileType: A.y0.MODAL,
          ref: ee,
          children: [
            (0, i.jsx)(C.Z, {
              className: R.topSection,
              displayProfile: k,
              user: w,
              friendToken: b,
              onClose: G,
              isStreaming: (0, c.Z)(W),
              guildId: p,
              channelId: T,
              hasProfileEffect: null != ei
            }),
            (0, i.jsx)(g.Z.Overlay, {
              className: R.overlay,
              children: (0, i.jsxs)('div', {
                className: R.body,
                children: [
                  (0, i.jsx)(j.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, i.jsx)(U, {
                    user: w,
                    section: q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : q,
                    setSection: es,
                    hasActivity: X,
                    isCurrentUser: J
                  }) : (0, i.jsx)('div', {
                    className: R.divider
                  }),
                  (0, i.jsx)(N.Z, {
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
        null != ei && (0, i.jsx)(f.Z, {
          profileEffectId: ei,
          bannerAdjustment: 0,
          isHovering: en
        })
      ]
    })
  })
})
  });
}