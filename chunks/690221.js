var t = a(735250),
  c = a(470079),
  i = a(481060),
  o = a(703656),
  r = a(981631);
n.Z = c.forwardRef(function(e, n) {
  let {
href: a,
children: l,
onClick: s,
onKeyPress: d,
focusProps: _,
...u
  } = e, b = c.useCallback(e => {
if (!e.repeat)
  (e.charCode === r.yXg.SPACE || e.charCode === r.yXg.ENTER) && (e.preventDefault(), null != a && (0, o.uL)(a), null == s || s()), null == d || d(e);
  }, [
a,
d,
s
  ]), h = c.useCallback(e => {
if (!e.metaKey && !e.shiftKey && 0 === e.button)
  e.preventDefault(), e.stopPropagation(), null != a && (0, o.uL)(a), null == s || s();
  }, [
a,
s
  ]), f = (0, t.jsx)('a', {
ref: n,
href: a,
onClick: h,
onKeyPress: b,
...u,
children: l
  });
  return (0, t.jsx)(i.FocusRing, {
..._,
children: f
  });
});