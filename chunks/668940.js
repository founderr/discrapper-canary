"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("212093"),
  r = n("677277"),
  o = n("285865"),
  u = n("683301"),
  d = n("2485"),
  c = n("150192"),
  f = n("889010"),
  E = n("488905"),
  _ = n("347137"),
  h = n("731455"),
  C = n("689938");
let m = e => {
    switch (e) {
      case h.CategoryId.Activity:
        return h.CategoryIcons.Activity;
      case h.CategoryId.Music:
        return h.CategoryIcons.Music;
      case h.CategoryId.Television:
        return h.CategoryIcons.Television;
      case h.CategoryId.Science:
        return h.CategoryIcons.Science;
      case h.CategoryId.Education:
        return h.CategoryIcons.Education;
      default:
        return h.CategoryIcons.Discover
    }
  },
  S = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, s.useStateFromStoresObject)([u.default], () => ({
      currentCategoryId: u.default.getCurrentCategoryId(),
      isViewingSearchResults: u.default.getMostRecentQuery().length > 0
    })), n = (0, s.useStateFromStores)([c.default], () => c.default.getDiscoveryCategories(), [], c.areDiscoveryCategoriesEqual), d = null == n ? void 0 : n.map(e => ({
      ...e,
      icon: m(e.categoryId)
    })), _ = e => {
      (0, i.selectCategory)(e, !0), o.default.closeSidebar(), t && (0, i.clearSearch)()
    };
    return (0, a.jsxs)(l.Scroller, {
      children: [(0, a.jsx)(E.DiscoverySidebarHeader, {
        text: C.default.Messages.DISCOVER
      }), (0, a.jsx)(f.default, {
        categories: d,
        handleCategorySelect: _,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, a.jsx)(r.default, {
        handleCategorySelect: _,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      })]
    })
  };
t.default = function() {
  return (0, d.useClanDiscoveryExperimentEnabled)("guild_discovery_sidebar") ? (0, a.jsx)(_.default, {}) : (0, a.jsx)(S, {})
}