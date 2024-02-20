"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var l = a("37983"),
  n = a("884691"),
  r = a("414456"),
  s = a.n(r),
  i = a("77078"),
  u = a("134947"),
  o = a("913979"),
  d = a("529353");

function c(e) {
  let {
    guildId: t,
    goToThread: a
  } = e, r = (0, u.useActiveGuildThreads)(t), c = n.useCallback(e => {
    let t = r[e.row];
    return (0, l.jsx)(o.default, {
      threadId: t,
      goToThread: a,
      showChannelName: !0
    }, "".concat(e.section, "-").concat(e.row))
  }, [r, a]);
  return (0, l.jsx)(i.List, {
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