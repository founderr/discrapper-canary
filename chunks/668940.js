var i = n(735250);
n(470079);
var a = n(948789),
  s = n(442837),
  r = n(481060),
  l = n(212093),
  o = n(100527),
  c = n(963202),
  d = n(677277),
  u = n(285865),
  _ = n(918701),
  E = n(702428),
  h = n(709158),
  I = n(683301),
  m = n(150192),
  g = n(889010),
  p = n(488905),
  T = n(347137),
  S = n(731455),
  f = n(981631),
  C = n(689938),
  N = n(468918);
let A = e => {
switch (e) {
  case S.Gj.Activity:
    return S.fW.Activity;
  case S.Gj.Music:
    return S.fW.Music;
  case S.Gj.Television:
    return S.fW.Television;
  case S.Gj.Science:
    return S.fW.Science;
  case S.Gj.Education:
    return S.fW.Education;
  default:
    return S.fW.Discover;
}
  },
  v = () => {
let {
  currentCategoryId: e,
  isViewingSearchResults: t
} = (0, s.cj)([I.ZP], () => ({
  currentCategoryId: I.ZP.getCurrentCategoryId(),
  isViewingSearchResults: I.ZP.getMostRecentQuery().length > 0
})), n = (0, h.Z)(o.Z.QUEST_HOME_PAGE), c = (0, s.e7)([m.Z], () => m.Z.getDiscoveryCategories(), [], m.j), T = null == c ? void 0 : c.map(e => ({
  ...e,
  icon: A(e.categoryId)
})), v = e => {
  (0, l.uY)(e, !0), u.Z.closeSidebar(), t && (0, l.AQ)(), (0, _.OG)() && e !== S.Gj.Quests && (0, a.uL)(f.Z5c.GUILD_DISCOVERY), !(0, _.OG)() && e === S.Gj.Quests && (0, a.uL)(f.Z5c.QUEST_HOME);
};
return (0, i.jsxs)(r.Scroller, {
  className: N.sidebarContainer,
  children: [
    (0, i.jsx)(p.V, {
      text: C.Z.Messages.DISCOVER
    }),
    (0, i.jsx)(g.Z, {
      categories: T,
      handleCategorySelect: v,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }),
    (0, i.jsx)(d.Z, {
      handleCategorySelect: v,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }),
    n && (0, i.jsx)(E.Z, {
      onClick: () => v(S.Gj.Quests),
      isSelected: e === S.Gj.Quests
    })
  ]
});
  };
t.Z = function() {
  let {
guilds: e
  } = (0, c.C3)({
location: 'guild_discovery_sidebar',
includeConverted: !0
  }), t = e.length > 0, {
clanDiscoveryEnabled: n
  } = (0, c.nk)('guild_discovery_sidebar');
  return t || n ? (0, i.jsx)(T.Z, {}) : (0, i.jsx)(v, {});
};