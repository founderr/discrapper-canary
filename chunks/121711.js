n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(780384),
  l = n(481060),
  o = n(230711),
  c = n(410030),
  d = n(100527),
  u = n(252618),
  _ = n(353926),
  h = n(212476),
  E = n(374939),
  I = n(611928),
  m = n(791734),
  g = n(703656),
  p = n(63063),
  T = n(113434),
  S = n(709158),
  f = n(710914),
  C = n(906739),
  N = n(452081),
  A = n(981631),
  v = n(689938),
  Z = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, S.Z)(d.Z.QUEST_HOME_PAGE), {
tabs: L,
selectedTab: O,
onSelectTab: R
  } = (0, N.z)(), {
onScroll: x,
scrollPosition: b
  } = (0, h.c)(), P = (0, r.wj)((0, c.ZP)()), M = (0, s.e7)([_.Z], () => _.Z.hasLoadedExperiments), {
quests: D,
isFetchingCurrentQuests: y
  } = (0, T.bA)(O), j = (0, C.Z)(), U = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of D)
  if (t.id === e) {
    U = e;
    break;
  }
  }
  a.useEffect(() => {
M && !t && ((0, g.dL)(A.Z5c.FRIENDS), o.Z.open(A.oAB.INVENTORY));
  }, [
M,
t
  ]), a.useEffect(() => {}, []);
  let G = a.useCallback(() => {
window.open(p.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, u.Tt)({
location: v.Z.Messages.QUESTS
  }), t && M) ? (0, i.jsxs)('div', {
className: Z.container,
children: [
  (0, i.jsxs)(I.ZP, {
    children: [
      (0, i.jsx)('div', {
        className: Z.dragRegion
      }),
      (0, i.jsx)(I.z6, {
        scrollPosition: b
      }),
      (0, i.jsx)(I.aV, {
        icon: l.QuestsIcon
      }),
      (0, i.jsx)(m.Z, {
        tabs: L,
        selectedTab: O,
        onTabSelect: R
      })
    ]
  }),
  (0, i.jsx)(E.Z, {
    title: v.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: v.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: j,
    onScroll: x,
    bannerContainerClassName: Z.bannerContainer,
    bannerImageClassName: Z.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: P ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(l.Button, {
      size: 'medium',
      color: P ? l.ButtonColors.TRANSPARENT : l.ButtonColors.WHITE,
      className: Z.button,
      onClick: G,
      innerClassName: Z.innerButton,
      children: [
        (0, i.jsx)(l.Text, {
          variant: 'text-md/semibold',
          color: P ? 'always-white' : 'text-normal',
          className: Z.externalLinkText,
          children: v.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(l.LinkExternalSmallIcon, {
          className: Z.icon,
          color: P ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
        })
      ]
    }),
    children: y && 0 === D.length ? (0, i.jsx)(l.Spinner, {
      className: Z.spinner
    }) : 0 === D.length && O === T.e5.CLAIMED ? (0, i.jsxs)('div', {
      className: Z.emptyState,
      children: [
        (0, i.jsx)(l.EmptyStateImage, {
          darkSrc: n(625065),
          lightSrc: n(875184),
          width: 272,
          height: 222
        }),
        (0, i.jsx)(l.Text, {
          variant: 'text-md/normal',
          color: 'header-secondary',
          children: v.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({
            onClick: () => R(T.e5.UNCLAIMED)
          })
        })
      ]
    }) : (0, i.jsx)('div', {
      className: Z.gridContainer,
      children: (0, i.jsx)(f.Z, {
        quests: D,
        selectedQuestId: U
      })
    })
  })
]
  }) : null;
};