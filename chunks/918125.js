a.d(s, {
  Z: function() {
    return h
  }
});
var n = a(735250),
  r = a(470079),
  i = a(120356),
  c = a.n(i),
  o = a(481060),
  l = a(235449),
  t = a(300234),
  d = a(71672);

function h(e) {
  let {
    guildId: s,
    goToThread: a
  } = e, i = (0, l.nA)(s), h = r.useCallback(e => {
    let s = i[e.row];
    return (0, n.jsx)(t.Z, {
      threadId: s,
      goToThread: a,
      showChannelName: !0
    }, "".concat(e.section, "-").concat(e.row))
  }, [i, a]);
  return (0, n.jsx)(o.List, {
    className: c()(d.list, d.activeThreadsList),
    fade: !0,
    sections: [i.length],
    renderSection: () => null,
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: h,
    chunkSize: 20
  })
}