n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(780384),
  l = n(481060),
  o = n(230711),
  c = n(410030),
  d = n(252618),
  u = n(353926),
  _ = n(212476),
  h = n(374939),
  E = n(611928),
  I = n(791734),
  m = n(703656),
  g = n(63063),
  p = n(113434),
  T = n(709158),
  S = n(710914),
  f = n(906739),
  C = n(452081),
  N = n(46140),
  A = n(981631),
  v = n(689938),
  Z = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, T.Z)(N.dr.QUEST_HOME_DESKTOP), {
tabs: L,
selectedTab: O,
onSelectTab: R
  } = (0, C.z)(), {
onScroll: x,
scrollPosition: b
  } = (0, _.c)(), P = (0, c.ZP)(), M = (0, r.wj)(P), D = (0, a.e7)([u.Z], () => u.Z.hasLoadedExperiments), {
quests: y,
isFetchingCurrentQuests: j
  } = (0, p.bA)(O), U = (0, f.Z)(), G = null;
  if (window.location.hash.length > 0) {
let e = window.location.hash.slice(1);
for (let t of y)
  if (t.id === e) {
    G = e;
    break;
  }
  }
  s.useEffect(() => {
D && !t && ((0, m.dL)(A.Z5c.FRIENDS), o.Z.open(A.oAB.INVENTORY));
  }, [
D,
t
  ]), s.useEffect(() => {}, []);
  let k = s.useCallback(() => {
window.open(g.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, d.Tt)({
location: v.Z.Messages.QUESTS
  }), t && D) ? (0, i.jsxs)('div', {
className: Z.container,
children: [
  (0, i.jsxs)(E.ZP, {
    children: [
      (0, i.jsx)('div', {
        className: Z.dragRegion
      }),
      (0, i.jsx)(E.z6, {
        scrollPosition: b
      }),
      (0, i.jsx)(E.aV, {
        icon: l.QuestsIcon
      }),
      (0, i.jsx)(I.Z, {
        tabs: L,
        selectedTab: O,
        onTabSelect: R
      })
    ]
  }),
  (0, i.jsx)(h.Z, {
    title: v.Z.Messages.QUESTS_HOME_HERO_TITLE,
    description: v.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
    backgroundImageUrl: U,
    onScroll: x,
    bannerContainerClassName: Z.bannerContainer,
    bannerImageClassName: Z.bannerImage,
    headerTextColor: 'header-primary',
    descriptionTextColor: M ? 'text-muted' : 'currentColor',
    button: (0, i.jsxs)(l.Button, {
      size: 'medium',
      color: M ? l.ButtonColors.TRANSPARENT : l.ButtonColors.WHITE,
      className: Z.button,
      onClick: k,
      innerClassName: Z.innerButton,
      children: [
        (0, i.jsx)(l.Text, {
          variant: 'text-md/semibold',
          color: M ? 'always-white' : 'text-normal',
          className: Z.externalLinkText,
          children: v.Z.Messages.LEARN_MORE
        }),
        (0, i.jsx)(l.LinkExternalSmallIcon, {
          className: Z.icon,
          color: M ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
        })
      ]
    }),
    children: j && 0 === y.length ? (0, i.jsx)(l.Spinner, {
      className: Z.spinner
    }) : 0 === y.length && O === p.e5.CLAIMED ? (0, i.jsxs)(l.EmptyState, {
      theme: P,
      children: [
        (0, i.jsx)(l.EmptyStateImage, {
          lightSrc: n(979770),
          darkSrc: n(138715),
          width: 415,
          height: 200
        }),
        (0, i.jsx)(l.EmptyStateText, {
          note: v.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({
            onClick: () => R(p.e5.UNCLAIMED)
          })
        })
      ]
    }) : (0, i.jsx)('div', {
      className: Z.gridContainer,
      children: (0, i.jsx)(S.Z, {
        quests: y,
        selectedQuestId: G
      })
    })
  })
]
  }) : null;
};