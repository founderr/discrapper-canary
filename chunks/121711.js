var i = n(735250),
  a = n(470079),
  s = n(948789),
  r = n(780384),
  l = n(481060),
  o = n(410030),
  c = n(100527),
  d = n(252618),
  u = n(212476),
  _ = n(207986),
  E = n(374939),
  h = n(791734),
  I = n(63063),
  m = n(113434),
  g = n(709158),
  p = n(710914),
  T = n(452081),
  f = n(981631),
  S = n(689938),
  C = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, g.Z)(c.Z.QUEST_HOME_PAGE), {
tabs: n,
selectedTab: N,
onSelectTab: A
  } = (0, T.z)(), {
handleScroll: v,
scrollPosition: Z
  } = (0, u.c)(), L = (0, _.Z)({
scrollPosition: Z
  }), O = (0, r.wj)((0, o.ZP)()), {
quests: R
  } = (0, m.bA)(N.id), x = a.useMemo(() => O ? 'https://cdn.discordapp.com/assets/discovery/quest-mountain-hero.png' : 'https://cdn.discordapp.com/assets/discovery/quest-mountain-hero-light-mode.png', [O]);
  a.useEffect(() => {
!t && (0, s.uL)(f.Z5c.FRIENDS);
  }, [t]), a.useEffect(() => {}, []);
  let b = a.useCallback(() => {
window.open(I.Z.getArticleURL(f.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, d.Tt)({
location: S.Z.Messages.QUESTS
  }), t) ? (0, i.jsxs)('div', {
className: C.container,
children: [
  (0, i.jsx)(h.Z, {
    leading: (0, i.jsx)(l.QuestsIcon, {
      color: l.tokens.colors.HEADER_PRIMARY,
      size: 'md'
    }),
    tabs: n,
    selectedTab: N,
    onTabSelect: A,
    scrollPosition: Z,
    backgroundStyle: L
  }),
  (0, i.jsx)(E.Z, {
    title: S.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: S.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: x,
    onScroll: v,
    bannerContainerClassName: C.hero,
    button: (0, i.jsxs)(l.Button, {
      size: 'medium',
      color: l.ButtonColors.TRANSPARENT,
      className: C.button,
      onClick: b,
      innerClassName: C.innerButton,
      children: [
        (0, i.jsx)(l.Text, {
          variant: 'text-md/semibold',
          color: 'always-white',
          className: C.externalLinkText,
          children: S.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(l.LinkExternalSmallIcon, {
          className: C.icon,
          color: 'var(--white-500)'
        })
      ]
    }),
    children: (0, i.jsx)('div', {
      className: C.gridContainer,
      children: (0, i.jsx)(p.Z, {
        quests: R
      })
    })
  })
]
  }) : null;
};