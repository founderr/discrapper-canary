"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("442837"),
  r = n("212093"),
  o = n("570938"),
  u = n("677277"),
  d = n("285865"),
  c = n("683301"),
  f = n("360048"),
  E = n("296386"),
  C = n("150192"),
  h = n("889010"),
  _ = n("488905"),
  S = n("731455"),
  m = n("689938"),
  p = n("157552");
let I = e => {
  switch (e) {
    case S.CategoryId.Activity:
      return S.CategoryIcons.Activity;
    case S.CategoryId.Music:
      return S.CategoryIcons.Music;
    case S.CategoryId.Television:
      return S.CategoryIcons.Television;
    case S.CategoryId.Science:
      return S.CategoryIcons.Science;
    case S.CategoryId.Education:
      return S.CategoryIcons.Education;
    default:
      return S.CategoryIcons.Server
  }
};
t.default = function() {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, i.useStateFromStoresObject)([c.default], () => ({
    currentCategoryId: c.default.getCurrentCategoryId(),
    isViewingSearchResults: c.default.getMostRecentQuery().length > 0
  })), n = (0, i.useStateFromStores)([C.default], () => C.default.getClanDiscoveryCategories(), [], C.areDiscoveryCategoriesEqual), g = null == n ? void 0 : n.map(e => ({
    ...e,
    icon: I(e.categoryId)
  })), T = e => {
    (0, r.selectCategory)(e, !0), d.default.closeSidebar(), t && (0, r.clearSearch)()
  };
  return s.useEffect(() => {
    (0, E.maybeFetchGuildDiscoveryCategories)(!1, !0)
  }, [e]), (0, a.jsxs)(l.Scroller, {
    children: [(0, a.jsx)(_.DiscoverySidebarHeader, {
      text: m.default.Messages.DISCOVER
    }), (0, a.jsx)(f.default, {
      avatar: (0, a.jsx)(o.default, {}),
      name: m.default.Messages.CLANS,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => T(S.CategoryId.Clans),
      wrapContent: !0,
      selected: e === S.CategoryId.Clans,
      className: p.categoryItem,
      selectedClassName: p.selectedCategoryItem,
      innerClassName: p.itemInner
    }, "clan-discovery-home"), (0, a.jsx)(h.default, {
      categories: g,
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