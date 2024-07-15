var i = n(735250),
  s = n(470079),
  a = n(948789),
  r = n(481060),
  l = n(100527),
  o = n(252618),
  c = n(212476),
  d = n(374939),
  u = n(791734),
  _ = n(63063),
  E = n(113434),
  h = n(709158),
  I = n(710914),
  m = n(452081),
  g = n(981631),
  p = n(689938),
  T = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, h.Z)(l.Z.QUEST_HOME_PAGE), {
tabs: n,
selectedTab: S,
onSelectTab: C
  } = (0, m.z)(), {
handleScroll: f,
scrollPosition: N
  } = (0, c.c)(), {
quests: A
  } = (0, E.bA)(S.id);
  s.useEffect(() => {
!t && (0, a.uL)(g.Z5c.FRIENDS);
  }, [t]), s.useEffect(() => {}, []);
  let Z = s.useCallback(() => {
window.open(_.Z.getArticleURL(g.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, o.Tt)({
location: p.Z.Messages.QUESTS
  }), t) ? (0, i.jsxs)('div', {
className: T.container,
children: [
  (0, i.jsx)(u.Z, {
    icon: (0, i.jsx)(r.QuestsIcon, {
      color: 'var(--header-primary)'
    }),
    title: p.Z.Messages.QUESTS,
    tabs: n,
    selectedTab: S,
    onTabSelect: C,
    showSearch: !1,
    scrollPosition: N
  }),
  (0, i.jsx)(d.Z, {
    title: p.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: p.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
    onScroll: f,
    button: (0, i.jsxs)(r.Button, {
      size: 'medium',
      className: T.button,
      onClick: Z,
      innerClassName: T.innerButton,
      children: [
        (0, i.jsx)(r.Text, {
          variant: 'text-md/semibold',
          color: 'always-white',
          className: T.externalLinkText,
          children: p.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(r.LinkExternalSmallIcon, {
          className: T.icon,
          color: 'var(--white-500)'
        })
      ]
    }),
    children: (0, i.jsx)('div', {
      className: T.gridContainer,
      children: (0, i.jsx)(I.Z, {
        quests: A
      })
    })
  })
]
  }) : null;
};