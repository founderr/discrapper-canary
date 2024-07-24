t.d(n, {
  Z: function() {
return p;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(481060),
  r = t(895924),
  o = t(424602),
  s = t(827498),
  c = t(98880),
  u = t(772606),
  d = t(689938),
  m = t(622443);

function p(e) {
  let {
channel: n,
entrypoint: t,
title: p,
look: _,
items: f,
sectionName: C
  } = e, {
clickOnHomeActivityOpensAppDetail: h
  } = o.m1.getCurrentConfig({
location: 'AppLauncherApplicationListViewScreen'
  }, {
autoTrackExposure: !1
  }), A = a.useMemo(() => t === s._b.TEXT ? c.kA : c.qR, [t]);
  return (0, i.jsxs)('section', {
className: m.container,
'aria-label': d.Z.Messages.APP_LAUNCHER_SECTION_VIEW_MORE_ARIA_LABEL.format({
  sectionTitle: p
}),
children: [
  (0, i.jsxs)('div', {
    className: m.header,
    children: [
      (0, i.jsx)(u.Z, {
        className: m.backButton
      }),
      (0, i.jsx)(l.Heading, {
        variant: 'heading-md/medium',
        color: 'header-primary',
        children: p
      })
    ]
  }),
  (0, i.jsx)(l.Scroller, {
    children: (0, i.jsx)('div', {
      className: m.appGrid,
      children: f.map((e, t) => {
        let {
          application: a,
          isPartner: l,
          installOnDemand: o
        } = e;
        return (0, i.jsx)(A, {
          channel: n,
          application: a,
          look: _,
          isPartner: l,
          sectionName: C,
          resultsPosition: t,
          location: r.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
          installOnDemand: o,
          isOneClickCTA: h
        }, a.id);
      })
    })
  })
]
  });
}