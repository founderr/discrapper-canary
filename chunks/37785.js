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
  a = n("49111"),
  o = r.forwardRef(function(e, t) {
    let {
      href: n,
      children: o,
      onClick: u,
      onKeyPress: c,
      focusProps: d,
      ...f
    } = e, h = r.useCallback(e => {
      !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, s.transitionTo)(n), null == u || u()), null == c || c(e))
    }, [n, c, u]), p = r.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, s.transitionTo)(n), null == u || u())
    }, [n, u]), C = (0, i.jsx)("a", {
      ref: t,
      href: n,
      onClick: p,
      onKeyPress: h,
      ...f,
      children: o
    });
    return (0, i.jsx)(l.FocusRing, {
      ...d,
      children: C
    })
  })