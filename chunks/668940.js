var i = n(735250);
n(470079);
var s = n(442837),
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
  g = n(347137),
  p = n(731455),
  T = n(689938);
let N = e => {
    switch (e) {
      case p.Gj.Activity:
        return p.fW.Activity;
      case p.Gj.Music:
        return p.fW.Music;
      case p.Gj.Television:
        return p.fW.Television;
      case p.Gj.Science:
        return p.fW.Science;
      case p.Gj.Education:
        return p.fW.Education;
      default:
        return p.fW.Discover
    }
  },
  S = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, s.cj)([h.ZP], () => ({
      currentCategoryId: h.ZP.getCurrentCategoryId(),
      isViewingSearchResults: h.ZP.getMostRecentQuery().length > 0
    })), n = (0, E.Z)(r.Z.QUEST_HOME_PAGE), o = (0, s.e7)([_.Z], () => _.Z.getDiscoveryCategories(), [], _.j), g = null == o ? void 0 : o.map(e => ({
      ...e,
      icon: N(e.categoryId)
    })), S = e => {
      (0, a.uY)(e, !0), u.Z.closeSidebar(), t && (0, a.AQ)()
    };
    return (0, i.jsxs)(l.Scroller, {
      children: [(0, i.jsx)(m.V, {
        text: T.Z.Messages.DISCOVER
      }), (0, i.jsx)(I.Z, {
        categories: g,
        handleCategorySelect: S,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, i.jsx)(c.Z, {
        handleCategorySelect: S,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), n && (0, i.jsx)(d.Z, {
        onClick: () => S(p.Gj.Quests),
        isSelected: e === p.Gj.Quests
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
  return t || n ? (0, i.jsx)(g.Z, {}) : (0, i.jsx)(S, {})
}