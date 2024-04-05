"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("544891"),
  a = n("569471"),
  l = n("346479"),
  i = n("592125"),
  r = n("375954"),
  o = n("306680"),
  u = n("594174"),
  d = n("709054"),
  c = n("981631");
async function E(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let E = r.default.getMessages(e),
    f = E.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
    _ = null == f ? d.default.atPreviousMillisecond(t) : f.id,
    T = 0;
  E.forAll(e => {
    d.default.compare(e.id, _) > 0 && (0, o.shouldBadgeMessage)(e, n) && T++
  });
  let I = i.default.getChannel(e);
  null != I && I.isThread() && (I.isArchivedThread() && await l.default.unarchiveThread(I, !1), !a.default.hasJoined(e) && await l.default.joinThread(I, "Mark Unread")), s.HTTP.post({
    url: c.Endpoints.MESSAGE_ACK(e, _),
    body: {
      manual: !0,
      mention_count: T
    },
    oldFormErrors: !0
  })
}