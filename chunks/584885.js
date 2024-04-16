"use strict";
a.r(t), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("570140"),
  r = a("906732"),
  o = a("451603"),
  u = a("885714"),
  d = a("514611"),
  c = a("127541"),
  f = a("981631"),
  E = a("912625");
let h = [
    [1696, 20],
    [1432, 16],
    [1168, 12],
    [0, 8]
  ],
  _ = [
    [1696, 30],
    [1432, 24],
    [1168, 18],
    [0, 12]
  ];
t.default = e => {
  let t, {
    title: a,
    subtitle: C,
    guildsData: m,
    analyticsContext: S,
    theme: I,
    onViewGuild: p,
    fetchGuilds: T,
    onGuildCardSeen: g,
    currentCategoryId: A,
    loadId: N,
    onTagClick: v,
    showMoreCards: R = !1
  } = e;
  s.useEffect(() => {
    i.default.wait(() => T())
  }, [A]);
  let O = (0, c.default)(R ? _ : h),
    {
      analyticsLocations: L
    } = (0, r.default)();
  if (null == m) return null;
  let {
    guilds: M,
    loading: P
  } = m, x = null == M || 0 === M.length;
  if (!P && x) return null;
  let y = async e => {
    if ((0, o.isAtGuildCapAndNonPremium)())(0, u.default)({
      analyticsSource: {
        page: f.AnalyticsPages.GUILD_DISCOVERY
      },
      analyticsLocation: {
        page: f.AnalyticsPages.GUILD_DISCOVERY,
        section: f.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: L
    });
    else {
      let t = M.findIndex(t => t.id === e);
      await p(e, t, S, N)
    }
  };
  if (P || null == M) {
    let e = [];
    for (let t = 0; t < O; t++) e.push((0, n.jsx)(d.default.Placeholder, {}, t));
    t = e
  } else t = M.slice(0, O).map(e => (0, n.jsx)(d.default, {
    className: E.__invalid_guildCard,
    guild: e,
    onView: y,
    theme: I,
    onGuildCardSeen: g,
    onTagClick: v
  }, e.id));
  return (0, n.jsx)("section", {
    className: E.guildListSection,
    children: (0, n.jsxs)(l.HeadingLevel, {
      component: (0, n.jsx)(l.Heading, {
        className: E.__invalid_title,
        variant: "heading-lg/semibold",
        children: a
      }),
      children: [null != C && (0, n.jsx)(l.Text, {
        className: E.subtitle,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: C
      }), (0, n.jsx)("div", {
        className: E.guildList,
        children: t
      })]
    })
  })
}