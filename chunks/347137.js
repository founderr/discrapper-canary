var i = n(735250),
  s = n(470079),
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
  g = n(150192),
  p = n(889010),
  N = n(488905),
  T = n(731455),
  C = n(689938),
  S = n(953310);
let A = e => {
  switch (e) {
    case T.Gj.Activity:
      return T.fW.Activity;
    case T.Gj.Music:
      return T.fW.Music;
    case T.Gj.Television:
      return T.fW.Television;
    case T.Gj.Science:
      return T.fW.Science;
    case T.Gj.Education:
      return T.fW.Education;
    default:
      return T.fW.Server
  }
};
t.Z = function() {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, a.cj)([_.ZP], () => ({
    currentCategoryId: _.ZP.getCurrentCategoryId(),
    isViewingSearchResults: _.ZP.getMostRecentQuery().length > 0
  })), n = (0, h.Z)(o.Z.QUEST_HOME_PAGE), f = (0, a.e7)([g.Z], () => g.Z.getClanDiscoveryCategories(), [], g.j), Z = null == f ? void 0 : f.map(e => ({
    ...e,
    icon: A(e.categoryId)
  })), v = e => {
    (0, r.uY)(e, !0), d.Z.closeSidebar(), t && (0, r.AQ)()
  };
  return s.useEffect(() => {
    (0, m.le)(!1, !0)
  }, [e]), (0, i.jsxs)(l.Scroller, {
    children: [(0, i.jsx)(N.V, {
      text: C.Z.Messages.DISCOVER
    }), (0, i.jsx)(I.Z, {
      avatar: (0, i.jsx)(c.Z, {}),
      name: C.Z.Messages.CLANS,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => v(T.Gj.Clans),
      wrapContent: !0,
      selected: e === T.Gj.Clans,
      className: S.categoryItem,
      selectedClassName: S.selectedCategoryItem,
      innerClassName: S.itemInner
    }, "clan-discovery-home"), (0, i.jsx)(p.Z, {
      categories: Z,
      handleCategorySelect: v,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, i.jsx)(u.Z, {
      handleCategorySelect: v,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), n && (0, i.jsx)(E.Z, {
      onClick: () => v(T.Gj.Quests),
      isSelected: e === T.Gj.Quests
    })]
  })
}