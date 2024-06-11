"use strict";
r.r(t);
var a = r("735250"),
  i = r("470079"),
  n = r("481060"),
  l = r("703656"),
  o = r("981631");
t.default = i.forwardRef(function(e, t) {
  let {
    href: r,
    children: c,
    onClick: s,
    onKeyPress: d,
    focusProps: u,
    ...h
  } = e, p = i.useCallback(e => {
    !e.repeat && ((e.charCode === o.KeyboardKeys.SPACE || e.charCode === o.KeyboardKeys.ENTER) && (e.preventDefault(), null != r && (0, l.transitionTo)(r), null == s || s()), null == d || d(e))
  }, [r, d, s]), g = i.useCallback(e => {
    !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != r && (0, l.transitionTo)(r), null == s || s())
  }, [r, s]), m = (0, a.jsx)("a", {
    ref: t,
    href: r,
    onClick: g,
    onKeyPress: p,
    ...h,
    children: c
  });
  return (0, a.jsx)(n.FocusRing, {
    ...u,
    children: m
  })
})