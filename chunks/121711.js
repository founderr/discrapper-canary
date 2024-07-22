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
  h = n(374939),
  I = n(611928),
  m = n(791734),
  g = n(63063),
  p = n(113434),
  T = n(709158),
  f = n(710914),
  S = n(906739),
  C = n(452081),
  N = n(981631),
  A = n(689938),
  v = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, T.Z)(d.Z.QUEST_HOME_PAGE), {
tabs: Z,
selectedTab: L,
onSelectTab: O
  } = (0, C.z)(), {
onScroll: R,
scrollPosition: x
  } = (0, E.c)(), b = (0, l.wj)((0, c.ZP)()), P = (0, r.e7)([_.Z], () => _.Z.hasLoadedExperiments), {
quests: M
  } = (0, p.bA)(L), D = (0, S.Z)(), y = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of M)
  if (t.id === e) {
    y = e;
    break;
  }
  }
  s.useEffect(() => {
P && !t && (0, a.uL)(N.Z5c.FRIENDS);
  }, [
P,
t
  ]), s.useEffect(() => {}, []);
  let j = s.useCallback(() => {
window.open(g.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, u.Tt)({
location: A.Z.Messages.QUESTS
  }), t && P) ? (0, i.jsxs)('div', {
className: v.container,
children: [
  (0, i.jsxs)(I.ZP, {
    children: [
      (0, i.jsx)(I.z6, {
        scrollPosition: x
      }),
      (0, i.jsx)(I.aV, {
        icon: o.QuestsIcon
      }),
      (0, i.jsx)(m.Z, {
        tabs: Z,
        selectedTab: L,
        onTabSelect: O
      })
    ]
  }),
  (0, i.jsx)(h.Z, {
    title: A.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: A.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: D,
    onScroll: R,
    bannerContainerClassName: v.bannerContainer,
    bannerImageClassName: v.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: b ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(o.Button, {
      size: 'medium',
      color: b ? o.ButtonColors.TRANSPARENT : o.ButtonColors.WHITE,
      className: v.button,
      onClick: j,
      innerClassName: v.innerButton,
      children: [
        (0, i.jsx)(o.Text, {
          variant: 'text-md/semibold',
          color: b ? 'always-white' : 'text-normal',
          className: v.externalLinkText,
          children: A.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(o.LinkExternalSmallIcon, {
          className: v.icon,
          color: b ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
        })
      ]
    }),
    children: 0 === M.length && L === p.e5.CLAIMED ? (0, i.jsxs)('div', {
      className: v.emptyState,
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
      className: v.gridContainer,
      children: (0, i.jsx)(f.Z, {
        quests: M,
        selectedQuestId: y
      })
    })
  })
]
  }) : null;
};