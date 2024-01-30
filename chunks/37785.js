"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("77078"),
  o = n("393414"),
  s = n("49111"),
  a = r.forwardRef(function(e, t) {
    let {
      href: n,
      children: a,
      onClick: u,
      onKeyPress: c,
      focusProps: d,
      ...f
    } = e, E = r.useCallback(e => {
      !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, o.transitionTo)(n), null == u || u()), null == c || c(e))
    }, [n, c, u]), _ = r.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, o.transitionTo)(n), null == u || u())
    }, [n, u]), I = (0, i.jsx)("a", {
      ref: t,
      href: n,
      onClick: _,
      onKeyPress: E,
      ...f,
      children: a
    });
    return (0, i.jsx)(l.FocusRing, {
      ...d,
      children: I
    })
  })