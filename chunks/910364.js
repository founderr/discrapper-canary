s.d(n, {
  Z: function() {
return P;
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
  x = s(221292),
  h = s(621853),
  T = s(318661),
  p = s(726059),
  g = s(162267),
  N = s(502762),
  C = s(62154),
  j = s(293259),
  A = s(725954),
  O = s(228168),
  R = s(981631),
  L = s(689938),
  U = s(376234);

function M(e) {
  var n, s;
  let {
user: l,
isCurrentUser: r,
section: a,
setSection: d,
hasActivity: c
  } = e, u = (0, o.e7)([h.Z], () => {
var e, n;
return (null === (n = h.Z.getUserProfile(l.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (n = (0, p.Z)(l.id, !l.bot && !r).mutualFriends) || void 0 === n ? void 0 : n.length, f = null === (s = (0, g.Z)(l.id, !l.bot && !r).mutualGuilds) || void 0 === s ? void 0 : s.length;
  return (0, i.jsx)('div', {
className: U.tabBarContainer,
children: (0, i.jsxs)(t.TabBar, {
  selectedItem: a,
  type: 'top',
  onItemSelect: d,
  className: U.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, _.Z)(l.id) ? (0, i.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: O.oh.USER_INFO,
      children: L.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, i.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: O.oh.ACTIVITY,
      children: L.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || r ? null : (0, i.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: O.oh.MUTUAL_FRIENDS,
      children: null == I ? L.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : L.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    r || l.isClyde() || (0, _.Z)(l.id) ? null : (0, i.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: O.oh.MUTUAL_GUILDS,
      children: null == f ? L.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : L.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, i.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: O.oh.BOT_DATA_ACCESS,
      children: L.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function P(e) {
  var n, s;
  let {
user: h,
guildId: p,
channelId: g,
messageId: P,
roleId: b,
sessionId: y,
friendToken: D,
initialSection: F = O.oh.USER_INFO,
initialSubsection: B,
transitionState: G,
sourceAnalyticsLocations: w = [],
onClose: V
  } = e, k = null !== (n = (0, o.e7)([Z.default], () => Z.default.getUser(h.id))) && void 0 !== n ? n : h, Y = (0, T.ZP)(null !== (s = k.id) && void 0 !== s ? s : ''), {
analyticsLocations: H
  } = (0, I.ZP)([
...w,
u.Z.PROFILE_MODAL
  ]), W = (0, v.ZB)({
layout: 'MODAL',
userId: k.id,
sourceSessionId: y,
showGuildProfile: !1,
guildId: p,
channelId: g,
messageId: P,
roleId: b
  });
  (0, d.$)({
[p]: [k.id]
  });
  let z = (0, o.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(k.id)),
K = (0, o.e7)([S.Z], () => S.Z.findActivity(k.id, e => e.type !== R.IIU.CUSTOM_STATUS)),
[Q, q] = l.useState(!1),
[J, X] = l.useState(!k.isNonUserBot() || k.isClyde() || (0, _.Z)(k.id) ? F : O.oh.MUTUAL_GUILDS),
$ = (0, o.e7)([m.default], () => m.default.getId() === k.id),
ee = null != K || z,
en = !$ || ee,
es = l.createRef(),
ei = (0, a.Z)(es);
  !ee && J === O.oh.ACTIVITY && X(O.oh.USER_INFO);
  let el = l.useCallback(e => {
  (0, x.pQ)({
    action: 'PRESS_SECTION',
    analyticsLocations: H,
    ...W
  }), q(!0), X(e);
}, [
  W,
  H
]),
eo = null == Y ? void 0 : Y.profileEffectId;
  return (0, i.jsx)(I.Gt, {
value: H,
children: (0, i.jsx)(v.Mt, {
  value: W,
  children: (0, i.jsx)(r.Z, {
    section: R.jXE.PROFILE_MODAL,
    children: (0, i.jsxs)(t.ModalRoot, {
      transitionState: G,
      className: U.root,
      hideShadow: !0,
      'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, i.jsxs)(N.Z, {
          user: k,
          displayProfile: Y,
          profileType: O.y0.MODAL,
          ref: es,
          children: [
            (0, i.jsx)(j.Z, {
              className: U.topSection,
              displayProfile: Y,
              user: k,
              friendToken: D,
              onClose: V,
              isStreaming: (0, c.Z)(K),
              guildId: p,
              channelId: g,
              hasProfileEffect: null != eo
            }),
            (0, i.jsx)(N.Z.Overlay, {
              className: U.overlay,
              children: (0, i.jsxs)('div', {
                className: U.body,
                children: [
                  (0, i.jsx)(A.Z, {
                    user: k,
                    displayProfile: Y
                  }),
                  en ? (0, i.jsx)(M, {
                    user: k,
                    section: J === O.oh.USER_INFO_CONNECTIONS ? O.oh.USER_INFO : J,
                    setSection: el,
                    hasActivity: ee,
                    isCurrentUser: $
                  }) : (0, i.jsx)('div', {
                    className: U.divider
                  }),
                  (0, i.jsx)(C.Z, {
                    displayProfile: Y,
                    user: k,
                    autoFocusNote: B === O.Tb.NOTE && !Q,
                    selectedSection: J,
                    onClose: V
                  })
                ]
              })
            })
          ]
        }),
        null != eo && (0, i.jsx)(f.Z, {
          profileEffectId: eo,
          bannerAdjustment: 0,
          isHovering: ei
        })
      ]
    })
  })
})
  });
}