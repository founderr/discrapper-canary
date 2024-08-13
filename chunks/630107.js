t.r(n), t.d(n, {
  default: function() {
return A;
  }
});
var a = t(735250),
  s = t(470079),
  i = t(873546),
  r = t(442837),
  l = t(481060),
  o = t(893776),
  c = t(830064),
  u = t(388905),
  d = t(625128),
  p = t(362762),
  m = t(353926),
  x = t(703656),
  b = t(314897),
  _ = t(471985),
  E = t(46140),
  N = t(981631),
  f = t(186901),
  g = t(689938),
  h = t(309687),
  I = t(821744);
r.ZP.initialize();
let j = i.tq || i.Em,
  v = 'inventory';

function A(e) {
  let {
match: n
  } = e, t = (0, r.e7)([p.Z], () => p.Z.getState('quests')), i = (0, r.e7)([m.Z], () => m.Z.hasLoadedExperiments), A = n.params.questId, T = (0, _.Z)(E.dr.CODED_LINK), O = (0, r.e7)([b.default], () => b.default.isAuthenticated());
  if (s.useEffect(() => {
  O && !i && o.Z.getExperiments();
}, [
  O,
  i
]), s.useEffect(() => {
  if (!j)
    null == t && i ? T ? d.Z.openNativeAppModal('quests', N.Etm.DEEP_LINK, {
      type: f.jE.QUEST_HOME,
      params: {
        questId: A
      }
    }) : d.Z.openNativeAppModal('quests', N.Etm.DEEP_LINK, {
      type: f.jE.USER_SETTINGS,
      params: {
        section: v
      }
    }) : t === N.kEZ.OPEN_FAIL && (T ? (0, x.dL)(N.Z5c.QUEST_HOME) : (0, x.dL)(N.Z5c.SETTINGS(v)));
}, [
  t,
  i,
  T,
  A
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
      children: g.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
    }),
    (0, a.jsx)(l.Text, {
      variant: 'text-md/normal',
      className: h.mobileWebCopy,
      children: g.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE
    })
  ]
});
  let L = null == t || t === N.kEZ.OPENING || t === N.kEZ.OPEN_FAIL;
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
            children: g.Z.Messages.APP_OPENING
          }),
          (0, a.jsx)(u.Hh, {})
        ]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(u.Dx, {
            className: h.appOpenedTitle,
            children: g.Z.Messages.APP_OPENED_TITLE
          }),
          (0, a.jsx)(u.DK, {
            children: g.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
          })
        ]
      })
    })
  })
]
  });
}