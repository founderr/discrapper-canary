var s = n(735250);
n(470079);
var r = n(120356),
  a = n.n(r),
  o = n(442837),
  i = n(692547),
  u = n(481060),
  l = n(706454),
  c = n(930153),
  d = n(113434),
  m = n(524824),
  _ = n(330039),
  T = n(260370);
t.Z = function(e) {
  let {
className: t,
color: n = i.Z.colors.WHITE,
quest: r,
isInventory: E
  } = e, I = (0, o.e7)([l.default], () => l.default.locale), {
percentComplete: f
  } = (0, d.Rf)(r), g = (0, d.Jf)(r), R = null != g ? g.completedRatio : f, C = null != g ? ''.concat(null == g ? void 0 : g.progress, '/').concat(null == g ? void 0 : g.target) : (0, c.T3)(I, R, {
roundingMode: 'floor'
  }), S = 100 * R, N = (0, m.r)(r);
  return N && !E ? (0, s.jsx)(_.Z, {}) : (0, s.jsxs)('div', {
className: a()(T.wrapper, t),
style: {
  color: n.css
},
children: [
  (0, s.jsxs)('div', {
    className: T.percentCompleteWrapper,
    children: [
      (0, s.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        className: T.percentCompleteLabel,
        color: 'none',
        children: C
      }),
      (0, s.jsx)('div', {
        className: T.percentCompleteLabelOffset,
        style: {
          width: ''.concat(100 - S, '%')
        }
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: T.progressBar,
    role: 'progressbar',
    'aria-valuenow': S,
    children: (0, s.jsx)('div', {
      className: T.progressBarFill,
      style: {
        width: ''.concat(S, '%')
      }
    })
  }),
  N && (0, s.jsx)(_.Z, {
    isInventory: E
  })
]
  });
};