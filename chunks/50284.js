n.d(t, {
  Z: function() {
    return E
  }
});
var s = n(544891),
  i = n(569471),
  l = n(346479),
  a = n(592125),
  r = n(375954),
  o = n(306680),
  c = n(594174),
  u = n(709054),
  d = n(981631);
async function E(e, t) {
  let n = c.default.getCurrentUser();
  if (null == n) return;
  let E = r.Z.getMessages(e),
    _ = E.toArray().filter(e => 0 > u.default.compare(e.id, t)).sort((e, t) => u.default.compare(e.id, t.id)).reverse()[0],
    I = null == _ ? u.default.atPreviousMillisecond(t) : _.id,
    T = 0;
  E.forAll(e => {
    u.default.compare(e.id, I) > 0 && (0, o.Ex)(e, n) && T++
  });
  let N = a.Z.getChannel(e);
  null != N && N.isThread() && (N.isArchivedThread() && await l.Z.unarchiveThread(N, !1), !i.Z.hasJoined(e) && await l.Z.joinThread(N, "Mark Unread")), s.tn.post({
    url: d.ANM.MESSAGE_ACK(e, I),
    body: {
      manual: !0,
      mention_count: T
    },
    oldFormErrors: !0
  })
}