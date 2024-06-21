n(653041);
var i = n(735250),
  s = n(470079),
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
    guildsData: g,
    analyticsContext: p,
    theme: N,
    onViewGuild: T,
    fetchGuilds: C,
    onGuildCardSeen: S,
    currentCategoryId: A,
    loadId: f,
    onTagClick: Z,
    showMoreCards: v = !1
  } = e;
  s.useEffect(() => {
    a.Z.wait(() => C())
  }, [A]);
  let L = (0, d.Z)(v ? I : _),
    {
      analyticsLocations: O
    } = (0, r.ZP)();
  if (null == g) return null;
  let {
    guilds: R,
    loading: x
  } = g, M = null == R || 0 === R.length;
  if (!x && M) return null;
  let P = async e => {
    if ((0, o.yU)())(0, c.Z)({
      analyticsSource: {
        page: E.ZY5.GUILD_DISCOVERY
      },
      analyticsLocation: {
        page: E.ZY5.GUILD_DISCOVERY,
        section: E.jXE.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: O
    });
    else {
      let t = R.findIndex(t => t.id === e);
      await T(e, t, p, f)
    }
  };
  if (x || null == R) {
    let e = [];
    for (let t = 0; t < L; t++) e.push((0, i.jsx)(u.Z.Placeholder, {}, t));
    t = e
  } else t = R.slice(0, L).map(e => (0, i.jsx)(u.Z, {
    className: h.__invalid_guildCard,
    guild: e,
    onView: P,
    theme: N,
    onGuildCardSeen: S,
    onTagClick: Z
  }, e.id));
  return (0, i.jsx)("section", {
    className: h.guildListSection,
    children: (0, i.jsxs)(l.HeadingLevel, {
      component: (0, i.jsx)(l.Heading, {
        className: h.__invalid_title,
        variant: "heading-lg/semibold",
        children: n
      }),
      children: [null != m && (0, i.jsx)(l.Text, {
        className: h.subtitle,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m
      }), (0, i.jsx)("div", {
        className: h.guildList,
        children: t
      })]
    })
  })
}