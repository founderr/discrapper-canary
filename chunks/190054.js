n.d(t, {
  H: function() {
return l;
  }
}), n(47120);
var r = n(735250),
  a = n(470079),
  o = n(120356),
  s = n.n(o),
  i = n(481060),
  c = n(572004),
  E = n(689938),
  u = n(942955);

function l(e) {
  let {
chunks: t,
className: n,
onCopy: o,
...l
  } = e, d = a.useMemo(() => null == t ? void 0 : t.join(' '), [t]), [_, f] = a.useState(!1), I = a.useCallback(() => {
f(!0), (0, c.JG)(d), null == o || o();
  }, [
o,
d
  ]), S = _ ? i.CircleCheckIcon : i.CopyIcon;
  return (0, r.jsx)(i.Clickable, {
className: s()(u.container, n),
onClick: I,
children: (0, r.jsx)(i.Tooltip, {
  text: _ ? E.Z.Messages.COPIED : E.Z.Messages.COPY,
  children: e => (0, r.jsx)(S, {
    ...l,
    ...e,
    size: 'xxs',
    color: _ ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
  })
})
  });
}