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
  T = n(906739),
  S = n(452081),
  f = n(981631),
  C = n(689938),
  N = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, g.Z)(c.Z.QUEST_HOME_PAGE), {
tabs: n,
selectedTab: A,
onSelectTab: Z
  } = (0, S.z)(), {
onScroll: v,
scrollPosition: L
  } = (0, u.c)(), O = (0, _.Z)({
scrollPosition: L
  }), R = (0, r.wj)((0, o.ZP)()), {
quests: x
  } = (0, m.bA)(A), b = (0, T.Z)(), P = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of x)
  if (t.id === e) {
    P = e;
    break;
  }
  }
  s.useEffect(() => {
!t && (0, a.uL)(f.Z5c.FRIENDS);
  }, [t]), s.useEffect(() => {}, []);
  let M = s.useCallback(() => {
window.open(I.Z.getArticleURL(f.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, d.Tt)({
location: C.Z.Messages.QUESTS
  }), t) ? (0, i.jsxs)('div', {
className: N.container,
children: [
  (0, i.jsx)(h.Z, {
    leading: (0, i.jsx)(l.QuestsIcon, {
      color: l.tokens.colors.HEADER_PRIMARY,
      size: 'md'
    }),
    tabs: n,
    selectedTab: A,
    tabColor: 'header-primary',
    selectedTabColor: R ? 'text-muted' : 'header-primary',
    onTabSelect: Z,
    scrollPosition: L,
    backgroundStyle: O
  }),
  (0, i.jsx)(E.Z, {
    title: C.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: C.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: b,
    onScroll: v,
    bannerContainerClassName: N.bannerContainer,
    bannerImageClassName: N.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: R ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(l.Button, {
      size: 'medium',
      color: R ? l.ButtonColors.TRANSPARENT : l.ButtonColors.WHITE,
      className: N.button,
      onClick: M,
      innerClassName: N.innerButton,
      children: [
        (0, i.jsx)(l.Text, {
          variant: 'text-md/semibold',
          color: R ? 'always-white' : 'text-normal',
          className: N.externalLinkText,
          children: C.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(l.LinkExternalSmallIcon, {
          className: N.icon,
          color: R ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
        })
      ]
    }),
    children: (0, i.jsx)('div', {
      className: N.gridContainer,
      children: (0, i.jsx)(p.Z, {
        quests: x,
        selectedQuestId: P
      })
    })
  })
]
  }) : null;
};