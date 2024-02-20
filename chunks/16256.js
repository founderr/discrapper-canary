"use strict";
n.r(t), n.d(t, {
  FormErrorBlockColors: function() {
    return d
  },
  FormErrorBlock: function() {
    return p
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("945330"),
  u = n("423487"),
  c = n("62690");
let d = {
    RED: c.backgroundRed,
    BACKGROUND_TERTIARY: c.backgroundTertiary,
    BACKGROUND_ACCENT: c.backgroundAccent
  },
  p = r.forwardRef(function(e, t) {
    let {
      role: n,
      children: r,
      className: s,
      onDismiss: p,
      backgroundColor: h = d.RED,
      icon: f = u.default,
      iconClassName: E
    } = e;
    return (0, i.jsxs)("div", {
      className: a(c.error, s, h),
      ref: t,
      children: [(0, i.jsx)(f, {
        className: a(c.icon, E)
      }), (0, i.jsx)("div", {
        role: n,
        className: c.text,
        children: r
      }), null != p ? (0, i.jsx)(o.Clickable, {
        onClick: p,
        className: c.errorClose,
        children: (0, i.jsx)(l.default, {
          className: c.errorCloseIcon
        })
      }) : null]
    })
  })