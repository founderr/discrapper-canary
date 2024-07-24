t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(481060),
  r = t(783097),
  o = t(753972),
  s = t(532309),
  c = t(728021),
  u = t(413097);

function d(e) {
  var n;
  let {
command: t,
application: d,
onClick: m,
query: p,
searchResultsPosition: _
  } = e, {
iconURL: f,
name: C,
description: h
  } = a.useMemo(() => (0, r.sl)(d, {
fakeAppIconURL: u
  }), [d]), {
trackSearchResultsItemImpressionRef: A
  } = (0, s.Z)({
applicationId: d.id,
commandId: null == t ? void 0 : t.id,
query: p,
searchResultsPosition: _
  });
  return (0, i.jsxs)(l.Clickable, {
innerRef: e => A.current = e,
className: c.container,
onClick: m,
children: [
  (0, i.jsx)(o.Z, {
    src: f,
    className: c.icon,
    'aria-hidden': !0,
    rendersPlaceholder: !0
  }),
  (0, i.jsxs)('div', {
    className: c.cmdDetails,
    children: [
      (0, i.jsx)(l.Heading, {
        variant: 'heading-md/semibold',
        color: 'header-primary',
        lineClamp: 1,
        children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : C
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-sm/normal',
        color: 'text-secondary',
        lineClamp: 1,
        children: h
      })
    ]
  }),
  null != t ? (0, i.jsx)(l.Text, {
    className: c.cmdAppName,
    variant: 'text-sm/normal',
    color: 'text-secondary',
    children: C
  }) : null,
  (0, i.jsx)('div', {
    className: c.underline
  })
]
  });
}