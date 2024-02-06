"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("841559"),
  c = n("782340"),
  u = n("359027"),
  o = a.forwardRef(function(e, t) {
    let {
      className: n,
      contentClassName: a,
      isUnread: s,
      children: o,
      id: d,
      role: f,
      "aria-label": E
    } = e;
    return (0, r.jsxs)("div", {
      className: i(n, {
        [u.divider]: !0,
        [u.isUnread]: s,
        [u.hasContent]: null != o
      }),
      ref: t,
      id: d,
      role: f,
      "aria-label": E,
      children: [null != o ? (0, r.jsx)("span", {
        className: i(u.content, a),
        children: o
      }) : null, s ? (0, r.jsxs)("span", {
        className: u.unreadPill,
        children: [(0, r.jsx)(l.default, {
          foreground: u.unreadPillCapStroke,
          className: u.unreadPillCap
        }), c.default.Messages.NEW]
      }) : null]
    })
  })