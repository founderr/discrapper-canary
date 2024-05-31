"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("442837"),
  r = n("212093"),
  o = n("100527"),
  u = n("570938"),
  d = n("677277"),
  c = n("285865"),
  f = n("702428"),
  E = n("709158"),
  h = n("683301"),
  _ = n("360048"),
  C = n("296386"),
  m = n("150192"),
  S = n("889010"),
  p = n("488905"),
  I = n("731455"),
  g = n("689938"),
  T = n("157552");
let A = e => {
  switch (e) {
    case I.CategoryId.Activity:
      return I.CategoryIcons.Activity;
    case I.CategoryId.Music:
      return I.CategoryIcons.Music;
    case I.CategoryId.Television:
      return I.CategoryIcons.Television;
    case I.CategoryId.Science:
      return I.CategoryIcons.Science;
    case I.CategoryId.Education:
      return I.CategoryIcons.Education;
    default:
      return I.CategoryIcons.Server
  }
};
t.default = function() {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, i.useStateFromStoresObject)([h.default], () => ({
    currentCategoryId: h.default.getCurrentCategoryId(),
    isViewingSearchResults: h.default.getMostRecentQuery().length > 0
  })), n = (0, E.default)(o.default.QUEST_HOME_PAGE), N = (0, i.useStateFromStores)([m.default], () => m.default.getClanDiscoveryCategories(), [], m.areDiscoveryCategoriesEqual), v = null == N ? void 0 : N.map(e => ({
    ...e,
    icon: A(e.categoryId)
  })), R = e => {
    (0, r.selectCategory)(e, !0), c.default.closeSidebar(), t && (0, r.clearSearch)()
  };
  return s.useEffect(() => {
    (0, C.maybeFetchGuildDiscoveryCategories)(!1, !0)
  }, [e]), (0, a.jsxs)(l.Scroller, {
    children: [(0, a.jsx)(p.DiscoverySidebarHeader, {
      text: g.default.Messages.DISCOVER
    }), (0, a.jsx)(_.default, {
      avatar: (0, a.jsx)(u.default, {}),
      name: g.default.Messages.CLANS,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => R(I.CategoryId.Clans),
      wrapContent: !0,
      selected: e === I.CategoryId.Clans,
      className: T.categoryItem,
      selectedClassName: T.selectedCategoryItem,
      innerClassName: T.itemInner
    }, "clan-discovery-home"), (0, a.jsx)(S.default, {
      categories: v,
      handleCategorySelect: R,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, a.jsx)(d.default, {
      handleCategorySelect: R,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), n && (0, a.jsx)(f.default, {
      onClick: () => R(I.CategoryId.Quests),
      isSelected: e === I.CategoryId.Quests
    })]
  })
}