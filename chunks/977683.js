"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("470079"),
  a = n("410030"),
  l = n("695346"),
  i = n("798628"),
  r = n("275344"),
  o = n("918088"),
  u = n("562293");

function d(e, t) {
  var n;
  let d = (0, r.useInteractivePollMessage)(e),
    c = (0, i.useChannelPollInteractions)(d.getChannelId())[d.id],
    E = (0, u.default)(null === (n = d.poll) || void 0 === n ? void 0 : n.expiry),
    f = l.AnimateEmoji.useSetting(),
    _ = (0, a.default)(),
    T = null != t ? t : _;
  return s.useMemo(() => (0, o.default)(d, c, {
    animateEmoji: f,
    theme: T,
    formattedExpirationLabel: E
  }), [f, d, c, E, T])
}