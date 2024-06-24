t.d(r, {
  Z: function() {
    return n
  }
});
var a = t(272423);

function n(e) {
  let r = (0, a.kf)(e);
  if (null != r) return [r.params.guildId, r.params.channelId];
  let t = (0, a.B3)(e);
  if (null != t) {
    var n, i;
    return [null === (n = t.params) || void 0 === n ? void 0 : n.guildId, null === (i = t.params) || void 0 === i ? void 0 : i.channelId]
  }
  return [void 0, void 0]
}