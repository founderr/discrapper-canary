n.d(t, {
  H: function() {
    return d
  }
}), n(47120);
var r = n(735250),
  o = n(470079),
  l = n(120356),
  s = n.n(l),
  i = n(481060),
  u = n(572004),
  c = n(689938),
  a = n(560237);

function d(e) {
  let {
    chunks: t,
    className: n,
    ...l
  } = e, d = o.useMemo(() => null == t ? void 0 : t.join(" "), [t]), [E, f] = o.useState(!1), I = o.useCallback(() => {
    f(!0), (0, u.JG)(d)
  }, [d]), _ = E ? i.CircleCheckIcon : i.CopyIcon;
  return (0, r.jsx)(i.Clickable, {
    className: s()(a.container, n),
    onClick: I,
    children: (0, r.jsx)(i.Tooltip, {
      text: E ? c.Z.Messages.COPIED : c.Z.Messages.COPY,
      children: e => (0, r.jsx)(_, {
        ...l,
        ...e,
        size: "xxs",
        color: E ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}