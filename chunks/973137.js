"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("552700"),
  i = n("15698"),
  r = a.memo(function(e) {
    let {
      channel: t,
      participants: n,
      maxTiles: a
    } = e;
    if (0 === n.length) return null;
    let r = [];
    for (let e = 0; e < a; e++)
      if (e < n.length) {
        let a = n[e];
        r.push((0, l.jsx)(s.default, {
          channel: t,
          participant: a
        }, a.id))
      } else r.push((0, l.jsx)(s.AudienceEmptyTile, {}, e));
    return (0, l.jsx)("div", {
      className: i.participants,
      children: r
    })
  })