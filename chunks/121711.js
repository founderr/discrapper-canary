var i = n(735250),
  s = n(470079),
  a = n(948789),
  r = n(481060),
  l = n(100527),
  o = n(252618),
  c = n(212476),
  d = n(207986),
  u = n(374939),
  _ = n(791734),
  E = n(63063),
  h = n(113434),
  I = n(709158),
  m = n(710914),
  g = n(452081),
  p = n(981631),
  T = n(689938),
  S = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, I.Z)(l.Z.QUEST_HOME_PAGE), {
tabs: n,
selectedTab: f,
onSelectTab: C
  } = (0, g.z)(), {
handleScroll: N,
scrollPosition: A
  } = (0, c.c)(), Z = (0, d.Z)({
scrollPosition: A
  }), {
quests: L
  } = (0, h.bA)(f.id);
  s.useEffect(() => {
!t && (0, a.uL)(p.Z5c.FRIENDS);
  }, [t]), s.useEffect(() => {}, []);
  let v = s.useCallback(() => {
window.open(E.Z.getArticleURL(p.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, o.Tt)({
location: T.Z.Messages.QUESTS
  }), t) ? (0, i.jsxs)('div', {
className: S.container,
children: [
  (0, i.jsx)(_.Z, {
    leading: (0, i.jsx)(r.QuestsIcon, {
      color: r.tokens.colors.HEADER_PRIMARY,
      size: 'md'
    }),
    tabs: n,
    selectedTab: f,
    onTabSelect: C,
    scrollPosition: A,
    backgroundStyle: Z
  }),
  (0, i.jsx)(u.Z, {
    title: T.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: T.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
    onScroll: N,
    button: (0, i.jsxs)(r.Button, {
      size: 'medium',
      className: S.button,
      onClick: v,
      innerClassName: S.innerButton,
      children: [
        (0, i.jsx)(r.Text, {
          variant: 'text-md/semibold',
          color: 'always-white',
          className: S.externalLinkText,
          children: T.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(r.LinkExternalSmallIcon, {
          className: S.icon,
          color: 'var(--white-500)'
        })
      ]
    }),
    children: (0, i.jsx)('div', {
      className: S.gridContainer,
      children: (0, i.jsx)(m.Z, {
        quests: L
      })
    })
  })
]
  }) : null;
};