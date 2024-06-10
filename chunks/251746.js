"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
});
var n = a("735250"),
  u = a("470079"),
  r = a("392711"),
  i = a.n(r),
  d = a("442837"),
  s = a("481060"),
  l = a("66999"),
  o = a("665906"),
  f = a("979651"),
  c = a("557135"),
  h = a("689938");

function v(e) {
  let t = (0, o.useCanJoinThreadVoice)(e),
    a = (0, d.useStateFromStores)([f.default], () => f.default.isInChannel(e.id)),
    r = (0, d.useStateFromStores)([f.default], () => !i().isEmpty(f.default.getVoiceStatesForChannel(e.id))),
    {
      needSubscriptionToAccess: v
    } = (0, l.default)(e.id),
    T = u.useCallback(() => {
      c.default.handleVoiceConnect({
        channel: e,
        connected: a,
        needSubscriptionToAccess: v,
        locked: !1
      })
    }, [e, a, v]);
  return a || !t ? null : (0, n.jsx)(s.MenuItem, {
    id: "join-thread-voice",
    label: r ? h.default.Messages.JOIN_CALL : h.default.Messages.START_CALL,
    action: T
  })
}