"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("272423");

function a(e) {
  let t = (0, i.coerceChannelRoute)(e);
  if (null != t) return [t.params.guildId, t.params.channelId];
  let n = (0, i.coerceGuildsRoute)(e);
  if (null != n) {
    var a, o;
    return [null === (a = n.params) || void 0 === a ? void 0 : a.guildId, null === (o = n.params) || void 0 === o ? void 0 : o.channelId]
  }
  return [void 0, void 0]
}