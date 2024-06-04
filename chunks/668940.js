"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("212093"),
  r = n("100527"),
  o = n("963202"),
  u = n("677277"),
  d = n("285865"),
  c = n("702428"),
  f = n("709158"),
  E = n("683301"),
  h = n("150192"),
  _ = n("889010"),
  C = n("488905"),
  m = n("347137"),
  S = n("731455"),
  p = n("689938");
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
        return S.CategoryIcons.Discover
    }
  },
  g = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, s.useStateFromStoresObject)([E.default], () => ({
      currentCategoryId: E.default.getCurrentCategoryId(),
      isViewingSearchResults: E.default.getMostRecentQuery().length > 0
    })), n = (0, f.default)(r.default.QUEST_HOME_PAGE), o = (0, s.useStateFromStores)([h.default], () => h.default.getDiscoveryCategories(), [], h.areDiscoveryCategoriesEqual), m = null == o ? void 0 : o.map(e => ({
      ...e,
      icon: I(e.categoryId)
    })), g = e => {
      (0, i.selectCategory)(e, !0), d.default.closeSidebar(), t && (0, i.clearSearch)()
    };
    return (0, a.jsxs)(l.Scroller, {
      children: [(0, a.jsx)(C.DiscoverySidebarHeader, {
        text: p.default.Messages.DISCOVER
      }), (0, a.jsx)(_.default, {
        categories: m,
        handleCategorySelect: g,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, a.jsx)(u.default, {
        handleCategorySelect: g,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), n && (0, a.jsx)(c.default, {
        onClick: () => g(S.CategoryId.Quests),
        isSelected: e === S.CategoryId.Quests
      })]
    })
  };
t.default = function() {
  let {
    guilds: e
  } = (0, o.useClanPrepilotExperimentForAllGuilds)({
    location: "guild_discovery_sidebar",
    includeConverted: !0
  }), t = e.length > 0, {
    clanDiscoveryEnabled: n
  } = (0, o.useClanPilotExperiment)("guild_discovery_sidebar");
  return t || n ? (0, a.jsx)(m.default, {}) : (0, a.jsx)(g, {})
}