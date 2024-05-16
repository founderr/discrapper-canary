"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
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
async function f(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let f = r.default.getMessages(e),
    E = f.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
    _ = null == E ? d.default.atPreviousMillisecond(t) : E.id,
    m = 0;
  f.forAll(e => {
    d.default.compare(e.id, _) > 0 && (0, o.shouldBadgeMessage)(e, n) && m++
  });
  let T = i.default.getChannel(e);
  null != T && T.isThread() && (T.isArchivedThread() && await l.default.unarchiveThread(T, !1), !a.default.hasJoined(e) && await l.default.joinThread(T, "Mark Unread")), s.HTTP.post({
    url: c.Endpoints.MESSAGE_ACK(e, _),
    body: {
      manual: !0,
      mention_count: m
    },
    oldFormErrors: !0
  })
}