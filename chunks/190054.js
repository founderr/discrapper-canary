t.d(n, {
  H: function() {
    return d
  }
}), t(47120);
var r = t(735250),
  o = t(470079),
  s = t(120356),
  l = t.n(s),
  u = t(481060),
  i = t(572004),
  c = t(689938),
  a = t(560237);

function d(e) {
  let {
    chunks: n,
    className: t,
    ...s
  } = e, d = o.useMemo(() => null == n ? void 0 : n.join(" "), [n]), [E, f] = o.useState(!1), I = o.useCallback(() => {
    f(!0), (0, i.JG)(d)
  }, [d]), _ = E ? u.CircleCheckIcon : u.CopyIcon;
  return (0, r.jsx)(u.Clickable, {
    className: l()(a.container, t),
    onClick: I,
    children: (0, r.jsx)(u.Tooltip, {
      text: E ? c.Z.Messages.COPIED : c.Z.Messages.COPY,
      children: e => (0, r.jsx)(_, {
        ...s,
        ...e,
        size: "xxs",
        color: E ? u.tokens.colors.TEXT_POSITIVE : u.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}