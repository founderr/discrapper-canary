"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  r = n("884691"),
  a = n("414456"),
  i = n.n(a),
  s = n("77078"),
  u = n("134947"),
  o = n("913979"),
  d = n("321797");

function c(e) {
  let {
    guildId: t,
    goToThread: n
  } = e, a = (0, u.useActiveGuildThreads)(t), c = r.useCallback(e => {
    let t = a[e.row];
    return (0, l.jsx)(o.default, {
      threadId: t,
      goToThread: n,
      showChannelName: !0
    }, "".concat(e.section, "-").concat(e.row))
  }, [a, n]);
  return (0, l.jsx)(s.List, {
    className: i(d.list, d.activeThreadsList),
    fade: !0,
    sections: [a.length],
    renderSection: () => null,
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: c,
    chunkSize: 20
  })
}