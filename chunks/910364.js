i.d(s, {
  Z: function() {
return b;
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
  v = i(158776),
  S = i(594174),
  x = i(785717),
  Z = i(221292),
  p = i(621853),
  h = i(318661),
  T = i(726059),
  g = i(162267),
  N = i(502762),
  j = i(62154),
  C = i(293259),
  A = i(725954),
  R = i(228168),
  O = i(981631),
  L = i(689938),
  M = i(376234);

function U(e) {
  var s, i;
  let {
user: l,
isCurrentUser: a,
section: r,
setSection: d,
hasActivity: c
  } = e, u = (0, t.e7)([p.Z], () => {
var e, s;
return (null === (s = p.Z.getUserProfile(l.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (s = (0, T.Z)(l.id, !l.bot && !a).mutualFriends) || void 0 === s ? void 0 : s.length, f = null === (i = (0, g.Z)(l.id, !l.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
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
      id: R.oh.USER_INFO,
      children: L.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.ACTIVITY,
      children: L.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || a ? null : (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.MUTUAL_FRIENDS,
      children: null == I ? L.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : L.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    a || l.isClyde() || (0, _.Z)(l.id) ? null : (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.MUTUAL_GUILDS,
      children: null == f ? L.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : L.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, n.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.BOT_DATA_ACCESS,
      children: L.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function b(e) {
  var s, i;
  let {
user: p,
guildId: T,
channelId: g,
messageId: b,
roleId: P,
sessionId: y,
friendToken: D,
initialSection: F = R.oh.USER_INFO,
initialSubsection: B,
transitionState: G,
sourceAnalyticsLocations: w = [],
onClose: k
  } = e, V = null !== (s = (0, t.e7)([S.default], () => S.default.getUser(p.id))) && void 0 !== s ? s : p, Y = (0, h.ZP)(null !== (i = V.id) && void 0 !== i ? i : ''), {
analyticsLocations: W
  } = (0, I.ZP)([
...w,
u.Z.PROFILE_MODAL
  ]), H = (0, x.ZB)({
layout: 'MODAL',
userId: V.id,
sourceSessionId: y,
showGuildProfile: !1,
guildId: T,
channelId: g,
messageId: b,
roleId: P
  });
  (0, d.$)({
[T]: [V.id]
  });
  let z = (0, t.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(V.id)),
K = (0, t.e7)([v.Z], () => v.Z.findActivity(V.id, e => e.type !== O.IIU.CUSTOM_STATUS)),
[q, Q] = l.useState(!1),
[J, X] = l.useState(!V.isNonUserBot() || V.isClyde() || (0, _.Z)(V.id) ? F : R.oh.MUTUAL_GUILDS),
$ = (0, t.e7)([m.default], () => m.default.getId() === V.id),
ee = null != K || z,
es = !$ || ee,
ei = l.createRef(),
en = (0, r.Z)(ei);
  !ee && J === R.oh.ACTIVITY && X(R.oh.USER_INFO);
  let el = l.useCallback(e => {
  (0, Z.pQ)({
    action: 'PRESS_SECTION',
    analyticsLocations: W,
    ...H
  }), Q(!0), X(e);
}, [
  H,
  W
]),
et = null == Y ? void 0 : Y.profileEffectId;
  return (0, n.jsx)(I.Gt, {
value: W,
children: (0, n.jsx)(x.Mt, {
  value: H,
  children: (0, n.jsx)(a.Z, {
    section: O.jXE.PROFILE_MODAL,
    children: (0, n.jsxs)(o.ModalRoot, {
      transitionState: G,
      className: M.root,
      hideShadow: !0,
      'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, n.jsxs)(N.Z, {
          user: V,
          displayProfile: Y,
          profileType: R.y0.MODAL,
          ref: ei,
          children: [
            (0, n.jsx)(C.Z, {
              className: M.topSection,
              displayProfile: Y,
              user: V,
              friendToken: D,
              onClose: k,
              isStreaming: (0, c.Z)(K),
              guildId: T,
              channelId: g,
              hasProfileEffect: null != et
            }),
            (0, n.jsx)(N.Z.Overlay, {
              className: M.overlay,
              children: (0, n.jsxs)('div', {
                className: M.body,
                children: [
                  (0, n.jsx)(A.Z, {
                    user: V,
                    displayProfile: Y
                  }),
                  es ? (0, n.jsx)(U, {
                    user: V,
                    section: J === R.oh.USER_INFO_CONNECTIONS ? R.oh.USER_INFO : J,
                    setSection: el,
                    hasActivity: ee,
                    isCurrentUser: $
                  }) : (0, n.jsx)('div', {
                    className: M.divider
                  }),
                  (0, n.jsx)(j.Z, {
                    displayProfile: Y,
                    user: V,
                    autoFocusNote: B === R.Tb.NOTE && !q,
                    selectedSection: J,
                    onClose: k
                  })
                ]
              })
            })
          ]
        }),
        null != et && (0, n.jsx)(f.Z, {
          profileEffectId: et,
          bannerAdjustment: 0,
          isHovering: en
        })
      ]
    })
  })
})
  });
}