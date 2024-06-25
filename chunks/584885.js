n(653041);
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(570140),
  r = n(906732),
  o = n(451603),
  c = n(885714),
  u = n(514611),
  d = n(127541),
  E = n(981631),
  h = n(48676);
let _ = [
    [1696, 20],
    [1432, 16],
    [1168, 12],
    [0, 8]
  ],
  I = [
    [1696, 30],
    [1432, 24],
    [1168, 18],
    [0, 12]
  ];
t.Z = e => {
  let t, {
    title: n,
    subtitle: m,
    guildsData: T,
    analyticsContext: g,
    theme: p,
    onViewGuild: N,
    fetchGuilds: S,
    onGuildCardSeen: C,
    currentCategoryId: A,
    loadId: f,
    onTagClick: Z,
    showMoreCards: L = !1
  } = e;
  i.useEffect(() => {
    a.Z.wait(() => S())
  }, [A]);
  let O = (0, d.Z)(L ? I : _),
    {
      analyticsLocations: v
    } = (0, r.ZP)();
  if (null == T) return null;
  let {
    guilds: R,
    loading: P
  } = T, x = null == R || 0 === R.length;
  if (!P && x) return null;
  let M = async e => {
    if ((0, o.yU)())(0, c.Z)({
      analyticsSource: {
        page: E.ZY5.GUILD_DISCOVERY
      },
      analyticsLocation: {
        page: E.ZY5.GUILD_DISCOVERY,
        section: E.jXE.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: v
    });
    else {
      let t = R.findIndex(t => t.id === e);
      await N(e, t, g, f)
    }
  };
  if (P || null == R) {
    let e = [];
    for (let t = 0; t < O; t++) e.push((0, s.jsx)(u.Z.Placeholder, {}, t));
    t = e
  } else t = R.slice(0, O).map(e => (0, s.jsx)(u.Z, {
    className: h.__invalid_guildCard,
    guild: e,
    onView: M,
    theme: p,
    onGuildCardSeen: C,
    onTagClick: Z
  }, e.id));
  return (0, s.jsx)("section", {
    className: h.guildListSection,
    children: (0, s.jsxs)(l.HeadingLevel, {
      component: (0, s.jsx)(l.Heading, {
        className: h.__invalid_title,
        variant: "heading-lg/semibold",
        children: n
      }),
      children: [null != m && (0, s.jsx)(l.Text, {
        className: h.subtitle,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m
      }), (0, s.jsx)("div", {
        className: h.guildList,
        children: t
      })]
    })
  })
}