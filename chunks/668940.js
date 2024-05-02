"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("212093"),
  r = n("963202"),
  o = n("677277"),
  u = n("285865"),
  d = n("683301"),
  c = n("430824"),
  f = n("2485"),
  E = n("150192"),
  h = n("889010"),
  _ = n("488905"),
  C = n("347137"),
  m = n("731455"),
  S = n("689938");
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
        return m.CategoryIcons.Discover
    }
  },
  I = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, s.useStateFromStoresObject)([d.default], () => ({
      currentCategoryId: d.default.getCurrentCategoryId(),
      isViewingSearchResults: d.default.getMostRecentQuery().length > 0
    })), n = (0, s.useStateFromStores)([E.default], () => E.default.getDiscoveryCategories(), [], E.areDiscoveryCategoriesEqual), r = null == n ? void 0 : n.map(e => ({
      ...e,
      icon: p(e.categoryId)
    })), c = e => {
      (0, i.selectCategory)(e, !0), u.default.closeSidebar(), t && (0, i.clearSearch)()
    };
    return (0, a.jsxs)(l.Scroller, {
      children: [(0, a.jsx)(_.DiscoverySidebarHeader, {
        text: S.default.Messages.DISCOVER
      }), (0, a.jsx)(h.default, {
        categories: r,
        handleCategorySelect: c,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, a.jsx)(o.default, {
        handleCategorySelect: c,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      })]
    })
  };
t.default = function() {
  let e = (0, s.useStateFromStoresArray)([c.default], () => Object.values(c.default.getGuilds())),
    t = (0, r.useAnyClanGuildExperimentEnabled)(e, "guild_discovery_sidebar"),
    n = (0, f.useClanDiscoveryExperimentEnabled)("guild_discovery_sidebar");
  return t || n ? (0, a.jsx)(C.default, {}) : (0, a.jsx)(I, {})
}