"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("212093"),
  r = a("677277"),
  o = a("285865"),
  u = a("683301"),
  d = a("2485"),
  c = a("150192"),
  f = a("889010"),
  E = a("488905"),
  h = a("347137"),
  _ = a("731455"),
  C = a("689938");
let m = e => {
    switch (e) {
      case _.CategoryId.Activity:
        return _.CategoryIcons.Activity;
      case _.CategoryId.Music:
        return _.CategoryIcons.Music;
      case _.CategoryId.Television:
        return _.CategoryIcons.Television;
      case _.CategoryId.Science:
        return _.CategoryIcons.Science;
      case _.CategoryId.Education:
        return _.CategoryIcons.Education;
      default:
        return _.CategoryIcons.Discover
    }
  },
  S = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, s.useStateFromStoresObject)([u.default], () => ({
      currentCategoryId: u.default.getCurrentCategoryId(),
      isViewingSearchResults: u.default.getMostRecentQuery().length > 0
    })), a = (0, s.useStateFromStores)([c.default], () => c.default.getDiscoveryCategories(), [], c.areDiscoveryCategoriesEqual), d = null == a ? void 0 : a.map(e => ({
      ...e,
      icon: m(e.categoryId)
    })), h = e => {
      (0, i.selectCategory)(e, !0), o.default.closeSidebar(), t && (0, i.clearSearch)()
    };
    return (0, n.jsxs)(l.Scroller, {
      children: [(0, n.jsx)(E.DiscoverySidebarHeader, {
        text: C.default.Messages.DISCOVER
      }), (0, n.jsx)(f.default, {
        categories: d,
        handleCategorySelect: h,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, n.jsx)(r.default, {
        handleCategorySelect: h,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      })]
    })
  };
t.default = function() {
  return (0, d.useClanDiscoveryExperimentEnabled)("guild_discovery_sidebar") ? (0, n.jsx)(h.default, {}) : (0, n.jsx)(S, {})
}