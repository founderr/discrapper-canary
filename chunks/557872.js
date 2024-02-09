"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  r = n("884691"),
  l = n("414456"),
  i = n.n(l),
  s = n("77078"),
  u = n("134947"),
  o = n("913979"),
  d = n("321797");

function c(e) {
  let {
    guildId: t,
    goToThread: n
  } = e, l = (0, u.useActiveGuildThreads)(t), c = r.useCallback(e => {
    let t = l[e.row];
    return (0, a.jsx)(o.default, {
      threadId: t,
      goToThread: n,
      showChannelName: !0
    }, "".concat(e.section, "-").concat(e.row))
  }, [l, n]);
  return (0, a.jsx)(s.List, {
    className: i(d.list, d.activeThreadsList),
    fade: !0,
    sections: [l.length],
    renderSection: () => null,
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: c,
    chunkSize: 20
  })
}