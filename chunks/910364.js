n.d(i, {
  Z: function() {
return L;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(481060),
  r = n(410575),
  a = n(727637),
  d = n(58540),
  c = n(420660),
  u = n(100527),
  I = n(906732),
  f = n(580552),
  _ = n(680295),
  E = n(199902),
  m = n(314897),
  S = n(158776),
  Z = n(594174),
  x = n(785717),
  v = n(621853),
  h = n(318661),
  p = n(726059),
  T = n(162267),
  g = n(502762),
  N = n(62154),
  C = n(293259),
  j = n(725954),
  A = n(228168),
  U = n(981631),
  R = n(689938),
  O = n(376234);

function M(e) {
  var i, n;
  let {
user: l,
isCurrentUser: r,
section: a,
setSection: d,
hasActivity: c
  } = e, u = (0, o.e7)([v.Z], () => {
var e, i;
return (null === (i = v.Z.getUserProfile(l.id)) || void 0 === i ? void 0 : null === (e = i.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (i = (0, p.Z)(l.id, !l.bot && !r).mutualFriends) || void 0 === i ? void 0 : i.length, _ = null === (n = (0, T.Z)(l.id, !l.bot && !r).mutualGuilds) || void 0 === n ? void 0 : n.length;
  return (0, s.jsx)('div', {
className: O.tabBarContainer,
children: (0, s.jsxs)(t.TabBar, {
  selectedItem: a,
  type: 'top',
  onItemSelect: d,
  className: O.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, f.Z)(l.id) ? (0, s.jsx)(t.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.USER_INFO,
      children: R.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, s.jsx)(t.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.ACTIVITY,
      children: R.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || r ? null : (0, s.jsx)(t.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.MUTUAL_FRIENDS,
      children: null == I ? R.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : R.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    r || l.isClyde() || (0, f.Z)(l.id) ? null : (0, s.jsx)(t.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.MUTUAL_GUILDS,
      children: null == _ ? R.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : R.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(_)
      })
    }),
    l.bot && u ? (0, s.jsx)(t.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.BOT_DATA_ACCESS,
      children: R.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function L(e) {
  var i, n;
  let {
user: v,
guildId: p,
channelId: T,
messageId: L,
roleId: P,
friendToken: b,
initialSection: y = A.oh.USER_INFO,
initialSubsection: D,
transitionState: F,
sourceAnalyticsLocations: B = [],
onClose: G
  } = e, w = null !== (i = (0, o.e7)([Z.default], () => Z.default.getUser(v.id))) && void 0 !== i ? i : v, k = (0, h.ZP)(null !== (n = w.id) && void 0 !== n ? n : ''), {
analyticsLocations: V
  } = (0, I.ZP)([
...B,
u.Z.PROFILE_MODAL
  ]), Y = (0, x.Q1)({
layout: 'MODAL',
userId: w.id,
showGuildProfile: !1,
guildId: p,
channelId: T,
messageId: L,
roleId: P
  });
  (0, d.$)({
[p]: [w.id]
  });
  let H = (0, o.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(w.id)),
W = (0, o.e7)([S.Z], () => S.Z.findActivity(w.id, e => e.type !== U.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[q, Q] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, f.Z)(w.id) ? y : A.oh.MUTUAL_GUILDS),
J = (0, o.e7)([m.default], () => m.default.getId() === w.id),
X = null != W || H,
$ = !J || X,
ee = l.createRef(),
ei = (0, a.Z)(ee);
  !X && q === A.oh.ACTIVITY && Q(A.oh.USER_INFO);
  let en = l.useCallback(e => {
  Y({
    action: 'PRESS_SECTION',
    analyticsLocations: V
  }), K(!0), Q(e);
}, [
  Y,
  V
]),
es = null == k ? void 0 : k.profileEffectId;
  return (0, s.jsx)(I.Gt, {
value: V,
children: (0, s.jsx)(x.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: T,
  messageId: L,
  roleId: P,
  showGuildProfile: !1,
  children: (0, s.jsx)(r.Z, {
    section: U.jXE.PROFILE_MODAL,
    children: (0, s.jsxs)(t.ModalRoot, {
      transitionState: F,
      className: O.root,
      hideShadow: !0,
      'aria-label': R.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, s.jsxs)(g.Z, {
          user: w,
          displayProfile: k,
          profileType: A.y0.MODAL,
          ref: ee,
          children: [
            (0, s.jsx)(C.Z, {
              className: O.topSection,
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
              className: O.overlay,
              children: (0, s.jsxs)('div', {
                className: O.body,
                children: [
                  (0, s.jsx)(j.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, s.jsx)(M, {
                    user: w,
                    section: q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : q,
                    setSection: en,
                    hasActivity: X,
                    isCurrentUser: J
                  }) : (0, s.jsx)('div', {
                    className: O.divider
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
          isHovering: ei
        })
      ]
    })
  })
})
  });
}