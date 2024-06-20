t.d(n, {
  H: function() {
    return d
  }
}), t(47120);
var r = t(735250),
  o = t(470079),
  s = t(120356),
  u = t.n(s),
  l = t(481060),
  i = t(572004),
  c = t(689938),
  a = t(560237);

function d(e) {
  let {
    chunks: n,
    className: t,
    ...s
  } = e, d = o.useMemo(() => null == n ? void 0 : n.join(" "), [n]), [E, f] = o.useState(!1), h = o.useCallback(() => {
    f(!0), (0, i.JG)(d)
  }, [d]), I = E ? l.CircleCheckIcon : l.CopyIcon;
  return (0, r.jsx)(l.Clickable, {
    className: u()(a.container, t),
    onClick: h,
    children: (0, r.jsx)(l.Tooltip, {
      text: E ? c.Z.Messages.COPIED : c.Z.Messages.COPY,
      children: e => (0, r.jsx)(I, {
        ...s,
        ...e,
        size: "xxs",
        color: E ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}