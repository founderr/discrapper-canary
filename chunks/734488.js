"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  a = n("271938"),
  s = n("855867"),
  i = n("205817"),
  r = n("12307"),
  u = n("944820"),
  o = n("49111");

function d(e) {
  let t = (0, r.getMaxQuality)(e),
    n = e.stream.guildId,
    d = e.stream.ownerId;
  return (0, l.useStateFromStores)([i.default, s.default, a.default], () => null != d ? (0, u.default)(i.default.getQuality(), i.default.getStatsHistory(n, d, d === a.default.getId()), d === a.default.getId() && null != s.default.getHookError(o.MediaEngineHookTypes.SOUND), t) : null, [t, n, d])
}