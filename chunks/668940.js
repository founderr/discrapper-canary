var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(212093),
  r = n(100527),
  o = n(963202),
  c = n(677277),
  u = n(285865),
  d = n(702428),
  E = n(709158),
  h = n(683301),
  _ = n(150192),
  I = n(889010),
  m = n(488905),
  T = n(347137),
  g = n(731455),
  p = n(689938);
let N = e => {
    switch (e) {
      case g.Gj.Activity:
        return g.fW.Activity;
      case g.Gj.Music:
        return g.fW.Music;
      case g.Gj.Television:
        return g.fW.Television;
      case g.Gj.Science:
        return g.fW.Science;
      case g.Gj.Education:
        return g.fW.Education;
      default:
        return g.fW.Discover
    }
  },
  S = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, i.cj)([h.ZP], () => ({
      currentCategoryId: h.ZP.getCurrentCategoryId(),
      isViewingSearchResults: h.ZP.getMostRecentQuery().length > 0
    })), n = (0, E.Z)(r.Z.QUEST_HOME_PAGE), o = (0, i.e7)([_.Z], () => _.Z.getDiscoveryCategories(), [], _.j), T = null == o ? void 0 : o.map(e => ({
      ...e,
      icon: N(e.categoryId)
    })), S = e => {
      (0, a.uY)(e, !0), u.Z.closeSidebar(), t && (0, a.AQ)()
    };
    return (0, s.jsxs)(l.Scroller, {
      children: [(0, s.jsx)(m.V, {
        text: p.Z.Messages.DISCOVER
      }), (0, s.jsx)(I.Z, {
        categories: T,
        handleCategorySelect: S,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, s.jsx)(c.Z, {
        handleCategorySelect: S,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), n && (0, s.jsx)(d.Z, {
        onClick: () => S(g.Gj.Quests),
        isSelected: e === g.Gj.Quests
      })]
    })
  };
t.Z = function() {
  let {
    guilds: e
  } = (0, o.C3)({
    location: "guild_discovery_sidebar",
    includeConverted: !0
  }), t = e.length > 0, {
    clanDiscoveryEnabled: n
  } = (0, o.nk)("guild_discovery_sidebar");
  return t || n ? (0, s.jsx)(T.Z, {}) : (0, s.jsx)(S, {})
}