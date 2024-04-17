"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("442837"),
  r = n("212093"),
  o = n("677277"),
  u = n("285865"),
  d = n("683301"),
  c = n("104259"),
  f = n("360048"),
  E = n("296386"),
  h = n("150192"),
  _ = n("889010"),
  C = n("488905"),
  m = n("731455"),
  S = n("689938"),
  I = n("393810");
let p = e => {
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
  })), n = (0, i.useStateFromStores)([h.default], () => h.default.getClanDiscoveryCategories(), [], h.areDiscoveryCategoriesEqual), T = null == n ? void 0 : n.map(e => ({
    ...e,
    icon: p(e.categoryId)
  })), g = e => {
    (0, r.selectCategory)(e, !0), u.default.closeSidebar(), t && (0, r.clearSearch)()
  };
  return s.useEffect(() => {
    (0, E.maybeFetchGuildDiscoveryCategories)(!1, !0)
  }, []), (0, a.jsxs)(l.Scroller, {
    children: [(0, a.jsx)(C.DiscoverySidebarHeader, {
      text: S.default.Messages.DISCOVER
    }), (0, a.jsx)(f.default, {
      avatar: (0, a.jsx)(c.default, {}),
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
      className: I.categoryItem,
      selectedClassName: I.selectedCategoryItem,
      innerClassName: I.itemInner
    }, "clan-discovery-home"), (0, a.jsx)(_.default, {
      categories: T,
      handleCategorySelect: g,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, a.jsx)(o.default, {
      handleCategorySelect: g,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    })]
  })
}