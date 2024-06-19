n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(314897),
  i = n(565799),
  s = n(501655),
  a = n(88751),
  r = n(427679);

function o(e) {
  if (!e.isGuildStageVoice() || !r.Z.isLive(e.id)) return !1;
  let t = l.default.getId();
  return !!(a.ZP.isModerator(t, e.id) && a.ZP.isSpeaker(t, e.id)) && (null == i.Z.getMutableParticipants(e.id).find(n => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)) || null == i.Z.getMutableParticipants(e.id, s.pV.SPEAKER).find(n => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)))
}