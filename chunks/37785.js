"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("77078"),
  o = n("393414"),
  a = n("49111"),
  s = l.forwardRef(function(e, t) {
    let {
      href: n,
      children: s,
      onClick: u,
      onKeyPress: c,
      focusProps: d,
      ...f
    } = e, E = l.useCallback(e => {
      !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, o.transitionTo)(n), null == u || u()), null == c || c(e))
    }, [n, c, u]), p = l.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, o.transitionTo)(n), null == u || u())
    }, [n, u]), h = (0, i.jsx)("a", {
      ref: t,
      href: n,
      onClick: p,
      onKeyPress: E,
      ...f,
      children: s
    });
    return (0, i.jsx)(r.FocusRing, {
      ...d,
      children: h
    })
  })