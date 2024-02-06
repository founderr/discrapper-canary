"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("77078"),
  s = n("393414"),
  u = n("49111"),
  o = r.forwardRef(function(e, t) {
    let {
      href: n,
      children: o,
      onClick: a,
      onKeyPress: c,
      focusProps: d,
      ...f
    } = e, E = r.useCallback(e => {
      !e.repeat && ((e.charCode === u.KeyboardKeys.SPACE || e.charCode === u.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, s.transitionTo)(n), null == a || a()), null == c || c(e))
    }, [n, c, a]), _ = r.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, s.transitionTo)(n), null == a || a())
    }, [n, a]), I = (0, i.jsx)("a", {
      ref: t,
      href: n,
      onClick: _,
      onKeyPress: E,
      ...f,
      children: o
    });
    return (0, i.jsx)(l.FocusRing, {
      ...d,
      children: I
    })
  })