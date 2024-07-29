var s = n(735250);
n(470079);
var a = n(120356),
  o = n.n(a),
  i = n(442837),
  r = n(692547),
  u = n(481060),
  l = n(706454),
  c = n(930153),
  d = n(113434),
  _ = n(524824),
  T = n(330039),
  E = n(260370);
t.Z = function(e) {
  let {
className: t,
color: n = r.Z.colors.WHITE,
quest: a,
isInventory: m
  } = e, I = (0, i.e7)([l.default], () => l.default.locale), {
percentComplete: R
  } = (0, d.Rf)(a), g = (0, d.Jf)(a), C = null != g ? g.completedRatio : R, f = null != g ? ''.concat(null == g ? void 0 : g.progress, '/').concat(null == g ? void 0 : g.target) : (0, c.T3)(I, C, {
roundingMode: 'floor'
  }), S = 100 * C, N = (0, _.r)(a);
  return N && !m ? (0, s.jsx)(T.Z, {}) : (0, s.jsxs)('div', {
className: o()(E.wrapper, t),
style: {
  color: n.css
},
children: [
  (0, s.jsxs)('div', {
    className: E.percentCompleteWrapper,
    children: [
      (0, s.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        className: E.percentCompleteLabel,
        color: 'none',
        children: f
      }),
      (0, s.jsx)('div', {
        className: E.percentCompleteLabelOffset,
        style: {
          width: ''.concat(100 - S, '%')
        }
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: E.progressBar,
    role: 'progressbar',
    'aria-valuenow': S,
    children: (0, s.jsx)('div', {
      className: E.progressBarFill,
      style: {
        width: ''.concat(S, '%')
      }
    })
  }),
  N && (0, s.jsx)(T.Z, {
    isInventory: m
  })
]
  });
};