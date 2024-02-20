"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("952990"),
  o = r.forwardRef(function(e, t) {
    let {
      children: n,
      className: r,
      style: s,
      noBorder: o = !1,
      participantUserId: u
    } = e;
    return (0, a.jsx)("div", {
      className: i(r, l.tile, {
        [l.noBorder]: o
      }),
      style: s,
      ref: t,
      "data-selenium-video-tile": u,
      children: n
    })
  })