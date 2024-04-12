"use strict";
n.r(t), n.d(t, {
  useMessageRemindersLoader: function() {
    return u
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("904245"),
  i = n("592125"),
  r = n("375954"),
  o = n("822893");

function u(e) {
  let t = (0, l.useStateFromStoresArray)([i.default, r.default], () => e.filter(e => null != i.default.getChannel(e.channelId)).map(e => r.default.getMessage(e.channelId, e.messageId)).filter(e => null != e)),
    n = e.filter(e => null == r.default.getMessage(e.channelId, e.messageId)),
    [u, d] = a.useState(0 === n.length);
  return a.useEffect(() => {
    (0, o.fetchAndUpdateSavedMessages)()
  }, []), a.useEffect(() => {
    !u && (n.forEach(e => {
      try {
        s.default.fetchMessages({
          channelId: e.channelId,
          limit: 1,
          jump: {
            messageId: e.messageId,
            flash: !1,
            offset: 1
          }
        })
      } catch {}
    }), d(!0))
  }, [n, u]), t
}