n(47120);
var i = n(735250),
  s = n(470079),
  a = n(948789),
  r = n(442837),
  l = n(780384),
  o = n(481060),
  c = n(410030),
  d = n(100527),
  u = n(252618),
  _ = n(353926),
  E = n(212476),
  h = n(207986),
  I = n(374939),
  m = n(791734),
  g = n(63063),
  p = n(113434),
  T = n(709158),
  S = n(710914),
  f = n(906739),
  C = n(452081),
  N = n(981631),
  A = n(689938),
  Z = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, T.Z)(d.Z.QUEST_HOME_PAGE), {
tabs: v,
selectedTab: L,
onSelectTab: O
  } = (0, C.z)(), {
onScroll: R,
scrollPosition: x
  } = (0, E.c)(), b = (0, h.Z)({
scrollPosition: x
  }), P = (0, l.wj)((0, c.ZP)()), M = (0, r.e7)([_.Z], () => _.Z.hasLoadedExperiments), {
quests: D
  } = (0, p.bA)(L), y = (0, f.Z)(), j = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of D)
  if (t.id === e) {
    j = e;
    break;
  }
  }
  s.useEffect(() => {
M && !t && (0, a.uL)(N.Z5c.FRIENDS);
  }, [
M,
t
  ]), s.useEffect(() => {}, []);
  let U = s.useCallback(() => {
window.open(g.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, u.Tt)({
location: A.Z.Messages.QUESTS
  }), t && M) ? (0, i.jsxs)('div', {
className: Z.container,
children: [
  (0, i.jsx)(m.Z, {
    leading: (0, i.jsx)(o.QuestsIcon, {
      color: o.tokens.colors.HEADER_PRIMARY,
      size: 'md'
    }),
    tabs: v,
    selectedTab: L,
    tabColor: 'header-primary',
    selectedTabColor: P ? 'text-muted' : 'header-primary',
    onTabSelect: O,
    scrollPosition: x,
    backgroundStyle: b
  }),
  (0, i.jsx)(I.Z, {
    title: A.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: A.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: y,
    onScroll: R,
    bannerContainerClassName: Z.bannerContainer,
    bannerImageClassName: Z.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: P ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(o.Button, {
      size: 'medium',
      color: P ? o.ButtonColors.TRANSPARENT : o.ButtonColors.WHITE,
      className: Z.button,
      onClick: U,
      innerClassName: Z.innerButton,
      children: [
        (0, i.jsx)(o.Text, {
          variant: 'text-md/semibold',
          color: P ? 'always-white' : 'text-normal',
          className: Z.externalLinkText,
          children: A.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(o.LinkExternalSmallIcon, {
          className: Z.icon,
          color: P ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
        })
      ]
    }),
    children: 0 === D.length && L === p.e5.CLAIMED ? (0, i.jsxs)('div', {
      className: Z.emptyState,
      children: [
        (0, i.jsx)(o.EmptyStateImage, {
          darkSrc: n(625065),
          lightSrc: n(875184),
          width: 272,
          height: 222
        }),
        (0, i.jsx)(o.Text, {
          variant: 'text-md/normal',
          color: 'header-secondary',
          children: A.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({
            onClick: () => O(p.e5.UNCLAIMED)
          })
        })
      ]
    }) : (0, i.jsx)('div', {
      className: Z.gridContainer,
      children: (0, i.jsx)(S.Z, {
        quests: D,
        selectedQuestId: j
      })
    })
  })
]
  }) : null;
};