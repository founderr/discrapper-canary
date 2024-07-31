var i = n(735250),
  s = n(470079),
  a = n(948789),
  r = n(481060),
  l = n(442837),
  o = n(212093),
  c = n(100527),
  d = n(570938),
  u = n(677277),
  _ = n(285865),
  h = n(918701),
  E = n(702428),
  I = n(709158),
  m = n(683301),
  g = n(360048),
  p = n(296386),
  T = n(150192),
  S = n(889010),
  f = n(488905),
  C = n(731455),
  N = n(981631),
  A = n(689938),
  v = n(885181);
let Z = e => {
  switch (e) {
case C.Gj.Activity:
  return C.fW.Activity;
case C.Gj.Music:
  return C.fW.Music;
case C.Gj.Television:
  return C.fW.Television;
case C.Gj.Science:
  return C.fW.Science;
case C.Gj.Education:
  return C.fW.Education;
default:
  return C.fW.Server;
  }
};
t.Z = function() {
  let {
currentCategoryId: e,
isViewingSearchResults: t
  } = (0, l.cj)([m.ZP], () => ({
currentCategoryId: m.ZP.getCurrentCategoryId(),
isViewingSearchResults: m.ZP.getMostRecentQuery().length > 0
  })), n = (0, I.Z)(c.Z.QUEST_HOME_PAGE), L = (0, l.e7)([T.Z], () => T.Z.getClanDiscoveryCategories(), [], T.j), O = null == L ? void 0 : L.map(e => ({
...e,
icon: Z(e.categoryId)
  })), R = e => {
(0, o.uY)(e, !0), _.Z.closeSidebar(), t && (0, o.AQ)(), (0, h.OG)() && e !== C.Gj.Quests && (0, a.uL)(N.Z5c.GUILD_DISCOVERY), !(0, h.OG)() && e === C.Gj.Quests && (0, a.uL)(N.Z5c.QUEST_HOME);
  };
  return s.useEffect(() => {
(0, p.le)(!1, !0);
  }, [e]), (0, i.jsxs)(r.Scroller, {
children: [
  (0, i.jsx)(f.V, {
    text: A.Z.Messages.DISCOVER
  }),
  (0, i.jsx)(g.Z, {
    avatar: (0, i.jsx)(d.Z, {}),
    name: A.Z.Messages.CLANS,
    focusProps: {
      offset: {
        right: 4,
        top: 1,
        bottom: 1
      }
    },
    onClick: () => R(C.Gj.Clans),
    wrapContent: !0,
    selected: e === C.Gj.Clans,
    className: v.categoryItem,
    selectedClassName: v.selectedCategoryItem,
    innerClassName: v.itemInner
  }, 'clan-discovery-home'),
  (0, i.jsx)(S.Z, {
    categories: O,
    handleCategorySelect: R,
    currentCategoryId: e,
    shouldDisplaySelectedCategory: !t
  }),
  (0, i.jsx)(u.Z, {
    handleCategorySelect: R,
    currentCategoryId: e,
    shouldDisplaySelectedCategory: !t
  }),
  n && (0, i.jsx)(E.Z, {
    onClick: () => R(C.Gj.Quests),
    isSelected: e === C.Gj.Quests
  })
]
  });
};