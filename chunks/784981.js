"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983"),
  r = n("884691"),
  i = n("414456"),
  s = n.n(i),
  l = n("799869"),
  u = r.forwardRef(function(e, t) {
    let {
      children: n,
      className: r,
      style: i,
      noBorder: u = !1,
      participantUserId: o
    } = e;
    return (0, a.jsx)("div", {
      className: s(r, l.tile, {
        [l.noBorder]: u
      }),
      style: i,
      ref: t,
      "data-selenium-video-tile": o,
      children: n
    })
  })