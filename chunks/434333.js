"use strict";
n.d(t, {
  k: function() {
    return c
  },
  m: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(481060),
  u = n(835023);
let _ = {
    RED: u.backgroundRed,
    BACKGROUND_TERTIARY: u.backgroundTertiary,
    BACKGROUND_ACCENT: u.backgroundAccent
  },
  c = r.forwardRef(function(e, t) {
    let {
      role: n,
      children: r,
      className: s,
      onDismiss: c,
      backgroundColor: d = _.RED,
      icon: E = l.CircleExclamationPointIcon,
      iconClassName: I
    } = e;
    return (0, i.jsxs)("div", {
      className: o()(u.error, s, d),
      ref: t,
      children: [(0, i.jsx)(E, {
        className: o()(u.icon, I),
        color: "currentColor"
      }), (0, i.jsx)("div", {
        role: n,
        className: u.text,
        children: r
      }), null != c ? (0, i.jsx)(a.P, {
        onClick: c,
        className: u.errorClose,
        children: (0, i.jsx)(l.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: u.errorCloseIcon
        })
      }) : null]
    })
  })