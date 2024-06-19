var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(703656),
  o = n(981631);
t.Z = a.forwardRef(function(e, t) {
  let {
    href: n,
    children: u,
    onClick: c,
    onKeyPress: r,
    focusProps: f,
    ...E
  } = e, N = a.useCallback(e => {
    if (!e.repeat)(e.charCode === o.yXg.SPACE || e.charCode === o.yXg.ENTER) && (e.preventDefault(), null != n && (0, l.uL)(n), null == c || c()), null == r || r(e)
  }, [n, r, c]), S = a.useCallback(e => {
    if (!e.metaKey && !e.shiftKey && 0 === e.button) e.preventDefault(), e.stopPropagation(), null != n && (0, l.uL)(n), null == c || c()
  }, [n, c]), d = (0, i.jsx)("a", {
    ref: t,
    href: n,
    onClick: S,
    onKeyPress: N,
    ...E,
    children: u
  });
  return (0, i.jsx)(s.FocusRing, {
    ...f,
    children: d
  })
})