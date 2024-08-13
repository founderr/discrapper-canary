n.r(t), n.d(t, {
  default: function() {
return v;
  }
});
var a = n(735250),
  s = n(470079),
  i = n(873546),
  r = n(442837),
  l = n(481060),
  o = n(893776),
  c = n(830064),
  u = n(388905),
  d = n(625128),
  p = n(362762),
  m = n(353926),
  x = n(703656),
  b = n(314897),
  _ = n(471985),
  E = n(46140),
  N = n(981631),
  g = n(186901),
  f = n(689938),
  h = n(309687),
  I = n(821744);
r.ZP.initialize();
let j = i.tq || i.Em,
  A = 'inventory';

function v(e) {
  let {
match: t
  } = e, n = (0, r.e7)([p.Z], () => p.Z.getState('quests')), i = (0, r.e7)([m.Z], () => m.Z.hasLoadedExperiments), v = t.params.questId, T = (0, _.Z)(E.dr.CODED_LINK), O = (0, r.e7)([b.default], () => b.default.isAuthenticated());
  if (s.useEffect(() => {
  O && !i && o.Z.getExperiments();
}, [
  O,
  i
]), s.useEffect(() => {
  if (!j)
    null == n && i ? T ? d.Z.openNativeAppModal('quests', N.Etm.DEEP_LINK, {
      type: g.jE.QUEST_HOME,
      params: {
        questId: v
      }
    }) : d.Z.openNativeAppModal('quests', N.Etm.DEEP_LINK, {
      type: g.jE.USER_SETTINGS,
      params: {
        section: A
      }
    }) : n === N.kEZ.OPEN_FAIL && (T ? (0, x.dL)(N.Z5c.QUEST_HOME) : (0, x.dL)(N.Z5c.SETTINGS(A)));
}, [
  n,
  i,
  T,
  v
]), j)
return (0, a.jsxs)('div', {
  className: h.mobileWebContainer,
  children: [
    (0, a.jsx)('img', {
      src: I,
      alt: '',
      className: h.mobileWebImage
    }),
    (0, a.jsx)(l.Heading, {
      variant: 'display-lg',
      color: 'text-brand',
      children: f.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
    }),
    (0, a.jsx)(l.Text, {
      variant: 'text-md/normal',
      className: h.mobileWebCopy,
      children: f.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE
    })
  ]
});
  let L = null == n || n === N.kEZ.OPENING || n === N.kEZ.OPEN_FAIL;
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(c.Z, {
    className: h.backgroundArtwork,
    preserveAspectRatio: 'xMinYMin slice'
  }),
  (0, a.jsx)('div', {
    className: h.container,
    children: (0, a.jsx)(u.ZP, {
      children: L ? (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(u.Dx, {
            children: f.Z.Messages.APP_OPENING
          }),
          (0, a.jsx)(u.Hh, {})
        ]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(u.Dx, {
            className: h.appOpenedTitle,
            children: f.Z.Messages.APP_OPENED_TITLE
          }),
          (0, a.jsx)(u.DK, {
            children: f.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
          })
        ]
      })
    })
  })
]
  });
}