"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("442837"),
  r = a("212093"),
  o = a("677277"),
  u = a("285865"),
  d = a("683301"),
  c = a("104259"),
  f = a("360048"),
  E = a("296386"),
  h = a("150192"),
  _ = a("889010"),
  C = a("488905"),
  m = a("731455"),
  S = a("689938"),
  p = a("157552");
let I = e => {
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
  } = (0, i.useStateFromStoresObject)([d.default], () => ({
    currentCategoryId: d.default.getCurrentCategoryId(),
    isViewingSearchResults: d.default.getMostRecentQuery().length > 0
  })), a = (0, i.useStateFromStores)([h.default], () => h.default.getClanDiscoveryCategories(), [], h.areDiscoveryCategoriesEqual), T = null == a ? void 0 : a.map(e => ({
    ...e,
    icon: I(e.categoryId)
  })), g = e => {
    (0, r.selectCategory)(e, !0), u.default.closeSidebar(), t && (0, r.clearSearch)()
  };
  return s.useEffect(() => {
    (0, E.maybeFetchGuildDiscoveryCategories)(!1, !0)
  }, []), (0, n.jsxs)(l.Scroller, {
    children: [(0, n.jsx)(C.DiscoverySidebarHeader, {
      text: S.default.Messages.DISCOVER
    }), (0, n.jsx)(f.default, {
      avatar: (0, n.jsx)(c.default, {}),
      name: S.default.Messages.HOME,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => g(m.CategoryId.Clans),
      wrapContent: !0,
      selected: e === m.CategoryId.Clans,
      className: p.categoryItem,
      selectedClassName: p.selectedCategoryItem,
      innerClassName: p.itemInner
    }, "clan-discovery-home"), (0, n.jsx)(_.default, {
      categories: T,
      handleCategorySelect: g,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, n.jsx)(o.default, {
      handleCategorySelect: g,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    })]
  })
}