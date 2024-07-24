t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(120356),
  r = t.n(l),
  o = t(481060),
  s = t(695676),
  c = t(689938),
  u = t(895357);

function d(e) {
  let {
className: n
  } = e, {
goBack: t
  } = (0, s.hH)(), l = a.useCallback(() => {
t();
  }, [t]);
  return (0, i.jsx)(o.Clickable, {
onClick: l,
className: r()(u.clickable, n),
'aria-label': c.Z.Messages.BACK_ACCESSIBILITY_HINT,
children: (0, i.jsx)(o.ArrowLargeLeftIcon, {
  size: 'sm',
  color: o.tokens.colors.INTERACTIVE_ACTIVE
})
  });
}