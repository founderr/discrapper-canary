n.d(e, {
  F: function() {
    return l
  }
});
var r = n(358133),
  i = n(233863),
  a = n(416097),
  s = n(544457),
  o = n(527475);
let l = t => {
  let e;
  let n = (0, i.Y)(),
    l = (0, a.I)("FID"),
    u = t => {
      t.startTime < n.firstHiddenTime && (l.value = t.processingStart - t.startTime, l.entries.push(t), e(!0))
    },
    c = t => {
      t.forEach(u)
    },
    d = (0, s.N)("first-input", c);
  e = (0, r._)(t, l), d && (0, o.u)(() => {
    c(d.takeRecords()), d.disconnect()
  }, !0)
}