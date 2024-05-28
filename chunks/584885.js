"use strict";
n.r(t), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("570140"),
  r = n("906732"),
  o = n("451603"),
  u = n("885714"),
  d = n("514611"),
  c = n("127541"),
  f = n("981631"),
  E = n("363472");
let C = [
    [1696, 20],
    [1432, 16],
    [1168, 12],
    [0, 8]
  ],
  h = [
    [1696, 30],
    [1432, 24],
    [1168, 18],
    [0, 12]
  ];
t.default = e => {
  let t, {
    title: n,
    subtitle: _,
    guildsData: S,
    analyticsContext: m,
    theme: p,
    onViewGuild: I,
    fetchGuilds: g,
    onGuildCardSeen: T,
    currentCategoryId: A,
    loadId: N,
    onTagClick: v,
    showMoreCards: R = !1
  } = e;
  s.useEffect(() => {
    i.default.wait(() => g())
  }, [A]);
  let O = (0, c.default)(R ? h : C),
    {
      analyticsLocations: L
    } = (0, r.default)();
  if (null == S) return null;
  let {
    guilds: P,
    loading: y
  } = S, M = null == P || 0 === P.length;
  if (!y && M) return null;
  let D = async e => {
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
      let t = P.findIndex(t => t.id === e);
      await I(e, t, m, N)
    }
  };
  if (y || null == P) {
    let e = [];
    for (let t = 0; t < O; t++) e.push((0, a.jsx)(d.default.Placeholder, {}, t));
    t = e
  } else t = P.slice(0, O).map(e => (0, a.jsx)(d.default, {
    className: E.__invalid_guildCard,
    guild: e,
    onView: D,
    theme: p,
    onGuildCardSeen: T,
    onTagClick: v
  }, e.id));
  return (0, a.jsx)("section", {
    className: E.guildListSection,
    children: (0, a.jsxs)(l.HeadingLevel, {
      component: (0, a.jsx)(l.Heading, {
        className: E.__invalid_title,
        variant: "heading-lg/semibold",
        children: n
      }),
      children: [null != _ && (0, a.jsx)(l.Text, {
        className: E.subtitle,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: _
      }), (0, a.jsx)("div", {
        className: E.guildList,
        children: t
      })]
    })
  })
}