var r = n(735250),
  u = n(470079),
  i = n(481060),
  l = n(703656),
  c = n(981631);
e.Z = u.forwardRef(function(t, e) {
  let {
    href: n,
    children: a,
    onClick: o,
    onKeyPress: d,
    focusProps: s,
    ..._
  } = t, f = u.useCallback(t => {
    if (!t.repeat)(t.charCode === c.yXg.SPACE || t.charCode === c.yXg.ENTER) && (t.preventDefault(), null != n && (0, l.uL)(n), null == o || o()), null == d || d(t)
  }, [n, d, o]), C = u.useCallback(t => {
    if (!t.metaKey && !t.shiftKey && 0 === t.button) t.preventDefault(), t.stopPropagation(), null != n && (0, l.uL)(n), null == o || o()
  }, [n, o]), D = (0, r.jsx)("a", {
    ref: e,
    href: n,
    onClick: C,
    onKeyPress: f,
    ..._,
    children: a
  });
  return (0, r.jsx)(i.FocusRing, {
    ...s,
    children: D
  })
})