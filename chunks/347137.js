var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(442837),
  r = n(212093),
  o = n(100527),
  c = n(570938),
  u = n(677277),
  d = n(285865),
  E = n(702428),
  h = n(709158),
  _ = n(683301),
  I = n(360048),
  m = n(296386),
  T = n(150192),
  g = n(889010),
  p = n(488905),
  N = n(731455),
  S = n(689938),
  C = n(953310);
let A = e => {
  switch (e) {
    case N.Gj.Activity:
      return N.fW.Activity;
    case N.Gj.Music:
      return N.fW.Music;
    case N.Gj.Television:
      return N.fW.Television;
    case N.Gj.Science:
      return N.fW.Science;
    case N.Gj.Education:
      return N.fW.Education;
    default:
      return N.fW.Server
  }
};
t.Z = function() {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, a.cj)([_.ZP], () => ({
    currentCategoryId: _.ZP.getCurrentCategoryId(),
    isViewingSearchResults: _.ZP.getMostRecentQuery().length > 0
  })), n = (0, h.Z)(o.Z.QUEST_HOME_PAGE), f = (0, a.e7)([T.Z], () => T.Z.getClanDiscoveryCategories(), [], T.j), Z = null == f ? void 0 : f.map(e => ({
    ...e,
    icon: A(e.categoryId)
  })), L = e => {
    (0, r.uY)(e, !0), d.Z.closeSidebar(), t && (0, r.AQ)()
  };
  return i.useEffect(() => {
    (0, m.le)(!1, !0)
  }, [e]), (0, s.jsxs)(l.Scroller, {
    children: [(0, s.jsx)(p.V, {
      text: S.Z.Messages.DISCOVER
    }), (0, s.jsx)(I.Z, {
      avatar: (0, s.jsx)(c.Z, {}),
      name: S.Z.Messages.CLANS,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => L(N.Gj.Clans),
      wrapContent: !0,
      selected: e === N.Gj.Clans,
      className: C.categoryItem,
      selectedClassName: C.selectedCategoryItem,
      innerClassName: C.itemInner
    }, "clan-discovery-home"), (0, s.jsx)(g.Z, {
      categories: Z,
      handleCategorySelect: L,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, s.jsx)(u.Z, {
      handleCategorySelect: L,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), n && (0, s.jsx)(E.Z, {
      onClick: () => L(N.Gj.Quests),
      isSelected: e === N.Gj.Quests
    })]
  })
}