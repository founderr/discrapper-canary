n(47120);
var i = n(735250),
  a = n(470079),
  s = n(948789),
  r = n(442837),
  l = n(780384),
  o = n(481060),
  c = n(410030),
  d = n(100527),
  u = n(252618),
  _ = n(353926),
  h = n(212476),
  E = n(374939),
  I = n(611928),
  m = n(791734),
  g = n(63063),
  p = n(113434),
  T = n(709158),
  S = n(710914),
  f = n(906739),
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
  } = (0, h.c)(), b = (0, l.wj)((0, c.ZP)()), P = (0, r.e7)([_.Z], () => _.Z.hasLoadedExperiments), {
quests: M,
isFetchingCurrentQuests: D
  } = (0, p.bA)(L), y = (0, f.Z)(), j = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of M)
  if (t.id === e) {
    j = e;
    break;
  }
  }
  a.useEffect(() => {
P && !t && (0, s.uL)(N.Z5c.FRIENDS);
  }, [
P,
t
  ]), a.useEffect(() => {}, []);
  let U = a.useCallback(() => {
window.open(g.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, u.Tt)({
location: A.Z.Messages.QUESTS
  }), t && P) ? (0, i.jsxs)('div', {
className: v.container,
children: [
  (0, i.jsxs)(I.ZP, {
    children: [
      (0, i.jsx)('div', {
        className: v.dragRegion
      }),
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
  (0, i.jsx)(E.Z, {
    title: A.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: A.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: y,
    onScroll: R,
    bannerContainerClassName: v.bannerContainer,
    bannerImageClassName: v.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: b ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(o.Button, {
      size: 'medium',
      color: b ? o.ButtonColors.TRANSPARENT : o.ButtonColors.WHITE,
      className: v.button,
      onClick: U,
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
    children: D && 0 === M.length ? (0, i.jsx)(o.Spinner, {
      className: v.spinner
    }) : 0 === M.length && L === p.e5.CLAIMED ? (0, i.jsxs)('div', {
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
      children: (0, i.jsx)(S.Z, {
        quests: M,
        selectedQuestId: j
      })
    })
  })
]
  }) : null;
};