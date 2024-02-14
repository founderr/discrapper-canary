"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  u = n("988941"),
  o = n("65369"),
  d = n("39776"),
  c = a.forwardRef(function(e, t) {
    let {
      renderIcon: n,
      text: a,
      selected: s,
      badge: c,
      showUnread: f = !1,
      ...h
    } = e;
    return (0, l.jsxs)(r.Clickable, {
      ...h,
      innerRef: t,
      tag: "li",
      className: i(o.containerDefault, d.wrapper, {
        [d.modeSelected]: s
      }),
      children: [f ? (0, l.jsx)("div", {
        className: i(d.unread, d.unreadImportant)
      }) : null, (0, l.jsx)("div", {
        className: d.link,
        children: (0, l.jsxs)("div", {
          className: u.content,
          children: [(0, l.jsx)("div", {
            className: d.iconContainer,
            children: n(d.icon)
          }), (0, l.jsx)("div", {
            className: d.name,
            children: a
          }), c]
        })
      })]
    })
  })