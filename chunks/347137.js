"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("481060"),
  l = n("442837"),
  r = n("212093"),
  o = n("570938"),
  u = n("677277"),
  d = n("285865"),
  c = n("683301"),
  f = n("360048"),
  E = n("296386"),
  h = n("150192"),
  _ = n("889010"),
  C = n("488905"),
  m = n("731455"),
  p = n("689938"),
  S = n("157552");
let g = e => {
  switch (e) {
    case m.CategoryId.Activity:
      return m.CategoryIcons.Activity;
    case m.CategoryId.Music:
      return m.CategoryIcons.Music;
    case m.CategoryId.Television:
      return m.CategoryIcons.Television;
    case m.CategoryId.Science:
      return m.CategoryIcons.Science;
    case m.CategoryId.Education:
      return m.CategoryIcons.Education;
    default:
      return m.CategoryIcons.Server
  }
};
t.default = function() {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, l.useStateFromStoresObject)([c.default], () => ({
    currentCategoryId: c.default.getCurrentCategoryId(),
    isViewingSearchResults: c.default.getMostRecentQuery().length > 0
  })), n = (0, l.useStateFromStores)([h.default], () => h.default.getClanDiscoveryCategories(), [], h.areDiscoveryCategoriesEqual), I = null == n ? void 0 : n.map(e => ({
    ...e,
    icon: g(e.categoryId)
  })), T = e => {
    (0, r.selectCategory)(e, !0), d.default.closeSidebar(), t && (0, r.clearSearch)()
  };
  return s.useEffect(() => {
    (0, E.maybeFetchGuildDiscoveryCategories)(!1, !0)
  }, [e]), (0, a.jsxs)(i.Scroller, {
    children: [(0, a.jsx)(C.DiscoverySidebarHeader, {
      text: p.default.Messages.DISCOVER
    }), (0, a.jsx)(f.default, {
      avatar: (0, a.jsx)(o.default, {}),
      name: p.default.Messages.CLANS,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => T(m.CategoryId.Clans),
      wrapContent: !0,
      selected: e === m.CategoryId.Clans,
      className: S.categoryItem,
      selectedClassName: S.selectedCategoryItem,
      innerClassName: S.itemInner
    }, "clan-discovery-home"), (0, a.jsx)(_.default, {
      categories: I,
      handleCategorySelect: T,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, a.jsx)(u.default, {
      handleCategorySelect: T,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    })]
  })
}