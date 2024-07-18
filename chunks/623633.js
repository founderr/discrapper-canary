t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(442837),
  r = t(592125),
  a = t(944486);

function s() {
  return (0, i.e7)([
a.Z,
r.Z
  ], () => {
let e = a.Z.getVoiceChannelId();
if (null != e) {
  let n = r.Z.getChannel(e);
  if (null == n ? void 0 : n.isGuildStageVoice())
    return n;
}
return null;
  });
}