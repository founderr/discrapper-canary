"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("37983"),
  r = a("884691"),
  i = a("917351"),
  s = a.n(i),
  u = a("446674"),
  l = a("77078"),
  o = a("848848"),
  d = a("300322"),
  f = a("800762"),
  c = a("242740"),
  v = a("782340");

function h(e) {
  let t = (0, d.useCanJoinThreadVoice)(e),
    a = (0, u.useStateFromStores)([f.default], () => f.default.isInChannel(e.id)),
    i = (0, u.useStateFromStores)([f.default], () => !s.isEmpty(f.default.getVoiceStatesForChannel(e.id))),
    {
      needSubscriptionToAccess: h
    } = (0, o.default)(e.id),
    C = r.useCallback(() => {
      c.default.handleVoiceConnect({
        channel: e,
        connected: a,
        needSubscriptionToAccess: h,
        locked: !1
      })
    }, [e, a, h]);
  return a || !t ? null : (0, n.jsx)(l.MenuItem, {
    id: "join-thread-voice",
    label: i ? v.default.Messages.JOIN_CALL : v.default.Messages.START_CALL,
    action: C
  })
}