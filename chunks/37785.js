"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983"),
  u = n("884691"),
  o = n("77078"),
  r = n("393414"),
  a = n("49111"),
  i = u.forwardRef(function(e, t) {
    let {
      href: n,
      children: i,
      onClick: c,
      onKeyPress: p,
      focusProps: d,
      ...l
    } = e, f = u.useCallback(e => {
      !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, r.transitionTo)(n), null == c || c()), null == p || p(e))
    }, [n, p, c]), m = u.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, r.transitionTo)(n), null == c || c())
    }, [n, c]), _ = (0, s.jsx)("a", {
      ref: t,
      href: n,
      onClick: m,
      onKeyPress: f,
      ...l,
      children: i
    });
    return (0, s.jsx)(o.FocusRing, {
      ...d,
      children: _
    })
  })