n.d(t, {
  H: function() {
return u;
  }
}), n(47120);
var o = n(735250),
  r = n(470079),
  a = n(120356),
  s = n.n(a),
  i = n(481060),
  c = n(572004),
  l = n(689938),
  E = n(942955);

function u(e) {
  let {
chunks: t,
className: n,
onCopy: a,
...u
  } = e, d = r.useMemo(() => null == t ? void 0 : t.join(' '), [t]), [_, I] = r.useState(!1), f = r.useCallback(() => {
I(!0), (0, c.JG)(d), null == a || a();
  }, [
a,
d
  ]), h = _ ? i.CircleCheckIcon : i.CopyIcon;
  return (0, o.jsx)(i.Clickable, {
className: s()(E.container, n),
onClick: f,
children: (0, o.jsx)(i.Tooltip, {
  text: _ ? l.Z.Messages.COPIED : l.Z.Messages.COPY,
  children: e => (0, o.jsx)(h, {
    ...u,
    ...e,
    size: 'xxs',
    color: _ ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
  })
})
  });
}