var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(692547),
  l = n(481060),
  o = n(113434),
  c = n(524824),
  u = n(330039),
  d = n(260370);
t.Z = function(e) {
  let {
className: t,
color: n = r.Z.colors.WHITE,
quest: s,
isInventory: _
  } = e, E = (0, c.r)(s), {
percentComplete: I,
completedRatioDisplay: m
  } = (0, o.I)(s);
  return E && !_ ? (0, i.jsx)(u.Z, {}) : (0, i.jsxs)('div', {
className: a()(d.wrapper, t),
style: {
  color: n.css
},
children: [
  (0, i.jsxs)('div', {
    className: d.percentCompleteWrapper,
    children: [
      (0, i.jsx)(l.Text, {
        variant: 'text-xs/semibold',
        className: d.percentCompleteLabel,
        color: 'none',
        children: m
      }),
      (0, i.jsx)('div', {
        className: d.percentCompleteLabelOffset,
        style: {
          width: ''.concat(100 - I, '%')
        }
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: d.progressBar,
    role: 'progressbar',
    'aria-valuenow': I,
    children: (0, i.jsx)('div', {
      className: d.progressBarFill,
      style: {
        width: ''.concat(I, '%')
      }
    })
  }),
  E && (0, i.jsx)(u.Z, {
    isInventory: _
  })
]
  });
};