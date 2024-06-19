t.d(n, {
  Z: function() {
    return a
  }
});
var l = t(735250);
t(470079);
var i = t(120356),
  r = t.n(i),
  s = t(481060),
  o = t(110789);

function a(e) {
  let {
    loading: n,
    children: t
  } = e;
  return (0, l.jsxs)("div", {
    className: o.container,
    children: [n ? (0, l.jsx)("div", {
      className: o.spinnerContainer,
      children: (0, l.jsx)(s.Spinner, {
        className: o.spinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      })
    }) : null, (0, l.jsx)("div", {
      className: r()({
        [o.loading]: n
      }),
      children: t
    })]
  })
}