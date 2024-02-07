"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  i = n("77078"),
  u = n("134947"),
  o = n("913979"),
  d = n("321797");

function c(e) {
  let {
    guildId: t,
    goToThread: n
  } = e, r = (0, u.useActiveGuildThreads)(t), c = l.useCallback(e => {
    let t = r[e.row];
    return (0, a.jsx)(o.default, {
      threadId: t,
      goToThread: n,
      showChannelName: !0
    }, "".concat(e.section, "-").concat(e.row))
  }, [r, n]);
  return (0, a.jsx)(i.List, {
    className: s(d.list, d.activeThreadsList),
    fade: !0,
    sections: [r.length],
    renderSection: () => null,
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: c,
    chunkSize: 20
  })
}