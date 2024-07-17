n(47120);
var i = n(735250),
  s = n(470079),
  a = n(948789),
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
  S = n(981631),
  f = n(689938),
  C = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, g.Z)(c.Z.QUEST_HOME_PAGE), {
tabs: n,
selectedTab: N,
onSelectTab: A
  } = (0, T.z)(), {
onScroll: v,
scrollPosition: Z
  } = (0, u.c)(), L = (0, _.Z)({
scrollPosition: Z
  }), O = (0, r.wj)((0, o.ZP)()), {
quests: R
  } = (0, m.bA)(N), x = s.useMemo(() => O ? 'https://cdn.discordapp.com/assets/discovery/quest-mountain-background-dark-mode.png' : 'https://cdn.discordapp.com/assets/discovery/quest-mountain-background-light-mode.png', [O]), b = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of R)
  if (t.id === e) {
    b = e;
    break;
  }
  }
  s.useEffect(() => {
!t && (0, a.uL)(S.Z5c.FRIENDS);
  }, [t]), s.useEffect(() => {}, []);
  let P = s.useCallback(() => {
window.open(I.Z.getArticleURL(S.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, d.Tt)({
location: f.Z.Messages.QUESTS
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
    tabColor: 'header-primary',
    selectedTabColor: O ? 'text-muted' : 'header-primary',
    onTabSelect: A,
    scrollPosition: Z,
    backgroundStyle: L
  }),
  (0, i.jsx)(E.Z, {
    title: f.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: f.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: x,
    onScroll: v,
    bannerContainerClassName: C.bannerContainer,
    bannerImageClassName: C.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: O ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(l.Button, {
      size: 'medium',
      color: O ? l.ButtonColors.TRANSPARENT : l.ButtonColors.WHITE,
      className: C.button,
      onClick: P,
      innerClassName: C.innerButton,
      children: [
        (0, i.jsx)(l.Text, {
          variant: 'text-md/semibold',
          color: O ? 'always-white' : 'text-normal',
          className: C.externalLinkText,
          children: f.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(l.LinkExternalSmallIcon, {
          className: C.icon,
          color: O ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
        })
      ]
    }),
    children: (0, i.jsx)('div', {
      className: C.gridContainer,
      children: (0, i.jsx)(p.Z, {
        quests: R,
        selectedQuestId: b
      })
    })
  })
]
  }) : null;
};