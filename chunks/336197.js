"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(727429),
  r = n(703656),
  s = n(769654),
  o = n(592125),
  a = n(754688),
  l = n(849027),
  u = n(927723),
  _ = n(981631);
async function c(e, t, n) {
  let c = (0, a.Qj)(e);
  if (null != c && !await (0, l.Z)(c)) {
    (0, u.k)({
      kind: "channel"
    });
    return
  }
  if (null == c) {
    (0, r.uL)(e, t, n);
    return
  }
  let d = function(e) {
    if (null == e.channelId) return e;
    let t = o.Z.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, i.e)(t);
    return {
      ...e,
      guildId: null != n ? n : _.ME
    }
  }(c);
  if (null == d.channelId) {
    (0, s.X)(d.guildId);
    return
  }
  null != d.threadId ? (0, r.uL)(_.Z5c.CHANNEL_THREAD_VIEW(d.guildId, d.channelId, d.threadId, d.messageId), t, n) : (0, r.uL)(_.Z5c.CHANNEL(d.guildId, d.channelId, d.messageId), t, n)
}