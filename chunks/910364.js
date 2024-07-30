i.d(n, {
  Z: function() {
return U;
  }
}), i(47120);
var s = i(735250),
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
  x = i(158776),
  v = i(594174),
  Z = i(785717),
  h = i(621853),
  S = i(318661),
  p = i(726059),
  g = i(162267),
  j = i(502762),
  N = i(62154),
  T = i(293259),
  C = i(725954),
  A = i(228168),
  y = i(981631),
  R = i(689938),
  O = i(376234);

function L(e) {
  var n, i;
  let {
user: l,
isCurrentUser: a,
section: r,
setSection: d,
hasActivity: c
  } = e, u = (0, t.e7)([h.Z], () => {
var e, n;
return (null === (n = h.Z.getUserProfile(l.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (n = (0, p.Z)(l.id, !l.bot && !a).mutualFriends) || void 0 === n ? void 0 : n.length, f = null === (i = (0, g.Z)(l.id, !l.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
  return (0, s.jsx)('div', {
className: O.tabBarContainer,
children: (0, s.jsxs)(o.TabBar, {
  selectedItem: r,
  type: 'top',
  onItemSelect: d,
  className: O.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, _.Z)(l.id) ? (0, s.jsx)(o.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.USER_INFO,
      children: R.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, s.jsx)(o.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.ACTIVITY,
      children: R.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || a ? null : (0, s.jsx)(o.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.MUTUAL_FRIENDS,
      children: null == I ? R.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : R.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    a || l.isClyde() || (0, _.Z)(l.id) ? null : (0, s.jsx)(o.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.MUTUAL_GUILDS,
      children: null == f ? R.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : R.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, s.jsx)(o.TabBar.Item, {
      className: O.tabBarItem,
      id: A.oh.BOT_DATA_ACCESS,
      children: R.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function U(e) {
  var n, i;
  let {
user: h,
guildId: p,
channelId: g,
messageId: U,
roleId: M,
friendToken: b,
initialSection: P = A.oh.USER_INFO,
initialSubsection: D,
transitionState: F,
sourceAnalyticsLocations: B = [],
onClose: G
  } = e, w = null !== (n = (0, t.e7)([v.default], () => v.default.getUser(h.id))) && void 0 !== n ? n : h, k = (0, S.ZP)(null !== (i = w.id) && void 0 !== i ? i : ''), {
analyticsLocations: V
  } = (0, I.ZP)([
...B,
u.Z.PROFILE_MODAL
  ]), Y = (0, Z.Q1)({
layout: 'MODAL',
userId: w.id,
showGuildProfile: !1,
guildId: p,
channelId: g,
messageId: U,
roleId: M
  });
  (0, d.$)({
[p]: [w.id]
  });
  let H = (0, t.e7)([m.Z], () => null != m.Z.getAnyStreamForUser(w.id)),
W = (0, t.e7)([x.Z], () => x.Z.findActivity(w.id, e => e.type !== y.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[J, q] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, _.Z)(w.id) ? P : A.oh.MUTUAL_GUILDS),
Q = (0, t.e7)([E.default], () => E.default.getId() === w.id),
X = null != W || H,
$ = !Q || X,
ee = l.createRef(),
en = (0, r.Z)(ee);
  !X && J === A.oh.ACTIVITY && q(A.oh.USER_INFO);
  let ei = l.useCallback(e => {
  Y({
    action: 'PRESS_SECTION',
    analyticsLocations: V
  }), K(!0), q(e);
}, [
  Y,
  V
]),
es = null == k ? void 0 : k.profileEffectId;
  return (0, s.jsx)(I.Gt, {
value: V,
children: (0, s.jsx)(Z.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: g,
  messageId: U,
  roleId: M,
  showGuildProfile: !1,
  children: (0, s.jsx)(a.Z, {
    section: y.jXE.PROFILE_MODAL,
    children: (0, s.jsxs)(o.ModalRoot, {
      transitionState: F,
      className: O.root,
      hideShadow: !0,
      'aria-label': R.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, s.jsxs)(j.Z, {
          user: w,
          displayProfile: k,
          profileType: A.y0.MODAL,
          ref: ee,
          children: [
            (0, s.jsx)(T.Z, {
              className: O.topSection,
              displayProfile: k,
              user: w,
              friendToken: b,
              onClose: G,
              isStreaming: (0, c.Z)(W),
              guildId: p,
              channelId: g,
              hasProfileEffect: null != es
            }),
            (0, s.jsx)(j.Z.Overlay, {
              className: O.overlay,
              children: (0, s.jsxs)('div', {
                className: O.body,
                children: [
                  (0, s.jsx)(C.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, s.jsx)(L, {
                    user: w,
                    section: J === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : J,
                    setSection: ei,
                    hasActivity: X,
                    isCurrentUser: Q
                  }) : (0, s.jsx)('div', {
                    className: O.divider
                  }),
                  (0, s.jsx)(N.Z, {
                    displayProfile: k,
                    user: w,
                    autoFocusNote: D === A.Tb.NOTE && !z,
                    selectedSection: J,
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
          isHovering: en
        })
      ]
    })
  })
})
  });
}