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
  c = n("150192"),
  f = n("889010"),
  E = n("488905"),
  C = n("347137"),
  h = n("731455"),
  _ = n("689938");
let S = e => {
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
  m = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, s.useStateFromStoresObject)([d.default], () => ({
      currentCategoryId: d.default.getCurrentCategoryId(),
      isViewingSearchResults: d.default.getMostRecentQuery().length > 0
    })), n = (0, s.useStateFromStores)([c.default], () => c.default.getDiscoveryCategories(), [], c.areDiscoveryCategoriesEqual), r = null == n ? void 0 : n.map(e => ({
      ...e,
      icon: S(e.categoryId)
    })), C = e => {
      (0, i.selectCategory)(e, !0), u.default.closeSidebar(), t && (0, i.clearSearch)()
    };
    return (0, a.jsxs)(l.Scroller, {
      children: [(0, a.jsx)(E.DiscoverySidebarHeader, {
        text: _.default.Messages.DISCOVER
      }), (0, a.jsx)(f.default, {
        categories: r,
        handleCategorySelect: C,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, a.jsx)(o.default, {
        handleCategorySelect: C,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      })]
    })
  };
t.default = function() {
  let {
    guilds: e
  } = (0, r.useClanPrepilotExperimentForAllGuilds)({
    location: "guild_discovery_sidebar",
    includeConverted: !0
  }), t = e.length > 0, {
    clanDiscoveryEnabled: n
  } = (0, r.useClanPilotExperiment)("guild_discovery_sidebar");
  return t || n ? (0, a.jsx)(C.default, {}) : (0, a.jsx)(m, {})
}