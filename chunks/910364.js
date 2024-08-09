n.d(s, {
  Z: function() {
return P;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(481060),
  r = n(410575),
  a = n(727637),
  d = n(58540),
  c = n(420660),
  u = n(100527),
  _ = n(906732),
  I = n(580552),
  E = n(680295),
  f = n(199902),
  m = n(314897),
  S = n(158776),
  Z = n(594174),
  x = n(785717),
  v = n(221292),
  h = n(621853),
  T = n(318661),
  p = n(726059),
  g = n(162267),
  N = n(502762),
  C = n(62154),
  j = n(293259),
  A = n(725954),
  O = n(228168),
  R = n(981631),
  L = n(689938),
  U = n(376234);

function M(e) {
  var s, n;
  let {
user: l,
isCurrentUser: r,
section: a,
setSection: d,
hasActivity: c
  } = e, u = (0, o.e7)([h.Z], () => {
var e, s;
return (null === (s = h.Z.getUserProfile(l.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null;
  }), _ = null === (s = (0, p.Z)(l.id, !l.bot && !r).mutualFriends) || void 0 === s ? void 0 : s.length, E = null === (n = (0, g.Z)(l.id, !l.bot && !r).mutualGuilds) || void 0 === n ? void 0 : n.length;
  return (0, i.jsx)('div', {
className: U.tabBarContainer,
children: (0, i.jsxs)(t.TabBar, {
  selectedItem: a,
  type: 'top',
  onItemSelect: d,
  className: U.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, I.Z)(l.id) ? (0, i.jsx)(t.TabBar.Item, {
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
      children: null == _ ? L.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : L.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(_)
      })
    }),
    r || l.isClyde() || (0, I.Z)(l.id) ? null : (0, i.jsx)(t.TabBar.Item, {
      className: U.tabBarItem,
      id: O.oh.MUTUAL_GUILDS,
      children: null == E ? L.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : L.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(E)
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
  var s, n;
  let {
user: h,
guildId: p,
channelId: g,
messageId: P,
roleId: b,
sessionId: y,
friendToken: D,
initialSection: B = O.oh.USER_INFO,
initialSubsection: F,
transitionState: G,
sourceAnalyticsLocations: w = [],
onClose: k
  } = e, V = null !== (s = (0, o.e7)([Z.default], () => Z.default.getUser(h.id))) && void 0 !== s ? s : h, Y = (0, T.ZP)(null !== (n = V.id) && void 0 !== n ? n : ''), {
analyticsLocations: H
  } = (0, _.ZP)([
...w,
u.Z.PROFILE_MODAL
  ]), W = (0, x.ZB)({
layout: 'MODAL',
userId: V.id,
sourceSessionId: y,
showGuildProfile: !1,
guildId: p,
channelId: g,
messageId: P,
roleId: b
  });
  (0, d.$)({
[p]: [V.id]
  });
  let z = (0, o.e7)([f.Z], () => null != f.Z.getAnyStreamForUser(V.id)),
K = (0, o.e7)([S.Z], () => S.Z.findActivity(V.id, e => e.type !== R.IIU.CUSTOM_STATUS)),
[Q, q] = l.useState(!1),
[J, X] = l.useState(!V.isNonUserBot() || V.isClyde() || (0, I.Z)(V.id) ? B : O.oh.MUTUAL_GUILDS),
$ = (0, o.e7)([m.default], () => m.default.getId() === V.id),
ee = null != K || z,
es = !$ || ee,
en = l.createRef(),
ei = (0, a.Z)(en);
  !ee && J === O.oh.ACTIVITY && X(O.oh.USER_INFO);
  let el = l.useCallback(e => {
  (0, v.pQ)({
    action: 'PRESS_SECTION',
    analyticsLocations: H,
    ...W
  }), q(!0), X(e);
}, [
  W,
  H
]),
eo = null == Y ? void 0 : Y.profileEffectId;
  return (0, i.jsx)(_.Gt, {
value: H,
children: (0, i.jsx)(x.Mt, {
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
          user: V,
          displayProfile: Y,
          profileType: O.y0.MODAL,
          ref: en,
          children: [
            (0, i.jsx)(j.Z, {
              className: U.topSection,
              displayProfile: Y,
              user: V,
              friendToken: D,
              onClose: k,
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
                    user: V,
                    displayProfile: Y
                  }),
                  es ? (0, i.jsx)(M, {
                    user: V,
                    section: J === O.oh.USER_INFO_CONNECTIONS ? O.oh.USER_INFO : J,
                    setSection: el,
                    hasActivity: ee,
                    isCurrentUser: $
                  }) : (0, i.jsx)('div', {
                    className: U.divider
                  }),
                  (0, i.jsx)(C.Z, {
                    displayProfile: Y,
                    user: V,
                    autoFocusNote: F === O.Tb.NOTE && !Q,
                    selectedSection: J,
                    onClose: k
                  })
                ]
              })
            })
          ]
        }),
        null != eo && (0, i.jsx)(E.Z, {
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