t.d(n, {
  H: function() {
    return d
  }
}), t(47120);
var r = t(735250),
  o = t(470079),
  u = t(120356),
  s = t.n(u),
  l = t(481060),
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
  }, [d]), _ = E ? l.CircleCheckIcon : l.CopyIcon;
  return (0, r.jsx)(l.Clickable, {
    className: s()(c.container, t),
    onClick: I,
    children: (0, r.jsx)(l.Tooltip, {
      text: E ? a.Z.Messages.COPIED : a.Z.Messages.COPY,
      children: e => (0, r.jsx)(_, {
        ...u,
        ...e,
        size: "xxs",
        color: E ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}