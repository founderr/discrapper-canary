E.d(n, {
  Z: function() {
    return a
  }
});
var t = E(442837),
  _ = E(592125),
  s = E(944486);

function a() {
  return (0, t.e7)([s.Z, _.Z], () => {
    let e = s.Z.getVoiceChannelId();
    if (null != e) {
      let n = _.Z.getChannel(e);
      if (null == n ? void 0 : n.isGuildStageVoice()) return n
    }
    return null
  })
}