n.r(t), n.d(t, {
  default: function() {
return g;
  }
});
var a = n(735250),
  s = n(470079),
  i = n(873546),
  r = n(442837),
  l = n(481060),
  o = n(830064),
  c = n(388905),
  u = n(625128),
  d = n(362762),
  p = n(703656),
  m = n(981631),
  x = n(186901),
  b = n(689938),
  _ = n(521934),
  N = n(821744);
r.ZP.initialize();
let E = i.tq || i.Em;

function g(e) {
  let {
match: t
  } = e, n = (0, r.e7)([d.Z], () => d.Z.getState('quests'));
  if (s.useEffect(() => {
  if (!E)
    null == n ? u.Z.openNativeAppModal('quests', m.Etm.DEEP_LINK, {
      type: x.jE.QUEST_HOME,
      params: {
        questId: t.params.questId
      }
    }) : n === m.kEZ.OPEN_FAIL && (0, p.dL)({
      pathname: m.Z5c.QUEST_HOME,
      hash: t.params.questId
    });
}, [
  n,
  t.params.questId
]), E)
return (0, a.jsxs)('div', {
  className: _.mobileWebContainer,
  children: [
    (0, a.jsx)('img', {
      src: N,
      alt: '',
      className: _.mobileWebImage
    }),
    (0, a.jsx)(l.Heading, {
      variant: 'display-lg',
      color: 'text-brand',
      children: b.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
    }),
    (0, a.jsx)(l.Text, {
      variant: 'text-md/normal',
      className: _.mobileWebCopy,
      children: b.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE
    })
  ]
});
  let i = null == n || n === m.kEZ.OPENING || n === m.kEZ.OPEN_FAIL;
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(o.Z, {
    className: _.backgroundArtwork,
    preserveAspectRatio: 'xMinYMin slice'
  }),
  (0, a.jsx)('div', {
    className: _.container,
    children: (0, a.jsx)(c.ZP, {
      children: i ? (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(c.Dx, {
            children: b.Z.Messages.APP_OPENING
          }),
          (0, a.jsx)(c.Hh, {})
        ]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(c.Dx, {
            className: _.appOpenedTitle,
            children: b.Z.Messages.APP_OPENED_TITLE
          }),
          (0, a.jsx)(c.DK, {
            children: b.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
          })
        ]
      })
    })
  })
]
  });
}