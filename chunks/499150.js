"use strict";
n.r(e);
var i = n("735250"),
  l = n("470079"),
  o = n("481060"),
  u = n("703656"),
  s = n("981631");
e.default = l.forwardRef(function(t, e) {
  let {
    href: n,
    children: a,
    onClick: r,
    onKeyPress: d,
    focusProps: c,
    ...f
  } = t, v = l.useCallback(t => {
    !t.repeat && ((t.charCode === s.KeyboardKeys.SPACE || t.charCode === s.KeyboardKeys.ENTER) && (t.preventDefault(), null != n && (0, u.transitionTo)(n), null == r || r()), null == d || d(t))
  }, [n, d, r]), g = l.useCallback(t => {
    !t.metaKey && !t.shiftKey && 0 === t.button && (t.preventDefault(), t.stopPropagation(), null != n && (0, u.transitionTo)(n), null == r || r())
  }, [n, r]), N = (0, i.jsx)("a", {
    ref: e,
    href: n,
    onClick: g,
    onKeyPress: v,
    ...f,
    children: a
  });
  return (0, i.jsx)(o.FocusRing, {
    ...c,
    children: N
  })
})