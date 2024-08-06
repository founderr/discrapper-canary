i.d(s, {
  Z: function() {
return L;
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
  m = i(199902),
  E = i(314897),
  S = i(158776),
  x = i(594174),
  v = i(785717),
  Z = i(621853),
  h = i(318661),
  p = i(726059),
  T = i(162267),
  g = i(502762),
  N = i(62154),
  j = i(293259),
  A = i(725954),
  C = i(228168),
  R = i(981631),
  O = i(689938),
  M = i(376234);

function U(e) {
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
className: M.tabBarContainer,
children: (0, n.jsxs)(o.TabBar, {
  selectedItem: r,
  type: 'top',
  onItemSelect: d,
  className: M.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, _.Z)(l.id) ? (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: C.oh.USER_INFO,
      children: O.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: C.oh.ACTIVITY,
      children: O.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || a ? null : (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: C.oh.MUTUAL_FRIENDS,
      children: null == I ? O.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : O.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    a || l.isClyde() || (0, _.Z)(l.id) ? null : (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: C.oh.MUTUAL_GUILDS,
      children: null == f ? O.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : O.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: C.oh.BOT_DATA_ACCESS,
      children: O.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function L(e) {
  var s, i;
  let {
user: Z,
guildId: p,
channelId: T,
messageId: L,
roleId: b,
friendToken: P,
initialSection: y = C.oh.USER_INFO,
initialSubsection: D,
transitionState: F,
sourceAnalyticsLocations: B = [],
onClose: G
  } = e, w = null !== (s = (0, t.e7)([x.default], () => x.default.getUser(Z.id))) && void 0 !== s ? s : Z, k = (0, h.ZP)(null !== (i = w.id) && void 0 !== i ? i : ''), {
analyticsLocations: V
  } = (0, I.ZP)([
...B,
u.Z.PROFILE_MODAL
  ]), Y = (0, v.Q1)({
layout: 'MODAL',
userId: w.id,
showGuildProfile: !1,
guildId: p,
channelId: T,
messageId: L,
roleId: b
  });
  (0, d.$)({
[p]: [w.id]
  });
  let H = (0, t.e7)([m.Z], () => null != m.Z.getAnyStreamForUser(w.id)),
W = (0, t.e7)([S.Z], () => S.Z.findActivity(w.id, e => e.type !== R.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[q, J] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, _.Z)(w.id) ? y : C.oh.MUTUAL_GUILDS),
Q = (0, t.e7)([E.default], () => E.default.getId() === w.id),
X = null != W || H,
$ = !Q || X,
ee = l.createRef(),
es = (0, r.Z)(ee);
  !X && q === C.oh.ACTIVITY && J(C.oh.USER_INFO);
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
children: (0, n.jsx)(v.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: T,
  messageId: L,
  roleId: b,
  showGuildProfile: !1,
  children: (0, n.jsx)(a.Z, {
    section: R.jXE.PROFILE_MODAL,
    children: (0, n.jsxs)(o.ModalRoot, {
      transitionState: F,
      className: M.root,
      hideShadow: !0,
      'aria-label': O.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, n.jsxs)(g.Z, {
          user: w,
          displayProfile: k,
          profileType: C.y0.MODAL,
          ref: ee,
          children: [
            (0, n.jsx)(j.Z, {
              className: M.topSection,
              displayProfile: k,
              user: w,
              friendToken: P,
              onClose: G,
              isStreaming: (0, c.Z)(W),
              guildId: p,
              channelId: T,
              hasProfileEffect: null != en
            }),
            (0, n.jsx)(g.Z.Overlay, {
              className: M.overlay,
              children: (0, n.jsxs)('div', {
                className: M.body,
                children: [
                  (0, n.jsx)(A.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, n.jsx)(U, {
                    user: w,
                    section: q === C.oh.USER_INFO_CONNECTIONS ? C.oh.USER_INFO : q,
                    setSection: ei,
                    hasActivity: X,
                    isCurrentUser: Q
                  }) : (0, n.jsx)('div', {
                    className: M.divider
                  }),
                  (0, n.jsx)(N.Z, {
                    displayProfile: k,
                    user: w,
                    autoFocusNote: D === C.Tb.NOTE && !z,
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