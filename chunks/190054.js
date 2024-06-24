t.d(n, {
  H: function() {
    return d
  }
}), t(47120);
var r = t(735250),
  o = t(470079),
  u = t(120356),
  l = t.n(u),
  s = t(481060),
  i = t(572004),
  a = t(689938),
  c = t(560237);

function d(e) {
  let {
    chunks: n,
    className: t,
    ...u
  } = e, d = o.useMemo(() => null == n ? void 0 : n.join(" "), [n]), [E, f] = o.useState(!1), I = o.useCallback(() => {
    f(!0), (0, i.JG)(d)
  }, [d]), _ = E ? s.CircleCheckIcon : s.CopyIcon;
  return (0, r.jsx)(s.Clickable, {
    className: l()(c.container, t),
    onClick: I,
    children: (0, r.jsx)(s.Tooltip, {
      text: E ? a.Z.Messages.COPIED : a.Z.Messages.COPY,
      children: e => (0, r.jsx)(_, {
        ...u,
        ...e,
        size: "xxs",
        color: E ? s.tokens.colors.TEXT_POSITIVE : s.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}