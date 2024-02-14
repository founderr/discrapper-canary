"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("297446"),
  i = n("18272"),
  r = a.memo(function(e) {
    let {
      channel: t,
      participants: n,
      tileWidth: a,
      selectedParticipant: r
    } = e;
    return (0, l.jsx)("div", {
      className: i.rowContainer,
      children: n.map(e => e.id === (null == r ? void 0 : r.id) ? null : (0, l.jsx)(s.default, {
        channel: t,
        participant: e,
        width: a
      }, e.id))
    })
  })